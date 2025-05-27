"use client";

import { FaEnvelope, FaLinkedin, FaWhatsapp, FaGithub, FaMapMarkerAlt } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";

export function Footer() {
  return (
    <footer className="py-12 px-4 bg-gradient-to-r from-blue-900 via-cyan-900 to-blue-800 text-white relative overflow-hidden">
      {/* Decorative circles */}
      <div className="pointer-events-none absolute -top-10 -left-10 w-40 h-40 bg-cyan-400 opacity-20 blur-2xl rounded-full" />
      <div className="pointer-events-none absolute -bottom-10 -right-10 w-32 h-32 bg-blue-400 opacity-20 blur-2xl rounded-full" />

      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-8 relative z-10">
        {/* Left: Name & Address */}
        <div className="flex flex-col items-center sm:items-start gap-2">
          <span className="text-lg font-bold text-cyan-300">Ankit Kumar Gupta</span>
          <span className="flex items-center gap-2 text-xs text-cyan-100 opacity-80">
            <FaMapMarkerAlt className="text-cyan-400" /> India, Remote Worldwide
          </span>
          <span className="text-xs text-cyan-100 opacity-80">Software Engineer | Fullstack Developer</span>
        </div>
        {/* Center: Quick Links */}
        <div className="flex flex-col items-center gap-2">
          <span className="font-semibold text-cyan-200 mb-1">Quick Links</span>
          <div className="flex gap-4 text-sm">
            <ScrollLink to="about" smooth={true} duration={500} className="hover:text-cyan-400 transition-colors cursor-pointer">About</ScrollLink>
            <ScrollLink to="skills" smooth={true} duration={500} className="hover:text-cyan-400 transition-colors cursor-pointer">Skills</ScrollLink>
            <ScrollLink to="experience" smooth={true} duration={500} className="hover:text-cyan-400 transition-colors cursor-pointer">Experience</ScrollLink>
            <ScrollLink to="projects" smooth={true} duration={500} className="hover:text-cyan-400 transition-colors cursor-pointer">Projects</ScrollLink>
            <ScrollLink to="contact" smooth={true} duration={500} className="hover:text-cyan-400 transition-colors cursor-pointer">Contact</ScrollLink>
          </div>
        </div>
        {/* Right: Socials */}
        <div className="flex flex-col items-center sm:items-end gap-2">
          <span className="font-semibold text-cyan-200 mb-1">Connect</span>
          <div className="flex gap-5 text-2xl">
            <a
              href="mailto:ankitgupta17878@gmail.com"
              aria-label="Email"
              className="hover:text-cyan-400 transition-colors"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://www.linkedin.com/in/ankit-kumar-gupta-69537b228/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-cyan-400 transition-colors"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/ANKIT632"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-cyan-400 transition-colors"
            >
              <FaGithub />
            </a>
            <a
              href="https://wa.me/9311062533"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="hover:text-cyan-400 transition-colors"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-xs text-cyan-200 opacity-70 z-10 relative">
        Designed &amp; built with <span className="text-pink-400">♥</span> using Next.js, Tailwind CSS &amp; Motion.js <br />
        &copy; {new Date().getFullYear()} Ankit Kumar Gupta. All rights reserved.
      </div>
    </footer>
  );
}