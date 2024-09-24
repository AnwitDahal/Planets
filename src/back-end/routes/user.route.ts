import express, { Request, Response } from "express";
import User from "../models/user.model";
import dbConnect from "../config/db";

const router = express.Router();

router.use(async (req, res, next) => {
  try {
    await dbConnect();
    next();
  } catch (error) {
    res.status(500).json
  }
})

// Create a new user
router.post("/createUser", async (req: Request, res: Response) => {
  try {
    console.log("TEST")
    await dbConnect();
    const user = new User(req.body);
    await user.save();
    res.status(201).json({ message: "User created successfully", user: user });
  } catch (error) {
    res.status(400).json({ error: "Could not create user" });
  }
});

// Get all users
router.get("/", async (req: Request, res: Response) => {
  try {
    dbConnect();
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Could not fetch users" });
  }
});

// Get a single user by ID
router.get("/:id", async (req: Request, res: Response) => {
  try {
    dbConnect();
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Could not fetch user" });
  }
});

// Update a user
router.put("/:id", async (req: Request, res: Response) => {
  try {
    dbConnect();
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: "Could not update user" });
  }
});

// Delete a user
router.delete("/:id", async (req: Request, res: Response) => {
  try {
    dbConnect();
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Could not delete user" });
  }
});

export default router;
