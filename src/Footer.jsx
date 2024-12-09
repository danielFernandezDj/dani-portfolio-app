import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { SiGithub } from "react-icons/si";

export default function Footer() {
  const linkedinLink = "https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
  const githubLink = "https://github.com/danielFernandezDj"
  
  return (
    <footer className="bg-blue-900 text-white py-8 mt-8 ">
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
            <a href={linkedinLink} target="_blank"><FaLinkedin className="w-12 h-auto fill-white lg:hover:fill-blue-500 " /></a>
            <a href={githubLink} target="_blank"><SiGithub className="w-12 h-auto fill-white lg:hover:fill-blue-500" /></a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-600 pt-4">
          <p className="text-start">
            &copy; {new Date().getFullYear()} rights reserved Designed & Coded by Daniel Fernandez
          </p>
        </div>
      </div>
    </footer>
  );
}
