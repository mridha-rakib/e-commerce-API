const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const productRoutes = require("./routes/products");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// MongoDB connection
const dbConnection = async () => {
  try {
    mongoose.connect("mongodb://127.0.0.1:27017/e-commerce", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB is connected");
  } catch (error) {
    console.log("DB is not connected");
    console.log(err.message);
    process.exit(1);
  }
};

// Use product routes
app.use("/products", productRoutes);

app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  await dbConnection();
});
