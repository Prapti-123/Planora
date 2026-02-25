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


// middleware
const allowedOrigins = [
  "http://localhost:5173",
  "http://127.0.0.1:5173",
  "https://planora-pjrg.onrender.com/"
];

app.use(cors({
  origin: function (origin, callback) {
    // allow requests with no origin (mobile apps, curl, postman)
    if (!origin) return callback(null, true);

    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
}));
app.use(cookieParser());

app.use(express.json());


app.use(express.urlencoded({ extended: true }));

connectDB();






app.use("/api/test",testRoutes);
app.use("/api/users",userRoutes);
app.use("/api/trip", tripRequestRoutes);
app.use("/api/itinerary",itineraryRoutes);
app.get("/api/hello", (req, res) => {
  res.json({ message: "API working" });
});


const clientPath = path.join(process.cwd(), "client", "dist");

app.use(express.static(clientPath));

app.get("/{*any}", (req, res) => {
  res.sendFile(path.join(clientPath, "index.html"));
});






const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server running on", PORT));