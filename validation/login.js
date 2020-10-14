const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateLoginInput(data) {
  let errors = {};

  //Convert empty fields to empty strings to use validator functions
  data.userName = !isEmpty(data.userName)
    ? data.userName
    : "";
  data.password = !isEmpty(data.password)
    ? data.password
    : "";

  //Checks username
  if (Validator.isEmpty(data.userName)) {
    errors.userName = "User name is a required field.";
  }

  //Checks Password
  if (Validator.isEmpty(data.password)) {
    errors.password + "Password is a required field";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
