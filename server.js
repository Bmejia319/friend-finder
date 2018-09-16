//Required dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//Congifuration for express app
var app = express();
var PORT = process.env.PORT || 3000;

//Public directory for css files
app.use(express.static(path.join(__dirname, "./app/public/")));

//Middleware for parsing incoming request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

//Add application routes
require(path.join(__dirname, "./app/routing/apiRoutes.js"))(app);
require(path.join(__dirname, "./app/routing/htmlRoutes.js"))(app);

//Start listening on pPORT
app.listen(PORT, function() {
	console.log("Friend finder is listening on PORT: " + PORT);
})
