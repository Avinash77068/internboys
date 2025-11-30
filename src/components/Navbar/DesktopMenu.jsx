// src/components/Navbar/DesktopMenu.jsx
import { Link, useLocation, useNavigate } from "react-router-dom";
import { navLinks } from "../data/navLinks";

export default function DesktopMenu({ scrolled }) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (e, link) => {
    e.preventDefault();

    if (link.isNewPage) {
      navigate(link.path);
    } else {
      if (location.pathname !== "/") {
        navigate(`/${link.path}`);
      } else {
        const element = document.getElementById(link.id);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  // Function to check if link is active
  const isActive = (link) => {
    if (link.isNewPage) return location.pathname === link.path;
    return (
      location.pathname === `/${link.path}` ||
      (location.pathname === "/" && link.path === "")
    );
  };

  return (
    <div className="hidden md:flex items-center space-x-8">
      {navLinks.map((link) => (
        <div key={link.id} className="relative">
          <Link
            to={link.isNewPage ? link.path : `/${link.path}`}
            onClick={(e) => handleNavigation(e, link)}
            className={`font-medium transition-colors ${
              scrolled ? "text-white" : "text-white"
            } hover:text-blue-400`}
          >
            {link.label}
          </Link>

          {/* ACTIVE UNDERLINE */}
          <span
            className={`
              absolute left-0 -bottom-1 h-[2px] bg-blue-400 rounded-full 
              transition-all duration-800
              ${isActive(link) ? "w-full opacity-100" : "w-0 opacity-0"}
            `}
          />
        </div>
      ))}
    </div>
  );
}
