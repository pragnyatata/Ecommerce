const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
app.get("/", (req, res) => {
  res.send("hello from node");
});
const app = express();

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Sever is running on ${port}`);
});
