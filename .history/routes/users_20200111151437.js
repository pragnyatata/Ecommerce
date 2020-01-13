const express = require("express");
const router = express.Router();
var users = require("../controllers/users");
router.get("/", users.sayHi);
module.exports = router;
