const { Router } = require("express");
const auth = require("../../middleware/auth");
const router = Router();

const faqController = require("../../controllers/faq.controller");
const validateRequest = require("../../middleware/validateRequest");

router.post("/create", auth.verifyToken, faqController.createFaq);
router.get("/", auth.verifyToken, faqController.getAllFaqs);
router.get("/details/:id", auth.verifyToken, faqController.getSingleFaq);
router.patch("/update/:id", auth.verifyToken, faqController.updateFaq);
router.delete("/delete/:id", auth.verifyToken, faqController.deleteFaq);

module.exports = router;
