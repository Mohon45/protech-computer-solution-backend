const Blog = require("../models/Blog");

exports.createBlogService = async (data) => {
  const result = await Blog.create(data);

  return result;
};

exports.getAllBlogsService = async () => {
  const result = await Blog.find({});

  return result;
};

exports.getSingleBlogService = async (id) => {
  const result = await Blog.findOne({ _id: id });
  if (result) {
    result.views += 1;
    result.save();
  }
  return result;
};

exports.updateBlogService = async (id, data) => {
  const result = await Blog.findOneAndUpdate({ _id: id }, data, { new: true });

  return result;
};

exports.deleteBlogService = async (id) => {
  const result = await Blog.deleteOne({ _id: id });

  return result;
};
