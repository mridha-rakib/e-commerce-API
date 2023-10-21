const { Product, ProductModel } = require("../models/productSchema");

class ProductController {
  // get all products
  static async getAllProducts() {
    try {
      const products = await ProductModel.find();
      return products;
    } catch (error) {
      throw error;
    }
  }

  // crete product
  static async createProduct(name, price, description) {
    const product = new Product(name, price, description);

    try {
      const newProduct = await ProductModel.create(product);
      return newProduct;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ProductController;
