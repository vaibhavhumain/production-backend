require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require("./routes/auth");

const app = express();

app.use(
  cors({
    origin: ["http://localhost:3000","https://productiondashboards.netlify.app"],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

// Handle preflight manually (important)
app.options("*", cors());
app.use(express.json());

connectDB();

app.use("/api/auth", authRoutes);

app.listen(5000, () => console.log("Backend running on port 5000"));
