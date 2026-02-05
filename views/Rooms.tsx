
import React from 'react';
import { AMENITIES } from '../constants';

const Rooms: React.FC = () => {
  const roomCategories = [
    {
      name: "Deluxe Double Room with Shower",
      description: "A spacious 30 m² unit located on the ground floor, offering privacy and comfort. Perfect for couples or business travelers, this room features a dedicated workspace, outdoor dining area, and comprehensive in-room amenities.",
      capacity: "2 Guests (1 Double Bed)",
      images: [
        "https://ik.imagekit.io/fabridev/room%201.jpg",
        "https://ik.imagekit.io/fabridev/room%202.jpg"
      ],
      features: [
        "1 double bed",
        "30 m²",
        "Air conditioning",
        "Private bathroom",
        "Flat-screen TV",
        "Free WiFi",
        "Free toiletries",
        "Toilet",
        "Bath or shower",
        "Towels",
        "Linen",
        "Socket near the bed",
        "Tile/marble floor",
        "Desk",
        "Telephone",
        "Ironing facilities",
        "Satellite channels",
        "Tea/Coffee maker",
        "Iron",
        "Heating",
        "Fan",
        "Electric kettle",
        "Outdoor furniture",
        "Outdoor dining area",
        "Wardrobe or closet",
        "Entire unit located on ground floor",
        "Clothes rack",
        "Toilet paper",
        "Hand sanitiser",
        "Single-room air conditioning"
      ]
    }
  ];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      <header className="bg-stone-100 py-20 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">Rooms & Amenities</h1>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Thoughtfully designed spaces that offer the perfect balance of relaxation and functionality.
          </p>
        </div>
      </header>

      {/* Rooms Listing */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-24">
          {roomCategories.map((room, index) => (
            <div key={index} className="flex flex-col lg:flex-row gap-12 items-start">
              <div className="w-full lg:w-1/2 space-y-6">
                {room.images.map((imgSrc, imgIndex) => (
                  <div key={imgIndex} className="relative aspect-video rounded-xl overflow-hidden shadow-xl bg-stone-200 group">
                     <img 
                      src={imgSrc} 
                      alt={`${room.name} view ${imgIndex + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                     />
                  </div>
                ))}
              </div>
              <div className="w-full lg:w-1/2">
                <span className="text-emerald-700 font-bold uppercase tracking-widest text-sm block mb-4">Accommodation</span>
                <h2 className="text-3xl font-bold text-stone-900 mb-4">{room.name}</h2>
                <p className="text-lg text-stone-600 mb-6 leading-relaxed">{room.description}</p>
                <div className="mb-6 p-4 bg-stone-50 border border-stone-200 rounded-lg inline-block">
                    <p className="font-bold text-stone-800">Max Occupancy: <span className="font-normal">{room.capacity}</span></p>
                </div>
                
                <h3 className="font-bold text-stone-900 mb-4">Room Features:</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-y-2 gap-x-4 mb-8 text-sm">
                  {room.features.map((feature, i) => (
                    <div key={i} className="flex items-start text-stone-600">
                      <span className="mr-2 text-emerald-600 mt-0.5">•</span>
                      {feature}
                    </div>
                  ))}
                </div>
                
                <a href="#/book" className="inline-block bg-emerald-700 text-white px-8 py-3 rounded-lg font-bold hover:bg-emerald-800 transition-colors shadow-lg">
                  Check Availability
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Full Amenities Grid */}
      <section className="py-24 bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">General Facilities</h2>
            <p className="text-stone-400 max-w-2xl mx-auto">
              In addition to your room amenities, enjoy our property-wide features.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {AMENITIES.map((amenity, index) => (
              <div key={index} className="flex flex-col items-center p-8 border border-stone-800 rounded-xl hover:border-emerald-600 transition-colors group">
                <span className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">{amenity.icon}</span>
                <h3 className="text-lg font-medium text-stone-200">{amenity.label}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rooms;
