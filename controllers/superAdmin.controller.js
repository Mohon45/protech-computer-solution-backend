const {
  createAdminService,
  makeAdminService,
  deleteAdminService,
  getAllAdminService,
} = require("../services/superAdmin.services");
const { httpResponse } = require("../utils/httpResponse");

module.exports.createAdmin = async (req, res) => {
  try {
    const result = await createAdminService(req.body);
    res
      .status(201)
      .json(httpResponse("success", result, "Admin Created success"));
  } catch (error) {
    res.status(500).json(httpResponse("fail", {}, "Admin Created failed"));
  }
};

module.exports.getAllAdmins = async (req, res) => {
  try {
    const result = await getAllAdminService();
    res
      .status(200)
      .json(httpResponse("success", result, "Admin data retrival success"));
  } catch (error) {
    res
      .status(500)
      .json(httpResponse("fail", {}, "Admin data retrival failed"));
  }
};

module.exports.makeAdmin = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await makeAdminService(id, req.body);
    res
      .status(200)
      .json(httpResponse("success", result, "Admin role update success"));
  } catch (error) {
    res.status(500).json(httpResponse("fail", {}, "Admin role update failed"));
  }
};

module.exports.deleteAdmin = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await deleteAdminService(id);
    res
      .status(200)
      .json(httpResponse("success", result, "Admin deleted success"));
  } catch (error) {
    res.status(500).json(httpResponse("fail", {}, "Admin deleted failed"));
  }
};
