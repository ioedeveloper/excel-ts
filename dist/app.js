"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// importing libraries and dependencies
var express = require("express");
var bodyParser = require("body-parser");
var typeorm_1 = require("typeorm");
// create app db connection.
typeorm_1.createConnection().then(function () {
    console.log("Database Connection Established...");
}).catch(function () {
    console.log("Oops! An error occured when connecting to the database.");
});
// create a new express application instance
var app = express();
// the port the express app will listen on
var port = process.env.PORT || 8001;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.get("/", function (req, res) {
    res.status(200).send("Welcome to Excel-TS");
});
// serve the application at the given port
app.listen(port, function () {
    // success callback
    console.log("Listening at http://localhost:" + port + "/");
});
