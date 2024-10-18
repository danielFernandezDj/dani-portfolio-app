import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-blue-800 text-white py-8 mt-8 ">
      <div className="container mx-auto px-4">
        {/* Footer Top */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          {/* Contact Information */}
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold mb-2">Contact Us</h2>
            <p>Email: info@yourwebsite.com</p>
            <p>Phone: (123) 456-7890</p>
            <p>Address: 123 Your Street, City, Country</p>
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-blue-500 hover:text-blue-400"><FaFacebookF size={24} /></a>
            <a href="#" className="text-blue-300 hover:text-blue-200"><FaTwitter size={24} /></a>
            <a href="#" className="text-blue-600 hover:text-blue-500"><FaLinkedinIn size={24} /></a>
            <a href="#" className="text-pink-500 hover:text-pink-400"><FaInstagram size={24} /></a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-600 pt-4">
          <p className="text-center">
            &copy; {new Date().getFullYear()} Your Website. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
