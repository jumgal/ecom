const express = require("express");
const dotenv = require("dotenv");

const { json } = require("body-parser");
var cors = require("cors");

const products = require("./data/products");

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json("hello");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);

  res.json(product);
});

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`);
});
