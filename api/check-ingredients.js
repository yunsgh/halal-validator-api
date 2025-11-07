// --- Configuration ---
const SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRDhpHhVo55SbjK4n4I1Y754JnwncjLGwHaoVZbRxY6w7i-nH81WLH-w1f2alGfV1JvlTu_Cb0dPzzl/pub?output=csv";
const CACHE_DURATION_SECONDS = 3600; // 1 heure

// --- Cache en mémoire ---
let dbCache = null;
let lastFetchTime = 0;

/**
 * Nettoyage v3: Normalise, enlève les accents, et garde toutes les lettres (Unicode).
 */
function cleanIngredient(text) {
    if (!text) return "";
    let cleaned = text.toLowerCase();
    
    // 1. Normalise et enlève les accents (ex: "gélatine" -> "gelatine")
    cleaned = cleaned.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    
    // 2. Enlève ce qui est entre parenthèses
    cleaned = cleaned.replace(/\(.*?\)/g, "");
    
    // 3. Garde UNIQUEMENT les lettres (de tous les alphabets), les chiffres, les espaces et les tirets
    cleaned = cleaned.replace(/[^\p{L}\p{N}\s-]/gu, "");
    
    return cleaned.trim();
}

/**
 * Analyse le CSV de Google Sheet et construit la base de données.
 */
function buildDatabase(csvText) {
    const mainDb = {};
    const searchMap = {};
    
    const lines = csvText.split(/\r?\n/);
    
    // On ignore la ligne 1 (les en-têtes)
    for (let i = 1; i < lines.length; i++) {
        if (!lines[i]) continue;
        
        // C'est un parser CSV très "naïf". Il s'attend à ce que les notes soient à la fin
        // et ne gère pas les "quotes" parfaitement.
        const parts = lines[i].split(',');
        
        const key = parts[0];
        const status = parts[1];
        const searchTerms = parts[2];
        const note_fr = parts[3]; // La vraie note
        const note_en = parts[4]; 
        
        if (!key || !status || !searchTerms) continue;

        // 1. On remplit la DB principale (key -> info)
        mainDb[key] = {
            status: status,
            note_fr: note_fr ? note_fr.replace(/"/g, '') : "Pas de note", // Nettoie les "
            note_en: note_en ? note_en.replace(/"/g, '') : "No note" // Nettoie les "
        };
        
        // 2. On remplit la DB de recherche (term -> key)
        
        // --- C'EST LA LIGNE QUI CHANGE ---
        // Avant: const terms = searchTerms.split(',');
        // V3.1:
        const terms = searchTerms.split('|'); // On split par le pipe !
        
        for (const term of terms) {
            const cleanTerm = term.trim();
            if (cleanTerm) {
                const normalizedTerm = cleanIngredient(cleanTerm);
                searchMap[normalizedTerm] = key;
            }
        }
    }
    
    return { mainDb, searchMap };
}

/**
 * Récupère (ou utilise le cache) la base de données depuis Google Sheets.
 */
async function getDatabase() {
    const now = Date.now();
    
    if (dbCache && (now - lastFetchTime < CACHE_DURATION_SECONDS * 1000)) {
        return dbCache;
    }

    try {
        const response = await fetch(SHEET_URL);
        if (!response.ok) {
            throw new Error(`Failed to fetch sheet: ${response.statusText}`);
        }
        
        const csvText = await response.text();
        
        dbCache = buildDatabase(csvText);
        lastFetchTime = now;
        
        return dbCache;
        
    } catch (error) {
        console.error("Erreur lors de la récupération ou du parsing du Google Sheet:", error);
        if (dbCache) {
            return dbCache;
        }
        throw error;
    }
}

// --- Le Moteur (La Fonction Serverless - Inchangée) ---
export default async function handler(req, res) {
    
    // CORS et validation de méthode
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }
    if (req.method !== 'POST') {
        return res.status(405).json({ error: "Méthode non autorisée. Utiliser POST." });
    }

    try {
        const db = await getDatabase();
        
        const { ingredients } = req.body;
        if (!ingredients || !Array.isArray(ingredients)) {
            return res.status(400).json({ error: "Entrée invalide. Fournir un JSON: {'ingredients': ['item1', 'item2']}" });
        }

        let results = [];
        let overall_status = "Halal";
        const status_priority = { "Haram": 3, "Mushbooh": 2, "Halal": 1, "Inconnu": 0 };

        for (const item_raw of ingredients) {
            const item_clean = cleanIngredient(item_raw);
            
            const dbKey = db.searchMap[item_clean];
            
            if (dbKey) {
                const info = db.mainDb[dbKey];
                results.push({
                    input: item_raw,
                    match: dbKey,
                    status: info.status,
                    note: info.note_fr
                });

                if (status_priority[info.status] > status_priority[overall_status]) {
                    overall_status = info.status;
                }
            } else {
                results.push({
                    input: item_raw,
                    match: "N/A",
                    status: "Inconnu",
                    note: "Cet ingrédiant n'est pas dans notre base de données." // J'ai corrigé la faute ;)
                });
            }
        }

        return res.status(200).json({
            overall_status: overall_status,
            results: results
        });

    } catch (e) {
        console.error(e);
        return res.status(500).json({ error: "Erreur interne du serveur: " + e.message });
    }
}
