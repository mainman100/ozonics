const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");
// Load Profile Model.
const Services = require("../../models/AdminServices");

// Load Input Validation.
const validateServicesInput = require("../../validation/services");

// Get Services.
// @route   GET api/services/all
// @desc    Get all services
// @access  Private.

router.get(
  "/all",
  (req, res) => {
    const errors = {};
    Services.find()
      .then(services => {
        if (!services) {
          errors.noservices = "There are no services";
          return res.status(404).json(errors);
        }

        res.json(services);
      })
      .catch(err =>
        res.status(404).json({ services: "There are no services" })
      );
  }
);

// @route   POST api/services
// @desc    Create or Edit/Update Service
// @access  Private

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    // Validate
    const { errors, isValid } = validateServicesInput(req.body);

    // Check if valid.
    if (!isValid) {
      return res.status(400).json(errors);
    }

    const serviceFields = {};
    //serviceFields.service = req.service.id;
    // check to see if fields have been submitted and then put into serviceFields object variable
    if (req.body.zone) serviceFields.zone = req.body.zone;
    if (req.body.heading) serviceFields.heading = req.body.heading;
    if (req.body.description1)
      serviceFields.description1 = req.body.description1;
    if (req.body.description2)
      serviceFields.description2 = req.body.description2;
    if (req.body.description3)
      serviceFields.description3 = req.body.description3;
    if (req.body.conditionstreated)
      serviceFields.conditionstreated = req.body.conditionstreated;

    Services.findById(req.body.id).then(service => {
      if (service) {
        // Update
        Services.findByIdAndUpdate(
          req.body.id,
          { $set: serviceFields },
          { new: true }
        ).then(service => res.json(service));
      } else {
        // Create

        new Services(serviceFields).save().then(service => res.json(service));
      }
    });
  }
);

/* router.get("/test", (req, res) => res.json({ msg: "Services Works" })); */

module.exports = router;
