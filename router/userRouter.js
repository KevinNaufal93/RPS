const express = require("express");
const router = express.Router();
const { userController } = require("../controller");

router.get("/", userController.landingPage);
router.get("/Register", userController.getRegister);
router.post("/Register/", userController.register);
router.get("/Login", userController.getLogin);
router.post("/Login/", userController.login);
router.get("/Dashboar", userController.getDashboard);
router.post("/DeleteUser/", userController.deleteUser);
router.post("/UpdateUser/", userController.updateUser);

module.exports = router;
