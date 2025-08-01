import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import path from "path";
import { fileURLToPath } from "url";
// config dotenv
dotenv.config();

// DB config
connectDB();

// --dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// rest object
const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "./client/build")));

// routes
app.use("/api/v1/auth", authRoutes);

// rest api
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

const PORT = process.env.PORT;

// run listen
app.listen(PORT, () => {
  console.log(
    `  Server is running ${process.env.DEV_MODE} mode on port ${PORT}`.green
      .bold
  );
});
