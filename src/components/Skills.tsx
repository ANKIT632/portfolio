"use client";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase,
  FaJava, FaCuttlefish, FaFigma
} from "react-icons/fa";
import { SiTypescript, SiExpress, SiNextdotjs, SiGraphql, SiSocketdotio, SiMongodb, SiMysql } from "react-icons/si";

const skillsData = [
  { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
  { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
  { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-400" },
  { name: "Core Java", icon: FaJava, color: "text-red-500" },
  { name: "C", icon: FaCuttlefish, color: "text-blue-800" },
  { name: "React.js", icon: FaReact, color: "text-cyan-400" },
  { name: "Node.js", icon: FaNodeJs, color: "text-green-600" },
  { name: "Express.js", icon: SiExpress, color: "text-gray-700" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-black dark:text-white" },
  { name: "GraphQL", icon: SiGraphql, color: "text-pink-500" },
  { name: "Socket.io", icon: SiSocketdotio, color: "text-gray-800" },
  { name: "UI/UX", icon: FaFigma, color: "text-pink-400" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-700" },
  { name: "SQL", icon: FaDatabase, color: "text-indigo-500" },
  { name: "MySQL", icon: SiMysql, color: "text-blue-700" },
];

export function Skills() {
  return (
    <section id="skills" className="py-16 bg-gradient-to-br from-gray-100 via-white to-gray-200">
      <h2 className="text-4xl font-extrabold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
        My Skills
      </h2>
      <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {skillsData.map(({ name, icon: Icon, color }) => (
          <div
            key={name}
            className="group flex flex-col items-center justify-center bg-white rounded-2xl shadow-lg p-6 hover:scale-105 hover:shadow-2xl transition-transform duration-300"
          >
            <span className={`text-5xl mb-3 transition-transform duration-300 group-hover:scale-125 ${color}`}>
              <Icon title={name} />
            </span>
            <span className="font-semibold text-lg text-gray-700 group-hover:text-blue-600 transition-colors duration-300">
              {name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}