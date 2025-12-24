export interface Property {
  id: string;
  title: string;
  city: string;
  locality: string;
  price: number;
  bhk: number;
  areaSqft: number;
  type: 'Apartment' | 'Villa' | 'Independent House' | 'Plot';
  status: 'Ready to Move' | 'Under Construction';
  imageUrls: string[];
  description: string;
  amenities: string[];
  possession?: string;
}

export const properties: Property[] = [
  {
    id: "1",
    title: "Luxurious 3BHK in Powai",
    city: "Mumbai",
    locality: "Powai, Hiranandani Gardens",
    price: 32500000,
    bhk: 3,
    areaSqft: 1850,
    type: "Apartment",
    status: "Ready to Move",
    imageUrls: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80",
      "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=800&q=80"
    ],
    description: "Experience luxury living in this beautifully designed 3BHK apartment located in the heart of Powai. This premium residence offers stunning lake views, modern amenities, and proximity to top schools, hospitals, and IT hubs. The apartment features Italian marble flooring, modular kitchen with premium fittings, and spacious balconies.",
    amenities: ["Swimming Pool", "Gym", "24/7 Security", "Covered Parking", "Children's Play Area", "Club House", "Power Backup", "Landscaped Gardens"]
  },
  {
    id: "2",
    title: "Modern 2BHK in Whitefield",
    city: "Bangalore",
    locality: "Whitefield, ITPL Road",
    price: 8500000,
    bhk: 2,
    areaSqft: 1200,
    type: "Apartment",
    status: "Ready to Move",
    imageUrls: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80",
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=800&q=80"
    ],
    description: "Compact yet elegant 2BHK apartment perfect for young professionals working in Whitefield's IT corridor. Features contemporary design, excellent ventilation, and is located just 5 minutes from major tech parks. The gated community offers world-class amenities and 24/7 security.",
    amenities: ["Gym", "Swimming Pool", "Jogging Track", "24/7 Security", "Power Backup", "Indoor Games", "Visitor Parking"]
  },
  {
    id: "3",
    title: "Spacious 4BHK Villa in Jubilee Hills",
    city: "Hyderabad",
    locality: "Jubilee Hills, Road No. 36",
    price: 45000000,
    bhk: 4,
    areaSqft: 4500,
    type: "Villa",
    status: "Ready to Move",
    imageUrls: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
    ],
    description: "Stunning 4BHK independent villa in the prestigious Jubilee Hills neighborhood. This architectural masterpiece features a private garden, home theater, modular kitchen, and designer interiors. Perfect for families seeking privacy and luxury with easy access to the city's best restaurants and entertainment.",
    amenities: ["Private Garden", "Home Theater", "Servant Quarters", "Study Room", "Terrace Garden", "Premium Security", "4-Car Garage", "Solar Panels"]
  },
  {
    id: "4",
    title: "Premium 3BHK in Sector 150",
    city: "Noida",
    locality: "Sector 150, Expressway",
    price: 15000000,
    bhk: 3,
    areaSqft: 2100,
    type: "Apartment",
    status: "Under Construction",
    possession: "December 2025",
    imageUrls: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
      "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800&q=80"
    ],
    description: "Book your dream home in this upcoming premium project on Noida Expressway. The 3BHK apartments offer panoramic views of the golf course, world-class amenities, and excellent connectivity to Delhi and Greater Noida. Early bird discounts available!",
    amenities: ["Golf Course View", "Infinity Pool", "Multipurpose Hall", "Tennis Court", "Business Center", "Spa", "Rooftop Restaurant", "EV Charging"]
  },
  {
    id: "5",
    title: "Elegant 2BHK in Baner",
    city: "Pune",
    locality: "Baner, Balewadi High Street",
    price: 9800000,
    bhk: 2,
    areaSqft: 1100,
    type: "Apartment",
    status: "Ready to Move",
    imageUrls: [
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80"
    ],
    description: "Contemporary 2BHK apartment in Pune's most happening neighborhood. Located near Balewadi High Street, enjoy easy access to cafes, shopping, and entertainment. The apartment features smart home automation, modular kitchen, and premium fixtures throughout.",
    amenities: ["Smart Home", "Rooftop Pool", "Co-working Space", "Pet-Friendly", "24/7 Security", "Gym", "Party Hall"]
  },
  {
    id: "6",
    title: "Budget 1BHK in Electronic City",
    city: "Bangalore",
    locality: "Electronic City Phase 1",
    price: 3500000,
    bhk: 1,
    areaSqft: 650,
    type: "Apartment",
    status: "Ready to Move",
    imageUrls: [
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80",
      "https://images.unsplash.com/photo-1600573472591-ee6c563aaec3?w=800&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80"
    ],
    description: "Affordable 1BHK perfect for bachelors and young couples. Located in Electronic City with excellent connectivity via metro. Ideal investment property with high rental demand. Well-maintained society with essential amenities.",
    amenities: ["Gym", "24/7 Security", "Power Backup", "Covered Parking", "Lift"]
  },
  {
    id: "7",
    title: "Heritage Style 3BHK in Jaipur",
    city: "Jaipur",
    locality: "Civil Lines, Vaishali Nagar",
    price: 7500000,
    bhk: 3,
    areaSqft: 1800,
    type: "Independent House",
    status: "Ready to Move",
    imageUrls: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      "https://images.unsplash.com/photo-1600047509782-20d39509f26d?w=800&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80"
    ],
    description: "Beautiful independent house with Rajasthani architectural elements in a prime Jaipur location. Features include a courtyard, jharokhas, and a rooftop terrace with city views. Perfect blend of traditional aesthetics and modern comforts.",
    amenities: ["Private Courtyard", "Rooftop Terrace", "Traditional Jharokhas", "Modular Kitchen", "Car Parking", "Servant Room", "Garden"]
  },
  {
    id: "8",
    title: "Sea-View 2BHK in Versova",
    city: "Mumbai",
    locality: "Versova, Andheri West",
    price: 28000000,
    bhk: 2,
    areaSqft: 1400,
    type: "Apartment",
    status: "Ready to Move",
    imageUrls: [
      "https://images.unsplash.com/photo-1560184897-ae75f418493e?w=800&q=80",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80"
    ],
    description: "Wake up to stunning Arabian Sea views in this premium 2BHK apartment. Located in the artistic Versova neighborhood, enjoy proximity to the beach, cafes, and entertainment hubs. Features include floor-to-ceiling windows and a large sea-facing balcony.",
    amenities: ["Sea View", "Large Balcony", "Swimming Pool", "Gym", "24/7 Security", "Concierge", "Beach Access", "Yoga Deck"]
  },
  {
    id: "9",
    title: "Premium Plot in SG Highway",
    city: "Ahmedabad",
    locality: "SG Highway, Thaltej",
    price: 12000000,
    bhk: 0,
    areaSqft: 2400,
    type: "Plot",
    status: "Ready to Move",
    imageUrls: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
      "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?w=800&q=80",
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80"
    ],
    description: "Prime residential plot on Ahmedabad's prestigious SG Highway. Corner plot with excellent frontage, perfect for building your dream home or investment. All utilities available, clear title, and ready for immediate construction.",
    amenities: ["Corner Plot", "Clear Title", "All Utilities", "Gated Community", "Wide Roads", "Near Schools", "Shopping Nearby"]
  },
  {
    id: "10",
    title: "Ultra Luxury 4BHK in OMR",
    city: "Chennai",
    locality: "OMR, Thoraipakkam",
    price: 22000000,
    bhk: 4,
    areaSqft: 3200,
    type: "Apartment",
    status: "Under Construction",
    possession: "March 2026",
    imageUrls: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
    ],
    description: "Experience ultra-luxury living in this upcoming 4BHK penthouse on Chennai's IT corridor. Features include private terrace, home automation, designer interiors by renowned architects, and exclusive access to premium amenities. Limited units available.",
    amenities: ["Private Terrace", "Smart Home", "Sky Lounge", "Infinity Pool", "Private Lift", "Concierge", "Helipad Access", "Premium Club"]
  }
];

export const cities = ["Mumbai", "Bangalore", "Hyderabad", "Noida", "Pune", "Jaipur", "Ahmedabad", "Chennai"];
export const propertyTypes = ["Apartment", "Villa", "Independent House", "Plot"];
export const bhkOptions = [1, 2, 3, 4];
export const statusOptions = ["Ready to Move", "Under Construction"];

export const formatPrice = (price: number): string => {
  if (price >= 10000000) {
    return `₹${(price / 10000000).toFixed(2)} Cr`;
  } else if (price >= 100000) {
    return `₹${(price / 100000).toFixed(2)} Lakhs`;
  }
  return `₹${price.toLocaleString('en-IN')}`;
};

export const formatArea = (area: number): string => {
  return `${area.toLocaleString('en-IN')} sq.ft`;
};
