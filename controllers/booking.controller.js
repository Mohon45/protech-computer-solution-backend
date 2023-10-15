const {
  createBookingService,
  getUserBookingsService,
  userUpdateBookingService,
  adminUpdateBookingService,
} = require("../services/booking.services");
const { httpResponse } = require("../utils/httpResponse");

module.exports.createBooking = async (req, res) => {
  try {
    req.body.user = req.user.id;
    const result = await createBookingService(req.body);
    res.status(201).json(httpResponse("success", result, "Booking success"));
  } catch (error) {
    res.status(500).json(httpResponse("fail", {}, "Booking failed"));
  }
};

module.exports.getUserBooking = async (req, res) => {
  try {
    const result = await getUserBookingsService(req.user.id);
    res
      .status(200)
      .json(httpResponse("success", result, "User Booking Retrival success"));
  } catch (error) {
    res
      .status(500)
      .json(httpResponse("fail", {}, "User Booking Retrival failed"));
  }
};

module.exports.userUpdateBooking = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await userUpdateBookingService(id);
    res
      .status(200)
      .json(httpResponse("success", result, "Booking Update success"));
  } catch (error) {
    res.status(500).json(httpResponse("fail", {}, "Booking update failed"));
  }
};

module.exports.adminUpdateBooking = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await adminUpdateBookingService(id, req.body);
    res
      .status(200)
      .json(httpResponse("success", result, "Booking Update success"));
  } catch (error) {
    res.status(500).json(httpResponse("fail", {}, "Booking update failed"));
  }
};
