const { Order, CartItem } = require("../models/order");
const { errorHandler } = require("../helpers/dbErrorHandler");
exports.create = (req, res) => {
  req.body.order.user = req.profile;
  const order = new Order(req.body.order);
  order.save((error, data) => {
    if (error) {
      return res.status(400).json({
        error: errorHandler(error)
      });
    }
    res.json(data);
  });
};
exports.addOrderToUserHistory=(req,res)=>{
  let history=[];
  req.body.order.products.forEach((item)=>{h})
}