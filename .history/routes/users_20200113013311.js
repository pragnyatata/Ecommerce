const express = require("express");
const router = express.Router();
const users = require("../controllers/users");
const { userSignupValidator } = require("../validator/index");
router.get("/", users.sayHi);
router.post("/signup", userSignupValidator, users.signUp);
router.post("/signin", users.signIn);
router.get("/signout", users.signOut);
module.exports = router;
