import React from "react";
import { navLinks } from "../data/navLinks";

export default function MobileMenu({ isOpen, setIsOpen }) {
  if (!isOpen) return null;

  return (
    <div className="md:hidden sm:mt-2 space-y-4 px-4 bg-black pb-4 h-[100vh]">
      {navLinks.map((link) => (
        <a
          key={link}
          href={`#${link}`}
          className="block font-medium text-white hover:text-blue-400"
          onClick={() => setIsOpen(false)}
        >
          {link.charAt(0).toUpperCase() + link.slice(1)}
        </a>
      ))}

      <a
        href="#application"
        className="block text-center px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg shadow-blue-500/30"
        onClick={() => setIsOpen(false)}
      >
        Apply Now
      </a>

      <a
        href="#features"
        className="block text-center px-4 py-2 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-all duration-200 border border-white/20 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      >
        Learn More
      </a>
    </div>
  );
}
