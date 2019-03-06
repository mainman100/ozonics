const express = require("express");
const router = express.Router();
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");

// Load Input Validation.
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

// Load User Model.
const User = require("../../models/User");

// @route   GET api/users/test
// @desc    Tests users route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Users Works" }));

// @route   POST api/users/register
// @desc    Register user
// @access  Public.
router.post("/register", (req, res) => {
  // extract errors and IsValid as first step.
  const { errors, isValid } = validateRegisterInput(req.body);

  // Check if valid.
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email })
    .then(user => {
      if (user) {
        errors.email = "Email already exists!";
        return res.status(400).json(errors);
      } else {
        const avatar = gravatar.url(req.body.email, {
          s: "200", // Size
          r: "pg", // Rating
          d: "mm" // Default
        });

        const newUser = new User({
          name: req.body.name,
          email: req.body.email,
          avatar,
          password: req.body.password
        });

        if (newUser.password) {
          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
              if (err) throw err;
              newUser.password = hash;
              newUser
                .save()
                .then(user => res.json(user))
                .catch(err => console.log(err));
            });
          });
        } else {
          res.json(newUser);
        }
      }
    })
    .catch(err => console.log(err));
});

// @route   POST api/users/login
// @desc    Login user / Return JWT
// @access  Public.

router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  // Check if valid.
  if (!isValid) {
    return res.status(400).json({ errors });
  }

  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email })
    .then(user => {
      // Check If User Exists.
      // Find User By Email.
      if (!user) {
        errors.email = "User not found";
        return res.status(404).json(errors);
      }

      // If User Not Found the above return statement takes us out of this function so we can just continue if User is found...no need for an Else.
      // Check Password.
      bcrypt.compare(password, user.password).then(isMatch => {
        if (isMatch) {
          // User Matched.
          // Create payload to go into jwt. Will be relevant user info.
          const payload = {
            id: user.id,
            name: user.name,
            avatar: user.avatar
          };

          // Sign The Token.
          // expiry is a choice. This is an hour. On expiry user has to log back in. Could leave it blank so that token remains valid as long as the session.
          jwt.sign(
            payload,
            keys.secretOrKey,
            { expiresIn: 3600 },
            (err, token) => {
              res.json({
                success: true,
                token: "Bearer " + token
              });
            }
          );
        } else {
          errors.password = "Password incorrect";
          return res.status(400).json(errors);
        }
      });
    })
    .catch(err => console.log(err));

  
});

// @route   POST api/users/current
// @desc    Return current user
// @access  Private
router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      name: req.user.name,
      email: req.user.email,
      avatar: req.user.avatar
    });
  }
);

module.exports = router;
