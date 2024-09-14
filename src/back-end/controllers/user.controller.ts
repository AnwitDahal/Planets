import { Router, Request, Response } from "express";
import User from "../models/user.model";
import dbConnect from "../config/db";

const router = Router();

router.get("/users", async (req: Request, res: Response) => {
  try {
    console.log("This is for test");

    const users = await User.find();
    res.status(200).json(users); // Send the actual users data
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Internal server error" }); // Handle errors
  }
});

router.post("/createUser", async (req: Request, res: Response) => {
  try {
    await dbConnect();

    // validation for required fields
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // checking for existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    // Create a new user using all fields from req.body
    const newUser = new User(req.body);
    await newUser.save();

    // Respond with success message and user data (excluding sensitive info)
    res
      .status(201)
      .json({ message: "User created successfully", user: newUser });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Error creating user" });
  }
});

export default router;
