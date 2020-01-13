const express = require("express");
const router = express.Router();
const { userById } = require("../controllers/user");
const {
  signIn,
  signOut,
  requiresSignin,
  signUp
} = require("../controllers/auth");

router.get("/secret/:userId");
router.param("userId", userById);
module.exports = router;
