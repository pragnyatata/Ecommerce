const express = require("express");
const router = express.Router();
import sayHi from "../controllers/users";
router.get("/", sayHi);
module.exports = router;
