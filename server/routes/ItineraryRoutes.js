const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware.js');
const itineraryController = require('../controllers/ItineraryController.js');

router.get('/:itineraryId', authMiddleware, itineraryController.getItinerary);
router.get('/', authMiddleware, itineraryController.getAllItineraries);

module.exports = router;