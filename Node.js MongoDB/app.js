const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 3000;
const DB_URL = "mongodb://localhost:27017/mydb"; // Update the URL with your MongoDB server URL

// Connect to MongoDB
mongoose.connect(DB_URL);

// Check if the connection is successful
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
