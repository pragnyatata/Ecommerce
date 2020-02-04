const express = require("express");
const router = express.Router();
const { requiresSignin, isAuth } = require("../controllers/auth");
const { userById } = require("../controllers/user");
const { generateToken, processPayment } = require("../controllers/braintree");
router.param("userId", userById);
router.get(
  "/braintree/getToken/:userId",
  requiresSignin,
  isAuth,
  generateToken
);
router.post(
  "/braintree/payment/:userId",
  requiresSignin,
  isAuth,
  processPayment
);

module.exports = router;
