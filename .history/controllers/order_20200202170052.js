const { Order, CartItem } = require("../models/order");
const { errorHandler } = require("../helpers/dbErrorHandler");
exports.create = (req, res) => {
  req.body.order.user = req.profile;
};
