module.exports = (server) => {
    const userController = require("../controllers/userController");

    server
        .route("/users")
        //admin
        .get(userController.list_all_users);

    server
        .route("/users/register")
        //only guest
        .post(userController.create_an_user);

    server
        .route("/users/login")
        //only guest
        .post(userController.login_an_user);

    server
        .route("/users/:user_id")
        //users
        .put(userController.update_user);

    server
        .route("/user/:user_login")
        //admin
        .get(userController.list_user_info);
};

var express = require("express");
var router = express.Router();

module.export = router;
