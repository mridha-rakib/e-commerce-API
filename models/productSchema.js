const mongoose = require("mongoose");

class Product {
  constructor(name, price, description) {
    this._name = name;
    this._price = price;
    this._description = description;
  }
}

const productSchema = new mongoose.Schema({
  _name: { type: String, required: true },
  _price: { type: Number, required: true },
  _description: { type: String, required: true },
});

const ProductModel = mongoose.model("Product", productSchema);

module.exports = { Product, ProductModel };
