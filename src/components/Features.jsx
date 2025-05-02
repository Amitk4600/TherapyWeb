import React from "react";

const Features = () => {
  return (
    <section id="features" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Designed for Healing Professionals
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: "📱",
              title: "Mobile-Ready",
              text: "Perfect for clients on-the-go",
            },
            {
              icon: "⚡",
              title: "Lightning Fast",
              text: "Quick loading for better engagement",
            },
            {
              icon: "🔍",
              title: "SEO Optimized",
              text: "Local search visibility built-in",
            },
            {
              icon: "🎨",
              title: "Custom Design",
              text: "Reflect your unique approach",
            },
          ].map((feature, index) => (
            <div key={index} className="p-6 bg-teal-50 rounded-lg text-center">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
