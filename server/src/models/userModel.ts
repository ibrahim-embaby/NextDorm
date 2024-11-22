import { CallbackError, Schema, model } from "mongoose";
import { IUser } from "../types";
import bcrypt from "bcrypt";

const SALT_ROUNDS = 10;

const userSchema = new Schema<IUser>(
  {
    role: { type: String, enum: ["student", "landlord"], required: true },
    basicInfo: {
      firstName: { type: String, required: true },
      lastName: { type: String, required: true },
      email: { type: String, required: true, unique: true },
      phone: { type: String },
      passwordHash: { type: String, required: true },
    },
    studentProfile: {
      university: { type: Schema.Types.ObjectId, ref: "University" },
      major: { type: String },
      preferredRentRange: {
        min: { type: Number },
        max: { type: Number },
      },
    },
    landlordProfile: {
      individualLandlord: {
        identityVerification: {
          type: String,
          enum: ["pending", "verified"],
          default: "pending",
        },
        verifiedAt: { type: Date },
      },
      companyLandlord: {
        companyName: { type: String },
        branches: [{ location: String, contact: String }],
        contactPerson: { name: String, position: String },
        businessRegistrationId: { type: String },
      },
    },
    accountStatus: {
      type: String,
      enum: ["active", "banned", "suspended"],
      default: "active",
    },
  },
  { timestamps: true }
);

// Hash password before saving
userSchema.pre("save", async function (next) {
  const user = this as IUser;
  if (!user.isModified("basicInfo.passwordHash")) return next();

  try {
    const salt = await bcrypt.genSalt(SALT_ROUNDS);
    user.basicInfo.passwordHash = await bcrypt.hash(
      user.basicInfo.passwordHash,
      salt
    );
    next();
  } catch (error) {
    next(error as CallbackError);
  }
});

const User = model<IUser>("User", userSchema);
export default User;
