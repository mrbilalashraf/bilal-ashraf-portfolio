import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 } // 50% visible
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const navItems = ["Home", "About", "Projects", "Contact"];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0f0f0f]/90 backdrop-blur-md text-white shadow-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-semibold tracking-wide text-[#3b82f6]">
          Muhammad Bilal
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-sm font-medium">
          {navItems.map((item) => {
            const id = item.toLowerCase();
            const isActive = activeSection === id;
            return (
              <li key={item}>
                <button
                  onClick={() => handleScroll(id)}
                  className={`transition-colors duration-200 ${
                    isActive
                      ? "text-[#3b82f6]"
                      : "text-gray-300 hover:text-[#3b82f6]"
                  }`}
                >
                  {item}
                </button>
              </li>
            );
          })}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0f0f0f] border-t border-gray-800">
          <ul className="flex flex-col items-center py-4 space-y-4 text-sm font-medium">
            {navItems.map((item) => {
              const id = item.toLowerCase();
              const isActive = activeSection === id;
              return (
                <li key={item}>
                  <button
                    onClick={() => handleScroll(id)}
                    className={`transition-colors duration-200 ${
                      isActive
                        ? "text-[#3b82f6]"
                        : "text-gray-300 hover:text-[#3b82f6]"
                    }`}
                  >
                    {item}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;