import React from "react";
import { FaInstagram, FaFacebook, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#0b1220] text-gray-300 px-6 py-6">
      <div className="max-w-[1200px] mx-auto">
        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mt-20 mb-14">
          {/* BRAND */}
          <div>
            <h2 className="text-2xl font-bold text-white">DigiTools</h2>
            <p className="mt-4 text-sm text-gray-400 leading-relaxed">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>

          {/* PRODUCT */}
          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Features</li>
              <li>Pricing</li>
              <li>Templates</li>
              <li>Integrations</li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>About</li>
              <li>Blog</li>
              <li>Careers</li>
              <li>Press</li>
            </ul>
          </div>

          {/* RESOURCES + SOCIAL */}
          <div>
            {/* Resources */}
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Documentation</li>
              <li>Help Center</li>
              <li>Community</li>
              <li>Contact</li>
            </ul>

            {/* Social Title */}
          </div>
          <div className="">
            <h3 className="text-white font-semibold mb-4">Social Links</h3>
            <div className="flex  gap-3">
              <button className="btn btn-circle btn-sm bg-white text-black hover:bg-gray-200">
                <FaInstagram />
              </button>

              <button className="btn btn-circle btn-sm bg-white text-black hover:bg-gray-200">
                <FaFacebook />
              </button>

              <button className="btn btn-circle btn-sm bg-white text-black hover:bg-gray-200">
                <FaXTwitter />
              </button>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-gray-700 my-10"></div>

        {/* BOTTOM SECTION */}
        <div className="flex flex-col md:flex-row justify-between text-sm text-gray-500">
          <p>© 2026 Digitools. All rights reserved.</p>

          <div className="space-x-6 mt-3 md:mt-0">
            <a className="hover:text-white">Privacy Policy</a>
            <a className="hover:text-white">Terms of Service</a>
            <a className="hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
