import { model, Schema } from "mongoose";
import { IUniversity } from "../types";

const universitySchema = new Schema<IUniversity>({
  name: { type: String, required: true, unique: true },
  location: {
    type: { type: String, default: "Point" },
    coordinates: { type: [Number], index: "2dsphere" },
  },
  popularAreas: [{ type: String }],
  city: { type: String },
});

export default model<IUniversity>("University", universitySchema);
