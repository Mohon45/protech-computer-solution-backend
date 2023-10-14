const FeedBack = require("../models/Feedback");

exports.createFeedBackService = async (data) => {
  const result = await FeedBack.create(data);
  return result;
};

exports.getAllFeedBackService = async () => {
  const result = await FeedBack.find({}).populate({
    path: "user",
    select: "-password",
  });
  return result;
};
