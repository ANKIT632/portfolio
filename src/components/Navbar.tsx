"use client";
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope, FaCertificate } from "react-icons/fa";

export  function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 fixed w-full top-0 z-10">
      <ul className="flex justify-center space-x-8">
        <li className="hover:text-blue-400">
          <a href="#hero" className="flex items-center">
            <FaHome className="mr-2" /> Home
          </a>
        </li>
        <li className="hover:text-blue-400">
          <a href="#about" className="flex items-center">
            <FaUser className="mr-2" /> About
          </a>
        </li>
        <li className="hover:text-blue-400">
          <a href="#projects" className="flex items-center">
            <FaProjectDiagram className="mr-2" /> Projects
          </a>
        </li>
        <li className="hover:text-blue-400">
          <a href="#certificates" className="flex items-center">
            <FaCertificate className="mr-2" /> Certificates
          </a>
        </li>
        <li className="hover:text-blue-400">
          <a href="#contact" className="flex items-center">
            <FaEnvelope className="mr-2" /> Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}