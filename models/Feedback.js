const mongoose = require("mongoose");
const { Schema } = mongoose;
const { ObjectId } = mongoose.Schema.Types;

const feedBackSchema = new Schema(
  {
    user: {
      type: ObjectId,
      ref: "user",
    },
    description: {
      type: String,
      required: [true, "description is required"],
    },
  },
  { timestamps: true }
);

const FeedBack = mongoose.model("feedback", feedBackSchema);

module.exports = FeedBack;
