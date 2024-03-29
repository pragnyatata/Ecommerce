const formidable = require("formidable");
const _ = require("lodash");
const fs = require("fs");
const Product = require("../models/product");
const { errorHandler } = require("../helpers/dbErrorHandler");

exports.create = (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, (err, fields, files) => {
    if (err)
      return res.status(400).json({ error: "Image could not be uploaded" });
    const { name, description, price, quantity, shipping, category } = fields;
    if (!name || !description || !price || !quantity || !shipping || !category)
      return res.status(400).json({ error: "All fields are required" });
    let product = new Product(fields);
    if (files.photo) {
      if (files.photo.size > 1000000) {
        return res
          .status(400)
          .json({ error: "Image should be less than 1MB in size" });
      }
      product.photo.data = fs.readFileSync(files.photo.path);
      product.photo.contentType = files.photo.type;
    }
    product.save((err, result) => {
      if (err) return res.status(400).json({ error: errorHandler(err) });
      res.json({ result });
    });
  });
};
exports.productById = (req, res, next, id) => {
  Product.findById(id).exec((err, product) => {
    if (err || !product) res.status(400).json({ error: "product not found" });
    req.product = product;
    next();
  });
};
exports.read = (req, res) => {
  req.product.photo = undefined;
  return res.json(req.product);
};
exports.remove = (req, res) => {
  let product = req.product;
  product.remove((err, deletedProduct) => {
    if (err) return res.status(400).json({ error: errorHandler(err) });
    res.json({ message: "Product deleted succesfully" });
  });
};
exports.update = (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, (err, fields, files) => {
    if (err)
      return res.status(400).json({ error: "Image could not be uploaded" });
    const { name, description, price, quantity, shipping, category } = fields;
    if (!name || !description || !price || !quantity || !shipping || !category)
      return res.status(400).json({ error: "All fields are required" });

    let product = req.product;
    product = _.extend(product, fields);
    if (files.photo) {
      if (files.photo.size > 1000000) {
        return res
          .status(400)
          .json({ error: "Image should be less than 1MB in size" });
      }
      product.photo.data = fs.readFileSync(files.photo.path);
      product.photo.contentType = files.photo.type;
    }
    product.save((err, result) => {
      if (err) return res.status(400).json({ error: errorHandler(err) });
      res.json({ result });
    });
  });
};

exports.list = (req, res) => {
  let order = req.query.order ? req.query.order : "asc";
  let sortBy = req.query.sortBy ? req.query.order : "_id";
  let limit = req.query.limit ? parseInt(req.query.order) : 6;
  Product.find()
    .select("-photo")
    .populate("category")
    .sort({ sortBy: order })
    .limit(limit)
    .sort()
    .exec((err, products) => {
      if (err) return res.status(400).json({ error: "Products not found" });
      res.send(products);
    });
};
