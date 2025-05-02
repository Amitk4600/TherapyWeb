import React from "react";

const Hero = () => {
  return (
    <section className="pt-24 pb-12 bg-teal-50">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Your Caring Digital Presence
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Professional websites that reflect your therapeutic approach and
            help clients find the support they need
          </p>
          <button className="bg-teal-600 text-white px-8 py-3 rounded-lg hover:bg-teal-700 transition-colors">
            Start Your Online Presence
          </button>
        </div>
        <div className="md:w-1/2">
          <img
            src="/therapy-hero.jpg"
            alt="Calm therapy environment"
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
