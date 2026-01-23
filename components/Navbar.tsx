
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BUSINESS_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/rooms', label: 'Rooms & Amenities' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/policies', label: 'Policies' },
    { path: '/contact', label: 'Location & Contact' },
    { path: '/book', label: 'Book Now' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white border-b border-stone-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex flex-col">
              <span className="text-2xl font-serif font-bold text-emerald-900 leading-none">Savannah</span>
              <span className="text-xs tracking-widest text-stone-500 uppercase">Guest House</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(link.path)
                    ? 'text-emerald-700 border-b-2 border-emerald-700'
                    : 'text-stone-600 hover:text-emerald-700'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={BUSINESS_INFO.phoneLink}
              className="bg-emerald-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-emerald-800 transition-colors shadow-sm"
            >
              Call Now
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-stone-600 hover:text-emerald-700 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-stone-100 px-4 py-4 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-3 rounded-md text-base font-medium ${
                isActive(link.path)
                  ? 'bg-emerald-50 text-emerald-700'
                  : 'text-stone-600 hover:bg-stone-50'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 grid grid-cols-2 gap-4">
            <a
              href={BUSINESS_INFO.phoneLink}
              className="flex items-center justify-center bg-emerald-700 text-white py-3 rounded-md text-sm font-bold"
            >
              Call Now
            </a>
            <a
              href={BUSINESS_INFO.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-green-600 text-white py-3 rounded-md text-sm font-bold"
            >
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
