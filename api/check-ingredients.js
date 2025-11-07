// --- ÉTAPE 1 : Le Cerveau (La Base de Données v1.0) ---
// C'est la base que VOUS devez enrichir.
const INGREDIENT_DB = {
    // Haram (Priorité 1)
    "e120": { status: "Haram", note: "Cochenille (insecte)" },
    "carmine": { status: "Haram", note: "Cochenille (insecte)" },
    "gélatine": { status: "Haram", note: "Origine animale non spécifiée (probablement porc)" },
    "alcool": { status: "Haram", note: "Alcool éthylique non évaporé" },
    "vin": { status: "Haram", note: "Alcool" },
    "bière": { status: "Haram", note: "Alcool" },

    // Mushbooh (Priorité 2)
    "e471": { status: "Mushbooh", note: "Mono et diglycérides. Peut être d'origine animale ou végétale." },
    "e472": { status: "Mushbooh", note: "Esters de mono et diglycérides. Origine animale ou végétale." },
    "glycérol": { status: "Mushbooh", note: "Glycérine (E422). Origine animale ou végétale." },
    "glycérine": { status: "Mushbooh", note: "Glycérol (E422). Origine animale ou végétale." },

    // Halal (Informatif)
    "gélatine bovine": { status: "Halal", note: "Si certifiée Halal" },
    "gélatine de poisson": { status: "Halal", note: "Origine poisson" },
    "e322": { status: "Halal", note: "Lécithine (souvent soja)" },
    "lécithine de soja": { status: "Halal", note: "Origine végétale" },
    "agar-agar": { status: "Halal", note: "Origine végétale (algue)" }
};

// --- Fonction de nettoyage ---
function cleanIngredient(text) {
    if (!text) return "";
    let cleaned = text.toLowerCase();
    // Enlève ce qui est entre parenthèses
    cleaned = cleaned.replace(/\(.*?\)/g, "");
    // Enlève les caractères spéciaux sauf les espaces et les tirets
    cleaned = cleaned.replace(/[^a-z0-9\s-]/g, "");
    return cleaned.trim();
}

// --- ÉTAPE 2 : Le Moteur (La Fonction Serverless) ---
export default function handler(req, res) {

    // On autorise CORS (pour RapidAPI) et on s'assure que c'est POST
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
            const item_clean = cleanIngredient(item_raw);
            let found = false;

            // Logique de correspondance (identique au Python)
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
