
export interface Amenity {
  icon: React.ReactNode;
  label: string;
}

export interface Room {
  id: string;
  name: string;
  description: string;
  price: string;
  capacity: string;
  amenities: string[];
}

export interface Policy {
  title: string;
  content: string;
}
