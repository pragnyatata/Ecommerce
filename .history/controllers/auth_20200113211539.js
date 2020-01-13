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
      return res.status(400).json({ error: "No such User exists" });
    //if found authenticate it
    if (!user.authenticate(password)) {
      return res.status(401).json({ error: "Wrong password" });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.cookie("t", token, { expire: new Date() + 9999 });
    const { _id, name, email, role } = user;
    return res.status(200).json({ token, user: { _id, email, name, role } });
  });
};
exports.signOut = function(req, res) {
  res.clearCookie("t");
  res.json({ message: "Succesfully Signed out" });
};

exports.requiresSignin = expressJwt({
  secret: process.env.JWT_SECRET,
  userProperty: "auth"
});

exports.isAuth = (req, res, next) => {
  let user = req.profile && req.auth && req.profile._id == req.auth.id;
  console.log(user);
  if (!user) return res.status(403).json({ error: "Access Denied" });
  next();
};
exports.isAdmin = (req, res, next) => {
  if (req.profile.role === 0)
    return res.status(403).json({ error: "Sorry u r not an Admin" });
  next();
};
