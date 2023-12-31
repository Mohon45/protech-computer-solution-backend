const {
  createFeedBackService,
  getAllFeedBackService,
  deleteFeedbackService,
} = require("../services/feedback.services");
const { httpResponse } = require("../utils/httpResponse");

module.exports.createFeedBack = async (req, res) => {
  try {
    req.body.user = req.user.id;
    const result = await createFeedBackService(req.body);
    res
      .status(201)
      .json(httpResponse("success", result, "Feedback submit success"));
  } catch (error) {
    res.status(500).json(httpResponse("fail", {}, "Feedback submit failed"));
  }
};

module.exports.getAllFeedBack = async (req, res) => {
  try {
    const result = await getAllFeedBackService();
    res
      .status(200)
      .json(httpResponse("success", result, "Feedback retrival success"));
  } catch (error) {
    res.status(500).json(httpResponse("fail", {}, "Feedback retrival failed"));
  }
};

module.exports.deleteFeedback = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await deleteFeedbackService(id);
    res
      .status(200)
      .json(httpResponse("success", result, "Feedback deleted success"));
  } catch (error) {
    res.status(500).json(httpResponse("fail", {}, "Feedback deleted failed"));
  }
};
