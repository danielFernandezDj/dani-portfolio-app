import React from "react"

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
    <footer className="flex flex-col content-center max-w-md text-blue-900 py-4 m-auto mt-12">
      <div className="flex flex-col mx-auto px-8">
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
        <div className="flex gap-4 justify-between items-center border-t py-4">
          <p className="">
            &copy; {new Date().getFullYear()} rights reserved.
          </p>
          <div className="flex gap-2 justify-end content-center">
            <a href={linkedinLink} target="_blank"><FaLinkedin className="w-12 h-auto fill-blue-900 hover:fill-blue-500 " /></a>
            <a href={githubLink} target="_blank"><SiGithub className="w-12 h-auto fill-blue-900 hover:fill-blue-500" /></a>
          </div>
        </div>
        <p> Designed & Coded by Daniel Fernandez. </p>
      </div>
    </footer>
  );
}
