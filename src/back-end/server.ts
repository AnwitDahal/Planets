import express from "express";
import userRoutes from "./routes/user.route";
import dotenv from "dotenv";
import dbConnect from "./config/db";

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
dbConnect();

app.use(express.json());
app.use('/route/user', userRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
