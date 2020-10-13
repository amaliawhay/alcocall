var mongoose = require("mongoose");
var db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb://localhost/alcocalldb",
  {
    useNewUrlParser: true,
  }
);

var userSeed = [
  {
    userName: "amaliawhay",
    password: "booze123",
    age: 92,
    userFavorites: [],
  },
];

db.Post.remove({})
  .then(() => db.Post.collection.insertMany(userSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
