// --- LE CERVEAU EXPERT v6 (Intégré) ---
// La base de données est maintenant DANS le code. Plus de 404.
const EXPERT_DB = [
  {"code": "E100","name": "Curcumin","status": "halal","purpose": "Colour"},
  {"code": "E101","name": "Riboflavin (Vitamin B2)","status": "halal","purpose": "Colour"},
  {"code": "E101a","name": "Riboflavin-5-Phosphate","status": "halal","purpose": "Colour"},
  {"code": "E102","name": "Tartrazine","status": "halal","purpose": "Colour"},
  {"code": "E103","name": "Chrysoine resorcinol","status": "haram","purpose": "Colour"},
  {"code": "E104","name": "Quinoline Yellow","status": "halal","purpose": "Colour"},
  {"code": "E105","name": "Fast Yellow AB","status": "haram","purpose": "Colour"},
  {"code": "E106","name": "Riboflavin-5-Sodium Phosphate","status": "halal","purpose": "Colour"},
  {"code": "E107","name": "Yellow 2G","status": "haram","purpose": "Colour"},
  {"code": "E110","name": "Sunset Yellow FCF","status": "halal","purpose": "Colour"},
  {"code": "E111","name": "Orange GGN","status": "haram","purpose": "Colour"},
  {"code": "E120","name": "Cochineal, Carminic acid, Carmine","status": "haram","purpose": "Colour"},
  {"code": "E121","name": "Orchil, Orcein","status": "haram","purpose": "Colour"},
  {"code": "E122","name": "Azorubine, Carmoisine","status": "halal","purpose": "Colour"},
  {"code": "E123","name": "Amaranth","status": "halal","purpose": "Colour"},
  {"code": "E124","name": "Ponceau 4R, Cochineal Red A","status": "halal","purpose": "Colour"},
  {"code": "E125","name": "Ponceau SX","status": "haram","purpose": "Colour"},
  {"code": "E126","name": "Ponceau 6R","status": "haram","purpose": "Colour"},
  {"code": "E127","name": "Erythrosine","status": "halal","purpose": "Colour"},
  {"code": "E128","name": "Red 2G","status": "halal","purpose": "Colour"},
  {"code": "E129","name": "Allura Red AC","status": "halal","purpose": "Colour"},
  {"code": "E130","name": "Indanthrene blue RS","status": "haram","purpose": "Colour"},
  {"code": "E131","name": "Patent Blue V","status": "halal","purpose": "Colour"},
  {"code": "E132","name": "Indigotine, Indigo Carmine","status": "halal","purpose": "Colour"},
  {"code": "E133","name": "Brilliant Blue FCF","status": "halal","purpose": "Colour"},
  {"code": "E140","name": "Chlorophylls and Chlorophyllins","status": "halal","purpose": "Colour"},
  {"code": "E141","name": "Copper complexes of chlorophylls","status": "halal","purpose": "Colour"},
  {"code": "E142","name": "Green S","status": "halal","purpose": "Colour"},
  {"code": "E143","name": "Fast Green FCF","status": "halal","purpose": "Colour"},
  {"code": "E150a","name": "Plain Caramel","status": "halal","purpose": "Colour"},
  {"code": "E150b","name": "Caustic sulphite caramel","status": "halal","purpose": "Colour"},
  {"code": "E150c","name": "Ammonia caramel","status": "halal","purpose": "Colour"},
  {"code": "E150d","name": "Sulphite ammonia caramel","status": "halal","purpose": "Colour"},
  {"code": "E151","name": "Black PN, Brilliant Black BN","status": "halal","purpose": "Colour"},
  {"code": "E152","name": "Black 7984","status": "haram","purpose": "Colour"},
  {"code": "E153","name": "Vegetable carbon","status": "halal","purpose": "Colour"},
  {"code": "E154","name": "Brown FK","status": "halal","purpose": "Colour"},
  {"code": "E155","name": "Brown HT (Chocolate)","status": "halal","purpose": "Colour"},
  {"code": "E160a","name": "Carotenes","status": "halal","purpose": "Colour"},
  {"code": "E160b","name": "Annatto, Bixin, Norbixin","status": "halal","purpose": "Colour"},
  {"code": "E160c","name": "Paprika extract, Capsanthin, Capsorubin","status": "halal","purpose": "Colour"},
  {"code": "E160d","name": "Lycopene","status": "halal","purpose": "Colour"},
  {"code": "E160e","name": "Beta-apo-8-carotenal (C 30)","status": "halal","purpose": "Colour"},
  {"code": "E160f","name": "Ethyl ester of beta-apo-8-carotenic acid","status": "halal","purpose": "Colour"},
  {"code": "E161a","name": "Flavoxanthin","status": "halal","purpose": "Colour"},
  {"code": "E161b","name": "Lutein","status": "halal","purpose": "Colour"},
  {"code": "E161c","name": "Kryptoxanthin","status": "halal","purpose": "Colour"},
  {"code": "E161d","name": "Rubixanthin","status": "halal","purpose": "Colour"},
  {"code": "E161e","name": "Violaxanthin","status": "halal","purpose": "Colour"},
  {"code": "E161f","name": "Rhodoxanthin","status": "halal","purpose": "Colour"},
  {"code": "E161g","name": "Canthaxanthin","status": "mushbooh","purpose": "Colour"},
  {"code": "E161h","name": "Zeaxanthin","status": "halal","purpose": "Colour"},
  {"code": "E161i","name": "Citranaxanthin","status": "halal","purpose": "Colour"},
  {"code": "E161j","name": "Astaxanthin","status": "halal","purpose": "Colour"},
  {"code": "E162","name": "Beetroot Red, Betanin","status": "halal","purpose": "Colour"},
  {"code": "E163","name": "Anthocyanins","status": "halal","purpose": "Colour"},
  {"code": "E170","name": "Calcium carbonates","status": "halal","purpose": "Colour"},
  {"code": "E171","name": "Titanium dioxide","status": "halal","purpose": "Colour"},
  {"code": "E172","name": "Iron oxides and hydroxides","status": "halal","purpose": "Colour"},
  {"code": "E173","name": "Aluminium","status": "halal","purpose": "Colour"},
  {"code": "E174","name": "Silver","status": "halal","purpose": "Colour"},
  {"code": "E175","name": "Gold","status": "halal","purpose": "Colour"},
  {"code": "E180","name": "Lithol Rubine BK","status": "halal","purpose": "Colour"},
  {"code": "E181","name": "Burnt Umber","status": "halal","purpose": "Colour"},
  {"code": "E200","name": "Sorbic acid","status": "halal","purpose": "Preservative"},
  {"code": "E201","name": "Sodium sorbate","status": "halal","purpose": "Preservative"},
  {"code": "E202","name": "Potassium sorbate","status": "halal","purpose": "Preservative"},
  {"code": "E203","name": "Calcium sorbate","status": "halal","purpose": "Preservative"},
  {"code": "E210","name": "Benzoic acid","status": "halal","purpose": "Preservative"},
  {"code": "E211","name": "Sodium benzoate","status": "halal","purpose": "Preservative"},
  {"code": "E212","name": "Potassium benzoate","status": "halal","purpose": "Preservative"},
  {"code": "E213","name": "Calcium benzoate","status": "halal","purpose": "Preservative"},
  {"code": "E214","name": "Ethyl p-hydroxybenzoate","status": "halal","purpose": "Preservative"},
  {"code": "E215","name": "Sodium ethyl p-hydroxybenzoate","status": "halal","purpose": "Preservative"},
  {"code": "E216","name": "Propyl p-hydroxybenzoate","status": "halal","purpose": "Preservative"},
  {"code": "E217","name": "Sodium propyl p-hydroxybenzoate","status": "halal","purpose": "Preservative"},
  {"code": "E218","name": "Methyl p-hydroxybenzoate","status": "halal","purpose": "Preservative"},
  {"code": "E219","name": "Sodium methyl p-hydroxybenzoate","status": "halal","purpose": "Preservative"},
  {"code": "E220","name": "Sulphur dioxide","status": "halal","purpose": "Preservative"},
  {"code": "E221","name": "Sodium sulphite","status": "halal","purpose": "Preservative"},
  {"code": "E222","name": "Sodium hydrogen sulphite","status": "halal","purpose": "Preservative"},
  {"code": "E223","name": "Sodium metabisulphite","status": "halal","purpose": "Preservative"},
  {"code": "E224","name": "Potassium metabisulphite","status": "halal","purpose": "Preservative"},
  {"code": "E225","name": "Potassium sulphite","status": "halal","purpose": "Preservative"},
  {"code": "E226","name": "Calcium sulphite","status": "halal","purpose": "Preservative"},
  {"code": "E227","name": "Calcium hydrogen sulphite","status": "halal","purpose": "Preservative"},
  {"code": "E228","name": "Potassium hydrogen sulphite","status": "halal","purpose": "Preservative"},
  {"code": "E230","name": "Biphenyl, Diphenyl","status": "halal","purpose": "Preservative"},
  {"code": "E231","name": "Orthophenyl phenol","status": "halal","purpose": "Preservative"},
  {"code": "E232","name": "Sodium orthophenyl phenol","status": "halal","purpose": "Preservative"},
  {"code": "E233","name": "Thiabendazole","status": "halal","purpose": "Preservative"},
  {"code": "E234","name": "Nisin","status": "mushbooh","purpose": "Preservative"},
  {"code": "E235","name": "Natamycin","status": "halal","purpose": "Preservative"},
  {"code": "E236","name": "Formic acid","status": "halal","purpose": "Preservative"},
  {"code": "E237","name": "Sodium formate","status": "halal","purpose": "Preservative"},
  {"code": "E238","name": "Calcium formate","status": "halal","purpose": "Preservative"},
  {"code": "E239","name": "Hexamethylene tetramine","status": "halal","purpose": "Preservative"},
  {"code": "E240","name": "Formaldehyde","status": "haram","purpose": "Preservative"},
  {"code": "E242","name": "Dimethyl dicarbonate","status": "halal","purpose": "Preservative"},
  {"code": "E249","name": "Potassium nitrite","status": "halal","purpose": "Preservative"},
  {"code": "E250","name": "Sodium nitrite","status": "halal","purpose": "Preservative"},
  {"code": "E251","name": "Sodium nitrate","status": "halal","purpose": "Preservative"},
  {"code": "E252","name": "Potassium nitrate (Saltpetre)","status": "halal","purpose": "Preservative"},
  {"code": "E260","name": "Acetic acid","status": "halal","purpose": "Preservative"},
  {"code": "E261","name": "Potassium acetate","status": "halal","purpose": "Preservative"},
  {"code": "E262","name": "Sodium acetates","status": "halal","purpose": "Preservative"},
  {"code": "E263","name": "Calcium acetate","status": "halal","purpose": "Preservative"},
  {"code": "E264","name": "Ammonium acetate","status": "halal","purpose": "Preservative"},
  {"code": "E270","name": "Lactic acid","status": "mushbooh","purpose": "Preservative"},
  {"code": "E280","name": "Propionic acid","status": "halal","purpose": "Preservative"},
  {"code": "E281","name": "Sodium propionate","status": "halal","purpose": "Preservative"},
  {"code": "E282","name": "Calcium propionate","status": "halal","purpose": "Preservative"},
  {"code": "E283","name": "Potassium propionate","status": "halal","purpose": "Preservative"},
  {"code": "E284","name": "Boric acid","status": "halal","purpose": "Preservative"},
  {"code": "E285","name": "Sodium tetraborate (Borax)","status": "halal","purpose": "Preservative"},
  {"code": "E290","name": "Carbon dioxide","status": "halal","purpose": "Acidity regulator"},
  {"code": "E296","name": "Malic acid","status": "halal","purpose": "Acidity regulator"},
  {"code": "E297","name": "Fumaric acid","status": "halal","purpose": "Acidity regulator"},
  {"code": "E300","name": "Ascorbic acid (Vitamin C)","status": "halal","purpose": "Antioxidant"},
  {"code": "E301","name": "Sodium ascorbate","status": "halal","purpose": "Antioxidant"},
  {"code": "E302","name": "Calcium ascorbate","status": "halal","purpose": "Antioxidant"},
  {"code": "E303","name": "Potassium ascorbate","status": "halal","purpose": "Antioxidant"},
  {"code": "E304","name": "Fatty acid esters of ascorbic acid","status": "mushbooh","purpose": "Antioxidant"},
  {"code": "E306","name": "Tocopherols (Vitamin E)","status": "halal","purpose": "Antioxidant"},
  {"code": "E307","name": "Alpha-tocopherol","status": "halal","purpose": "Antioxidant"},
  {"code": "E308","name": "Gamma-tocopherol","status": "halal","purpose": "Antioxidant"},
  {"code": "E309","name": "Delta-tocopherol","status": "halal","purpose": "Antioxidant"},
  {"code": "E310","name": "Propyl gallate","status": "halal","purpose": "Antioxidant"},
  {"code": "E311","name": "Octyl gallate","status": "halal","purpose": "Antioxidant"},
  {"code": "E312","name": "Dodecyl gallate","status": "halal","purpose": "Antioxidant"},
  {"code": "E315","name": "Erythorbic acid","status": "halal","purpose": "Antioxidant"},
  {"code": "E316","name": "Sodium erythorbate","status": "halal","purpose": "Antioxidant"},
  {"code": "E317","name": "Erythorbin Acid","status": "halal","purpose": "Antioxidant"},
  {"code": "E318","name": "Sodium Erythorbin","status": "halal","purpose": "Antioxidant"},
  {"code": "E319","name": "Tertiary-butyl hydroquinone (TBHQ)","status": "halal","purpose": "Antioxidant"},
  {"code": "E320","name": "Butylated hydroxyanisole (BHA)","status": "halal","purpose": "Antioxidant"},
  {"code": "E321","name": "Butylated hydroxytoluene (BHT)","status": "halal","purpose": "Antioxidant"},
  {"code": "E322","name": "Lecithin","status": "mushbooh","purpose": "Emulsifier"},
  {"code": "E325","name": "Sodium lactate","status": "mushbooh","purpose": "Antioxidant"},
  {"code": "E326","name": "Potassium lactate","status": "mushbooh","purpose": "Antioxidant"},
  {"code": "E327","name": "Calcium lactate","status": "mushbooh","purpose": "Antioxidant"},
  {"code": "E329","name": "Magnesium lactate","status": "halal","purpose": "Antioxidant"},
  {"code": "E330","name": "Citric acid","status": "halal","purpose": "Antioxidant"},
  {"code": "E331","name": "Sodium citrates","status": "halal","purpose": "Antioxidant"},
  {"code": "E332","name": "Potassium citrates","status": "halal","purpose": "Antioxidant"},
  {"code": "E333","name": "Calcium citrates","status": "halal","purpose": "Antioxidant"},
  {"code": "E334","name": "Tartaric acid (L(+)-)","status": "halal","purpose": "Antioxidant"},
  {"code": "E335","name": "Sodium tartrates","status": "halal","purpose": "Antioxidant"},
  {"code": "E336","name": "Potassium tartrates (Cream of tartar)","status": "halal","purpose": "Antioxidant"},
  {"code": "E337","name": "Sodium potassium tartrates","status": "halal","purpose": "Antioxidant"},
  {"code": "E338","name": "Phosphoric acid","status": "halal","purpose": "Antioxidant"},
  {"code": "E339","name": "Sodium phosphates","status": "halal","purpose": "Antioxidant"},
  {"code": "E340","name": "Potassium phosphates","status": "halal","purpose": "Antioxidant"},
  {"code": "E341","name": "Calcium phosphates","status": "halal","purpose": "Anti-caking agent"},
  {"code": "E342","name": "Ammonium phosphates","status": "halal","purpose": "Anti-caking agent"},
  {"code": "E343","name": "Magnesium phosphates","status": "halal","purpose": "Anti-caking agent"},
  {"code": "E350","name": "Sodium malates","status": "halal","purpose": "Acidity regulator"},
  {"code": "E351","name": "Potassium malates","status": "halal","purpose": "Acidity regulator"},
  {"code": "E352","name": "Calcium malates","status": "halal","purpose": "Acidity regulator"},
  {"code": "E353","name": "Metatartaric acid","status": "halal","purpose": "Acidity regulator"},
  {"code": "E354","name": "Calcium tartrate","status": "halal","purpose": "Acidity regulator"},
  {"code": "E355","name": "Adipic acid","status": "halal","purpose": "Acidity regulator"},
  {"code": "E356","name": "Sodium adipate","status": "halal","purpose": "Acidity regulator"},
  {"code": "E357","name": "Potassium adipate","status": "halal","purpose": "Acidity regulator"},
  {"code": "E363","name": "Succinic acid","status": "halal","purpose": "Acidity regulator"},
  {"code": "E365","name": "Sodium fumarate","status": "halal","purpose": "Acidity regulator"},
  {"code": "E366","name": "Potassium fumarate","status": "halal","purpose": "Acidity regulator"},
  {"code": "E367","name": "Calcium fumarate","status": "halal","purpose": "Acidity regulator"},
  {"code": "E370","name": "1,4-Heptonolactone","status": "halal","purpose": "Acidity regulator"},
  {"code": "E375","name": "Niacin (Vitamin B3)","status": "halal","purpose": "Colour retention agent"},
  {"code": "E380","name": "Triammonium citrate","status": "halal","purpose": "Acidity regulator"},
  {"code": "E381","name": "Ammonium ferric citrate","status": "halal","purpose": "Acidity regulator"},
  {"code": "E385","name": "Calcium disodium ethylene diamine tetra-acetate","status": "halal","purpose": "Antioxidant"},
  {"code": "E400","name": "Alginic acid","status": "halal","purpose": "Thickener"},
  {"code": "E401","name": "Sodium alginate","status": "halal","purpose": "Thickener"},
  {"code": "E402","name": "Potassium alginate","status": "halal","purpose": "Thickener"},
  {"code": "E403","name": "Ammonium alginate","status": "halal","purpose": "Thickener"},
  {"code": "E404","name": "Calcium alginate","status": "halal","purpose": "Thickener"},
  {"code": "E405","name": "Propane-1,2-diol alginate","status": "halal","purpose": "Thickener"},
  {"code": "E406","name": "Agar","status": "halal","purpose": "Thickener"},
  {"code": "E407","name": "Carrageenan","status": "halal","purpose": "Thickener"},
  {"code": "E407a","name": "Processed eucheuma seaweed","status": "halal","purpose": "Thickener"},
  {"code": "E410","name": "Locust bean gum","status": "halal","purpose": "Thickener"},
  {"code": "E412","name": "Guar gum","status": "halal","purpose": "Thickener"},
  {"code": "E413","name": "Tragacanth","status": "halal","purpose": "Thickener"},
  {"code": "E4D","name": "Acacia gum (gum arabic)","status": "halal","purpose": "Thickener"},
  {"code": "E415","name": "Xanthan gum","status": "halal","purpose": "Thickener"},
  {"code": "E416","name": "Karaya gum","status": "halal","purpose": "Thickener"},
  {"code": "E417","name": "Tara gum","status": "halal","purpose": "Thickener"},
  {"code": "E418","name": "Gellan gum","status": "halal","purpose": "Thickener"},
  {"code": "E420","name": "Sorbitol","status": "halal","purpose": "Emulsifier"},
  {"code": "E421","name": "Mannitol","status": "halal","purpose": "Emulsifier"},
  {"code": "E422","name": "Glycerol","status": "mushbooh","purpose": "Emulsifier"},
  {"code": "E425","name": "Konjac","status": "halal","purpose": "Emulsifier"},
  {"code": "E426","name": "Soybean hemicellulose","status": "halal","purpose": "Emulsifier"},
  {"code": "E430","name": "Polyoxyethylene (8) stearate","status": "mushbooh","purpose": "Emulsifier"},
  {"code": "E431","name": "Polyoxyethylene (40) stearate","status": "mushbooh","purpose": "Emulsifier"},
  {"code": "E432","name": "Polyoxyethylene (20) sorbitan monolaurate (Polysorbate 20)","status": "mushbooh","purpose": "Emulsifier"},
  {"code": "E433","name": "Polyoxyethylene (20) sorbitan monooleate (Polysorbate 80)","status": "mushbooh","purpose": "Emulsifier"},
  {"code": "E434","name": "Polyoxyethylene (20) sorbitan monopalmitate (Polysorbate 40)","status": "mushbooh","purpose": "Emulsifier"},
  {"code": "E435","name": "Polyoxyethylene (20) sorbitan monostearate (Polysorbate 60)","status": "mushbooh","purpose": "Emulsifier"},
  {"code": "E436","name": "Polyoxyethylene (20) sorbitan tristearate (Polysorbate 65)","status": "mushbooh","purpose": "Emulsifier"},
  {"code": "E440","name": "Pectins","status": "halal","purpose": "Emulsifier"},
  {"code": "E441","name": "Gelatine","status": "haram","purpose": "Emulsifier"},
  {"code": "E442","name": "Ammonium phosphatides","status": "mushbooh","purpose": "Emulsifier"},
  {"code": "E444","name": "Sucrose acetate isobutyrate","status": "halal","purpose": "Emulsifier"},
  {"code": "E445","name": "Glycerol esters of wood rosins","status": "mushbooh","purpose": "Emulsifier"},
  {"code": "E450","name": "Diphosphates","status": "halal","purpose": "Emulsifier"},
  {"code": "E451","name": "Triphosphates","status": "halal","purpose": "Emulsifier"},
  {"code": "E452","name": "Polyphosphates","status": "halal","purpose": "Emulsifier"},
  {"code": "E459","name": "Beta-cyclodextrin","status": "halal","purpose": "Emulsifier"},
  {"code": "E460","name": "Cellulose","status": "halal","purpose": "Emulsifier"},
  {"code": "E461","name": "Methyl cellulose","status": "halal","purpose": "Emulsifier"},
  {"code": "E462","name": "Ethyl cellulose","status": "halal","purpose": "Emulsifier"},
  {"code": "E463","name": "Hydroxypropyl cellulose","status": "halal","purpose": "Emulsifier"},
  {"code": "E464","name": "Hydroxypropyl methyl cellulose","status": "halal","purpose": "Emulsifier"},
  {"code": "E465","name": "Ethyl methyl cellulose","status": "halal","purpose": "Emulsifier"},
  {"code": "E466","name": "Carboxymethyl cellulose","status": "halal","purpose": "Emulsifier"},
  {"code": "E467","name": "Ethyl hydroxyethyl cellulose","status": "halal","purpose": "Emulsifier"},
  {"code": "E468","name": "Crosslinked sodium carboxymethyl cellulose","status": "halal","purpose": "Emulsifier"},
  {"code": "E469","name": "Enzymatically hydrolysed carboxymethyl cellulose","status": "halal","purpose": "Emulsifier"},
  {"code": "E470a","name": "Sodium, potassium and calcium salts of fatty acids","status": "mushbooh","purpose": "Emulsifier"},
  {"code": "E470b","name": "Magnesium salts of fatty acids","status": "mushbooh","purpose": "Emulsifier"},
  {"code": "E471","name": "Mono- and diglycerides of fatty acids","status": "mushbooh","purpose": "Emulsifier"},
  {"code": "E472a","name": "Acetic acid esters of mono- and diglycerides","status": "mushbooh","purpose": "Emulsifier"},
  {"code": "E472b","name": "Lactic acid esters of mono- and diglycerides","status": "mushbooh","purpose": "Emulsifier"},
  {"code": "E472c","name": "Citric acid esters of mono- and diglycerides","status": "mushbooh","purpose": "Emulsifier"},
  {"code": "E472d","name": "Tartaric acid esters of mono- and diglycerides","status": "mushbooh","purpose": "Emulsifier"},
  {"code": "E472e","name": "Mono- and diacetyl tartaric acid esters","status": "mushbooh","purpose": "Emulsifier"},
  {"code": "E472f","name": "Mixed acetic and tartaric acid esters","status": "mushbooh","purpose": "Emulsifier"},
  {"code": "E473","name": "Sucrose esters of fatty acids","status": "mushbooh","purpose": "Emulsifier"},
  {"code": "E474","name": "Sucroglycerides","status": "mushbooh","purpose": "Emulsifier"},
  {"code": "E475","name": "Polyglycerol esters of fatty acids","status": "mushbooh","purpose": "Emulsifier"},
  {"code": "E476","name": "Polyglycerol polyricinoleate","status": "mushbooh","purpose": "Emulsifier"},
  {"code": "E477","name": "Propane-1,2-diol esters of fatty acids","status": "mushbooh","purpose": "Emulsifier"},
  {"code": "E478","name": "Lactylated fatty acid esters","status": "mushbooh","purpose": "Emulsifier"},
  {"code": "E479b","name": "Thermally oxidized soy bean oil","status": "mushbooh","purpose": "Emulsifier"},
  {"code": "E481","name": "Sodium stearoyl-2-lactylate","status": "mushbooh","purpose": "Emulsifier"},
  {"code": "E482","name": "Calcium stearoyl-2-lactylate","status": "mushbooh","purpose": "Emulsifier"},
  {"code": "E483","name": "Stearyl tartrate","status": "mushbooh","purpose": "Emulsifier"},
  {"code": "E491","name": "Sorbitan monostearate","status": "mushbooh","purpose": "Emulsifier"},
  {"code": "E492","name": "Sorbitan tristearate","status": "mushbooh","purpose": "Emulsifier"},
  {"code": "E493","name": "Sorbitan monolaurate","status": "mushbooh","purpose": "Emulsifier"},
  {"code": "E494","name": "Sorbitan monooleate","status": "mushbooh","purpose": "Emulsifier"},
  {"code": "E495","name": "Sorbitan monopalmitate","status": "mushbooh","purpose": "Emulsifier"},
  {"code": "E496","name": "Sorbitan trioleate","status": "mushbooh","purpose": "Emulsifier"},
  {"code": "E500","name": "Sodium carbonates","status": "halal","purpose": "Acidity regulator"},
  {"code": "E501","name": "Potassium carbonates","status": "halal","purpose": "Acidity regulator"},
  {"code": "E503","name": "Ammonium carbonates","status": "halal","purpose": "Acidity regulator"},
  {"code": "E504","name": "Magnesium carbonates","status": "halal","purpose": "Acidity regulator"},
  {"code": "E507","name": "Hydrochloric acid","status": "halal","purpose": "Acidity regulator"},
  {"code": "E508","name": "Potassium chloride","status": "halal","purpose": "Acidity regulator"},
  {"code": "E509","name": "Calcium chloride","status": "halal","purpose": "Acidity regulator"},
  {"code": "E510","name": "Ammonium chloride","status": "halal","purpose": "Acidity regulator"},
  {"code": "E511","name": "Magnesium chloride","status": "halal","purpose": "Acidity regulator"},
  {"code": "E512","name": "Stannous chloride","status": "halal","purpose": "Acidity regulator"},
  {"code": "E513","name": "Sulphuric acid","status": "halal","purpose": "Acidity regulator"},
  {"code": "E514","name": "Sodium sulphates","status": "halal","purpose": "Acidity regulator"},
  {"code": "E515","name": "Potassium sulphates","status": "halal","purpose": "Acidity regulator"},
  {"code": "E516","name": "Calcium sulphate","status": "halal","purpose": "Acidity regulator"},
  {"code": "E517","name": "Ammonium sulphate","status": "halal","purpose": "Acidity regulator"},
  {"code": "E518","name": "Magnesium sulphate","status": "halal","purpose": "Acidity regulator"},
  {"code": "E519","name": "Copper sulphate","status": "halal","purpose": "Acidity regulator"},
  {"code": "E520","name": "Aluminium sulphate","status": "halal","purpose": "Acidity regulator"},
  {"code": "E521","name": "Aluminium sodium sulphate","status": "halal","purpose": "Acidity regulator"},
  {"code": "E522","name": "Aluminium potassium sulphate","status": "halal","purpose": "Acidity regulator"},
  {"code": "E523","name": "Aluminium ammonium sulphate","status": "halal","purpose": "Acidity regulator"},
  {"code": "E524","name": "Sodium hydroxide","status": "halal","purpose": "Acidity regulator"},
  {"code": "E525","name": "Potassium hydroxide","status": "halal","purpose": "Acidity regulator"},
  {"code": "E526","name": "Calcium hydroxide","status": "halal","purpose": "Acidity regulator"},
  {"code": "E527","name": "Ammonium hydroxide","status": "halal","purpose": "Acidity regulator"},
  {"code": "E528","name": "Magnesium hydroxide","status": "halal","purpose": "Acidity regulator"},
  {"code": "E529","name": "Calcium oxide","status": "halal","purpose": "Acidity regulator"},
  {"code": "E530","name": "Magnesium oxide","status": "halal","purpose": "Acidity regulator"},
  {"code": "E535","name": "Sodium ferrocyanide","status": "halal","purpose": "Anti-caking agent"},
  {"code": "E536","name": "Potassium ferrocyanide","status": "halal","purpose": "Anti-caking agent"},
  {"code": "E537","name": "Ferrous hexacyanomanganate","status": "halal","purpose": "Anti-caking agent"},
  {"code": "E538","name": "Calcium ferrocyanide","status": "halal","purpose": "Anti-caking agent"},
  {"code": "E540","name": "Dicalcium diphosphate","status": "halal","purpose": "Acidity regulator"},
  {"code": "E541","name": "Sodium aluminium phosphate","status": "halal","purpose": "Acidity regulator"},
  {"code": "E542","name": "Bone phosphate","status": "haram","purpose": "Anti-caking agent"},
  {"code": "E543","name": "Sodium calcium polyphosphate","status": "halal","purpose": "Anti-caking agent"},
  {"code": "E544","name": "Calcium polyphosphate","status": "halal","purpose": "Anti-caking agent"},
  {"code": "E545","name": "Ammonium polyphosphate","status": "halal","purpose": "Anti-caking agent"},
  {"code": "E550","name": "Sodium silicates","status": "halal","purpose": "Anti-caking agent"},
  {"code": "E551","name": "Silicon dioxide (Silica)","status": "halal","purpose": "Anti-caking agent"},
  {"code": "E552","name": "Calcium silicate","status": "halal","purpose": "Anti-caking agent"},
  {"code": "E553a","name": "Magnesium silicate","status": "halal","purpose": "Anti-caking agent"},
  {"code": "E553b","name": "Talc","status": "halal","purpose": "Anti-caking agent"},
  {"code": "E554","name": "Sodium aluminium silicate","status": "halal","purpose": "Anti-caking agent"},
  {"code": "E555","name": "Potassium aluminium silicate","status": "halal","purpose": "Anti-caking agent"},
  {"code": "E556","name": "Calcium aluminium silicate","status": "halal","purpose": "Anti-caking agent"},
  {"code": "E557","name": "Zinc silicate","status": "halal","purpose": "Anti-caking agent"},
  {"code": "E558","name": "Bentonite","status": "halal","purpose": "Anti-caking agent"},
  {"code": "E559","name": "Aluminium silicate (Kaolin)","status": "halal","purpose": "Anti-caking agent"},
  {"code": "E560","name": "Potassium silicate","status": "halal","purpose": "Anti-caking agent"},
  {"code": "E570","name": "Stearic acid","status": "mushbooh","purpose": "Anti-caking agent"},
  {"code": "E571","name": "Ammonium stearate","status": "mushbooh","purpose": "Anti-caking agent"},
  {"code": "E572","name": "Magnesium stearate","status": "mushbooh","purpose": "Anti-caking agent"},
  {"code": "E573","name": "Aluminium stearate","status": "mushbooh","purpose": "Anti-caking agent"},
  {"code": "E574","name": "Gluconic acid","status": "halal","purpose": "Acidity regulator"},
  {"code": "E575","name": "Glucono delta-lactone","status": "halal","purpose": "Acidity regulator"},
  {"code": "E576","name": "Sodium gluconate","status": "halal","purpose": "Acidity regulator"},
  {"code": "E577","name": "Potassium gluconate","status": "halal","purpose": "Acidity regulator"},
  {"code": "E578","name": "Calcium gluconate","status": "halal","purpose": "Acidity regulator"},
  {"code": "E579","name": "Ferrous gluconate","status": "halal","purpose": "Acidity regulator"},
  {"code": "E585","name": "Ferrous lactate","status": "mushbooh","purpose": "Colour retention agent"},
  {"code": "E586","name": "4-Hexylresorcinol","status": "halal","purpose": "Colour retention agent"},
  {"code": "E620","name": "Glutamic acid","status": "mushbooh","purpose": "Flavour enhancer"},
  {"code": "E621","name": "Monosodium glutamate (MSG)","status": "mushbooh","purpose": "Flavour enhancer"},
  {"code": "E622","name": "Monopotassium glutamate","status": "mushbooh","purpose": "Flavour enhancer"},
  {"code": "E623","name": "Calcium diglutamate","status": "mushbooh","purpose": "Flavour enhancer"},
  {"code": "E624","name": "Monoammonium glutamate","status": "mushbooh","purpose": "Flavour enhancer"},
  {"code": "E625","name": "Magnesium diglutamate","status": "mushbooh","purpose": "Flavour enhancer"},
  {"code": "E626","name": "Guanylic acid","status": "halal","purpose": "Flavour enhancer"},
  {"code": "E627","name": "Disodium guanylate","status": "halal","purpose": "Flavour enhancer"},
  {"code": "E628","name": "Dipotassium guanylate","status": "halal","purpose": "Flavour enhancer"},
  {"code": "E629","name": "Calcium guanylate","status": "halal","purpose": "Flavour enhancer"},
  {"code": "E630","name": "Inosinic acid","status": "mushbooh","purpose": "Flavour enhancer"},
  {"code": "E631","name": "Disodium inosinate","status": "mushbooh","purpose": "Flavour enhancer"},
  {"code": "E632","name": "Dipotassium inosinate","status": "mushbooh","purpose": "Flavour enhancer"},
  {"code": "E633","name": "Calcium inosinate","status": "mushbooh","purpose": "Flavour enhancer"},
  {"code": "E634","name": "Calcium 5-ribonucleotides","status": "mushbooh","purpose": "Flavour enhancer"},
  {"code": "E635","name": "Disodium 5-ribonucleotides","status": "mushbooh","purpose": "Flavour enhancer"},
  {"code": "E636","name": "Maltol","status": "halal","purpose": "Flavour enhancer"},
  {"code": "E637","name": "Ethyl maltol","status": "halal","purpose": "Flavour enhancer"},
  {"code": "E640","name": "Glycine and its sodium salt","status": "mushbooh","purpose": "Flavour enhancer"},
  {"code": "E641","name": "L-leucine","status": "mushbooh","purpose": "Flavour enhancer"},
  {"code": "E642","name": "Lysine hydrochloride","status": "halal","purpose": "Flavour enhancer"},
  {"code": "E650","name": "Zinc acetate","status": "halal","purpose": "Flavour enhancer"},
  {"code": "E900","name": "Dimethyl polysiloxane","status": "halal","purpose": "Anti-foaming agent"},
  {"code": "E901","name": "Beeswax, white and yellow","status": "halal","purpose": "Glazing agent"},
  {"code": "E902","name": "Candelilla wax","status": "halal","purpose": "Glazing agent"},
  {"code": "E903","name": "Carnauba wax","status": "halal","purpose": "Glazing agent"},
  {"code": "E904","name": "Shellac","status": "haram","purpose": "Glazing agent"},
  {"code": "E905","name": "Microcrystalline wax","status": "halal","purpose": "Glazing agent"},
  {"code": "E905a","name": "Mineral oil, food grade","status": "halal","purpose": "Glazing agent"},
  {"code": "E905b","name": "Petrolatum, food grade","status": "halal","purpose": "Glazing agent"},
  {"code": "E905c","name": "Petroleum wax","status": "halal","purpose": "Glazing agent"},
  {"code": "E906","name": "Gum benzoic","status": "halal","purpose": "Glazing agent"},
  {"code": "E907","name": "Hydrogenated poly-1-decene","status": "halal","purpose": "Glazing agent"},
  {"code": "E908","name": "Rice bran wax","status": "halal","purpose": "Glazing agent"},
  {"code": "E909","name": "Spermaceti wax","status": "haram","purpose": "Glazing agent"},
  {"code": "E910","name": "Wax esters","status": "mushbooh","purpose": "Glazing agent"},
  {"code": "E912","name": "Montan acid esters","status": "halal","purpose": "Glazing agent"},
  {"code": "E913","name": "Lanolin","status": "mqshbooh","purpose": "Glazing agent"},
  {"code": "E914","name": "Oxidized polyethylene wax","status": "halal","purpose": "Glazing agent"},
  {"code": "E915","name": "Esters of colophony","status": "halal","purpose": "Glazing agent"},
  {"code": "E920","name": "L-cysteine","status": "mushbooh","purpose": "Flour treatment agent"},
  {"code": "E921","name": "L-cystine","status": "mushbooh","purpose": "Flour treatment agent"},
  {"code": "E922","name": "Potassium persulphate","status": "halal","purpose": "Flour treatment agent"},
  {"code": "E923","name": "Ammonium persulphate","status": "halal","purpose": "Flour treatment agent"},
  {"code": "E924","name": "Potassium bromate","status": "halal","purpose": "Flour treatment agent"},
  {"code": "E925","name": "Chlorine","status": "halal","purpose": "Flour treatment agent"},
  {"code": "E926","name": "Chlorine dioxide","status": "halal","purpose": "Flour treatment agent"},
  {"code": "E927a","name": "Azodicarbonamide","status": "halal","purpose": "Flour treatment agent"},
  {"code": "E927b","name": "Carbamide (Urea)","status": "mushbooh","purpose": "Flour treatment agent"},
  {"code": "E928","name": "Benzoyl peroxide","status": "halal","purpose": "Flour treatment agent"},
  {"code": "E938","name": "Argon","status": "halal","purpose": "Packaging gas"},
  {"code": "E939","name": "Helium","status": "halal","purpose": "Packaging gas"},
  {"code": "E940","name": "Dichlorodifluoromethane","status": "halal","purpose": "Packaging gas"},
  {"code": "E941","name": "Nitrogen","status": "halal","purpose": "Packaging gas"},
  {"code": "E942","name": "Nitrous oxide","status": "halal","purpose": "Packaging gas"},
  {"code": "E943a","name": "Butane","status": "halal","purpose": "Propellant"},
  {"code": "E943b","name": "Isobutane","status": "halal","purpose": "Propellant"},
  {"code": "E944","name": "Propane","status": "halal","purpose": "Propellant"},
  {"code": "E948","name": "Oxygen","status": "halal","purpose": "Packaging gas"},
  {"code": "E949","name": "Hydrogen","status": "halal","purpose": "Packaging gas"},
  {"code": "E950","name": "Acesulfame K","status": "halal","purpose": "Sweetener"},
  {"code": "E951","name": "Aspartame","status": "halal","purpose": "Sweetener"},
  {"code": "E952","name": "Cyclamic acid","status": "halal","purpose": "Sweetener"},
  {"code": "E953","name": "Isomalt","status": "halal","purpose": "Sweetener"},
  {"code": "E954","name": "Saccharin","status": "halal","purpose": "Sweetener"},
  {"code": "E955","name": "Sucralose","status": "halal","purpose": "Sweetener"},
  {"code": "E957","name": "Thaumatin","status": "halal","purpose": "Sweetener"},
  {"code": "E959","name": "Neohesperidin dihydrochalcone","status": "halal","purpose": "Sweetener"},
  {"code": "E962","name": "Salt of Aspartame-Acesulfame","status": "halal","purpose": "Sweetener"},
  {"code": "E965","name": "Maltitol","status": "halal","purpose": "Sweetener"},
  {"code": "E966","name": "Lactitol","status": "halal","purpose": "Sweetener"},
  {"code": "E967","name": "Xylitol","status": "halal","purpose": "Sweetener"},
  {"code": "E968","name": "Erythritol","status": "halal","purpose": "Sweetener"},
  {"code": "E999","name": "Quillaia extract","status": "halal","purpose": "Foaming agent"},
  {"code": "E1100","name": "Amylase","status": "mushbooh","purpose": "Flour treatment agent"},
  {"code": "E1101","name": "Protease","status": "mushbooh","purpose": "Flour treatment agent"},
  {"code": "E1102","name": "Glucose Oxidase","status": "halal","purpose": "Antioxidant"},
  {"code": "E1103","name": "Invertase","status": "halal","purpose": "Stabiliser"},
  {"code": "E1104","name": "Lipase","status": "mushbooh","purpose": "Flavour enhancer"},
  {"code": "E1105","name": "Lysozyme","status": "haram","purpose": "Preservative"},
  {"code": "E1200","name": "Polydextrose","status": "halal","purpose": "Stabiliser"},
  {"code": "E1201","name": "Polyvinylpyrrolidone","status": "halal","purpose": "Stabiliser"},
  {"code": "E1202","name": "Polyvinylpolypyrrolidone","status": "halal","purpose": "Stabiliser"},
  {"code": "E1203","name": "Polyvinyl alcohol","status": "halal","purpose": "Stabiliser"},
  {"code": "E1204","name": "Pullulan","status": "halal","purpose": "Stabiliser"},
  {"code": "E1400","name": "Dextrins","status": "halal","purpose": "Stabiliser"},
  {"code": "E1401","name": "Acid-treated starch","status": "halal","purpose": "Stabiliser"},
  {"code": "E1402","name": "Alkaline-treated starch","status": "halal","purpose": "Stabiliser"},
  {"code": "E1403","name": "Bleached starch","status": "halal","purpose": "Stabiliser"},
  {"code": "E1404","name": "Oxidized starch","status": "halal","purpose": "Stabiliser"},
  {"code": "E1405","name": "Enzyme-treated starch","status": "halal","purpose": "Stabiliser"},
  {"code": "E1410","name": "Monostarch phosphate","status": "halal","purpose": "Stabiliser"},
  {"code": "E1412","name": "Distarch phosphate","status": "halal","purpose": "Stabiliser"},
  {"code": "E1413","name": "Phosphated distarch phosphate","status": "halal","purpose": "Stabiliser"},
  {"code": "E1414","name": "Acetylated distarch phosphate","status": "halal","purpose": "Stabiliser"},
  {"code": "E1420","name": "Starch acetate","status": "halal","purpose": "Stabiliser"},
  {"code": "E1421","name": "Starch acetate","status": "halal","purpose": "Stabiliser"},
  {"code": "E1422","name": "Acetylated distarch adipate","status": "halal","purpose": "Stabiliser"},
  {"code": "E1423","name": "Acetylated distarch glycerol","status": "halal","purpose": "Stabiliser"},
  {"code": "E1430","name": "Distarch glycerine","status": "halal","purpose": "Stabiliser"},
  {"code": "E1440","name": "Hydroxypropyl starch","status": "halal","purpose": "Stabiliser"},
  {"code": "E1441","name": "Hydroxypropyl distarch glycerine","status": "halal","purpose": "Stabiliser"},
  {"code": "E1442","name": "Hydroxypropyl distarch phosphate","status": "halal","purpose": "Stabiliser"},
  {"code": "E1450","name": "Starch sodium octenyl succinate","status": "halal","purpose": "Stabiliser"},
  {"code": "E1451","name": "Acetylated oxidized starch","status": "halal","purpose": "Stabiliser"},
  {"code": "E1452","name": "Starch aluminium octenyl succinate","status": "halal","purpose": "Stabiliser"},
  {"code": "E1503","name": "Castor oil","status": "halal","purpose": "Release agent"},
  {"code": "E1505","name": "Triethyl citrate","status": "halal","purpose": "Foam stabiliser"},
  {"code": "E1517","name": "Glyceryl diacetate","status": "mushbooh","purpose": "Carrier solvent"},
  {"code": "E1518","name": "Glyceryl triacetate (Triacetin)","status": "mushbooh","purpose": "Carrier solvent"},
  {"code": "E1519","name": "Benzyl alcohol","status": "halal","purpose": "Carrier solvent"},
  {"code": "E1520","name": "Propylene glycol","status": "halal","purpose": "Carrier solvent"},
  {"code": "E1521","name": "Polyethylene glycol","status": "halal","purpose": "Carrier solvent"}
];

