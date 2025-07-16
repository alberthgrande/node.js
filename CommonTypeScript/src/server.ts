import express, { Application } from "express";
import dotenv from "dotenv";
import connectDB from "./config/db";
import userRoutes from "./routes/userRoutes";

dotenv.config();

const app: Application = express();

// middleware
app.use(express.json());

// routes
app.use("/api/users", userRoutes);

// connect DB and start server
connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
