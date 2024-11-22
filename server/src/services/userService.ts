import bcrypt from "bcrypt";
import User from "../models/userModel";
import { IUser } from "../types/user";
import { CustomError } from "../utils/customError";

export default class UserService {
  // Register a new user
  static register = async (userData: Partial<IUser>): Promise<IUser> => {
    const newUser = new User(userData);
    return await newUser.save();
  };

  // Login user by email
  static login = async (email: string): Promise<IUser | null> => {
    return await User.findOne({ "basicInfo.email": email });
  };

  // Compare password
  static comparePassword = async (
    user: IUser,
    password: string
  ): Promise<boolean> => {
    return await bcrypt.compare(password, user.basicInfo.passwordHash);
  };

  // Get user by ID
  static getUserById = async (
    userId: string | undefined
  ): Promise<IUser | null> => {
    if (!userId) throw new CustomError("User ID is required", 400);
    return await User.findById(userId);
  };

  // Update user details
  static updateUser = async (
    userId: string | undefined,
    updates: Partial<IUser>
  ): Promise<IUser | null> => {
    if (!userId) throw new CustomError("User ID is required", 400);
    return await User.findByIdAndUpdate(userId, updates, { new: true });
  };
}
