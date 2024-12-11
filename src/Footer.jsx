import React, { useState } from "react"

// Icons
import { FaLinkedin } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { MdAttachEmail } from "react-icons/md";
import { FaCopy } from "react-icons/fa"; // Add copy icon

export default function Footer() {
  const [copiedItem, setCopiedItem] = useState(null);
  const linkedinLink = "https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
  const githubLink = "https://github.com/danielFernandezDj"

  // Function to handle copying text
  const handleCopy = async (text, itemType) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedItem(itemType);
      
      // Reset copied state after 2 seconds
      setTimeout(() => setCopiedItem(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  // Reusable copy-able contact item component
  const CopyableContactItem = ({ icon, text, type }) => (
    <li 
      onClick={() => handleCopy(text, type)}
      className="
        flex items-center gap-2 
        hover:underline decoration-wavy 
        hover:text-blue-500
        cursor-pointer 
        group 
        relative
      "
    >
      {icon}
      <span>{text}</span>
      <FaCopy 
        className="
          ml-2 
          opacity-0 
          group-hover:opacity-100 
          text-gray-500 
          hover:text-emerald-500 
          transition-opacity
        " 
      />
      {copiedItem === type && (
        <span 
          className="
            absolute 
            -top-6 
            left-0 
            bg-emerald-500 
            text-white 
            text-xs 
            px-2 
            py-1 
            rounded
          "
        >
          Copied!
        </span>
      )}
    </li>
  );

  return (
    <footer className="footer-container">
      <ul className="leading-loose list-none">
        <CopyableContactItem 
          icon={<FaUser />} 
          text="Daniel Fernandez" 
          type="name" 
        />
        <CopyableContactItem 
          icon={<FaPhone />} 
          text="(786)307-4352" 
          type="phone" 
        />
        <CopyableContactItem 
          icon={<MdAttachEmail />} 
          text="danielfernandez.tech@gmail.com" 
          type="email" 
        />
      </ul>

      <p className="absolute bottom-5 left-5 md:w-auto w-[15rem]">
        &copy; {new Date().getFullYear()} rights reserved. Designed & Coded by Daniel Fernandez.
      </p>

      <div className="flex gap-2 justify-end absolute bottom-5 right-5">
        <a href={linkedinLink} target="_blank"><FaLinkedin className="w-12 h-auto fill-slate-200 hover:fill-blue-500 " /></a>
        <a href={githubLink} target="_blank"><SiGithub className="w-12 h-auto fill-slate-200 hover:fill-yellow-500" /></a>
      </div>
    </footer>
  );
}