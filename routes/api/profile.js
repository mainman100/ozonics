const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");
// Load Profile Model.
const Profile = require("../../models/Profile");
// Load User Model.
const User = require("../../models/User");

// Load Input Validation.
const validateProfileInput = require("../../validation/profile");
const validateExperienceInput = require("../../validation/experience");
const validateEducationInput = require("../../validation/education");

// @route   GET api/profile
// @desc    User profile
// @access  Private

// Can get User ID from the JWT token using passport's authenticate method.
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    let errors = {};
    Profile.findOne({ user: req.user.id })
      .populate("user", ["name", "avatar"])
      .then(profile => {
        if (!profile) {
          errors.noprofile = "There is no profile for this user";
          return res.status(404).json(errors);
        }
        res.json(profile);
      })
      .catch(err => res.status(404).json(err));
  }
);

// @route   GET api/profile/handle/all
// @desc    Get profile for all users
// @access  Public.

router.get("/all", (req, res) => {
  const errors = {};
  Profile.find()
    .populate("user", ["name", "avatar"])
    .then(profiles => {
      if (!profiles) {
        errors.noprofiles = "There are no profiles for any users";
        return res.status(404).json(errors);
      }

      res.json(profiles);
    })
    .catch(err => res.status(404).json({ profiles: "There are no profiles" }));
});

// @route   GET api/profile/handle/:handle
// @desc    Get profile by handle
// @access  Public.

router.get("/handle/:handle", (req, res) => {
  const errors = {};
  Profile.findOne({ handle: req.params.handle })
    .populate("user", ["name", "avatar"])
    .then(profile => {
      if (!profile) {
        errors.noprofile = "There is no profile for this user";
        res.status(404).json(errors);
      }

      res.json(profile);
    })
    .catch(err => res.status(404).json(err));
});

// @route   GET api/profile/user/:user_id
// @desc    Get profile by user id
// @access  Public.

router.get("/user/:user_id", (req, res) => {
  const errors = {};
  Profile.findOne({ user: req.params.user_id })
    .populate("user", ["name", "avatar"])
    .then(profile => {
      if (!profile) {
        errors.noprofile = "There is no profile for this user";
        res.status(404).json(errors);
      }

      res.json(profile);
    })
    .catch(err =>
      res.status(404).json({ profile: "There is no profile for this user" })
    );
});

// @route   POST api/profile
// @desc    Create or Edit/Update User profile
// @access  Private

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    // Validate
    const { errors, isValid } = validateProfileInput(req.body);

    // Check if valid.
    if (!isValid) {
      return res.status(400).json(errors);
    }
    // req will return the user info incl id, name, avatar

    // Get profile form fields.

    const profileFields = {};
    profileFields.user = req.user.id;
    // check to see if fields have been submitted and then put into profileFields object variable
    if (req.body.handle) profileFields.handle = req.body.handle;
    if (req.body.company) profileFields.company = req.body.company;
    if (req.body.website) profileFields.website = req.body.website;
    if (req.body.location) profileFields.location = req.body.location;
    if (req.body.status) profileFields.status = req.body.status;
    if (req.body.githubusername)
      profileFields.githubusername = req.body.githubusername;
    if (req.body.bio) profileFields.bio = req.body.bio;
    // Need to split skills into an array..it is being submitted as csv
    if (typeof req.body.skills !== undefined) {
      profileFields.skills = req.body.skills.split(",");
    }
    // Social is an object.
    profileFields.social = {};
    if (req.body.youtube) profileFields.social.youtube = req.body.youtube;
    if (req.body.twitter) profileFields.social.twitter = req.body.twitter;
    if (req.body.facebook) profileFields.social.facebook = req.body.facebook;
    if (req.body.linkedin) profileFields.social.linkedin = req.body.linkedin;
    if (req.body.instagram) profileFields.social.instagram = req.body.instagram;

    Profile.findOne({ user: req.user.id }).then(profile => {
      if (profile) {
        // Update
        Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true }
        ).then(profile => res.json(profile));
      } else {
        // Create
        // Check if the handle exists... we dont want multiple handles.
        Profile.findOne({ handle: profileFields.handle }).then(profile => {
          if (profile) {
            errors.handle = "That handle already exists";
            res.status(400).json(errors);
          }

          // Create.
          new Profile(profileFields).save().then(profile => res.json(profile));
        });
      }
    });

    // Experience and Education will be entered from different pages/routes so not handled in this route
  }
);

// @route   POST api/profile/experience
// @desc    Create or Edit/Update user experience object within his profile
// @access  Private.

router.post(
  "/experience",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    // Validation.
    const { errors, isValid } = validateExperienceInput(req.body);

    // Check if valid.
    if (!isValid) {
      return res.status(400).json(errors);
    }
    // Find user by id (found via the authenticate function)
    Profile.findOne({ user: req.user.id }).then(profile => {
      const newExp = {
        title: req.body.title,
        company: req.body.company,
        location: req.body.location,
        from: req.body.from,
        to: req.body.to,
        current: req.body.current,
        description: req.body.description
      };

      // Add to experience array within Profile.
      profile.experience.unshift(newExp); // unshift inserts new value at the beginning of the array.

      profile.save().then(profile => res.json(profile));
    });
  }
);

// @route   POST api/profile/education
// @desc    Create or Edit/Update user education object within his profile
// @access  Private.

router.post(
  "/education",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    // Validation.
    const { errors, isValid } = validateEducationInput(req.body);

    // Check if valid.
    if (!isValid) {
      return res.status(400).json(errors);
    }
    // Find user by id (found via the authenticate function)
    Profile.findOne({ user: req.user.id }).then(profile => {
      const newEdu = {
        school: req.body.school,
        degree: req.body.degree,
        fieldofstudy: req.body.fieldofstudy,
        from: req.body.from,
        to: req.body.to,
        current: req.body.current,
        description: req.body.description
      };

      // Add to education array within Profile.
      profile.education.unshift(newEdu); // unshift inserts new value at the beginning of the array.

      profile.save().then(profile => res.json(profile));
    });
  }
);

// @route   DELETE api/profile/experience/:exp_id
// @desc    Delete a specific experience
// @access  Private.

router.delete(
  "/experience/:exp_id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    // Find user by id (found via the authenticate function)
    Profile.findOne({ user: req.user.id })
      .then(profile => {
        // Get remove index.
        const removeIndex = profile.experience
          .map(item => item.id)
          .indexOf(req.params.exp_id);
        // Splice relevant experience out of its array.
        profile.experience.splice(removeIndex, 1);
        // save.
        profile.save().then(profile => res.json(profile));
      })
      .catch(err => res.json(err));
  }
);

// @route   DELETE api/profile/education/:edu_id
// @desc    Delete a specific education
// @access  Private.

router.delete(
  "/education/:edu_id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    // Find user by id (found via the authenticate function)
    Profile.findOne({ user: req.user.id })
      .then(profile => {
        // Get remove index.
        const removeIndex = profile.education
          .map(item => item.id)
          .indexOf(req.params.edu_id);
        // Splice relevant experience out of its array.
        profile.education.splice(removeIndex, 1);
        // save.
        profile.save().then(profile => res.json(profile));
      })
      .catch(err => res.json(err));
  }
);

// @route   DELETE api/profile
// @desc    Delete user and profile
// @access  Private.

router.delete(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOneAndRemove({ user: req.user.id }).then(() => {
      User.findOneAndRemove({ _id: req.user.id }).then(() =>
        res.json({ success: true })
      );
    });
  }
);

module.exports = router;
