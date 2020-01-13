const User = require("../models/user");
const { errorHandler } = require("../helpers/dbErrorHandler");
const jwt = require("jsonwebtoken");
const expressJwt = require("express-jwt");
exports.sayHi = function(req, res) {
  res.json({ message: "Namaste" });
};
exports.signUp = function(req, res) {
  const user = new User(req.body);
  user.save((err, user) => {
    if (err) {
      return res.status(400).json({ err: errorHandler(err) });
    }
    user.salt = undefined;
    user.hashed_password = undefined;
    res.json({ user });
  });
};
exports.signIn = function(req, res) {
  const { email, password } = req.body;
  User.findOne({ email }, (err, user) => {
    if (err || !user)
      return res.status(400).json({ err: "No such User exists" });
    //if found authenticate it

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
  });
};
