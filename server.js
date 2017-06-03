var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");
var app = express();
var exphbs = require("express-handlebars");
var connection = require("./config/connection.js");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var port = 3000;

app.get("/", function(req, res){
	res.render("index", {});
});



app.listen(port, function(){
	console.log("hello from" + port);
});