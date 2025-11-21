const express = require("express");
const router = express.Router();
const UserController = require('../controllers/UserController.js');

router.post("/register", UserController.registerUser);
router.post("/login", UserController.loginUser);
router.post("/logout", UserController.logoutUser);
// router.get("/profile", UserController.getUserProfile);
// router.put("/profile", UserController.updateUserProfile);
// router.delete("/profile", UserController.deleteUserProfile);

module.exports = router;