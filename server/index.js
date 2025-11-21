const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db.js");
const testRoutes = require("./routes/testRoutes.js");
const userRoutes = require("./routes/UserRoutes.js");
const cookieParser = require("cookie-parser");

dotenv.config();




const app = express();
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));
app.use(cors());
app.use(express.json());

connectDB();
app.use(express.urlencoded({ extended: true }));

app.use("/api/test",testRoutes);
app.use("/api/users",userRoutes);



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});