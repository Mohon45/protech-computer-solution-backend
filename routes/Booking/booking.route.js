const { Router } = require("express");
const auth = require("../../middleware/auth");
const router = Router();

const bookingController = require("../../controllers/booking.controller");
const validateRequest = require("../../middleware/validateRequest");

router.post("/create", auth.verifyToken, bookingController.createBooking);
router.get("/", auth.verifyToken, bookingController.getUserBooking);
router.get("/all", auth.verifyToken, bookingController.getAllBookings);
router.patch(
  "/user-update/:id",
  auth.verifyToken,
  bookingController.userUpdateBooking
);
router.patch(
  "/admin-update/:id",
  auth.verifyToken,
  bookingController.adminUpdateBooking
);
router.delete("/delete/:id", auth.verifyToken, bookingController.deleteBooking);

module.exports = router;
