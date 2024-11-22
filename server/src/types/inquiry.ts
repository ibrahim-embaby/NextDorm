import { Types } from "mongoose";

export type InquiryStatus = "pending" | "responded" | "closed";

export interface IInquiry {
  studentId: Types.ObjectId; // Reference to User ID
  propertyId: Types.ObjectId; // Reference to Property ID
  message?: string;
  status: InquiryStatus;
  timestamp: Date;
  response?: string;
  rating?: number;
}
