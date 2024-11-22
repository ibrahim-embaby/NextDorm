import { Types } from "mongoose";

export interface IReview {
  propertyId: Types.ObjectId; // Reference to Property ID
  studentId: Types.ObjectId; // Reference to User ID
  rating: number; // Rating between 1 and 5
  reviewText?: string;
  createdAt: Date;
}
