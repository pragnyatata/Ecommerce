const User = require("../models/user");
exports.sayHi = function(req, res) {
  res.json({ message: "Namaste" });
};
exports.signUp = function(req, res) {
  const user = new User(req.body);
  user.save((err, user) => {
    if (err) {
      return res.status(400).json({ err });
    }
    res.json({ user });
  });
};
("use strict");

/**
 * Get unique error field name
 */
const uniqueMessage = error => {
  let output;
  try {
    let fieldName = error.message.substring(
      error.message.lastIndexOf(".$") + 2,
      error.message.lastIndexOf("_1")
    );
    output =
      fieldName.charAt(0).toUpperCase() +
      fieldName.slice(1) +
      " already exists";
  } catch (ex) {
    output = "Unique field already exists";
  }

  return output;
};
