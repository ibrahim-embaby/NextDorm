import { Request } from "express";
import { IUser } from "./user";
import { IProperty } from "./property";
import { IInquiry } from "./inquiry";
import { IReview } from "./review";
import { ISubscription } from "./subscription";

// Authenticated Request with User Data
export interface AuthenticatedRequest extends Request {
  user?: IUser; // Populated after authentication
}

// Request with User and Landlord ID (for landlord-specific routes)
export interface LandlordRequest extends AuthenticatedRequest {
  landlordId: string;
}

// Request with User and Property ID (for property-specific routes)
export interface PropertyRequest extends AuthenticatedRequest {
  propertyId: string;
  property?: IProperty; // Optional if property data is populated in middleware
}

// Request with User and Student ID (for student-specific routes)
export interface StudentRequest extends AuthenticatedRequest {
  studentId: string;
}

// Request with User and Inquiry Data (for inquiries)
export interface InquiryRequest extends AuthenticatedRequest {
  inquiry?: IInquiry; // Optional if inquiry data is populated in middleware
}

// Request with User and Review Data (for reviews)
export interface ReviewRequest extends AuthenticatedRequest {
  review?: IReview; // Optional if review data is populated in middleware
}

// Request with User and Subscription Data (for subscriptions)
export interface SubscriptionRequest extends AuthenticatedRequest {
  subscription?: ISubscription; // Optional if subscription data is populated in middleware
}
