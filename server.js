//Dependencies
const compression = require("compression");
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const PORT = process.env.PORT || 3001;

const app = express();

require("dotenv").config();

app.use(compression());

// Middlewares defined here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve static assets (Heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//Routes
app.use(routes);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/");

//Start server
app.listen(PORT, function () {
  console.log(`App now listening at localhost: ${PORT}`);
});
