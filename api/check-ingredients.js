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
    // \p{L} = Lettre Unicode, \p{N} = Chiffre Unicode. Le flag 'u' est crucial.
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
        
        // Google Sheets peut mettre des virgules dans les notes, mais pas nos 3 premières colonnes.
        // C'est une astuce de parsing CSV "simple" qui marche pour notre cas.
        const parts = lines[i].split(',');
        
        const key = parts[0];
        const status = parts[1];
        const searchTerms = parts[2];
        const note_fr = parts[3]; // Note: ceci est une simplification
        const note_en = parts[4]; // Si les notes ont des virgules, ce parsing casse.
        
        if (!key || !status || !searchTerms) continue;

        // 1. On remplit la DB principale (key -> info)
        mainDb[key] = {
            status: status,
            note_fr: note_fr || "Pas de note",
            note_en: note_en || "No note"
        };
        
        // 2. On remplit la DB de recherche (term -> key)
        const terms = searchTerms.split(','); // Sépare "e120,carmine,carmin"
        for (const term of terms) {
            const cleanTerm = term.trim();
            if (cleanTerm) {
                // On normalise les termes de la DB au cas où (ex: "gélatine" devient "gelatine")
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
    
    // 1. Vérifie le cache. Si valide, le renvoie.
    if (dbCache && (now - lastFetchTime < CACHE_DURATION_SECONDS * 1000)) {
        return dbCache;
    }

    // 2. Si le cache est vide ou expiré, fetch
    try {
        const response = await fetch(SHEET_URL);
        if (!response.ok) {
            throw new Error(`Failed to fetch sheet: ${response.statusText}`);
        }
        
        const csvText = await response.text();
        
        // 3. Construit la DB et la met en cache
        dbCache = buildDatabase(csvText);
        lastFetchTime = now;
        
        return dbCache;
        
    } catch (error) {
        console.error("Erreur lors de la récupération ou du parsing du Google Sheet:", error);
        // Si le fetch échoue, on renvoie l'ancien cache s'il existe (pour la résilience)
        if (dbCache) {
            return dbCache;
        }
        throw error;
    }
}

// --- Le Moteur (La Fonction Serverless) ---
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
        // 1. Récupérer la base de données (depuis le cache ou le fetch)
        const db = await getDatabase();
        
        const { ingredients } = req.body;
        if (!ingredients || !Array.isArray(ingredients)) {
            return res.status(400).json({ error: "Entrée invalide. Fournir un JSON: {'ingredients': ['item1', 'item2']}" });
        }

        let results = [];
        let overall_status = "Halal";
        const status_priority = { "Haram": 3, "Mushbooh": 2, "Halal": 1, "Inconnu": 0 };

        for (const item_raw of ingredients) {
            const item_clean = cleanIngredient(item_raw); // Utilise la nouvelle fonction v3
            
            // Logique de recherche V3 :
            // On cherche si le terme nettoyé existe dans notre 'searchMap'
            const dbKey = db.searchMap[item_clean];
            
            if (dbKey) {
                // On a trouvé une correspondance (ex: "gelatine" -> "GELATIN_DEFAULT")
                const info = db.mainDb[dbKey];
                results.push({
                    input: item_raw,
                    match: dbKey,
                    status: info.status,
                    note: info.note_fr // On renvoie la note en français (on pourrait ajouter un param 'lang' plus tard)
                });

                if (status_priority[info.status] > status_priority[overall_status]) {
                    overall_status = info.status;
                }
            } else {
                // Pas de correspondance
                results.push({
                    input: item_raw,
                    match: "N/A",
                    status: "Inconnu",
                    note: "Cet ingrédient n'est pas dans notre base de données."
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
