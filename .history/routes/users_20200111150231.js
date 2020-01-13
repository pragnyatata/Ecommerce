const express = require("express");
const router = express.Router();

const { sayHi } = "../controllers/users";
router.get("/", (req, res) => {
  res.send("hello from router");
});
module.exports = router;
