
import React from 'react';

const Gallery: React.FC = () => {
  const galleryItems = [
    { 
      url: "https://ik.imagekit.io/fabridev/room%201.jpg", 
      label: "Deluxe Double Room", 
      size: "col-span-1" 
    },
    { 
      url: "https://ik.imagekit.io/fabridev/176006273.jpg", 
      label: "Comfortable Interiors", 
      size: "col-span-1" 
    },
    { 
      url: "https://ik.imagekit.io/fabridev/176006122.jpg", 
      label: "Room Amenities", 
      size: "col-span-1" 
    },
    { 
      url: "https://ik.imagekit.io/fabridev/164642389.jpg", 
      label: "Guest Accommodation", 
      size: "col-span-1 md:col-span-2" 
    },
    { 
      url: "https://ik.imagekit.io/fabridev/garden.jpg", 
      label: "Lush Gardens", 
      size: "col-span-1" 
    },
    { 
      url: "https://ik.imagekit.io/fabridev/outside.png", 
      label: "Property Exterior", 
      size: "col-span-1" 
    },
    { 
      url: "https://ik.imagekit.io/fabridev/outdoor.jpg", 
      label: "Outdoor Relaxation", 
      size: "col-span-1 md:col-span-2" 
    },
    { 
      url: "https://ik.imagekit.io/fabridev/pool.jpg", 
      label: "Swimming Pool", 
      size: "col-span-1 md:col-span-3" 
    },
  ];

  return (
    <div className="animate-in fade-in duration-700">
      <header className="bg-stone-100 py-20 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">Gallery</h1>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Take a visual tour of Savannah Guest House and our beautiful surroundings.
          </p>
        </div>
      </header>

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {galleryItems.map((item, index) => (
            <div key={index} className={`${item.size} group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all h-full`}>
              <img 
                src={item.url}
                alt={item.label}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                <span className="text-white font-bold tracking-widest uppercase text-sm border-b-2 border-emerald-500 pb-1">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-emerald-50 p-12 rounded-2xl border border-emerald-100">
          <h2 className="text-2xl font-bold text-stone-800 mb-4">Looking for more details?</h2>
          <p className="text-stone-600 mb-8">Feel free to contact our management for specific room videos or additional photos.</p>
          <a href="#/contact" className="text-emerald-700 font-bold hover:underline">Get In Touch &rarr;</a>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
