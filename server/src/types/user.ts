import { Document, Types } from "mongoose";

// User roles
export type UserRole = "student" | "landlord";

// Account status
export type AccountStatus = "active" | "banned" | "suspended";

// Identity verification status for individual landlords
export type VerificationStatus = "pending" | "verified";

// Interface for User Schema
export interface IUser extends Document {
  role: UserRole;
  basicInfo: BasicInfo;
  studentProfile?: StudentProfile;
  landlordProfile?: LandlordProfile;
  accountStatus: AccountStatus;
  comparePassword(password: string): Promise<boolean>;
}

// Basic information common to all users
export interface BasicInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  passwordHash: string;
}

// Student-specific profile information
export interface StudentProfile {
  university: Types.ObjectId; // Reference to University ID
  major?: string;
  preferredRentRange?: {
    min?: number;
    max?: number;
  };
}

// Landlord-specific profile information, supporting individual or company
export interface LandlordProfile {
  individualLandlord?: IndividualLandlord;
  companyLandlord?: CompanyLandlord;
}

// Individual landlord details
export interface IndividualLandlord {
  identityVerification: VerificationStatus;
  verifiedAt?: Date;
}

// Company landlord details
export interface CompanyLandlord {
  companyName?: string;
  branches?: Branch[];
  contactPerson?: ContactPerson;
  businessRegistrationId?: string;
}

// Branch details for company landlords
export interface Branch {
  location: string;
  contact: string;
}

// Contact person for a company landlord
export interface ContactPerson {
  name: string;
  position: string;
}
