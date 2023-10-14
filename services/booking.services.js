const Booking = require("../models/Booking");

exports.createBookingService = async (data) => {
  const result = await Booking.create(data);

  return result;
};

exports.getUserBookingsService = async (id) => {
  const result = await Booking.find({ user: id })
    .populate({
      path: "user",
      select: "-password",
    })
    .populate("service");
  return result;
};

exports.userUpdateBookingService = async (id) => {
  const result = await Booking.updateOne({ _id: id }, { status: "cancled" });
  return result;
};
exports.adminUpdateBookingService = async (id) => {
  const result = await Booking.updateOne({ _id: id }, { status: "cancled" });
  return result;
};
