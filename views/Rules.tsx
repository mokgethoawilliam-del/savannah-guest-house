
import React from 'react';
import { POLICIES } from '../constants';

const Rules: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      <header className="bg-stone-100 py-20 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">House Rules & Policies</h1>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            To ensure a pleasant stay for all our guests, please familiarize yourself with our policies.
          </p>
        </div>
      </header>

      <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {POLICIES.map((policy, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-stone-100 hover:border-emerald-200 transition-colors">
              <div className="flex items-start">
                <div className="bg-emerald-100 text-emerald-800 w-10 h-10 rounded-full flex items-center justify-center font-bold mr-6 shrink-0">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-stone-900 mb-3">{policy.title}</h3>
                  <p className="text-stone-600 leading-relaxed">{policy.content}</p>
                </div>
              </div>
            </div>
          ))}
          
          <div className="mt-12 p-8 bg-amber-50 border-l-4 border-amber-400 rounded-r-xl">
            <h3 className="text-lg font-bold text-amber-900 mb-2">Important Notice</h3>
            <p className="text-amber-800">
              For any rules or policies not explicitly listed here, or for clarification on specific terms, 
              <strong> please confirm with management.</strong>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rules;
