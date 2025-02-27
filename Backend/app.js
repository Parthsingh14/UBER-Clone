const dotenv = require("dotenv");
const userRoutes = require("./routes/user.routes");
const captainRoutes = require("./routes/captain.routes");
const mapRoutes = require("./routes/maps.routes")
const rideRoutes = require("./routes/ride.routes")

const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connecttoDb = require("./db/db");

const app = express();
dotenv.config();
connecttoDb();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.use("/users", userRoutes);
app.use("/captain", captainRoutes);
app.use("/maps",mapRoutes);
app.use("/ride",rideRoutes)

module.exports = app;
