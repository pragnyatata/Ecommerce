const express = require("express");
const router = express.Router();
const { userById } = require("../controllers/user");
const { requiresSignin } = require("../controllers/auth");

router.get("/secret/:userId", requiresSignin);
router.param("userId", userById);
module.exports = router;
