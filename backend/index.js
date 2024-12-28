import dotenv from 'dotenv'; // Load environment variables
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

dotenv.config(); // Initialize dotenv

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Parse incoming JSON requests



// Connect to MongoDB Atlas
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

// defining routes
app.use("/book",bookRoute);
app.use("/user",userRoute);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
