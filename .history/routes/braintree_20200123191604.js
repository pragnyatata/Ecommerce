const express = require("express");
const router = express.Router();
const { requiresSignin, isAuth, isAdmin } = require("../controllers/auth");
const { userById, read, update } = require("../controllers/user");
router.param("userId", userById);

router.get(
  "/braintree/getToken/:userId",
  requiresSignin,
  isAuth,
  generateToken
);

module.exports = router;
