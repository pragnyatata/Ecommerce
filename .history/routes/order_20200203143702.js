const express = require("express");
const router = express.Router();
const { requiresSignin, isAuth, isAdmin } = require("../controllers/auth");
const { userById, addOrderToUserHistory } = require("../controllers/user");
const {
  create,
  listOrders,
  getStatusValues,
  updateOrderStatus,
  orderById
} = require("../controllers/order");
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
router.get(
  "/order/status-values/:userId",
  requiresSignin,
  isAuth,
  isAdmin,
  getStatusValues
);
router.put(
  "/order/:orderId/status/:userId",
  requiresSignin,
  isAuth,
  isAdmin,
  updateOrderStatus
);
router.param("orderId", orderById);

module.exports = router;
