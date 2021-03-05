const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Modèle de post
 */
let postSchema = new Schema({
    proprietaire: {
        type: String,
        required: "Un propriétaire est requis",
        unique: true
    },
    contenu: {
        type: String,
        required: "Du contenu est requis pour enregistrer un post"
    },
    liste_tags: {
        type: Object,
        required: "Une liste d'ingrédient est requis pour la recette"
    }
});

module.exports = mongoose.model('Post', postSchema);