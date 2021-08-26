const tag = require('../models/tagModels');

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
                message: `Erreur serveur : Tag / list all \n ${error} `
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
                message: `Erreur serveur : Tag / Create \n ${error} `
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
                message: `Erreur serveur : Tag / Get one \n ${error} `
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
                message: `Erreur serveur : Tag / Update \n ${error} `
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
                message: `Erreur serveur : Tag / Delete \n ${error} `
            });
        } else {
            response.status(200);
            response.json(result);
        }
    });
}

exports.create_default_tag = () => {
    let new_tag = new tag({libele: "cuisine"});
    new_tag.save((error, tag) => {
        if (error) {
            console.log(500);
            console.log(error);
        } else {
            console.log(201);
            console.log(tag);
            return tag
        }
    });
}