const express = require("express");
const router = express.Router();
import { sayHi } from "../controllers/users.js";
router.get("/", sayHi);
module.exports = router;
