import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to check if a link is active
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
  e.preventDefault();
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  } else {
    alert("Section introuvable 😒");
  }
};

  return (
    <nav className="bg-[#020617]/90 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <img src="https://github.com/mouhamed-dev/DataPulse/blob/b054d93d5fce4517df4964dd3e8d9ad119e6e12c/public/img/datapulse-logo.png?raw=true" alt="Logo" className="w-8 h-8 mr-2" />
              <span className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
                DataPulse
              </span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <Link
                to="/" onClick={(e) => scrollToSection(e, "accueil")}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive("/")
                    ? "text-emerald-500"
                    : "text-white hover:text-emerald-500"
                }`}
              >
                Accueil
              </Link>
              <Link
                to="#roadmap" onClick={(e) => scrollToSection(e, "roadmap")}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive("roadmap")
                    ? "text-emerald-500"
                    : "text-white hover:text-emerald-500"
                }`}
              >
                Roadmap
              </Link>
              <Link
                to="#tarifs" onClick={(e) => scrollToSection(e, "tarifs")}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive("tarifs")
                    ? "text-emerald-500"
                    : "text-white hover:text-emerald-500"
                }`}
              >
                Tarifs
              </Link>
              <Link
                to="#avis" onClick={(e) => scrollToSection(e, "avis")}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive("avis")
                    ? "text-emerald-500"
                    : "text-white hover:text-emerald-500"
                }`}
              >
                Avis
              </Link>
              <Link
                to="#faq" onClick={(e) => scrollToSection(e, "faq")}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive("faq")
                    ? "text-emerald-500"
                    : "text-white hover:text-emerald-500"
                }`}
              >
                FAQ
              </Link>
              <Link
                to="#contact" onClick={(e) => scrollToSection(e, "contact")}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive("contact")
                    ? "text-emerald-500"
                    : "text-white hover:text-emerald-500"
                }`}
              >
                Contact
              </Link>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block invisible">
            <Link
              to="https://codescandy.com/"
              target="_blank"
              className="btn-primary w-full"
            >
              Contactez-nous
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-[#020617]/90">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/" onClick={(e) => scrollToSection(e, "accueil")}
              className={`block px-3 py-2 text-base font-medium ${
                isActive("/")
                  ? "text-emerald-500"
                  : "text-white hover:text-emerald-500"
              }`}
            >
              Accueil
            </Link>
            <Link
              to="#roadmap" onClick={(e) => scrollToSection(e, "roadmap")}
              className={`block px-3 py-2 text-base font-medium ${
                isActive("roadmap")
                  ? "text-emerald-500"
                  : "text-white hover:text-emerald-500"
              }`}
            >
              Roadmap
            </Link>
            <Link
              to="tarifs" onClick={(e) => scrollToSection(e, "tarifs")}
              className={`block px-3 py-2 text-base font-medium ${
                isActive("tarifs")
                  ? "text-emerald-500"
                  : "text-white hover:text-emerald-500"
              }`}
            >
              Tarifs
            </Link>
            <Link
              to="avis" onClick={(e) => scrollToSection(e, "avis")}
              className={`block px-3 py-2 text-base font-medium ${
                isActive("avis")
                  ? "text-emerald-500"
                  : "text-white hover:text-emerald-500"
              }`}>
              Contact
            </Link>
            <Link
              to="faq" onClick={(e) => scrollToSection(e, "faq")}
              className={`block px-3 py-2 text-base font-medium ${
                isActive("faq") || location.pathname.startsWith("/")
                  ? "text-emerald-500"
                  : "text-white hover:text-emerald-500"
              }`}
            >
              FAQ
            </Link>
            <div className="mt-4 px-3 py-2">
              <Link
                to="#contact" onClick={(e) => scrollToSection(e, "contact")}
                target="_blank"
                className="btn-primary w-full"
              >
                Contactez-nous
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
