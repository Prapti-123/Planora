const TripRequest = require("../models/TripRequest");
const Itinerary = require("../models/Itinerary");
const { generateItineraryWithLLM } = require("../services/langchainService");

exports.createTripRequest = async (req, res) => {
    try {
        const { from, tourType, tripType, destination, startDate, endDate, budget, totalMembers, stayPreferences, travelPreferences } = req.body;
        const userId = req.userId; // from protect middleware

        // 1) Save TripRequest
        const tripReq = await TripRequest.create({
            userId: userId,
            from,
            tourType,
            tripType,
            destination,
            startDate,
            endDate,
            budget,
            totalMembers,
            stayPreferences,
            travelPreferences,
            status: "Processing"
        });

        // 2) Call LLM synchronously (for MVP)
        let aiData;
        try {
            aiData = await generateItineraryWithLLM({
                from,
                destination,
                startDate,
                endDate,
                days: (endDate - startDate) / (1000 * 60 * 60 * 24),
                tourType,
                tripType,
                budget,
                totalMembers,
                stayPreferences,
                travelPreferences
            });
        } catch (llmErr) {
            await TripRequest.findByIdAndUpdate(tripReq._id, { status: "failed", error: llmErr.message });
            return res.status(500).json({ message: "AI generation failed", error: llmErr.message });
        }

        // 3) Save Itinerary
        const savedItinerary = await Itinerary.create({
            userId: userId,
            tripRequestId: tripReq._id,
            title: aiData.title,
            description: aiData.description,
            imgLink: aiData.imgLink,
            startDate: new Date(aiData.startDate),
            endDate: new Date(aiData.endDate),
            days: aiData.days,
            nights: aiData.nights,
            dayWisePlan: aiData.day_wise,
            tips: aiData.tips
        });

        // 4) Update TripRequest with itineraryId and status
        await TripRequest.findByIdAndUpdate(tripReq._id, { status: "ready", itineraryId: savedItinerary._id });

        // 5) Respond with itinerary id
        return res.status(201).json({ itineraryId: savedItinerary._id });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Server error" });
    }
};
