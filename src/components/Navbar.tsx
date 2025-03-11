
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
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
        "fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-md",
        isScrolled
          ? "bg-background/80 shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="section-container py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="text-lg font-bold tracking-tight">
            Faizal Malek
          </a>

          {/* Desktop menu */}
          <nav className="hidden md:flex items-center space-x-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "nav-link",
                  activeSection === item.href && "nav-link-active after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-primary after:rounded-full"
                )}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="btn-primary ml-4"
            >
              Contact Me
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden focus-ring rounded-md p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden absolute w-full bg-background border-b transition-all duration-300 ease-in-out",
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        )}
      >
        <nav className="flex flex-col py-4 px-4">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "py-3 px-4 rounded-md",
                activeSection === item.href
                  ? "text-foreground bg-accent"
                  : "text-muted-foreground"
              )}
              onClick={handleLinkClick}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn-primary mt-4 mx-4"
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
