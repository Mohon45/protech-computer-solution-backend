var express = require("express");
var router = express.Router();
const authRoutes = require("./Auth/auth.route");
const serviceRoutes = require("./Service/service.route");
const cartRoutes = require("./Cart/cart.route");

let rootRouter = router;

rootRouter.use("/user", authRoutes);
rootRouter.use("/service", serviceRoutes);
rootRouter.use("/cart", cartRoutes);

module.exports = rootRouter;
