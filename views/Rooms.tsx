
import React from 'react';
import { AMENITIES } from '../constants';
import PlaceholderImage from '../components/PlaceholderImage';

const Rooms: React.FC = () => {
  const roomCategories = [
    {
      name: "Standard Double Room",
      description: "Ideal for couples or solo business travelers. Features a comfortable queen-size bed, private en-suite bathroom, and a work desk.",
      capacity: "2 Adults",
      features: ["Queen Bed", "En-suite Shower", "Air Conditioning", "Satellite TV"]
    },
    {
      name: "Family Suite",
      description: "Spacious accommodation designed for families. Includes a master bedroom and a secondary sleeping area, ensuring comfort for everyone.",
      capacity: "2 Adults + 2 Children",
      features: ["King Bed + Twin Beds", "Full Bathroom", "Lounge Area", "Garden View"]
    },
    {
      name: "Executive Room",
      description: "Premium comfort for the discerning guest. Enhanced space, premium linens, and a dedicated workspace for productivity.",
      capacity: "2 Adults",
      features: ["King Bed", "Rain Shower", "Mini-Fridge", "Quiet Location"]
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
            <div key={index} className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              <div className={`${index % 2 === 1 ? 'md:order-last' : ''}`}>
                <PlaceholderImage label={`${room.name} Image Placeholder`} className="shadow-xl" />
              </div>
              <div>
                <span className="text-emerald-700 font-bold uppercase tracking-widest text-sm block mb-4">Accommodation</span>
                <h2 className="text-3xl font-bold text-stone-900 mb-6">{room.name}</h2>
                <p className="text-lg text-stone-600 mb-6 leading-relaxed">{room.description}</p>
                <p className="font-semibold text-stone-800 mb-4">Max Occupancy: {room.capacity}</p>
                <div className="grid grid-cols-2 gap-y-3 mb-8">
                  {room.features.map((feature, i) => (
                    <div key={i} className="flex items-center text-stone-600">
                      <span className="mr-2 text-emerald-600">✓</span>
                      {feature}
                    </div>
                  ))}
                </div>
                <a href="#/book" className="inline-block bg-emerald-700 text-white px-8 py-3 rounded-lg font-bold hover:bg-emerald-800 transition-colors">
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
            <h2 className="text-3xl font-bold mb-6">Included in Your Stay</h2>
            <p className="text-stone-400 max-w-2xl mx-auto">
              We provide everything you need for a comfortable and convenient experience.
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
