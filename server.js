//Dependencies
const compression = require("compression");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
var cors = require("cors")

const users = require("./routes/api/users");

//const routes = require("./routes");

const PORT = process.env.PORT || 3001;

const app = express();

require("dotenv").config();
//======================================================
// app.use(cors())

// app.get('/products/:id', function (req, res, next) {
//   res.json({msg: 'This is CORS-enabled for all origins!'})
// })


//===========================================================

app.use(compression());
app.use(cors())

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
//enable cors configuration
// var whitelist = ['https://www.thecocktaildb.com', 'https://limitless-fortress-81877.herokuapp.com']
// var corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)

//Routes
//app.use("/", routes);
app.use("/api/users", users);
app.get("*", (req, res) => {
  res.sendFile(
    path.join(__dirname + "/client/build/index.html")
  );
});

// Connect to MongoDB
mongoose
  .connect(
    process.env.MONGODB_URI ||
      "mongodb://localhost/alcocalldb",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() =>
    console.log("MongoDB successfully connected!")
  )
  .catch((err) => console.log(err));

//Start server
app.listen( PORT, function () {
  console.log(`App now listening at localhost: ${PORT}`);
});
