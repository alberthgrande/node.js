require("dotenv").config({ debug: true });
const express = require("express");
const connectDB = require("./config/db");

const useRoutes = require("./routes/userRoutes");

const app = express();

// Middleware
app.use(express.json());

app.use("/api/users", useRoutes);

connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server is running on port http://localhost:${PORT}`)
);
