import { model, Schema } from "mongoose";
import { IReview } from "../types";

const reviewSchema = new Schema<IReview>({
  propertyId: { type: Schema.Types.ObjectId, ref: "Property", required: true },
  studentId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  reviewText: { type: String },
}, {timestamps: true});

export default model<IReview>("Review", reviewSchema);
