const {
  getUserAllCartService,
  updateSingleItemInCartService,
  removeSingleItemInCartService,
} = require("../services/cart.services");
const { httpResponse } = require("../utils/httpResponse");

module.exports.getUserAllCart = async (req, res) => {
  try {
    const result = await getUserAllCartService(req.user.id);
    res
      .status(200)
      .json(httpResponse("success", result, "cart data retrival success"));
  } catch (error) {
    res.status(500).json(httpResponse("fail", {}, "cart data retrival failed"));
  }
};

module.exports.updateSingleCart = async (req, res) => {
  try {
    const result = await updateSingleItemInCartService(req.user.id, req.body);
    if (result === null) {
      res
        .status(400)
        .json(httpResponse("fail", {}, "This Item already exists in cart"));
    } else {
      res
        .status(200)
        .json(httpResponse("success", result, "A new Item cart add success"));
    }
  } catch (error) {
    res
      .status(500)
      .json(httpResponse("fail", {}, "A new Item cart add failed"));
  }
};

module.exports.removeSingleCart = async (req, res) => {
  try {
    const result = await removeSingleItemInCartService(req.user.id, req.body);
    res
      .status(200)
      .json(httpResponse("success", result, "A Item in cart remove success"));
  } catch (error) {
    res
      .status(500)
      .json(httpResponse("fail", {}, "A Item in cart remove failed"));
  }
};
