"use client";
import { motion } from "framer-motion";

const certificates = [
  {
    src: "https://drive.google.com/file/d/1xA-6HABirZJEWOYMYcnyv-SWsB5bSYtF/view?usp=sharing",
    alt: "Backend Development Certificate",
    title: "Backend Development",
    issuer: "PhysicsWallah",
    skills: ["Node.js", "Express.js", "REST FULL API", "MongoDB", "JWT"],
    type: "pdf",
  },
  {
    src: "https://drive.google.com/file/d/1x9utP-V63A0wS_8rpnmViHeimWchpTYD/view?usp=sharing",
    alt: "React Development Certificate",
    title: "React Development",
    issuer: "Udemy",
    skills: ["JS concept", "React.js", "React-router", "Fetch-API", "Redux.js"],
    type: "pdf",
  },
  {
    src: "https://drive.google.com/file/d/1e72npMytsMz9vtAxFt6bl1T1qcvXjDYP/view?usp=sharing",
    alt: "Webseeder Technologies Certification",
    title: "MERN Full-Stack Internship",
    issuer: "Webseeder Technologies pvt. ltd.",
    skills: ["Javascript", "React.js", "Node.js", "Express.js", "TailwindCss", "Teamwork", "Git & GitHub"],
    type: "pdf",
  },
  {
    src: "https://drive.google.com/file/d/1Yju983EtSC6DYLYkoQjAhYTks7VAKlJu/view?usp=sharing",
    alt: "Core Java Certificate",
    title: "Core Java",
    issuer: "Great Learning",
    skills: ["Java", "OOPs", "Problem Solving"],
    type: "pdf",
  },
  {
    src: "https://drive.google.com/file/d/1YsDWa9eWcG7lu75jFGg5Gniel_Ue_17N/view?usp=sharing",
    alt: "Competition Certificate Round 1",
    title: "Competition Certificate - Round 1",
    issuer: "Coding Ninjas",
    skills: ["Participation", "Problem Solving","Aptitude & Reasoning"],
    type: "pdf",
  },
  {
    src: "https://drive.google.com/file/d/1YtNycFLJpHuHjKyIrvj3CHU4p3vWCLgM/view?usp=sharing",
    alt: "Competition Certificate Round 2",
    title: "Competition Certificate - Round 2",
    issuer: "Coding Ninjas",
    skills: ["Participation", "Problem Solving","Data Structures & Algorithms"],
    type: "pdf",
  },
];

export function Certificates() {
  return (
    <section id="certificates" className="py-16 px-4 bg-gradient-to-br from-blue-50 via-white to-cyan-50 relative overflow-hidden">
      {/* Decorative background */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-br from-blue-400 via-cyan-400 to-blue-200 opacity-20 blur-3xl rounded-full" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 w-80 h-80 bg-gradient-to-tr from-cyan-400 via-blue-300 to-blue-400 opacity-20 blur-2xl rounded-full" />

      <div className="relative z-10 flex flex-col items-center mb-12">
        <h2 className="text-4xl font-extrabold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-400">
          Certificates
        </h2>
        <p className="text-center text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mb-4">
          My professional certifications showcase my commitment to continuous learning and expertise in technologies.
        </p>
        <div className="w-24 h-1 mt-2 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 rounded-full" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10">
        {certificates.map((cert, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08, type: "spring" }}
            className="bg-white rounded-2xl shadow-xl border border-blue-100 flex flex-col items-center p-5 hover:scale-105 transition-all duration-300 group"
          >
            <div className="relative w-full flex justify-center mb-3">
              <iframe
                src={cert.src.replace("/view?usp=sharing", "/preview")}
                title={cert.alt}
                width="320"
                height="150"
                className="rounded-xl w-full h-[150px] border"
                allow="autoplay"
              />
              <span className="absolute top-2 right-2 bg-gradient-to-r from-blue-500 to-cyan-400 text-white text-xs px-3 py-1 rounded-full shadow font-semibold">
                Verified
              </span>
            </div>
            <span className="text-lg font-bold text-blue-700 text-center mb-1">{cert.title}</span>
            <span className="text-xs text-cyan-700 text-center mb-2">Issued by: {cert.issuer}</span>
            <div className="flex flex-wrap justify-center gap-2 mt-1">
              {cert.skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-cyan-100 text-cyan-700 px-2 py-1 rounded-full text-xs font-semibold"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
