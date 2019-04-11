const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ServicesSchema = new Schema({
  zone: {
    type: String,
    required: true,
    max: 20
  },
  heading: {
    type: String,
    required: true,
    max: 50
  },
  description1: {
    type: String,
    required: true,
    max: 100
  },
  description2: {
    type: String,
    required: true,
    max: 50
  },
  description3: {
    type: String,
    required: true
  },
  conditionstreated: {
    type: String,
    default: "no specific conditions"
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Services = mongoose.model("services", ServicesSchema);
