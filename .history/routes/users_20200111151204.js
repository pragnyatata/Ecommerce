const express = require("express");
const router = express.Router();
var sayHi = require("../controllers/users");
router.get("/", sayHi);
module.exports = router;
