var express = require("express");
var path = require("path");

var router = express.Router();

var userInfo = require("../models/userInfo.js");
const bcrypt = require("bcryptjs");

router.get("/api", function (req, res) {
  req.params.userName;
  userName = req.query.userName;
  password = req.query.password;
  console.log(userName, password);

  userInfo.all(function (result) {
    let loggedIn = false;
    for (i = 0; i < result.length; i++) {
      if (
        result[i].userName === userName &&
        bcrypt.compareSync(password, result[i].password)
      ) {
        loggedIn = true;
      }
    }
    res.json(loggedIn);
  });
});

router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/../views/layout/", "signIn.html"));
  // res.render("index", object);
});

router.get("/liquor_search", function (req, res) {
  res.sendFile(
    path.join(__dirname + "/../views/layout/", "liquor_search.html")
  );
  // res.render("index", object);
});

router.get("/bars", function (req, res) {
  res.sendFile(path.join(__dirname + "/../views/layout/", "bars.html"));
  // res.render("index", object);
});

router.get("/beerSearch", function (req, res) {
  res.sendFile(path.join(__dirname + "/../views/layout/", "beerSearch.html"));
});

router.get("/random", function (req, res) {
  res.sendFile(path.join(__dirname + "/../views/layout/", "random.html"));
});

router.get("/AlcoholReferences", function (req, res) {
  res.sendFile(
    path.join(__dirname + "/../views/layout/", "AlcoholReferences.html")
  );
});

router.get("/index", function (req, res) {
  res.sendFile(path.join(__dirname + "/../views/layout/", "index.html"));
});
router.get("/signIn", function (req, res) {
  res.sendFile(path.join(__dirname + "/../views/layout/", "signIn.html"));
});

router.post("/api/userInfo", function (req, res) {
  // console.log(req.body);
  bcrypt.hash(req.body.password, 10).then((hash) => {
    userInfo.create(
      ["userName", "DOB", "password"],
      [req.body.userName, req.body.DOB, hash],
      function (result) {
        res.json(result);
      }
    );
  });
});

module.exports = router;
