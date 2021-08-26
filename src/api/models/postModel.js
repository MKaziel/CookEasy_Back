const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Modèle de post
 */
let postSchema = new Schema({
    proprietaire: {
        type: String,
        required: "Un propriétaire est requis",
        },
    contenu: {
        type: String,
        required: "Du contenu est requis pour enregistrer un post"
    },
    liste_tags: {
        type: Object,
        required: "Une liste de tags est requise pour un post"
    }
});

module.exports = mongoose.model('Post', postSchema);