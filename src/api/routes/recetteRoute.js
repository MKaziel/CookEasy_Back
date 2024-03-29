module.exports = (server) => {
    const recetteController = require('../controllers/recetteController');


    server.route('/recette')
        //all
        .get(recetteController.list_all_recette)

        .post(recetteController.create_a_recette)


    server.route('/recette/:recette_id') // req.params.recette_id
  
        .get(recetteController.get_a_recette)
 
        .put( recetteController.update_a_recette)

        .delete( recetteController.delete_a_recette);

    server.route('/userrecette/:user_login')
    .get(recetteController.get_all_userrecipe)
}

var express = require("express");
var router = express.Router();

module.export = router;