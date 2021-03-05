const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Modèle de recette
 */
let recettesSchema = new Schema({
    proprietaire: {
        type: String,
        required: "Un propriétaire est requis",
        unique: true
    },
    nom_recette: {
        type: String,
        required: "Un nom pour la recette est requis"
    },
    liste_ingredients: {
        type: Object,
        required: "Une liste d'ingrédient est requis pour la recette"
    }
});

module.exports = mongoose.model('Recettes', recettesSchema);