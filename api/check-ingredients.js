// --- ÉTAPE 1 : Le Cerveau (Base de Données v2.0 - SANS ACCENTS) ---
// Les clés sont maintenant normalisées (plus d'accents)
const INGREDIENT_DB = {
    // Haram
    "e120": { status: "Haram", note: "Cochenille (insecte)" },
    "carmine": { status: "Haram", note: "Cochenille (insecte)" },
    "gelatine": { status: "Haram", note: "Origine animale non spécifiée (probablement porc)" }, // "gélatine" -> "gelatine"
    "alcool": { status: "Haram", note: "Alcool éthylique non évaporé" },
    "vin": { status: "Haram", note: "Alcool" },
    "biere": { status: "Haram", note: "Alcool" },

    // Mushbooh
    "e471": { status: "Mushbooh", note: "Mono et diglycérides. Peut être d'origine animale ou végétale." },
    "e472": { status: "Mushbooh", note: "Esters de mono et diglycérides. Origine animale ou végétale." },
    "glycerol": { status: "Mushbooh", note: "Glycérine (E422). Origine animale ou végétale." }, // "glycérol" -> "glycerol"
    "glycerine": { status: "Mushbooh", note: "Glycérine (E422). Origine animale ou végétale." }, // "glycérine" -> "glycerine"
    
    // Halal (Informatif)
    "gelatine bovine": { status: "Halal", note: "Si certifiée Halal" },
    "gelatine de poisson": { status: "Halal", note: "Origine poisson" },
    "e322": { status: "Halal", note: "Lécithine (souvent soja)" },
    "lecithine de soja": { status: "Halal", note: "Origine végétale" },
    "agar-agar": { status: "Halal", note: "Origine végétale (algue)" }
};

// --- Fonction de nettoyage v2 (Normalise les accents) ---
function cleanIngredient(text) {
    if (!text) return "";
    let cleaned = text.toLowerCase();
    
    // 1. Normalise et enlève les accents (ex: "gélatine" -> "gelatine")
    cleaned = cleaned.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    
    // 2. Enlève ce qui est entre parenthèses
    cleaned = cleaned.replace(/\(.*?\)/g, "");
    
    // 3. Enlève les caractères spéciaux (garde lettres, chiffres, espaces, tirets)
    cleaned = cleaned.replace(/[^a-z0-9\s-]/g, "");
    
    return cleaned.trim();
}

// --- ÉTAPE 2 : Le Moteur (La Fonction Serverless - Inchangée) ---
export default function handler(req, res) {
    
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
        const { ingredients } = req.body;
        if (!ingredients || !Array.isArray(ingredients)) {
            return res.status(400).json({ error: "Entrée invalide. Fournir un JSON: {'ingredients': ['item1', 'item2']}" });
        }

        let results = [];
        let overall_status = "Halal";
        const status_priority = { "Haram": 3, "Mushbooh": 2, "Halal": 1, "Inconnu": 0 };

        for (const item_raw of ingredients) {
            const item_clean = cleanIngredient(item_raw); // Utilise la nouvelle fonction v2
            let found = false;

            for (const key in INGREDIENT_DB) {
                if (item_clean.includes(key)) {
                    const info = INGREDIENT_DB[key];
                    results.push({
                        input: item_raw,
                        match: key,
                        status: info.status,
                        note: info.note
                    });

                    if (status_priority[info.status] > status_priority[overall_status]) {
                        overall_status = info.status;
                    }
                    found = true;
                    break;
                }
            }

            if (!found) {
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
        return res.status(500).json({ error: e.message });
    }
}
