const express = require("express");
const router = express.Router();
const { userById } = require("../controllers/user");
const { requiresSignin, isAuth, isAdmin } = require("../controllers/auth");
const { create, categoryById, read } = require("../controllers/category");
router.post(
  "/category/create/:userId",
  requiresSignin,
  isAuth,
  isAdmin,
  create
);
router.get("/category/:categoryId", read);
router.param("userId", userById);
router.param("categoryId", categoryById);

module.exports = router;
