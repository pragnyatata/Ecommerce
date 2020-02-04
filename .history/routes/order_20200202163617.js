const express = require("express");
const router = express.Router();
const { requiresSignin, isAuth } = require("../controllers/auth");
const { userById } = require("../controllers/user");
const { create } = require("../controllers/order");
router.param("userId", userById);

module.exports = router;