// --- Cache de recherche (le "cerveau" construit au démarrage) ---
let searchMap = null;

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
 * Construit le "cerveau" (la searchMap) à partir de la DB interne.
 */
function buildDatabase() {
    const map = {}; // Le "cerveau"

    for (const item of EXPERT_DB) {
        // L'item = { "code": "E120", "name": "Cochineal...", "status": "haram" }
        
        const statusInfo = {
            status: item.status, // "halal", "haram", "mushbooh"
            note: item.name     // "Cochineal, Carminic acid, Carmine"
        };
        
        // 1. Ajouter le CODE E (ex: "e120")
        const cleanCode = cleanIngredient(item.code);
        if (cleanCode) {
            map[cleanCode] = statusInfo;
        }
        
        // 2. Ajouter les NOMS (ex: "cochineal", "carminic acid", "carmine")
        const names = item.name.split(',');
        for (const name of names) {
            const cleanName = cleanIngredient(name);
            if (cleanName && !map[cleanName]) { // Ne pas écraser si déjà mappé
                map[cleanName] = statusInfo;
            }
        }
    }
    return map;
}

/**
 * Récupère le "cerveau".
 * Il n'y a plus de fetch(). On le construit une seule fois.
 */
function getDatabase() {
    // Si le "cerveau" (searchMap) n'a pas encore été construit, on le fait.
    if (!searchMap) {
        searchMap = buildDatabase();
    }
    // On le renvoie. C'est instantané.
    return searchMap;
}

// --- Le Moteur (La Fonction Serverless v6) ---
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
        // 1. Récupérer le "cerveau" (instantané)
        const searchMap = getDatabase();
        
        const { ingredients } = req.body;
        if (!ingredients || !Array.isArray(ingredients)) {
            return res.status(400).json({ error: "Entrée invalide. Fournir un JSON: {'ingredients': ['item1', 'item2']}" });
        }

        let results = [];
        let overall_status = "halal"; // Par défaut
        const status_priority = { "haram": 3, "mushbooh": 2, "halal": 1, "inconnu": 0 };

        for (const item_raw of ingredients) {
            const item_clean = cleanIngredient(item_raw);
            
            // Logique de recherche V6 :
            const info = searchMap[item_clean];
            
            if (info) {
                // On a trouvé une correspondance
                results.push({
                    input: item_raw,
                    match: item_clean,
                    status: info.status.charAt(0).toUpperCase() + info.status.slice(1), // Met une majuscule (ex: "Haram")
                    note: info.note
                });

                // Mettre à jour le statut global
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
