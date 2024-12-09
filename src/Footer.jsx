import React from "react"
import ContactForm from "./components/ContactFrom"

// Icons
import { FaLinkedin } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { MdAttachEmail } from "react-icons/md";


export default function Footer() {
  const linkedinLink = "https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
  const githubLink = "https://github.com/danielFernandezDj"

  return (
    <footer className=" text-blue-900 py-4">
      <ContactForm />
      <div className="flex flex-col items-start mx-auto px-8">
        {/* Footer Content */}
        <div className="flex flex-col md:flex-row justify-start items-center mb-6">
          {/* My contact Information */}
          <ul className="test-start leading-loose list-none">
            <li> <p className="flex items-center gap-1"><FaUser /> Daniel Fernandez </p></li>
            <li> <p className="flex items-center gap-1"><FaPhone /> (786)307-4352 </p></li>
            <li> <p className="flex items-center gap-1"><MdAttachEmail /> danielfernandez.tech@gmail.com </p></li>
          </ul>
        </div>

        {/* End Side */}
        <div className="flex border-t justify-between items-center pt-4 border-gradient-to-r from-blue-400 to-purple-400">
          <p className="text-start">
            &copy; {new Date().getFullYear()} rights reserved
          </p>
          <div className="flex justify-end space-x-6 md:mt-0 m-4">
            <a href={linkedinLink} target="_blank"><FaLinkedin className="w-12 h-auto fill-blue-900 lg:hover:fill-blue-500 " /></a>
            <a href={githubLink} target="_blank"><SiGithub className="w-12 h-auto fill-blue-900 lg:hover:fill-blue-500" /></a>
          </div>
        </div>
        <p> Designed & Coded by Daniel Fernandez </p>
      </div>
    </footer>
  );
}
