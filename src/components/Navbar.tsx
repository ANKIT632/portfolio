"use client";

import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "certificates", label: "Certificates" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <motion.nav
      className="sticky top-0 left-0 w-full bg-black text-white py-4 shadow-lg z-50"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <motion.div
          className="text-xl font-bold cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Portfolio
        </motion.div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } absolute top-full right-0 w-full max-md:w-[70%] bg-black md:static md:w-auto md:flex md:items-center md:space-x-5`}
        >
          {navItems.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 0.96, color: "#1e90ff" }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer"
            >
              <Link
                to={item.id}
                smooth={true}
                duration={200}
                className="block  border-y border-white  md:inline-block text-lg px-4  max-md:py-1 font-medium hover:text-blue-400 transition-colors duration-300"
                onClick={() => setIsOpen(false)} // Close menu on link click
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}