import { Types } from "mongoose";

export type SubscriptionType = "basic" | "premium";
export type PaymentStatus = "pending" | "completed";

export interface ISubscription {
  userId: Types.ObjectId; // Reference to User ID
  subscriptionType: SubscriptionType;
  startDate: Date;
  endDate: Date;
  paymentStatus: PaymentStatus;
  transactionId?: string;
}
