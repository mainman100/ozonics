const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateServicesInput(data) {
  let errors = {};

  data.zone = !isEmpty(data.zone) ? data.zone : "";
  data.heading = !isEmpty(data.heading) ? data.heading : "";
  data.description1 = !isEmpty(data.description1) ? data.description1 : "";
  data.description2 = !isEmpty(data.description2) ? data.description2 : "";
  data.description3 = !isEmpty(data.description3) ? data.description3 : "";
  data.conditionstreated = !isEmpty(data.conditionstreated) ? data.conditionstreated : "";
  
  if (!Validator.isLength(data.zone, { min: 2, max: 20 })) {
    errors.zone = "zone must be between 2 and 20 characters";
  }

  if (Validator.isEmpty(data.zone)) {
    errors.zone = "zone field is required";
  }

  if (!Validator.isLength(data.heading, { min: 5, max: 20 })) {
    errors.heading = "heading must be between 5 and 50 characters";
  }

  if (Validator.isEmpty(data.heading)) {
    errors.heading = "heading field is required";
  }

  if (!Validator.isLength(data.description1, { min: 10, max: 100 })) {
    errors.description1 = "short description must be between 10 and 100 characters";
  }

  if (Validator.isEmpty(data.description1)) {
    errors.description1 = "short description field is required";
  }
  
  if (!Validator.isLength(data.description2, { min: 5, max: 50 })) {
    errors.description2 = "brief description must be between 5 and 50 characters";
  }

  if (Validator.isEmpty(data.description2)) {
    errors.description2 = "brief description field is required";
  }

  if (Validator.isEmpty(data.description3)) {
    errors.description3 = "full description field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
