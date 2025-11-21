const express = require("express");
const router = express.Router();
const TripRequestController = require('../controllers/TripRequestController.js');

router.post("/create", TripRequestController.createTripRequest);