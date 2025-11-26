const express = require("express");
const router = express.Router();
const authMiddleware= require("../middlewares/authMiddleware.js");
const tripRequestController =require("../controllers/TripRequestController.js");


router.post("/create", authMiddleware, tripRequestController.createTripRequest);

module.exports = router;