"use client";
import { motion } from "framer-motion";

export  function Hero() {
  return (
    <section id="hero" className="h-screen flex flex-col justify-center items-center bg-gray-900 text-white">
      <motion.h1
        className="text-5xl font-bold text-red-500"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm Ankit Kumar Gupta
      </motion.h1>
      <motion.p
        className="text-lg mt-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Software Engineer | Full Stack Developer
      </motion.p>
    </section>
  );
}