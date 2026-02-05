
import React from 'react';
import { BUSINESS_INFO } from '../constants';
import PlaceholderImage from '../components/PlaceholderImage';

const Contact: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      <header className="bg-stone-100 py-20 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">Location & Contact</h1>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Easily accessible and centrally located in Polokwane. We look forward to hearing from you.
          </p>
        </div>
      </header>

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold text-stone-900 mb-10">Get in Touch</h2>
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-emerald-100 p-3 rounded-lg mr-6 text-emerald-700">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <h3 className="font-bold text-stone-900 mb-1">Our Address</h3>
                  <p className="text-stone-600">{BUSINESS_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-emerald-100 p-3 rounded-lg mr-6 text-emerald-700">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div>
                  <h3 className="font-bold text-stone-900 mb-1">Call Us</h3>
                  <a href={BUSINESS_INFO.phoneLink} className="text-emerald-700 font-bold text-lg hover:underline">{BUSINESS_INFO.phone}</a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-emerald-100 p-3 rounded-lg mr-6 text-emerald-700">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div>
                  <h3 className="font-bold text-stone-900 mb-1">Operating Hours</h3>
                  <p className="text-stone-600">{BUSINESS_INFO.operatingHours}</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-8 bg-emerald-700 rounded-xl text-white">
              <h3 className="text-xl font-bold mb-4">Direct Message</h3>
              <p className="mb-6 opacity-90">Prefer messaging? Connect with us on WhatsApp for instant responses during business hours.</p>
              <a href={BUSINESS_INFO.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-emerald-800 px-8 py-3 rounded-lg font-bold hover:bg-stone-100 transition-colors">
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Map Section */}
          <div>
            <div className="h-full flex flex-col">
              <h2 className="text-3xl font-bold text-stone-900 mb-10">Find Us</h2>
              <div className="w-full flex-grow rounded-xl overflow-hidden shadow-lg border border-stone-200 min-h-[400px]">
                <iframe 
                  className="w-full h-full"
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(BUSINESS_INFO.address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                  frameBorder="0" 
                  scrolling="no" 
                  title="Savannah Guest House Location"
                  aria-label="Map showing location of Savannah Guest House"
                ></iframe>
              </div>
              <p className="mt-4 text-sm text-stone-500 text-center italic">Located in the quiet suburb of Flora Park, close to Savannah Mall and Netcare Pholoso Hospital.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
