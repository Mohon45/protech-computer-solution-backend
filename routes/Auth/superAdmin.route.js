const { Router } = require("express");
const auth = require("../../middleware/auth");
const router = Router();

const SuperAdminController = require("../../controllers/superAdmin.controller");
const validateRequest = require("../../middleware/validateRequest");

router.post("/create", auth.verifyToken, SuperAdminController.createAdmin);
router.get("/", auth.verifyToken, SuperAdminController.getAllAdmins);
router.patch("/make-admin", auth.verifyToken, SuperAdminController.makeAdmin);
router.delete(
  "/delete/:id",
  auth.verifyToken,
  SuperAdminController.deleteAdmin
);

module.exports = router;
