import express from "express";
import Product from "../models/Product.js";

const router = express.Router();

// Get products
router.get("/", async (_, res) => {
  const products = await Product.find();
  res.json(products);
});

// Add product (admin later)
router.post("/", async (req, res) => {
  const product = await Product.create(req.body);
  res.json(product);
});

export default router;
