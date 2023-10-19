const { Router } = require("express");
const auth = require("../../middleware/auth");
const router = Router();

const blogController = require("../../controllers/blog.controller");
const validateRequest = require("../../middleware/validateRequest");

router.post("/create", auth.verifyToken, blogController.createBlog);
router.get("/", blogController.getAllBlogs);
router.get("/details/:id", blogController.getSingleBlog);
router.patch("/update/:id", auth.verifyToken, blogController.updateBlog);
router.delete("/delete/:id", auth.verifyToken, blogController.deleteBlog);

module.exports = router;
