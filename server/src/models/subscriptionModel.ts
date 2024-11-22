import { model, Schema } from "mongoose";
import { ISubscription } from "../types";

const subscriptionSchema = new Schema<ISubscription>({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  subscriptionType: {
    type: String,
    enum: ["basic", "premium"],
    required: true,
  },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  paymentStatus: {
    type: String,
    enum: ["pending", "completed"],
    default: "pending",
  },
  transactionId: { type: String },
});

export default model<ISubscription>("Subscription", subscriptionSchema);
