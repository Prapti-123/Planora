const Itinerary = require('../models/Itinerary')

exports.getItinerary = async (req, res) => {
    try {
        const itineraryId = req.params.itineraryId;
        const userId = req.userId; // from auth middleware
        const itinerary = await Itinerary.findOne({ _id: itineraryId, userId: userId });
        if (!itinerary) {
            return res.status(404).json({ message: 'Itinerary not found' });
        }
        res.json(itinerary);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

exports.getAllItineraries = async (req, res) => {
    try {
        const userId = req.userId; // from auth middleware
        const itineraries = await Itinerary.find({ userId: userId });
        res.json(itineraries);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}