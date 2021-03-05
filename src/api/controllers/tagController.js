const tag = require('../models/tagModel');

/**
 * 
 * @param {*} request 
 * @param {*} response
 * Listez tous les tages 
 */
exports.list_all_tag = (request,response) => {
    tag.find({}, (error, tags) => {
        if (error) {
            response.status(500);
            console.log(error);
            response.json({
                message: "Erreur serveur : tag / Get all"
            });
        } else {
            response.status(200);
            response.json(tags);
        }
    });
}

/**
 * 
 * @param {*} request 
 * @param {*} response
 * Créer un tag 
 */
exports.create_a_tag = (request,response) => {
    let new_tag = new tag(request.body);
    new_tag.save((error, tag) => {
        if (error) {
            response.status(500);
            console.log(error);
            response.json({
                message: "Erreur serveur : tag / Create"
            });
        } else {
            response.status(201);
            response.json(tag);
        }
    });
}

/**
 * 
 * @param {*} request 
 * @param {*} response
 * Récupérer un tag avec son ID 
 */
exports.get_a_tag = (request,response) => {
    tag.findById(request.params.tag_id, (error, tag) => {
        if (error) {
            response.status(500);
            console.log(error);
            response.json({
                message: "Erreur serveur : tag / Get one"
            });
        } else {
            response.status(200);
            response.json(tag);
        }
    });
}

/**
 * 
 * @param {*} request 
 * @param {*} response
 * Mettre à jour un tag
 */
exports.update_a_tag = (request,response) => {
    tag.findByIdAndUpdate(request.params.tag_id,request.body, {new:true}, (error, tag) => {
        if (error) {
            response.status(500);
            console.log(error);
            response.json({
                message: "Erreur serveur : tag / Update"
            });
        } else {
            response.status(200);
            response.json(tag);
        }
    });
}

/**
 * 
 * @param {*} request 
 * @param {*} response
 * Supprimer une école 
 */
exports.delete_a_tag = (request,response) => {
    tag.findByIdAndDelete(request.params.tag_id, (error, result) => {
        if (error) {
            response.status(500);
            console.log(error);
            response.json({
                message: "Erreur serveur : tag / Delete"
            });
        } else {
            response.status(200);
            response.json(result);
        }
    });
}