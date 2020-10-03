//Dependencies
var compression = require("compression");
var express = require("express");
require("dotenv").config();

var PORT = process.env.PORT || 3001;

var app = express();

app.use(compression());
app.use(express.static("public"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Import routes and give the server access to them.
var routes = require("./controllers/controller.js");

app.use(routes);

app.listen(PORT, function () {
  console.log("App now listening at localhost:" + PORT);
});
