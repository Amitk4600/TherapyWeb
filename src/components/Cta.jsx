import React from "react";

const Cta = () => {
  return (
    <section className="py-16 bg-teal-600 text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Grow Your Practice?
        </h2>
        <p className="text-xl mb-8">
          Book a free consultation to discuss your website needs
        </p>
        <button className="bg-white text-teal-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
          Schedule Consultation
        </button>
      </div>
    </section>
  );
};

export default Cta;
