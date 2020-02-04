const express = require("express");
const router = express.Router();
const { requiresSignin, isAuth } = require("../controllers/auth");
const { userById, addOrderToUserHistory } = require("../controllers/user");
const { create } = require("../controllers/order");
const { decreaseQuantity } = require("../controllers/product");

router.param("userId", userById);
router.post(
  "/order/create/:userId",
  requiresSignin,
  isAuth,
  addOrderToUserHistory,
  decreaseQuantity,
  create
);
module.exports = router;
