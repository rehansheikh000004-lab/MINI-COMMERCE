import express from "express";
import Cart from "../models/Cart.js";
import auth from "../middleware/authMiddleware.js";

const router = express.Router();

// Get cart
router.get("/", auth, async (req, res) => {
  let cart = await Cart.findOne({ userId: req.userId });
  if (!cart) cart = await Cart.create({ userId: req.userId, products: [] });
  res.json(cart);
});

// Add to cart
router.post("/", auth, async (req, res) => {
  const { productId } = req.body;

  let cart = await Cart.findOne({ userId: req.userId });
  if (!cart) cart = await Cart.create({ userId: req.userId, products: [] });

  cart.products.push({ productId, quantity: 1 });
  await cart.save();

  res.json(cart);
});

export default router;
