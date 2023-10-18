const mongoose = require("mongoose");
const { Schema } = mongoose;
const moment = require("moment");
const date = moment(new Date().toISOString()).format("YYYY-MM-DD");

const blogSchema = new Schema(
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
    views: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const Blog = mongoose.model("blog", blogSchema);

module.exports = Blog;
