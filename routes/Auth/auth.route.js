const { Router } = require("express");
const auth = require("../../middleware/auth");
const router = Router();

const authController = require("../../controllers/auth.controller");
const validateRequest = require("../../middleware/validateRequest");
const AuthValidation = require("./auth.validation");

/* GET users listing. */
router.post(
  "/signup",
  validateRequest(AuthValidation.signupZodSchema),
  authController.signup
);
router.post(
  "/login",
  validateRequest(AuthValidation.loginZodSchema),
  authController.login
);
router.post("/logout", authController.logoutUser);
router.get(
  "/getLoggedInUser",
  auth.verifyToken,
  authController.getLoggedInUser
);
router.get("/all-user", auth.verifyToken, authController.getAllUsers);
router.patch(
  "/profile-update/:id",
  auth.verifyToken,
  authController.updateProfile
);
router.delete("/delete/:id", auth.verifyToken, authController.deleteUser);

module.exports = router;
