const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = "../../validation/login";

//load user model
const User = require("../../models/User");

//@route POST api/users/register
//@desc Register user
//@access Public
router.post("/register", (req, res) => {
  //form validation
  const { errors, isValid } = validateRegisterInput(
    req.body
  );

  //check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ userName: req.body.userName }).then(
    (user) => {
      if (user) {
        return res
          .status(400)
          .json({ userName: "User name already exists" });
      } else {
        const newUser = new User({
          userName: req.body.userName,
          password: req.body.password,
          age: req.body.age,
        });

        //Hash password before saving in db
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(
            newUser.password,
            salt,
            (err, hash) => {
              if (err) throw err;
              newUser.password = hash;
              newUser
                .save()
                .then((user) => res.jason(user))
                .catch((err) => console.log(err));
            }
          );
        });
      }
    }
  );
});
