import React, { useState, useEffect } from "react";
import logo from "../assets/logo.svg";
import { Helmet } from "react-helmet-async";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Helmet>
        <title>InternBoys - Free Internship Program for Young Men</title>
        <meta
          name="description"
          content="Join InternBoys - 100% free internship program for young men. Gain real work experience, professional mentorship, and career certificates. Remote opportunities available worldwide."
        />
        <meta
          name="keywords"
          content="free internship for boys, internboys program, male internship opportunities, no fee internship, remote internship for students, career development for young men, professional training program, skill development internship"
        />
      </Helmet>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
          scrolled
            ? "bg-black text-white shadow-lg"
            : "bg-transparent text-white"
        }`}
      >
        <div className="max-w-7xl sm:mt-5 bg-black mx-auto px-4 h- sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <img src={logo} alt="" />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {["home", "internships", "features", "about", "contact"].map(
                (link) => (
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
                )
              )}

              {/* Apply & Learn More Buttons */}
              <div className="flex gap-4">
                <a
                  href="#application"
                  className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg shadow-blue-500/30"
                >
                  Apply Now
                </a>
                <a
                  href="#features"
                  className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-all duration-200 border border-white/20 backdrop-blur-sm"
                >
                  Learn More
                </a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`focus:outline-none ${
                  scrolled ? "text-white" : "text-white"
                }`}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden mt-2 space-y-4 pb-4 h-[100vh]">
              {["home", "internships", "features", "about", "contact"].map(
                (link) => (
                  <a
                    key={link}
                    href={`#${link}`}
                    className="block font-medium text-white hover:text-blue-400"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.charAt(0).toUpperCase() + link.slice(1)}
                  </a>
                )
              )}

              {/* Mobile Buttons */}
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
          )}
        </div>
      </nav>
    </>
  );
}
