const express = require("express");
const router = express.Router();
const { userById, read, update } = require("../controllers/user");
const { requiresSignin, isAuth, isAdmin } = require("../controllers/auth");

router.get("/secret/:userId", requiresSignin, isAuth, isAdmin, (req, res) => {
  res.json({
    user: req.profile
  });
});
router.param("userId", userById);
router.get("/user/:userId", requiresSignin, isAuth, read);
router.put("/user/:userId", requiresSignin, isAuth, update);
module.exports = router;
