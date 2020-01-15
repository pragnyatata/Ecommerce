const Category = require("../models/category.js");
const { errorHandler } = require("../helpers/dbErrorHandler");

exports.create = (req, res) => {
  const category = new Category(req.body);
  category.save((err, data) => {
    if (err) return res.status(400).json({ error: errorHandler(err) });
    res.json({ data });
  });
};
exports.categoryById = (req, res, next, id) => {
  Category.findById(id).exec((err, category) => {
    if (err) return res.status(400).json({ error: errorHandler(err) });
    req.category = category;
    res.json({ category });
  });
};
