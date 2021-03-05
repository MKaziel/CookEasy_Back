const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Modèle de l'utilisateur
 */
let userSchema = new Schema({
    login: {
        type: String,
        required: "Le login est requis",
        unique: true
    },
    password: {
        type: String,
        required: "Le mdp est requis"
    },
    email: {
        type: String,
        required: "Un email est requis"
    },
    nom: {
        type: String
    },
    prenom: {
        type: String
    },
    date_naissance: {
        type: Date
    }
});

module.exports = mongoose.model('User', userSchema);