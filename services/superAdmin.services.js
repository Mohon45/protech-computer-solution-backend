const User = require("../models/User");

exports.createAdminService = async (data) => {
  const result = await User.create(data);
  return result;
};
exports.getAllAdminService = async () => {
  const result = await User.find({
    $or: [{ role: "admin" }, { role: "super_admin" }],
  });
  return result;
};

exports.makeAdminService = async (id, data) => {
  const result = await User.findOneAndUpdate({ _id: id }, data);
  return result;
};
exports.deleteAdminService = async (id) => {
  const result = await User.deleteOne({ _id: id });
  return result;
};
