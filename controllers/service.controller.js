const {
  createService,
  getAllServices,
  getSingleService,
  updateServie,
  deleteservice,
  userReviewService,
} = require("../services/service.services");
const { httpResponse } = require("../utils/httpResponse");

module.exports.createService = async (req, res) => {
  try {
    const result = await createService(req.body);
    res
      .status(201)
      .json(httpResponse("success", result, "Service created successfully"));
  } catch (error) {
    res.status(500).json(httpResponse("fail", {}, "failed to create service"));
  }
};

module.exports.getAllServices = async (req, res) => {
  try {
    const result = await getAllServices();
    res
      .status(200)
      .json(httpResponse("success", result, "Services data retrival success"));
  } catch (error) {
    res
      .status(500)
      .json(httpResponse("fail", {}, "Services data retrival failed"));
  }
};

module.exports.getSingleService = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await getSingleService(id);
    res
      .status(200)
      .json(httpResponse("success", result, "Service data retrival success"));
  } catch (error) {
    res
      .status(500)
      .json(httpResponse("fail", {}, "Service data retrival failed"));
  }
};

module.exports.updateService = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await updateServie(id, req.body);
    res
      .status(200)
      .json(httpResponse("success", result, "Service updated success"));
  } catch (error) {
    res.status(500).json(httpResponse("fail", {}, "Service update failed"));
  }
};

module.exports.deleteService = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await deleteservice(id);
    res
      .status(200)
      .json(httpResponse("success", result, "Service deleted success"));
  } catch (error) {
    res.status(500).json(httpResponse("fail", {}, "Service deleted failed"));
  }
};

module.exports.userReview = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await userReviewService(id, req.body);
    res
      .status(200)
      .json(httpResponse("success", result, "Review Submit success"));
  } catch (error) {
    res.status(500).json(httpResponse("fail", {}, "Review Submit failed"));
  }
};
