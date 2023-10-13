const Cart = require("../models/Cart");

exports.getUserAllCartService = async (id) => {
  const result = await Cart.findOne({ userId: id });

  return result;
};

exports.updateSingleItemInCartService = async (id, data) => {
  const isCurtExist = await Cart.findOne({ userId: id });
  if (isCurtExist) {
    const result = await Cart.findOneAndUpdate(
      { userId: id },
      { $push: { cartItem: data } },
      { new: true }
    );
    return result;
  } else {
    const result = await Cart.create({
      userId: id,
      cartItem: [data],
    });
    return result;
  }
};

exports.removeSingleItemInCartService = async (id, data) => {
  const result = await Cart.findOneAndUpdate(
    { userId: id },
    { $pull: { cartItem: data } },
    { new: true }
  );

  return result;
};
