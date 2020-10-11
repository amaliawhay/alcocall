const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  //Convert empty fields to an empty string so validator functions can be used
  data.userName = !isEmpty(data.userName)
    ? data.userName
    : "";
  data.password = !isEmpty(data.password)
    ? data.password
    : "";
  data.password2 = !isEmpty(data.password2)
    ? data.password2
    : "";
  toString(data.age) = !isEmpty(data.age) ? data.age : "";

  //Check for userName
  if (Validator.isEmpty(data.userName)) {
    errors.name = "Username is a required field";
  }
  //Checks for password
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password is a required field";
  }

  if (Validator.isEmpty(data.password2)) {
    errors.password2 +
      "Password confirmation is a required field";
  }

  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Passwords must match";
  }

  if (!Validator.equals(data.age)) {
    errors.age = "Age is a required field.";
  }

  if (!Validator.equals(data.age >= 21)) {
    errors.age =
      "You must be 21 or older to create an account";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
