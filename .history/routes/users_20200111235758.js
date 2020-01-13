const express = require("express");
const router = express.Router();
const users = require("../controllers/users");
router.get("/", users.sayHi);
router.post("/signup", users.signUp);
module.exports = router;
