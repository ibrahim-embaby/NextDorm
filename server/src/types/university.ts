export interface IUniversity {
  name: string;
  location: UniversityGeoCoordinates;
  popularAreas?: string[];
  city?: string;
}

export interface UniversityGeoCoordinates {
  type: "Point";
  coordinates: [number, number]; // [longitude, latitude]
}
