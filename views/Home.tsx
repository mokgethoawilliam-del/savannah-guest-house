
import React from 'react';
import { Link } from 'react-router-dom';
import { AMENITIES, BUSINESS_INFO } from '../constants';
import PlaceholderImage from '../components/PlaceholderImage';

const Home: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center bg-stone-100">
        <div className="absolute inset-0 z-0">
          <PlaceholderImage label="Hero Image: Savannah Main View" className="w-full h-full rounded-none opacity-60" aspectRatio="h-full" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl bg-white/90 backdrop-blur-sm p-10 md:p-16 rounded-xl shadow-2xl">
            <h1 className="text-4xl md:text-6xl font-bold text-stone-900 mb-6 leading-tight">
              Welcome to <span className="text-emerald-800">Savannah</span> Guest House
            </h1>
            <p className="text-lg text-stone-600 mb-8 leading-relaxed">
              Experience the perfect blend of comfort and affordability. Whether you're visiting for business or with family, our welcoming atmosphere ensures a restful stay in Polokwane.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/book" className="bg-emerald-700 text-white px-8 py-4 rounded-lg font-bold hover:bg-emerald-800 transition-all shadow-lg text-center min-w-[160px]">
                Enquire Now
              </Link>
              <Link to="/rooms" className="bg-white border-2 border-emerald-700 text-emerald-800 px-8 py-4 rounded-lg font-bold hover:bg-emerald-50 transition-all text-center min-w-[160px]">
                Explore Rooms
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-stone-900">Your Tranquil Retreat in Flora Park</h2>
              <p className="text-lg text-stone-600 mb-6 leading-relaxed">
                Savannah Guest House is strategically located in the serene suburb of Flora Park, Polokwane. We pride ourselves on providing clean, secure, and modern accommodation tailored to the needs of the discerning traveler.
              </p>
              <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                Our property features a lush garden, an inviting outdoor pool, and secure parking, making it a safe haven for both relaxation and business productivity.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="border-l-4 border-emerald-600 pl-4 py-2">
                  <span className="block text-2xl font-bold text-emerald-800">Clean</span>
                  <span className="text-sm text-stone-500 uppercase tracking-widest">Hygiene Priority</span>
                </div>
                <div className="border-l-4 border-emerald-600 pl-4 py-2">
                  <span className="block text-2xl font-bold text-emerald-800">Affordable</span>
                  <span className="text-sm text-stone-500 uppercase tracking-widest">Great Value</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <PlaceholderImage label="Garden View" aspectRatio="aspect-square" />
              <div className="pt-8">
                <PlaceholderImage label="Swimming Pool" aspectRatio="aspect-square" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Amenities */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-16 text-stone-900">Why Stay With Us?</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {AMENITIES.slice(0, 4).map((amenity, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <span className="text-4xl mb-4 block">{amenity.icon}</span>
                <h3 className="font-semibold text-stone-800">{amenity.label}</h3>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Link to="/rooms" className="text-emerald-700 font-bold hover:underline">View All Amenities &rarr;</Link>
          </div>
        </div>
      </section>

      {/* Call to Action Bar */}
      <section className="bg-emerald-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-8">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">Ready to book your stay?</h2>
            <p className="text-emerald-100">Contact us directly for the best rates and availability.</p>
          </div>
          <div className="flex gap-4">
            <a href={BUSINESS_INFO.phoneLink} className="bg-white text-emerald-900 px-8 py-3 rounded-lg font-bold hover:bg-stone-100 transition-colors">
              Call {BUSINESS_INFO.phone}
            </a>
            <a href={BUSINESS_INFO.whatsapp} className="bg-green-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-green-700 transition-colors">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
