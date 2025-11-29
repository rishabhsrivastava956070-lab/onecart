import express from 'express';
import dotenv from 'dotenv';
import connectDb from './config/db.js';

dotenv.config();
const port = process.env.PORT || 6000;

const app = express();

// Connect to MongoDB first
connectDb()
  .then(() => {
    console.log("MongoDB connected successfully");

    // Start the server only after DB connection
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection failed", err);
  });

// Root route
app.get("/", (req, res) => {
  res.send("Hello from backend server");
});
