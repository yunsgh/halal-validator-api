import re
from flask import Flask, request, jsonify
from flask_cors import CORS # Pour les tests sur RapidAPI

# --- ÉTAPE 1 : Le Cerveau (La Base de Données v1.0) ---
# C'est la base que VOUS devez enrichir.
# Les clés doivent être en minuscules et "nettoyées".
INGREDIENT_DB = {
    # Haram (Priorité 1)
    "e120": {"status": "Haram", "note": "Cochenille (insecte)"},
    "carmine": {"status": "Haram", "note": "Cochenille (insecte)"},
    "gélatine": {"status": "Haram", "note": "Origine animale non spécifiée (probablement porc)"},
    "alcool": {"status": "Haram", "note": "Alcool éthylique non évaporé"},
    "vin": {"status": "Haram", "note": "Alcool"},
    "bière": {"status": "Haram", "note": "Alcool"},

    # Mushbooh (Priorité 2)
    "e471": {"status": "Mushbooh", "note": "Mono et diglycérides. Peut être d'origine animale ou végétale."},
    "e472": {"status": "Mushbooh", "note": "Esters de mono et diglycérides. Origine animale ou végétale."},
    "glycérol": {"status": "Mushbooh", "note": "Glycérine (E422). Origine animale ou végétale."},
    "glycérine": {"status": "Mushbooh", "note": "Glycérol (E422). Origine animale ou végétale."},
    
    # Halal (Informatif)
    "gélatine bovine": {"status": "Halal", "note": "Si certifiée Halal"},
    "gélatine de poisson": {"status": "Halal", "note": "Origine poisson"},
    "e322": {"status": "Halal", "note": "Lécithine (souvent soja)"},
    "lécithine de soja": {"status": "Halal", "note": "Origine végétale"},
    "agar-agar": {"status": "Halal", "note": "Origine végétale (algue)"}
}

# --- ÉTAPE 2 : Le Moteur (L'API Flask) ---

app = Flask(__name__)
CORS(app) # Permet à RapidAPI de se connecter

def clean_ingredient(text):
    """Fonction de nettoyage pour normaliser les entrées."""
    text = text.lower()
    # Enlève ce qui est entre parenthèses (ex: "E120 (colorant)")
    text = re.sub(r"\(.*\)", "", text)
    # Enlève les caractères spéciaux sauf les espaces et les tirets
    text = re.sub(r"[^\w\s-]", "", text)
    # Enlève les espaces au début et à la fin
    text = text.strip()
    return text

@app.route('/check-ingredients', methods=['POST'])
def check_ingredients():
    try:
        data = request.json
        if not data or 'ingredients' not in data or not isinstance(data['ingredients'], list):
            return jsonify({"error": "Entrée invalide. Fournir un JSON: {'ingredients': ['item1', 'item2']}"}), 400

        input_ingredients = data['ingredients']
        results = []
        overall_status = "Halal" # Statut par défaut
        
        status_priority = {"Haram": 3, "Mushbooh": 2, "Halal": 1, "Inconnu": 0}

        for item_raw in input_ingredients:
            item_clean = clean_ingredient(item_raw)
            
            # Logique de correspondance :
            # On cherche si une de nos clés DB est *dans* l'ingrédient nettoyé
            # ex: clé "gélatine" matchera "gélatine de porc"
            
            found = False
            for key in INGREDIENT_DB:
                if key in item_clean:
                    info = INGREDIENT_DB[key]
                    results.append({
                        "input": item_raw,
                        "match": key,
                        "status": info["status"],
                        "note": info["note"]
                    })
                    
                    # Mettre à jour le statut global basé sur la priorité
                    if status_priority[info["status"]] > status_priority[overall_status]:
                        overall_status = info["status"]
                        
                    found = True
                    break # On prend le premier match trouvé
            
            if not found:
                results.append({
                    "input": item_raw,
                    "match": "N/A",
                    "status": "Inconnu",
                    "note": "Cet ingrédient n'est pas dans notre base de données."
                })

        return jsonify({
            "overall_status": overall_status,
            "results": results
        })

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000) # Se lance localement pour les tests
