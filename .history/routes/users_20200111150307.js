const express = require("express");
const router = express.Router();

const { sayHi } = "../controllers/users";
router.get("/", sayHi);
module.exports = router;
