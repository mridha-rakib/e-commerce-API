const express = require("express");
const router = express.Router();

// internal routes
const ProductController = require("../controller/productController");

// app initialize
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// get all products
router.get("/products", async (req, res) => {
  try {
    const products = await ProductController.getAllProducts();
    res.status(200).json({
      data: products,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// crate product
router.post("/add-product", async (req, res) => {
  const { name, price, description } = req.body;
  try {
    const newProduct = await ProductController.createProduct(
      name,
      price,
      description
    );
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
