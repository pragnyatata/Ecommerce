const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const userRoutes = require("./routes/users");
const app = express();

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .then(console.log("DB connected"));

app.use();

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Sever is running on ${port}`);
});
