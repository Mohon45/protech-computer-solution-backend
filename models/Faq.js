const mongoose = require("mongoose");
const { Schema } = mongoose;
const moment = require("moment");
const date = moment(new Date().toISOString()).format("YYYY-MM-DD");

const faqSchema = new Schema(
  {
    question: {
      type: String,
      required: [true, "FAQ question is required"],
    },
    answar: {
      type: String,
      required: [true, "FAQ answar is required"],
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
