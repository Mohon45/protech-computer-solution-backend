const { Router } = require("express");
const auth = require("../../middleware/auth");
const router = Router();

const feedbackController = require("../../controllers/feedback.controller");
const validateRequest = require("../../middleware/validateRequest");

router.post("/create", auth.verifyToken, feedbackController.createFeedBack);
router.get("/", auth.verifyToken, feedbackController.getAllFeedBack);
router.delete(
  "/delete/:id",
  auth.verifyToken,
  feedbackController.deleteFeedback
);

module.exports = router;
