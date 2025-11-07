// --- Configuration ---
// L'URL du "CERVEAU EXPERT" (+500 additifs)
const DB_URL = "https://raw.githubusercontent.com/halal-json/halal-e-numbers/main/e_numbers.json";
const CACHE_DURATION_SECONDS = 3600; // 1 heure

// --- Cache en mémoire ---
let dbCache = null;
let lastFetchTime = 0;

/**
 * Nettoyage v3 (inchangé, il est parfait)
 */
function cleanIngredient(text) {
    if (!text) return "";
    let cleaned = text.toLowerCase();
    cleaned = cleaned.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    cleaned = cleaned.replace(/\(.*?\)/g, "");
    cleaned = cleaned.replace(/[^\p{L}\p{N}\s-]/gu, "");
    return cleaned.trim();
}

/**
 * Construit le "cerveau" (la searchMap) à partir du JSON expert.
 */
function buildDatabase(jsonData) {
    const searchMap = {}; // Le "cerveau"

    // Le JSON est un Array, on boucle dessus
    for (const item of jsonData) {
        // L'item = { "code": "E120", "name": "Cochineal...", "status": "haram" }
        
        const statusInfo = {
            status: item.status, // "halal", "haram", "mushbooh"
            note: item.name     // "Cochineal, Carminic acid, Carmine"
        };
        
        // 1. Ajouter le CODE E (ex: "e120")
        const cleanCode = cleanIngredient(item.code);
        if (cleanCode) {
            searchMap[cleanCode] = statusInfo;
        }
        
        // 2. Ajouter les NOMS (ex: "cochineal", "carminic acid", "carmine")
        // Le champ 'name' peut contenir plusieurs noms séparés par une virgule
        const names = item.name.split(',');
        for (const name of names) {
            const cleanName = cleanIngredient(name);
            if (cleanName && !searchMap[cleanName]) { // Ne pas écraser si déjà mappé
                searchMap[cleanName] = statusInfo;
            }
        }
    }
    return searchMap;
}

/**
 * Récupère (ou utilise le cache) la base de données JSON.
 */
async function getDatabase() {
    const now = Date.now();
    
    // 1. Vérifie le cache. Si valide, le renvoie.
    if (dbCache && (now - lastFetchTime < CACHE_DURATION_SECONDS * 1000)) {
        return dbCache;
    }

    // 2. Si le cache est vide ou expiré, fetch le "cerveau"
    try {
        const response = await fetch(DB_URL);
        if (!response.ok) {
            throw new Error(`Failed to fetch database: ${response.statusText}`);
        }
        
        const jsonData = await response.json();
        
        // 3. Construit la DB et la met en cache
        dbCache = buildDatabase(jsonData);
        lastFetchTime = now;
        
        return dbCache;
        
    } catch (error) {
        console.error("Erreur lors de la récupération du JSON:", error);
        if (dbCache) return dbCache; // Renvoie l'ancien cache si le fetch échoue
        throw error;
    }
}

// --- Le Moteur (La Fonction Serverless v5) ---
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
        // 1. Récupérer le "cerveau" (depuis le cache ou le fetch)
        const searchMap = await getDatabase();
        
        const { ingredients } = req.body;
        if (!ingredients || !Array.isArray(ingredients)) {
            return res.status(400).json({ error: "Entrée invalide. Fournir un JSON: {'ingredients': ['item1', 'item2']}" });
        }

        let results = [];
        let overall_status = "Halal";
        const status_priority = { "Haram": 3, "Mushbooh": 2, "Halal": 1, "Inconnu": 0 };

        for (const item_raw of ingredients) {
            const item_clean = cleanIngredient(item_raw);
            
            // Logique de recherche V5 :
            const info = searchMap[item_clean];
            
            if (info) {
                // On a trouvé une correspondance
                results.push({
                    input: item_raw,
                    match: item_clean,
                    status: info.status.charAt(0).toUpperCase() + info.status.slice(1), // Met une majuscule (ex: "Haram")
                    note: info.note
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
        
        // On met une majuscule au statut global aussi
        overall_status = overall_status.charAt(0).toUpperCase() + overall_status.slice(1);

        return res.status(200).json({
            overall_status: overall_status,
            results: results
        });

    } catch (e) {
        console.error(e);
        return res.status(500).json({ error: "Erreur interne du serveur: " + e.message });
    }
}
