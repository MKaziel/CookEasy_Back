module.exports = (server) => {
    const postController = require("../controllers/postController");

    server.route("/post")
        //all
        .get(postController.list_all_post)


    server.route('/post/:post_id') // req.params.post_id
  
        .get(postController.get_a_post)
 
        .put( postController.update_a_post)

        .delete( postController.delete_a_post);
};

var express = require("express");
var router = express.Router();

module.export = router;