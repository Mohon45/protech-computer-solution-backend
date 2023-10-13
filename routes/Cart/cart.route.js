const { Router } = require("express");
const auth = require("../../middleware/auth");
const router = Router();

const cartController = require("../../controllers/cart.controller");
const validateRequest = require("../../middleware/validateRequest");

router.get("/", cartController.getUserAllCart);
router.patch("/update", cartController.updateSingleCart);
router.patch("/remove", cartController.removeSingleCart);

module.exports = router;
