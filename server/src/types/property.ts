// src/types/property.ts

import { Types } from "mongoose";

export type PropertyStatus = "available" | "booked" | "maintenance";
export type PropertyType = "apartment" | "shared room" | "single room";

export interface IProperty {
  landlordId: Types.ObjectId; // Reference to User ID
  basicDetails: BasicDetails;
  location: Location;
  details: PropertyDetails;
  availability: Availability;
  media: Media;
  createdAt: Date;
  updatedAt: Date;
}

export interface BasicDetails {
  title: string;
  description?: string;
  propertyType: PropertyType;
  rent: number;
  securityDeposit?: number;
}

export interface Location {
  address?: string;
  geoCoordinates: GeoCoordinates;
  proximityToUniversity?: number;
  city?: string;
  state?: string;
  postalCode?: string;
}

export interface GeoCoordinates {
  type: "Point";
  coordinates: [number, number]; // [longitude, latitude]
}

export interface PropertyDetails {
  roomCapacity?: number;
  size?: number;
  amenities?: string[];
  rules?: string[];
}

export interface Availability {
  status: PropertyStatus;
  availableFrom?: Date;
  leaseTerms?: string;
}

export interface Media {
  photos?: string[];
  videos?: string[];
}
