import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Logo from "./Logo";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Helmet>
        <title>InternBoys - Free Internship Program for Young Men</title>
        <meta
          name="description"
          content="Join InternBoys - 100% free internship program for young men."
        />
      </Helmet>

      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
          scrolled
            ? "bg-black text-white shadow-lg"
            : "bg-transparent text-white"
        }`}
      >
        <div className="max-w-7xl mx-auto bg-black sm:mt-5 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Logo />
            <DesktopMenu scrolled={scrolled} />

            {/* Mobile Toggle Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden focus:outline-none text-white"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      </nav>
    </>
  );
}
