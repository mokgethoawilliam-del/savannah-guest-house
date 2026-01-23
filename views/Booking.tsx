
import React, { useState } from 'react';
import { BUSINESS_INFO } from '../constants';

const Booking: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '1',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (submitted) {
    return (
      <div className="py-24 max-w-2xl mx-auto px-4 text-center animate-in zoom-in duration-500">
        <div className="bg-emerald-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8 text-emerald-600 text-4xl">
          ✓
        </div>
        <h2 className="text-4xl font-bold text-stone-900 mb-4">Enquiry Sent!</h2>
        <p className="text-xl text-stone-600 mb-10">
          Thank you, {formData.name}. We have received your booking enquiry and will get back to you shortly via phone or email.
        </p>
        <button 
          onClick={() => setSubmitted(false)}
          className="bg-emerald-700 text-white px-8 py-3 rounded-lg font-bold hover:bg-emerald-800 transition-colors"
        >
          Send Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <div className="animate-in fade-in duration-700">
      <header className="bg-emerald-900 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Book / Enquire</h1>
          <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
            Fill out the form below to check availability or make a booking request.
          </p>
        </div>
      </header>

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-stone-100">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-stone-700 mb-2">Full Name</label>
                    <input 
                      required
                      type="text" 
                      className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-stone-700 mb-2">Email Address</label>
                    <input 
                      required
                      type="email" 
                      className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-stone-700 mb-2">Phone Number</label>
                    <input 
                      required
                      type="tel" 
                      className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                      placeholder="012 345 6789"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-stone-700 mb-2">Number of Guests</label>
                    <select 
                      className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                      value={formData.guests}
                      onChange={(e) => setFormData({...formData, guests: e.target.value})}
                    >
                      <option>1 Guest</option>
                      <option>2 Guests</option>
                      <option>3 Guests</option>
                      <option>4 Guests</option>
                      <option>5+ Guests</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-stone-700 mb-2">Check-in Date</label>
                    <input 
                      required
                      type="date" 
                      className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                      value={formData.checkIn}
                      onChange={(e) => setFormData({...formData, checkIn: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-stone-700 mb-2">Check-out Date</label>
                    <input 
                      required
                      type="date" 
                      className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                      value={formData.checkOut}
                      onChange={(e) => setFormData({...formData, checkOut: e.target.value})}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-stone-700 mb-2">Additional Message / Special Requests</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                    placeholder="Tell us about any specific requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-emerald-700 text-white py-4 rounded-lg font-bold text-lg hover:bg-emerald-800 transition-all shadow-lg active:scale-[0.98]"
                >
                  Submit Booking Enquiry
                </button>
              </form>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-stone-50 p-8 rounded-2xl border border-stone-200">
              <h3 className="text-xl font-bold text-stone-900 mb-6">Prefer Instant Booking?</h3>
              <p className="text-stone-600 mb-8">For immediate confirmation or last-minute bookings, we recommend calling us directly or using WhatsApp.</p>
              <div className="space-y-4">
                <a href={BUSINESS_INFO.phoneLink} className="flex items-center justify-center w-full bg-white border-2 border-emerald-700 text-emerald-800 py-3 rounded-lg font-bold hover:bg-emerald-50 transition-colors">
                  Call {BUSINESS_INFO.phone}
                </a>
                <a href={BUSINESS_INFO.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full bg-green-600 text-white py-3 rounded-lg font-bold hover:bg-green-700 transition-colors">
                  WhatsApp Now
                </a>
              </div>
            </div>

            <div className="bg-emerald-50 p-8 rounded-2xl border border-emerald-100">
              <h3 className="text-lg font-bold text-emerald-900 mb-4">Why Book Directly?</h3>
              <ul className="space-y-3 text-sm text-emerald-800">
                <li className="flex items-center"><span className="mr-2">✨</span> Best Rate Guarantee</li>
                <li className="flex items-center"><span className="mr-2">✨</span> Direct Management Contact</li>
                <li className="flex items-center"><span className="mr-2">✨</span> Flexible Cancellation Options</li>
                <li className="flex items-center"><span className="mr-2">✨</span> No Hidden Fees</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Booking;
