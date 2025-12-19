import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  userId: String,
  products: [
    {
      productId: String,
      quantity: Number
    }
  ]
});

export default mongoose.models.Cart || mongoose.model("Cart", cartSchema);
