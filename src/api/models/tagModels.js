const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Modèle de libelé
 */
let libeleSchema = new Schema({
    libele: {
        type: String,
        required: "Un libelé est requis",
        unique: true
    }
});

module.exports = mongoose.model('Post', postSchema);