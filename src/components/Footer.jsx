import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">TherapyWeb</h3>
            <p className="text-gray-400">
              Empowering mental health professionals with authentic online
              presence
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#features" className="hover:text-teal-400">
                  Features
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-teal-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="text-gray-400">
              support@therapyweb.com
              <br />
              555-123-4567
            </p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400">
          <p>© 2023 TherapyWeb. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
