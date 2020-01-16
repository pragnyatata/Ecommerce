const express = require("express");
const router = express.Router();
const { userById } = require("../controllers/user");
const { requiresSignin, isAuth, isAdmin } = require("../controllers/auth");
const {
  create,
  categoryById,
  read,
  update,
  remove
} = require("../controllers/category");
router.post(
  "/category/create/:userId",
  requiresSignin,
  isAuth,
  isAdmin,
  create
);
router.get("/category/:categoryId", read);
router.put(
  "/category/:categoryId/:userId",
  requiresSignin,
  isAuth,
  isAdmin,
  update
);
router.delete(
  "/category/:categoryId/:userId",
  requiresSignin,
  isAuth,
  isAdmin,
  remove
);

router.param("userId", userById);
router.param("categoryId", categoryById);

module.exports = router;
