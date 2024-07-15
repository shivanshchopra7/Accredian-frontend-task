import React from 'react';

import Image from './Anniversary (7) 1.png';

const HeroSection = ({ onReferNowClick }) => {
  return (
    <div className="bg-blue-600 text-white">
      <nav className="p-4 bg-gray-900">
        <div className="max-w-6xl mx-auto  flex justify-center md:space-x-20 space-x-6">
          <a href="#refer" className="text-xl font-mono hover:underline">Refer</a>
          <a href="#benefits" className="text-xl font-mono hover:underline">Benefits</a>
          <a href="#faq" className="text-xl font-mono hover:underline">FAQs</a>
          <a href="#support" className="text-xl font-mono hover:underline">Support</a>
        </div>
      </nav>
      <div className="p-16 text-center">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2">
            <h1 className="md:text-8xl text-6xl font-serif  font-bold mb-6">Accredian</h1>
            <h1 className="md:text-3xl text-2xl italic font-mono font-bold mb-6 text-nowrap">Let's <span className='text-lime-300'>Learn</span> & <span className='text-yellow-400'>Earn </span></h1>
            <p className="md:text-2xl text-xl font-mono mb-8">Get a chance to win up to Rs. 15,000</p>
            <button 
              className="bg-white md:text-xl text-blue-600 px-6 py-3 font-bold rounded-full" 
              onClick={onReferNowClick}>
              Refer Now
            </button>
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <img src={Image} alt="Refer & Earn" className="rounded-lg shadow-xl" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
