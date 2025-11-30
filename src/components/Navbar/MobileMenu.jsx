// src/components/Navbar/MobileMenu.jsx
import { Link, useLocation, useNavigate } from "react-router-dom";
import { navLinks } from "../data/navLinks";

export default function MobileMenu({ isOpen, setIsOpen }) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (e, link) => {
    e.preventDefault();
    setIsOpen(false);

    if (link.isNewPage) {
      navigate(link.path);
    } else {
      if (location.pathname !== "/") {
        navigate(`/${link.path}`);
      } else {
        const element = document.getElementById(link.id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="md:hidden mt-2 space-y-4 px-4 bg-black pb-4 h-[100vh]">
      {navLinks.map((link) => (
        <Link
          key={link.id}
          to={link.isNewPage ? link.path : `/${link.path}`}
          onClick={(e) => handleNavigation(e, link)}
          className="block font-medium text-white hover:text-blue-400"
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}
