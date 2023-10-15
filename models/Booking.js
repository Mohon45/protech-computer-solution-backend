const mongoose = require("mongoose");
const { Schema } = mongoose;
const { ObjectId } = mongoose.Schema.Types;

const bookingSchema = new Schema(
  {
    user: {
      type: ObjectId,
      ref: "user",
    },
    service: {
      type: ObjectId,
      ref: "service",
      required: [true, "booking Date is required"],
    },
    date: {
      type: String,
      required: [true, "booking Date is required"],
    },
    time: {
      type: String,
      required: [true, "booking Time is required"],
    },
    status: {
      type: String,
      enum: ["pending", "complete", "approved", "rejected", "cancled"],
      default: "pending",
    },
    validPhoneNumber: {
      type: String,
      required: [true, "booking Phone Number is required"],
    },
  },
  { timestamps: true }
);

const Booking = mongoose.model("booking", bookingSchema);

module.exports = Booking;
