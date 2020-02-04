const { Order, CartItem } = require("../models/order");
exports.create = (req, res) => {
  console.log("Create order", req.body);
};
