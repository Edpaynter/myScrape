var express = require("express");
// var logger = require("morgan");
var mongoose = require("mongoose");
const path = require("path")
var exphbs = require("express-handlebars");
var routes = require("./routes/htmlRoutes");


// Require all models

var PORT = process.env.PORT || 3000;

// Initialize Express
var app = express();

// Middleware
app.use("/", routes);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));


// Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(express.static("public"));

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://user1:password1@ds137827.mlab.com:37827/heroku_zjttg08q";
// Connect to the Mongo DB
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

  app.listen(PORT, function() {
    console.log("App running on port " + PORT + "!");
  });