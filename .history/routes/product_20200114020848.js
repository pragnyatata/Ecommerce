const express = require("express");
const router = express.Router();
const { userById } = require("../controllers/user");
const { requiresSignin, isAuth, isAdmin } = require("../controllers/auth");
const { create } = require("../controllers/product");
router.post("/product/create/:userId", requiresSignin, isAuth, isAdmin, create);
router.param("userId", userById);

module.exports = router;
