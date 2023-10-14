const { Router } = require("express");
const auth = require("../../middleware/auth");
const router = Router();

const cartController = require("../../controllers/cart.controller");
const validateRequest = require("../../middleware/validateRequest");

router.get("/", auth.verifyToken, cartController.getUserAllCart);
router.patch("/update", auth.verifyToken, cartController.updateSingleCart);
router.patch("/remove", auth.verifyToken, cartController.removeSingleCart);

module.exports = router;
