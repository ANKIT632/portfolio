import Image from "next/image";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  liveLink: string;
  githubRepo: string;
  tech: string[];
}

export default function ProjectCard({
  title,
  description,
  image,
  liveLink,
  githubRepo,
  tech,
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, type: "spring" }}
      className="relative bg-gradient-to-br from-blue-900/90 via-blue-800/80 to-cyan-800/80 rounded-2xl overflow-hidden shadow-xl border border-blue-400/30 group"
    >
      {/* Simple Unique RGB Glow */}
      <div className="absolute -inset-1 z-0 bg-gradient-to-tr from-blue-500 via-cyan-400 to-blue-300 opacity-40 blur-xl group-hover:opacity-60 transition-all duration-300" />
      <div className="relative z-10 p-5 flex flex-col h-full">
        <div className="overflow-hidden rounded-2xl mb-4 shadow-lg">
          <Image
            src={image}
            alt={title}
            width={320}
            height={140}
            className="rounded-2xl object-cover w-full h-[140px] group-hover:scale-110 transition-transform duration-700"
            priority
          />
        </div>
        <h2 className="text-2xl font-extrabold text-center text-white drop-shadow-lg mb-2 tracking-tight">
          {title}
        </h2>
        {/* Tech Stack First */}
        <div className="flex flex-wrap justify-center gap-2 mt-2 mb-3">
          {tech.map((t) => (
            <span
              key={t}
              className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-700/30 text-blue-100 border border-blue-400/30 shadow"
            >
              {t}
            </span>
          ))}
        </div>
        {/* Description After Tech */}
        <div
          className="mt-1 text-base text-center text-white/95 font-semibold bg-blue-900/70 px-3 py-2 rounded-xl shadow-lg mb-2 overflow-y-auto custom-scroll"
          style={{ maxHeight: "112px", minHeight: "112px" }}
        >
          {description}
        </div>
     
<div className="flex justify-center gap-4 mt-auto">
  {liveLink && liveLink !== "#" && (
    <a
      href={liveLink}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-600 text-white text-xs font-bold shadow-lg hover:scale-105 active:scale-95 transition-all duration-200"
    >
      <FaExternalLinkAlt className="mb-0.5" /> Live
    </a>
  )}
  {githubRepo && githubRepo !== "#" && (
    <a
      href={githubRepo}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-gray-900 to-blue-900 text-white text-xs font-bold shadow-lg hover:scale-105 active:scale-95 transition-all duration-200"
    >
      <FaGithub className="mb-0.5" /> Code
    </a>
  )}
</div>

      </div>
    </motion.div>
  );
}