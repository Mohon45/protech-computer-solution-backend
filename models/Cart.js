const mongoose = require("mongoose");
const { Schema } = mongoose;
const { ObjectId } = mongoose.Schema.Types;

const cartSchema = new Schema(
  {
    userId: {
      type: ObjectId,
      ref: "user",
    },
    cartItem: [
      {
        title: String,
        image: String,
        location: String,
        category: String,
        date: String,
      },
    ],
  },
  { timestamps: true }
);

const Cart = mongoose.model("cart", cartSchema);

module.exports = Cart;
