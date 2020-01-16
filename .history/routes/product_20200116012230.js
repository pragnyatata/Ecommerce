const express = require("express");
const router = express.Router();
const { userById } = require("../controllers/user");
const { productById } = require("../controllers/product");
const { requiresSignin, isAuth, isAdmin } = require("../controllers/auth");
const {
  create,
  read,
  remove,
  update,
  list
} = require("../controllers/product");
router.get("/product/:productId", read);
router.delete(
  "/product/:productId/:userId",
  requiresSignin,
  isAuth,
  isAdmin,
  remove
);
router.put(
  "/product/:productId/:userId",
  requiresSignin,
  isAuth,
  isAdmin,
  update
);

router.post("/product/create/:userId", requiresSignin, isAuth, isAdmin, create);
router.param("userId", userById);
router.param("productId", productById);

router.get("/products", list);
module.exports = router;
