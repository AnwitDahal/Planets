import mongoose from "mongoose";

interface connectionObject {
  isConnected?: number;
}

const connection: connectionObject = {};

async function dbConnect() {
  // If already connected, return
  if (connection.isConnected) {
    return;
  }

  // Check if the MONGODB_URI environment variable is set
  const mongoUri = process.env.MONGODB_URI;
  if (!mongoUri) {
    throw new Error("MONGODB_URI environment variable not set.");
  }

  try {
    const db = await mongoose.connect(mongoUri);
    connection.isConnected = db.connections[0].readyState;
    console.log("Connected to MongoDB successfully.");
  } catch (error) {
    console.error("Error connecting to the database:", error);
    process.exit(1); // You can remove this for graceful error handling in some environments
  }
}

export default dbConnect;
