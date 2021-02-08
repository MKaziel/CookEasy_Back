const express = require("express");
const server = express();
const cors = require("cors");

const hostname = "0.0.0.0";
const port = 3000;

//cors configuration
var whitelist = ["http://localhost"];
var corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            console.log(origin);
            callback(new Error("Not allowed by CORS"));
        }
    },
};

const mongoose = require("mongoose");
mongoose.connect("mongodb://mongo/apinodejs");

const bodyParser = require("body-parser");
server.use(bodyParser.urlencoded());
server.use(bodyParser.json());
// server.use(cors(corsOptions)); /** Ligne à commenter pour utiliser Postman */
server.use(cors()); /** Ligne à décommenter pour utiliser Postman */

//Configuration par défaut de l'écoute du serveur
server.listen(port, hostname);
//Configuration du port d'écoute du serveur
server.listen(process.env.FRONT_PORT, function () {
    console.log(`CORS-enabled web server listening on port ${process.env.FRONT_PORT}`);
})
