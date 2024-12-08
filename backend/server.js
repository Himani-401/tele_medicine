const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require('path');

const cartRoutes = require('./routes/cart');
const Product = require('./models/Product');  


dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());


app.use('/api/cart', cartRoutes);
app.use('/images', express.static(path.join(__dirname, 'images')));
mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

app.get("/api/categories", async (req, res) => {
  try {
    const categories = await Product.distinct("category");
    res.json(categories);
  } catch (err) {
    console.error("Error fetching categories:", err);
    res.status(500).json({ message: "Failed to fetch categories" });
  }
});

app.get("/api/products", async (req, res) => {
  const { category } = req.query;
  try {
    const products = await Product.find(category ? { category } : {});
    res.json(products);
  } catch (err) {
    console.error("Error fetching products:", err);
    res.status(500).json({ message: "Failed to fetch products" });
  }
});

app.get("/api/products/:id", async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid product ID" });
  }

  try {
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    console.log(product.imageUrl); 
    res.json(product);
  } catch (error) {
    console.error("Error fetching product details:", error);
    res.status(500).json({ message: 'Error fetching product details' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
