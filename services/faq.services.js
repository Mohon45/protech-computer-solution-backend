const Faq = require("../models/Faq");

exports.createFaqService = async (data) => {
  const result = await Faq.create(data);

  return result;
};

exports.getAllFaqsService = async () => {
  const result = await Faq.find({});

  return result;
};

exports.getSingleFaqService = async (id) => {
  const result = await Faq.findOne({ _id: id });

  return result;
};

exports.updateFaqService = async (id, data) => {
  const result = await Faq.findOneAndUpdate({ _id: id }, data, { new: true });

  return result;
};

exports.deleteFaqService = async (id) => {
  const result = await Faq.deleteOne({ _id: id });

  return result;
};
