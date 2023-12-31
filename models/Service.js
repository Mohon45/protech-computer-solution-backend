const mongoose = require("mongoose");
const { Schema } = mongoose;

const serviceSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      unique: true,
    },
    category: {
      type: String,
      required: [true, "category is required"],
      enum: ["repair", "software", "data_recovary", "automation", "others"],
    },

    image: {
      type: String,
      required: [true, "image is required"],
    },
    location: {
      type: String,
      required: [true, "location is required"],
    },
    description: {
      type: String,
      required: [true, "description is required"],
    },
    minPrice: {
      type: Number,
      required: [true, "minPrice is required"],
    },
    maxPrice: {
      type: Number,
      required: [true, "maxPrice is required"],
    },
    userBooking: [{ type: mongoose.SchemaTypes.ObjectId, ref: "user" }],
    reviews: [
      {
        comments: String,
        rating: {
          type: Number,
          min: 0,
          max: 5,
        },
        userName: String,
      },
    ],
  },
  { timestamps: true }
);

const Service = mongoose.model("service", serviceSchema);

module.exports = Service;
