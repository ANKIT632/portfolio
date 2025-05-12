"use client";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";

export  function Contact() {
  return (
    <section id="contact" className="p-8 bg-white">
      <h2 className="text-3xl font-bold text-center mb-6">Contact</h2>
      <div className="text-center">
        <p className="text-lg">
          <FaEnvelope className="inline mr-2" /> ankit@example.com
        </p>
        <p className="text-lg">
          <FaPhone className="inline mr-2" /> +91 1234567890
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="https://linkedin.com" className="text-blue-600 text-2xl">
            <FaLinkedin />
          </a>
          <a href="https://github.com" className="text-gray-800 text-2xl">
            <FaGithub />
          </a>
        </div>
      </div>
    </section>
  );
}