const express = require("express");
const path = require("path");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config({ path: "./server/.env" });
const connectDB = require("./config/db.js").default;
const testRoutes = require("./routes/testRoutes.js");
const userRoutes = require("./routes/UserRoutes.js");
const cookieParser = require("cookie-parser");
const tripRequestRoutes = require("./routes/TripRequestRoutes.js");
const itineraryRoutes = require("./routes/ItineraryRoutes.js");






const app = express();

const __dirnameResolved =__dirname;

// static serve
app.use(express.static(path.join(__dirnameResolved, "../client/dist")));

// SPA fallback
app.use((req, res) => {
  res.sendFile(path.join(__dirnameResolved, "../client/dist/index.html"));
});

app.use((req, res, next) => {
  res.removeHeader("Access-Control-Allow-Origin");
  res.header("Access-Control-Allow-Origin", "http://localhost:5173");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));


app.use(cookieParser());

app.use(express.json());


connectDB();
app.use(express.urlencoded({ extended: true }));

app.use("/api/test",testRoutes);
app.use("/api/users",userRoutes);
app.use("/api/trip", tripRequestRoutes);
app.use("/api/itinerary",itineraryRoutes);
app.get("/api/hello", (req, res) => {
  res.json({ message: "API working" });
});





const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server running on", PORT));