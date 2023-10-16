const {
  createFaqService,
  getAllFaqsService,
  getSingleFaqService,
  updateFaqService,
  deleteFaqService,
} = require("../services/faq.services");
const { httpResponse } = require("../utils/httpResponse");

module.exports.createFaq = async (req, res) => {
  try {
    const result = await createFaqService(req.body);
    res
      .status(201)
      .json(httpResponse("success", result, "Faq Created Successfully!"));
  } catch (error) {
    res.status(500).json(httpResponse("fail", {}, "Faq Created failed"));
  }
};

module.exports.getAllFaqs = async (req, res) => {
  try {
    const result = await getAllFaqsService();
    res
      .status(200)
      .json(
        httpResponse("success", result, "Faqs data retrival Successfully!")
      );
  } catch (error) {
    res.status(500).json(httpResponse("fail", {}, "Faqs data retrival failed"));
  }
};

module.exports.getSingleFaq = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await getSingleFaqService(id);
    res
      .status(200)
      .json(httpResponse("success", result, "Faq data retrival Successfully!"));
  } catch (error) {
    res.status(500).json(httpResponse("fail", {}, "Faq data retrival failed"));
  }
};

module.exports.updateFaq = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await updateFaqService(id, req.body);
    res
      .status(200)
      .json(httpResponse("success", result, "Faq data Update Successfully!"));
  } catch (error) {
    res.status(500).json(httpResponse("fail", {}, "Faq data Update failed"));
  }
};

module.exports.deleteFaq = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await deleteFaqService(id);
    res
      .status(200)
      .json(httpResponse("success", result, "Faq data delete Successfully!"));
  } catch (error) {
    res.status(500).json(httpResponse("fail", {}, "Faq data delete failed"));
  }
};
