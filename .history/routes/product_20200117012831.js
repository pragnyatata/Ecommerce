const express = require("express");
const router = express.Router();
const { userById } = require("../controllers/user");
const { requiresSignin, isAuth, isAdmin } = require("../controllers/auth");
const {
  create,
  read,
  remove,
  update,
  list,
  productById,
  listRelated,
  listCategories
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
router.get("/products/related/:productId", listRelated);
router.get("/products/categories", listCategories);

router.post("/products/by/search", listBySearch);
module.exports = router;
