"use client";
import { FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";

export  function Skills() {
  return (
    <section id="skills" className="p-8 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-6">Skills</h2>
      <div className="flex justify-center space-x-8 text-4xl text-gray-700">
        <FaReact title="React" />
        <FaNodeJs title="Node.js" />
        <FaDatabase title="Database" />
        <FaHtml5 title="HTML5" />
        <FaCss3Alt title="CSS3" />
        <FaJs title="JavaScript" />
      </div>
    </section>
  );
}