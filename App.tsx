
import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './views/Home';
import Rooms from './views/Rooms';
import Gallery from './views/Gallery';
import Rules from './views/Rules';
import Contact from './views/Contact';
import Booking from './views/Booking';

const App: React.FC = () => {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col selection:bg-emerald-100 selection:text-emerald-900">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/policies" element={<Rules />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book" element={<Booking />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
