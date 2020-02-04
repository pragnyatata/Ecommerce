const express = require("express");
const router = express.Router();
const {
  requiresSignin,
  isAuth,
  processPayment
} = require("../controllers/auth");
const { userById } = require("../controllers/user");
const { generateToken } = require("../controllers/braintree");
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
