const {
  createBlogService,
  getAllBlogsService,
  getSingleBlogService,
  deleteBlogService,
  updateBlogService,
} = require("../services/blog.service");
const { httpResponse } = require("../utils/httpResponse");

module.exports.createBlog = async (req, res) => {
  try {
    const result = await createBlogService(req.body);
    res
      .status(201)
      .json(httpResponse("success", result, "Blog Created Successfully!"));
  } catch (error) {
    res.status(500).json(httpResponse("fail", {}, "Blog Created failed"));
  }
};

module.exports.getAllBlogs = async (req, res) => {
  try {
    const result = await getAllBlogsService();
    res
      .status(200)
      .json(
        httpResponse("success", result, "Blogs data retrival Successfully!")
      );
  } catch (error) {
    res
      .status(500)
      .json(httpResponse("fail", {}, "Blogs data retrival failed"));
  }
};

module.exports.getSingleBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await getSingleBlogService(id);
    res
      .status(200)
      .json(
        httpResponse("success", result, "Blog data retrival Successfully!")
      );
  } catch (error) {
    res.status(500).json(httpResponse("fail", {}, "Blog data retrival failed"));
  }
};

module.exports.updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await updateBlogService(id, req.body);
    res
      .status(200)
      .json(httpResponse("success", result, "Blog data Update Successfully!"));
  } catch (error) {
    res.status(500).json(httpResponse("fail", {}, "Blog data Update failed"));
  }
};

module.exports.deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await deleteBlogService(id);
    res
      .status(200)
      .json(httpResponse("success", result, "Blog data delete Successfully!"));
  } catch (error) {
    res.status(500).json(httpResponse("fail", {}, "Blog data delete failed"));
  }
};
