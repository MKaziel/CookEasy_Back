const jwt = require("jsonwebtoken");
const User = require("../models/userModels");
const Bcrypt = require("bcrypt");
const SaltRounds = 10;

/**
 * 
 * @param {*} request 
 * @param {*} response
 * Lister tous les utilisateurs 
 */
exports.list_all_users = (request, response) => {
    User.find({}, (error, users) => {
        if (error) {
            response.status(500);
            console.log(error);
            response.json({
                message: `Erreur serveur : User / list all \n ${error} `,
            });
        } else {
            response.status(200);
            response.json(users);
        }
    });
};


/**
 * 
 * @param {*} request 
 * @param {*} response
 * Lister tous les utilisateurs 
 */
 exports.list_user_info = (request, response) => {
    User.findById(request.params.user_id, (error, user) => {
        if (error) {
            response.status(500);
            console.log(error);
            response.json({
                message: `Erreur serveur : User / list all \n ${error} `,
            });
        } else {
            response.status(200);
            response.json({
                message : "Donnée de l'utilisateur trouvé",
                data: user
            });
        }
    });
};
/**
 * 
 * @param {*} request 
 * @param {*} response
 * S'Inscrire / Créer un utilisateur 
 */
exports.create_an_user = (request, response) => {
    let rgx = new RegExp(
        "^[^W][a-zA-Z0-9_]+(.[a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+(.[a-zA-Z0-9_]+)*.[a-zA-Z]{2,4}$"
    );
    if (request.body.login) {
        Bcrypt.hash(request.body.password, SaltRounds, (err, hash) => {
            if (!err) {
                let new_user = new User({
                    ...request.body,
                    password: hash,
                });
                new_user.save((error, user) => {
                    if (error) {
                        response.status(500);
                        console.log(error);
                        response.json({
                            message: `Erreur serveur : User / Create \n ${error} `,
                        });
                    } else {
                        response.status(201);
                        response.json({
                            message: `Utilisateur crée : ${user.login} \n ${error} `,
                        });
                    }
                });
            } else {
                response.status(500);
                console.log(err);
                response.json({
                    message: `Erreur serveur : User / Create \n ${error} `,
                });
            }
        });
    } else {
        response.status(400);
        console.log(request.body.login);
        response.json({
            message: "Invalid Credential given !",
        });
    }
};

/**
 * 
 * @param {*} request 
 * @param {*} response
 * Se Connecter / Connecter un utilisateur 
 */
exports.login_an_user = (request, response) => {
    let rgx = new RegExp(
        "^[^\\W][a-zA-Z0-9_]+(\\.[a-zA-Z0-9_]+)*\\@[a-zA-Z0-9_]+(.[a-zA-Z0-9_]+)*\\.[a-zA-Z]{2,4}$"
    );
    if (request.body.login) {
        User.findOne(
            {
                login: request.body.login,
            },
            (error_1, user) => {
                if (error_1) {
                    response.status(500);
                    console.log(error_1);
                    response.json({
                        message: `Erreur serveur : User / Login \n ${error} `,
                    });
                } else if (user !== null) {
                    Bcrypt.compare(
                        request.body.password,
                        user.password,
                        (error_2, rslt) => {
                            if (!error_2 && rslt) {
                                if(user.login === "admin"){
                                    jwt.sign(
                                        {
                                            login: user.login,
                                            role: "admin",
                                        },
                                        process.env.JWT_KEY,
                                        {
                                            expiresIn: "30 days",
                                        },
                                        (error_3, token) => {
                                            if (error_3) {
                                                response.status(400);
                                                console.log(error_3);
                                                response.json({
                                                    message:
                                                        "Invalid Credential given !",
                                                });
                                            } else {
                                                response.json({
                                                    userLogin: user.login,
                                                    userToken: token
                                                });
                                            }
                                        }
                                    );
                                } else {
                                    jwt.sign(
                                        {
                                            login: user.login,
                                            role: "user",
                                        },
                                        process.env.JWT_KEY,
                                        {
                                            expiresIn: "30 days",
                                        },
                                        (error_3, token) => {
                                            if (error_3) {
                                                response.status(400);
                                                console.log(error_3);
                                                response.json({
                                                    message:
                                                        "Invalid Credential given !",
                                                });
                                            } else {
                                                response.json({
                                                    userLogin: user.login,
                                                    userToken: token
                                                });
                                            }
                                        }
                                    );
                                }
                            } else {
                                response.status(400);
                                console.log(error_2);
                                response.json({
                                    message: "Invalid Credential given !",
                                });
                            }
                        }
                    );
                } else {
                    response.status(400);
                    console.log(error_1);
                    response.json({
                        message: "User not found !",
                    });
                }
            }
        );
    } else {
        response.status(400);
        console.log(request.body);
        response.json({
            message: "Invalid Credential given !",
        });
    }
};

/**
 * 
 * @param {*} request 
 * @param {*} response 
 * Mettre à jour un utilisateur
 */
exports.update_user = (request, response) => {
    User.findByIdAndUpdate(request.params.user_id, request.body ,(error, users) => {
        if (error) {
            response.status(500);
            console.log(error);
            response.json({
                message: `Erreur serveur : User / Update \n ${error} `,
            });
        } else {
            response.status(200);
            response.json("Modifications effectuées");
        }
    });
};

