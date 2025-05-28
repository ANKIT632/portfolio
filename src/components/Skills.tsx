"use client";
import React from "react";
import {
  FaHtml5, FaSearch, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase,
  FaJava, FaCuttlefish, FaFigma, FaNetworkWired
} from "react-icons/fa";
import {
  SiTypescript, SiExpress, SiGraphql, SiSocketdotio, SiMongodb, SiMysql
} from "react-icons/si";
import { MdApi } from "react-icons/md";
import { TbLetterN } from "react-icons/tb";
import Head from "next/head";
import { SiRedux, } from "react-icons/si";


const skillsData = [
  { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
  { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
  { name: "Tailwind CSS", icon: FaCss3Alt, color: "text-cyan-500" },
  { name: "Bootstrap", icon: FaCss3Alt, color: "text-violet-700" },
  { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-400" },
  { name: "Core Java", icon: FaJava, color: "text-red-500" },
  { name: "C", icon: FaCuttlefish, color: "text-blue-800" },
  { name: "React.js", icon: FaReact, color: "text-cyan-400" },
  { name: "Redux (State Management)", icon: SiRedux, color: "text-purple-700" },
  { name: "Node.js", icon: FaNodeJs, color: "text-green-600" },
  { name: "Express.js", icon: SiExpress, color: "text-gray-700" },
  { name: "Next.js", icon: TbLetterN, color: "text-gray-900" },
  { name: "REST API", icon: MdApi, color: "text-blue-400" },
  { name: "GraphQL", icon: SiGraphql, color: "text-pink-500" },
  { name: "Socket.io", icon: SiSocketdotio, color: "text-gray-800" },
  { name: "UI/UX", icon: FaFigma, color: "text-pink-400" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-700" },
  { name: "SQL", icon: FaDatabase, color: "text-indigo-500" },
  { name: "MySQL", icon: SiMysql, color: "text-blue-700" },
  { name: "Data Structure & Algorithms", icon: FaDatabase, color: "text-amber-600" },
  { name: "Computer Networking", icon: FaNetworkWired, color: "text-green-800" },
  { name: "SEO", icon: FaSearch, color: "text-green-600" },
];

export function Skills() {
  return (
    <section
      id="skills"
      className="py-20 px-4 bg-gradient-to-br from-gray-100 via-white to-gray-200 relative overflow-hidden"
      aria-label="Skills Section"
    >
      {/* SEO */}
      <Head>
        <title>Skills | Ankit Kumar Gupta - Web Developer & Designer</title>
        <meta
          name="description"
          content="Explore the technical skills of Ankit Kumar Gupta: HTML5, CSS3, JavaScript, TypeScript, React.js, Node.js, Next.js, REST API, GraphQL, UI/UX, MongoDB, SQL, MySQL, Data Structure & Algorithms, Computer Networking and more."
        />
        <meta name="keywords" content="Ankit Kumar Gupta,full stack developer,Software Engineer Skills, Web Developer, Next.js, React.js, Node.js, REST API, SQL, MongoDB, UI/UX, Portfolio, Data Structure, Algorithms, Computer Networking" />
        <meta name="author" content="Ankit Kumar Gupta" />
      </Head>
      {/* Unique Header */}
      <div className="flex flex-col items-center mb-14">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 drop-shadow-lg tracking-tight">
          My Skills
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl text-center">
          Technologies and tools I use to craft <span className="text-blue-500 font-semibold">robust</span>, <span className="text-purple-500 font-semibold">scalable</span>, and <span className="text-pink-500 font-semibold">Better</span> digital experiences.
        </p>
        <div className="w-32 h-1 mt-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full shadow-lg" />
      </div>
      {/* Skills Grid */}
      <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {skillsData.map(({ name, icon: Icon, color }) => (
          <div
            key={name}
            className="group flex flex-col items-center justify-center bg-white/80 rounded-2xl shadow-lg p-4 hover:scale-105 hover:shadow-2xl transition-transform duration-300 border border-gray-100"
          >
            <span className={`text-4xl mb-3 transition-transform duration-300 group-hover:scale-125 ${color}`}>
              {typeof Icon === "function" ? <Icon /> : React.createElement(Icon, { title: name })}
            </span>
            <span className="font-semibold text-lg text-gray-700 group-hover:text-blue-600 transition-colors duration-300 tracking-wide text-center">
              {name}
            </span>
          </div>
        ))}
      </div>
      {/* Decorative background accent */}
      <div className="pointer-events-none absolute -top-20 -right-32 w-96 h-96 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 opacity-20 blur-3xl rounded-full z-0" />
    </section>
  );
}