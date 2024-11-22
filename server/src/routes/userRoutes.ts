// src/routes/userRoutes.ts

import { Router } from "express";
import {
  registerUser,
  getUserProfile,
  updateUserProfile,
  loginUser,
} from "../controllers/userController";
import authenticate from "../middlewares/authMiddleware"; // Middleware for authentication

const router = Router();

// Route for registering a new user
router.post("/register", registerUser);

// Route for user login
router.post("/login", loginUser);

// Route for getting the user's profile
router.get("/profile", authenticate, getUserProfile); // Authenticated route

// Route for updating the user's profile
router.put("/profile", authenticate, updateUserProfile); // Authenticated route

export default router;
