const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Modèle de recette
 */
let recettesSchema = new Schema({
    proprietaire: {
        type: String,
        required: "Un propriétaire est requis",
    },
    nom_recette: {
        type: String,
        required: "Un nom pour la recette est requis"
    },
    liste_ingredients: {
        type: Object,
        required: "Une liste d'ingrédient est requis pour la recette"
    },
    difficulte: {
        type: String,
        required: "Une difficulté doit être fournie"
    },
    temps_preparation: {
        type: Number,
        required: "Un temps de préparation est requis pour une recette"
    },
    temps_cuisson: {
        type: Number,
        required: "Un temps de cuisson est requis pour une recette"
    },
    preparation:{
        type: String,
        required: "Une indication des tâches à faire est nécessaire pour une recette"
    }
});

module.exports = mongoose.model('Recettes', recettesSchema);