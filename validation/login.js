const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  // Validator's isEmpty requires a string. The functions below pass the data through the internal isEmpty which checks for empty objects, nulls etc, and if its empty, then an empty string is returned ie even an empty object gets turned into an empty string which can then be passed into a Validator isEmpty function.


  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";


  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  }


  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
