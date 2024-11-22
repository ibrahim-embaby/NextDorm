import { NextFunction, Request, Response } from "express";
import { AuthenticatedRequest } from "../types/request";
import { IUser } from "../types/user";
import { createToken } from "../utils/auth";
import userService from "../services/userService";
import { CustomError } from "../utils/customError";

// Register a new user
export const registerUser = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  try {
    const newUser: IUser = await userService.register(req.body);

    return res
      .status(201)
      .json({ message: "User registered successfully", user: newUser });
  } catch (error) {
    next(error);
  }
};

// User login
export const loginUser = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const { email, password } = req.body;

  try {
    const user: IUser | null = await userService.login(email);

    if (!user) {
      throw new CustomError("User not found", 404);
    }

    const isMatch = await userService.comparePassword(user, password);

    if (!isMatch) {
      throw new CustomError("Invalid credentials", 401);
    }

    const token = createToken(user);

    return res.status(200).json({ message: "Login successful", user, token });
  } catch (error) {
    next(error);
  }
};

// Get user profile
export const getUserProfile = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  try {
    const user = await userService.getUserById(req.user?.id);

    if (!user) {
      throw new CustomError("User not found", 404);
    }

    return res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

// Update user profile
export const updateUserProfile = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  try {
    const updatedUser = await userService.updateUser(req.user?.id, req.body);

    if (!updatedUser) {
      throw new CustomError("User not found", 404);
    }

    return res.status(200).json({
      message: "User profile updated successfully",
      user: updatedUser,
    });
  } catch (error) {
    next(error);
  }
};
