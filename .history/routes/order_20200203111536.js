const express = require("express");
const router = express.Router();
const { requiresSignin, isAuth, isAdmin } = require("../controllers/auth");
const { userById, addOrderToUserHistory } = require("../controllers/user");
const { create, listOrders } = require("../controllers/order");
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
router.get("/order/list/:userId", requiresSignin, isAuth, isAdmin, listOrders);
module.exports = router;
