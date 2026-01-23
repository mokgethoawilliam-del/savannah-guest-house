
import React from 'react';
import { Link } from 'react-router-dom';
import { BUSINESS_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 border-b border-stone-800 pb-12">
          <div>
            <h3 className="text-xl font-serif font-bold text-white mb-6">Savannah Guest House</h3>
            <p className="text-sm leading-relaxed mb-6">
              Comfortable, affordable, and welcoming accommodation in the heart of Polokwane. Your home away from home.
            </p>
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-widest text-emerald-500 font-bold">Operating Hours</p>
              <p className="text-sm">{BUSINESS_INFO.operatingHours}</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-6">Quick Links</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/" className="hover:text-emerald-500 transition-colors">Home</Link></li>
              <li><Link to="/rooms" className="hover:text-emerald-500 transition-colors">Rooms & Amenities</Link></li>
              <li><Link to="/gallery" className="hover:text-emerald-500 transition-colors">Gallery</Link></li>
              <li><Link to="/policies" className="hover:text-emerald-500 transition-colors">House Rules</Link></li>
              <li><Link to="/contact" className="hover:text-emerald-500 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-6">Get In Touch</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <span className="text-emerald-500">📍</span>
                <span>{BUSINESS_INFO.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-emerald-500">📞</span>
                <a href={BUSINESS_INFO.phoneLink} className="hover:text-white transition-colors">{BUSINESS_INFO.phone}</a>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-emerald-500">💬</span>
                <a href={BUSINESS_INFO.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Chat on WhatsApp</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="text-center text-xs text-stone-500">
          <p>© {new Date().getFullYear()} Savannah Guest House. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
