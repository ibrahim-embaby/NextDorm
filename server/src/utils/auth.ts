// src/utils/auth.ts

import jwt from "jsonwebtoken";
import { IUser } from "../types";

const JWT_SECRET = process.env.JWT_SECRET || "your_secret_key"; // Use environment variable for secret key
const JWT_EXPIRES_IN = "7d"; // Set token expiry, e.g., 7 days

export const createToken = (user: IUser): string => {
  return jwt.sign(
    {
      id: user._id,
      role: user.role,
    },
    JWT_SECRET,
    { expiresIn: JWT_EXPIRES_IN }
  );
};
