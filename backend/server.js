// backend/server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Updated MongoDB connection with IPv4 address
mongoose
  .connect("mongodb://127.0.0.1:27017/your-database-name")
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Define routes
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/availability", require("./routes/availabilityRoutes"));
app.use("/api/sessions", require("./routes/sessionRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
