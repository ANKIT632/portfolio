"use client";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "certificates", label: "Certificates" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <motion.nav
      className="sticky top-0 left-0 w-full bg-gradient-to-r from-blue-900 via-cyan-900 to-blue-800 text-white shadow-lg z-50"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3">
      
        <motion.div
          className="text-xl font-extrabold tracking-tight cursor-pointer bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-200 bg-clip-text text-transparent select-none"
          whileHover={{ scale: 1.02 }}
          role="banner"
          aria-label="Ankit Kumar Gupta | Fullstack Developer Portfolio | Software Engineer | Web Developer"
          aria-live="polite"
        >
          Ankit | Software Engineer
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-1">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              smooth={true}
              duration={400}
              offset={-80}
              className="px-4 py-2 rounded-lg font-medium text-md hover:bg-gradient-to-r hover:from-blue-700 hover:to-cyan-600 hover:text-white transition-all duration-200 cursor-pointer"
              activeClass="bg-gradient-to-r from-blue-700 to-cyan-600 text-white"
              spy={true}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-b from-blue-900 via-cyan-900 to-blue-800 px-6 py-4 space-y-2 shadow-lg">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              smooth={true}
              duration={400}
              offset={-70}
              className="block px-3 py-2 rounded-lg font-medium text-lg hover:bg-gradient-to-r hover:from-blue-700 hover:to-cyan-600 hover:text-white transition-all duration-200 cursor-pointer"
              onClick={() => setIsOpen(false)}
              activeClass="bg-gradient-to-r from-blue-700 to-cyan-600 text-white"
              spy={true}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </motion.nav>
  );
}