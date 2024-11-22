import { model, Schema } from "mongoose";
import { IInquiry } from "../types";

const inquirySchema = new Schema<IInquiry>(
  {
    studentId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    propertyId: {
      type: Schema.Types.ObjectId,
      ref: "Property",
      required: true,
    },
    message: { type: String },
    status: {
      type: String,
      enum: ["pending", "responded", "closed"],
      default: "pending",
    },
    response: { type: String },
    rating: { type: Number, min: 1, max: 5 },
  },
  { timestamps: true }
);

export default model<IInquiry>("Inquiry", inquirySchema);
