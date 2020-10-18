//Dependencies
const compression = require("compression");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const users = require("./routes/api/users");

//const routes = require("./routes");

const PORT = process.env.PORT || 3001;

const app = express();

require("dotenv").config();

app.use(compression());

// Middlewares defined here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Passport middleware
app.use(passport.initialize());

//Passport config
require("./config/passport")(passport);

// Serve static assets (Heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//Routes
//app.use("/", routes);
app.use("/api/users", users);

// Connect to MongoDB
mongoose
  .connect(
    process.env.MONGODB_URI ||
      "mongodb://localhost/alcocalldb",
    {
      useNewUrlParser: true,
    }
  )
  .then(() =>
    console.log("MongoDB successfully connected!")
  )
  .catch((err) => console.log(err));

//Start server
app.listen(PORT, function () {
  console.log(`App now listening at localhost: ${PORT}`);
});
