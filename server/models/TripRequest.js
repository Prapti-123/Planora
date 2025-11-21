const mongoose = require("mongoose");

const tripRequestSchema = new mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
   from : {
        type: String,
        required: true
   },
    destination: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    tourType: {
        type: String,
        enum:["Adventure","Mountains","Beaches","Cultural","All"],
        required: true
    },
    tripType: {
        type: String,
        enum: ["Family", "Friends", "Couple"],
        required: true
    },
    budget: {
        type: Number,
        required: true
    },

    totalMembers: {
        type: Number,
        required: true
    },
    stayPreferences: {
        type: String,
        enum: ["3 star hotel", "5 star hotel", "budget hotel","resort"],
        required: true
    },
    travelPreferences: {
        type: String,
        enum: ["bus", "train", "flight", "own vehicle"],
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})
    const TripRequest = mongoose.model("TripRequest", tripRequestSchema);
    module.exports = TripRequest;   
    