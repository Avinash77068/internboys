import React from "react";
import { navLinks } from "../data/navLinks";

export default function DesktopMenu({ scrolled }) {
  return (
    <div className="hidden md:flex items-center space-x-8">
      {navLinks.map((link) => (
        <a
          key={link}
          href={`#${link}`}
          className={`font-medium transition-colors ${
            scrolled
              ? "text-white hover:text-blue-400"
              : "text-white hover:text-blue-400"
          }`}
        >
          {link.charAt(0).toUpperCase() + link.slice(1)}
        </a>
      ))}

    </div>
  );
}
