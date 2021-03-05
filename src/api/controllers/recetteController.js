const recette = require('../models/recetteModel');

/**
 * 
 * @param {*} request 
 * @param {*} response
 * Listez tous les recettees 
 */
exports.list_all_recette = (request,response) => {
    recette.find({}, (error, recettes) => {
        if (error) {
            response.status(500);
            console.log(error);
            response.json({
                message: "Erreur serveur : recette / Get all"
            });
        } else {
            response.status(200);
            response.json(recettes);
        }
    });
}

/**
 * 
 * @param {*} request 
 * @param {*} response
 * Créer un recette 
 */
exports.create_a_recette = (request,response) => {
    let new_recette = new recette(request.body);
    new_recette.save((error, recette) => {
        if (error) {
            response.status(500);
            console.log(error);
            response.json({
                message: "Erreur serveur : recette / Create"
            });
        } else {
            response.status(201);
            response.json(recette);
        }
    });
}

/**
 * 
 * @param {*} request 
 * @param {*} response
 * Récupérer un recette avec son ID 
 */
exports.get_a_recette = (request,response) => {
    recette.findById(request.params.recette_id, (error, recette) => {
        if (error) {
            response.status(500);
            console.log(error);
            response.json({
                message: "Erreur serveur : recette / Get one"
            });
        } else {
            response.status(200);
            response.json(recette);
        }
    });
}

/**
 * 
 * @param {*} request 
 * @param {*} response
 * Mettre à jour un recette
 */
exports.update_a_recette = (request,response) => {
    recette.findByIdAndUpdate(request.params.recette_id,request.body, {new:true}, (error, recette) => {
        if (error) {
            response.status(500);
            console.log(error);
            response.json({
                message: "Erreur serveur : recette / Update"
            });
        } else {
            response.status(200);
            response.json(recette);
        }
    });
}

/**
 * 
 * @param {*} request 
 * @param {*} response
 * Supprimer une recette 
 */
exports.delete_a_recette = (request,response) => {
    recette.findByIdAndDelete(request.params.recette_id, (error, result) => {
        if (error) {
            response.status(500);
            console.log(error);
            response.json({
                message: "Erreur serveur : recette / Delete"
            });
        } else {
            response.status(200);
            response.json(result);
        }
    });
}