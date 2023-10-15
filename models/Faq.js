const mongoose = require("mongoose");
const { Schema } = mongoose;
const moment = require("moment");
const date = moment(new Date().toISOString()).format("YYYY-MM-DD");

const faqSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Blog Title is required"],
    },
    image: {
      type: String,
      required: [true, "Image Title is required"],
    },
    description: {
      type: String,
      required: [true, "Blog Description is required"],
    },
    publishedDate: {
      type: String,
      default: date,
    },
  },
  { timestamps: true }
);

const Faq = mongoose.model("faq", faqSchema);

module.exports = Faq;
