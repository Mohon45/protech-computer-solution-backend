const Booking = require("../models/Booking");
const Service = require("../models/Service");
const { formatTime } = require("../utils/timeFormatter");

exports.createBookingService = async (data) => {
  const formattedTime = formatTime(data.time);
  data.time = formattedTime;
  console.log(data);
  const result = await Booking.create(data);
  if (result) {
    await Service.updateOne(
      { _id: data.service, userBooking: { $ne: data.user } },
      { $addToSet: { userBooking: data.user } }
    );
  }

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

exports.getAllBookingsService = async (id) => {
  const result = await Booking.find({})
    .populate({
      path: "user",
      select: "-password",
    })
    .populate("service");
  return result;
};

exports.userUpdateBookingService = async (id) => {
  const result = await Booking.findOneAndUpdate(
    { _id: id },
    { status: "cancled" }
  );
  if (result) {
    await Service.updateOne(
      { _id: result.service, userBooking: { $eq: result.user } },
      { $pull: { userBooking: result.user } }
    );
  }
  return result;
};

exports.adminUpdateBookingService = async (id, data) => {
  const result = await Booking.updateOne({ _id: id }, data);
  return result;
};

exports.deleteBookingService = async (id) => {
  const result = await Booking.deleteOne({ _id: id });
  return result;
};
