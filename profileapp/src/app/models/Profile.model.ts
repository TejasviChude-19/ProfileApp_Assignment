export interface Profile {
    id: number;
    name: string;
    role: string; 
    description: string;
    photoUrl: string;
    location: {
      lat: number;
      lng: number;
    };
  }