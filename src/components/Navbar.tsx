
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, Home } from "lucide-react";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "My Services", href: "#services" },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Get all sections for tracking active section
      const sections = NAV_ITEMS.map(item => 
        document.querySelector(item.href) as HTMLElement
      ).filter(Boolean);
      
      // Find the section that is currently in view
      const currentSection = sections.find(section => {
        const rect = section.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });
      
      if (currentSection) {
        setActiveSection(`#${currentSection.id}`);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking a link (mobile)
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500",
        isScrolled
          ? "bg-white/80 backdrop-blur-xl shadow-lg border-b border-gray-100"
          : "bg-transparent"
      )}
    >
      <div className="section-container py-4">
        <div className="flex items-center justify-between">
          <a 
            href="#" 
            className="group flex items-center gap-2 text-xl font-bold tracking-tight"
          >
            <div className="relative">
              <span className="relative z-10 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient-x">
                Faizal Malek
              </span>
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-lg blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
            </div>
          </a>

          {/* Desktop menu */}
          <nav className="hidden md:flex items-center">
            <div className={cn(
              "flex items-center gap-1 px-2 py-2 rounded-full transition-all duration-300",
              isScrolled && "bg-gray-50/50"
            )}>
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300",
                    activeSection === item.href
                      ? "text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-md"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                  )}
                >
                  {item.label}
                </a>
              ))}
            </div>
            <a
              href="#contact"
              className="ml-4 px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-medium transform transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 relative overflow-hidden group"
            >
              <span className="relative z-10">Contact Me</span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className={cn(
              "md:hidden focus-ring rounded-full p-2.5 transition-all duration-300",
              isScrolled ? "bg-gray-100 hover:bg-gray-200" : "bg-white/50 backdrop-blur-sm hover:bg-white/80"
            )}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X size={20} className="text-gray-700" />
            ) : (
              <Menu size={20} className="text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden absolute w-full bg-white/95 backdrop-blur-xl border-b border-gray-100 transition-all duration-300 ease-in-out shadow-lg",
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        )}
      >
        <nav className="flex flex-col py-4 px-4 gap-2">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "py-3 px-4 rounded-xl transition-all duration-200 font-medium",
                activeSection === item.href
                  ? "text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-md"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              )}
              onClick={handleLinkClick}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-2 mx-4 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-medium text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95"
            onClick={handleLinkClick}
          >
            Contact Me
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
