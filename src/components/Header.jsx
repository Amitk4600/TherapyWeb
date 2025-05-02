import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow-sm fixed w-full z-10">
      <nav className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-teal-600">TherapyWeb</h1>
          <div className="space-x-6">
            <a href="#features" className="text-gray-600 hover:text-teal-600">
              Features
            </a>
            <a href="#contact" className="text-gray-600 hover:text-teal-600">
              Contact
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
