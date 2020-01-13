const Category = require("../models/category.js");
exports.create = (req, res) => {
  const category = new Category(req.body);
};
