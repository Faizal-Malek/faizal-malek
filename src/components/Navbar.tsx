
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
      
      const sections = NAV_ITEMS.map(item => 
        document.querySelector(item.href) as HTMLElement
      ).filter(Boolean);
      
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

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500",
        isScrolled
          ? "bg-black/40 backdrop-blur-xl border-b border-white/5 py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a 
            href="#" 
            className="group flex items-center gap-2 text-xl font-bold tracking-tighter font-mono"
          >
            <div className="relative">
              <span className="relative z-10 text-white group-hover:text-emerald-400 transition-colors duration-300">
                {`FM_DEV.EXE`}
              </span>
            </div>
          </a>

          {/* Desktop menu */}
          <nav className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-2">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative px-4 py-2 text-[11px] font-mono tracking-widest uppercase transition-all duration-300",
                    activeSection === item.href
                      ? "text-emerald-400"
                      : "text-gray-400 hover:text-white"
                  )}
                >
                  {`[ ${item.label} ]`}
                  {activeSection === item.href && (
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,1)]" />
                  )}
                </a>
              ))}
            </div>
            <a
              href="#contact"
              className="px-6 py-2 rounded-md bg-emerald-600/10 border border-emerald-500/50 text-emerald-400 text-xs font-mono tracking-widest hover:bg-emerald-600 hover:text-white transition-all duration-300"
            >
              RUN_CONTACT()
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden focus-ring rounded-lg p-2 bg-white/5 border border-white/10"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X size={20} className="text-emerald-400" />
            ) : (
              <Menu size={20} className="text-emerald-400" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden absolute w-full bg-[#050505]/95 backdrop-blur-2xl border-b border-white/5 transition-all duration-300 ease-in-out",
          isOpen ? "max-h-screen opacity-100 py-8" : "max-h-0 opacity-0 pointer-events-none"
        )}
      >
        <nav className="flex flex-col items-center gap-4">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "py-2 px-8 text-xs font-mono tracking-[0.2em] uppercase transition-all duration-200",
                activeSection === item.href
                  ? "text-emerald-400"
                  : "text-gray-500"
              )}
              onClick={handleLinkClick}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-4 px-10 py-3 rounded-md bg-emerald-600 text-white text-xs font-mono tracking-widest"
            onClick={handleLinkClick}
          >
            CONTACT_ME
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
