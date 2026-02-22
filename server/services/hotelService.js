const Amadeus = require("amadeus");



const amadeus = new Amadeus({
  clientId: process.env.AMADEUS_CLIENT_ID,
  clientSecret: process.env.AMADEUS_CLIENT_SECRET,
});



const getHotels = async ({ cityCode, checkInDate, checkOutDate, ratings }) => {
  try {
    console.log("Fetching hotels for:", cityCode);
    // total members budget need to be added in this function but budget bifercation is still a doubt and need to be discussed

    // STEP 1: Get hotel list by city
    const hotelsResp = await amadeus.referenceData.locations.hotels.byCity.get({
      cityCode,
      ratings,
    });

    const hotelList = hotelsResp.data || [];

    if (hotelList.length === 0) {
      return { message: "No hotels found for this preference." };
    }

    console.log("Hotels found:", hotelList.length);

    // Pick first 10 hotelIds
    const hotelIds = hotelList
      .map((h) => h.hotelId)
      .slice(0, 10)
      .join(",");

    console.log("Checking offers for hotelIds:", hotelIds);

    // -------- FIX: Use new V3 endpoint -------- //
    const offersResp = await amadeus.shopping.hotelOffersSearch.get({
      hotelIds,
      adults: 1,
      checkInDate,
      checkOutDate,
      roomQuantity: 1,
    });

    if (!offersResp.data || offersResp.data.length === 0) {
      console.warn("⚠️ No offers found in test env, returning basic hotel info instead.");
      return hotelList.slice(0, 10); // fallback if test env has no offers
    }

    return offersResp.data;
  } catch (error) {
    console.error("🚨 Hotel API Error:", error.response?.data || error.message);
    return null;
  }
};

module.exports = { getHotels };
