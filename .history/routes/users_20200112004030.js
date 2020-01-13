const express = require("express");
const router = express.Router();
const users = require("../controllers/users");
const { userSignupValidator } = require("../validator/index");
router.get("/", users.sayHi);
router.post("/signup", userSignupValidator, users.signUp);
module.exports = router;
