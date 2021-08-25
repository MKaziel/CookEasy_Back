module.exports = (server) => {
    const tagController = require('../controllers/tagController');


    server.route('/tag')
        //all
        .get(tagController.list_all_tag)


    server.route('/tag/:tag_id') // req.params.tag_id
  
        .get(tagController.get_a_tag)
 
        .put( tagController.update_a_tag)

        .delete( tagController.delete_a_tag);
}

var express = require("express");
var router = express.Router();

module.export = router;