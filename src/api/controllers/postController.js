const post = require('../models/postModel');

/**
 * 
 * @param {*} request 
 * @param {*} response
 * Listez tous les postes 
 */
exports.list_all_post = (request,response) => {
    post.find({}, (error, posts) => {
        if (error) {
            response.status(500);
            console.log(error);
            response.json({
                message: `Erreur serveur : post / Get all \n ${error}`
            });
        } else {
            response.status(200);
            response.json(posts);
        }
    });
}

/**
 * 
 * @param {*} request 
 * @param {*} response
 * Créer un post 
 */
exports.create_a_post = (request,response) => {
    let new_post = new post(request.body);
    new_post.save((error, post) => {
        if (error) {
            response.status(500);
            console.log(error);
            response.json({
                message: `Erreur serveur : post / Create \n ${error}`
            });
        } else {
            response.status(201);
            response.json(post);
        }
    });
}

/**
 * 
 * @param {*} request 
 * @param {*} response
 * Récupérer un post avec son ID 
 */
exports.get_a_post = (request,response) => {
    post.findById(request.params.post_id, (error, post) => {
        if (error) {
            response.status(500);
            console.log(error);
            response.json({
                message: `Erreur serveur : post / Get one \n ${error}`
            });
        } else {
            response.status(200);
            response.json(post);
        }
    });
}

/**
 * 
 * @param {*} request 
 * @param {*} response
 * Mettre à jour un post
 */
exports.update_a_post = (request,response) => {
    post.findByIdAndUpdate(request.params.post_id,request.body, {new:true}, (error, post) => {
        if (error) {
            response.status(500);
            console.log(error);
            response.json({
                message: `Erreur serveur : post / Update \n ${error}`
            });
        } else {
            response.status(200);
            response.json(post);
        }
    });
}

/**
 * 
 * @param {*} request 
 * @param {*} response
 * Supprimer un post 
 */
exports.delete_a_post = (request,response) => {
    post.findByIdAndDelete(request.params.post_id, (error, result) => {
        if (error) {
            response.status(500);
            console.log(error);
            response.json({
                message: `Erreur serveur : post / Delete \n ${error}`
            });
        } else {
            response.status(200);
            response.json(result);
        }
    });
}

exports.get_all_userpost = (request,response) => {
    post.find({proprietaire: request.params.user_login}, (error, posts) => {
        if (error) {
            response.status(500);
            console.log(error);
            response.json({
                message: `Erreur serveur : post / Get one \n ${error}`
            });
        } else {
            response.status(200);
            response.json(posts);
        }
    });
}