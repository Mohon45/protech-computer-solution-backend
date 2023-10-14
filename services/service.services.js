const Service = require("../models/Service");

exports.createService = async (data) => {
  const result = await Service.create(data);
  return result;
};
exports.getAllServices = async () => {
  const result = await Service.find({});

  return result;
};
exports.getSingleService = async (serviceId) => {
  const result = await Service.findOne({ _id: serviceId });

  return result;
};

exports.updateServie = async (serviceId, data) => {
  const result = await Service.findOneAndUpdate({ _id: serviceId }, data, {
    new: true,
  });
  return result;
};

exports.deleteservice = async (serviceId) => {
  const result = await Service.deleteOne({ _id: serviceId });
  return result;
};

exports.userReviewService = async (serviceId, data) => {
  const result = await Service.findOneAndUpdate(
    { _id: serviceId },
    { $push: { reviews: data } },
    { new: true }
  );
  return result;
};
