const { Router } = require("express");
const auth = require("../../middleware/auth");
const router = Router();

const bookingController = require("../../controllers/booking.controller");
const validateRequest = require("../../middleware/validateRequest");

router.post("/create", auth.verifyToken, bookingController.createBooking);
router.get("/", auth.verifyToken, bookingController.getUserBooking);
router.patch(
  "/user-update/:id",
  auth.verifyToken,
  bookingController.userUpdateBooking
);

module.exports = router;
