const { Router } = require("express");
const auth = require("../../middleware/auth");
const router = Router();

const serviceController = require("../../controllers/service.controller");
const validateRequest = require("../../middleware/validateRequest");
const ServiceValidation = require("./service.validation");

router.post(
  "/create",
  validateRequest(ServiceValidation.createServiceZodSchema),
  serviceController.createService
);
router.get("/", serviceController.getAllServices);
router.get("/reviews", serviceController.getAllReviews);
router.get("/details/:id", serviceController.getSingleService);
router.patch("/update/:id", auth.verifyToken, serviceController.updateService);
router.patch("/review/:id", auth.verifyToken, serviceController.userReview);
router.delete("/delete/:id", auth.verifyToken, serviceController.deleteService);

module.exports = router;
