const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");

// pointers to route folders
const users = require("./routes/api/users.js");
const services = require("./routes/api/adminServices.js");
//const posts = require("./routes/api/posts");

// initialize app
const app = express();

// middleware for body-parser.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB config
const db = require("./config/keys").mongoURI;

// connect to DB
mongoose
  .connect(db)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Passport middleware.
app.use(passport.initialize());

// Passport Config. Passport needs a strategy for the relevant authorisation mode. ie a strategy for jwt or whatever the auth kind is used.
require("./config/passport")(passport);

// establish initial test route - will later put routes into separate files
//app.get("/", (req, res) => res.send("Hello!!!"));

// set routes
// points url to relevant folder ie this is the users end point.
app.use("/api/users", users);
app.use("/api/services", services);
//app.use("/api/posts", posts);

// Server static assets if in production.
/* if (process.env.NODE_ENV === "production") {
  
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
} */
app.get("/", (req, res) => {
  res.send("Hello");
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server running on port ${port}`));
