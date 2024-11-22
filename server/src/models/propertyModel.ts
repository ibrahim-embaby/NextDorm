import { model, Schema } from "mongoose";
import { IProperty } from "../types";

const propertySchema = new Schema<IProperty>(
  {
    landlordId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    basicDetails: {
      title: { type: String, required: true },
      description: { type: String },
      propertyType: {
        type: String,
        enum: ["apartment", "shared room", "single room"],
        required: true,
      },
      rent: { type: Number, required: true },
      securityDeposit: { type: Number },
    },
    location: {
      address: { type: String },
      geoCoordinates: {
        type: { type: String, default: "Point" },
        coordinates: { type: [Number], index: "2dsphere" },
      },
      proximityToUniversity: { type: Number },
      city: { type: String },
      state: { type: String },
      postalCode: { type: String },
    },
    details: {
      roomCapacity: { type: Number },
      size: { type: Number },
      amenities: [{ type: String }],
      rules: [{ type: String }],
    },
    availability: {
      status: {
        type: String,
        enum: ["available", "booked", "maintenance"],
        default: "available",
      },
      availableFrom: { type: Date },
      leaseTerms: { type: String },
    },
    media: {
      photos: [{ type: String }],
      videos: [{ type: String }],
    },
  },
  { timestamps: true }
);

const Property = model<IProperty>("Property", propertySchema);
export default Property;
