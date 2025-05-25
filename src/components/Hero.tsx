"use client";
import { motion } from "framer-motion";
import { FaArrowDown, FaLinkedin, FaGithub, FaEnvelope, FaLaptopCode } from "react-icons/fa";
import { Link } from "react-scroll";
import Head from "next/head";

export function Hero() {
  return (
    <>
      {/* SEO  */}
      <Head>
        <title>Ankit Kumar Gupta | Software Engineer, Problem Solver & Unique Designer</title>
        <meta
          name="description"
          content="Ankit Kumar Gupta - Software Engineer, Problem Solver, Unique Designer, and Creative Thinker. Explore my portfolio, projects, and contact details."
        />
        <meta name="keywords" content="Ankit Kumar Gupta, Portfolio, Software Engineer, Problem Solver, Unique Designer, Web Developer, React, Node.js, Contact" />
        <meta name="author" content="Ankit Kumar Gupta" />
        <meta property="og:title" content="Ankit Kumar Gupta | Software Engineer & Unique Designer" />
        <meta property="og:description" content="Explore the portfolio of Ankit Kumar Gupta, a creative software engineer and unique designer. Contact: ankit@example.com" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/your-og-image.png" />
       <meta property="og:url" content="https://ankitkumargupta.me" />
       <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://yourdomain.com/" />
      </Head>

      <main>
        <section
          id="hero"
          className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden"
          aria-label="Hero section introducing Ankit Kumar Gupta"
        >
          {/* Layered Animated Backgrounds */}
          <motion.div
            className="absolute top-[-15%] left-[-15%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-blue-500 to-purple-600 opacity-30 blur-3xl"
            animate={{ scale: [1, 1.15, 1], rotate: [0, 30, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-[-15%] right-[-15%] w-[420px] h-[420px] rounded-full bg-gradient-to-tr from-pink-500 to-yellow-400 opacity-20 blur-3xl"
            animate={{ scale: [1, 1.08, 1], rotate: [0, -20, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 w-[1200px] h-[1200px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-radial from-blue-400/10 via-purple-400/10 to-transparent"
            animate={{ scale: [1, 1.03, 1], rotate: [0, 360, 0] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />

          {/* Vertical Timeline Accent */}
          <div className="absolute left-4 top-0 h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full shadow-2xl opacity-80" />

          {/* Content Layout */}
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-center w-full max-w-6xl px-6 py-16">
            {/* Left: Floating Glass Card with Image/Icon */}
            <motion.div
              className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl flex flex-col items-center justify-center p-10 md:mr-16 mb-10 md:mb-0"
              initial={{ x: -100, opacity: 0, rotate: -8 }}
              animate={{ x: 0, opacity: 1, rotate: 0 }}
              transition={{ duration: 1.2, delay: 0.2, type: "spring" }}
            >
              <div className="w-40 h-40 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 flex items-center justify-center shadow-xl border-4 border-white mb-4">
                {/* Replace with your <Image ... /> */}
                <FaLaptopCode className="text-7xl text-white" aria-label="Developer Icon" />
              </div>
              <span className="text-xs bg-black bg-opacity-60 px-2 py-1 rounded-full text-white mt-2">
                Your Image Here
              </span>
            </motion.div>

            {/* Right: Text, Badges, Socials, CTA */}
            <motion.div
              className="flex-1 flex flex-col items-center md:items-start"
              initial={{ x: 100, opacity: 0, rotate: 8 }}
              animate={{ x: 0, opacity: 1, rotate: 0 }}
              transition={{ duration: 1.2, delay: 0.4, type: "spring" }}
            >
              {/* Animated Intro */}
              <motion.p
                className="text-base md:text-lg text-blue-300 mb-2 tracking-wide"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <span className="inline-block animate-bounce">🚀</span> Welcome! Let’s build the future together.
              </motion.p>

              {/* Name */}
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 drop-shadow-lg text-center md:text-left"
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.7 }}
              >
                Ankit Kumar Gupta
              </motion.h1>

              {/* Personal Qualities Badges */}
              <motion.div
                className="flex flex-wrap gap-3 mt-4 mb-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.9 }}
                aria-label="Personal Qualities"
              >
                <span className="flex items-center space-x-1 bg-blue-500/20 text-blue-300 px-4 py-1 rounded-full text-sm font-semibold">
                  <span>🚀</span> <span>Problem Solver</span>
                </span>
                <span className="flex items-center space-x-1 bg-purple-500/20 text-purple-300 px-4 py-1 rounded-full text-sm font-semibold">
                  <span>🎨</span> <span>Unique Designer</span>
                </span>
                <span className="flex items-center space-x-1 bg-pink-500/20 text-pink-300 px-4 py-1 rounded-full text-sm font-semibold">
                  <span>🤝</span> <span>Team Player</span>
                </span>
                <span className="flex items-center space-x-1 bg-green-500/20 text-green-300 px-4 py-1 rounded-full text-sm font-semibold">
                  <span>💡</span> <span>Creative Thinker</span>
                </span>
                <span className="flex items-center space-x-1 bg-yellow-500/20 text-yellow-300 px-4 py-1 rounded-full text-sm font-semibold">
                  <span>⚡</span> <span>Fast Learner</span>
                </span>
              </motion.div>

              {/* Unique Self-Intro */}
              <motion.p
                className="text-lg md:text-xl text-gray-200 font-medium text-center md:text-left max-w-xl"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.1 }}
              >
                <span className="text-blue-400 font-bold">Engineer. Creator. Problem Solver.</span>
                <br />
                I craft <span className="text-purple-400 font-bold">beautiful</span> and <span className="text-pink-400 font-bold">high-performance</span> web apps.<br />
                My journey blends <span className="text-blue-300">React</span>, <span className="text-purple-300">Node.js</span>, and <span className="text-green-300">cutting-edge tech</span> with a passion for design and user experience.<br />
                <span className="italic text-gray-400">&quot;Turning ideas into reality, one line of code at a time.&quot;</span>
              </motion.p>

              {/* Social Icons */}
              <motion.div
                className="flex flex-col md:flex-row items-center md:items-end space-y-4 md:space-y-0 md:space-x-6 mt-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.3 }}
                aria-label="Social Links"
              >
                <motion.a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl text-blue-400 hover:text-blue-600 transition-colors duration-300"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </motion.a>
                <motion.a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl text-gray-300 hover:text-white transition-colors duration-300"
                  whileHover={{ scale: 1.2, rotate: -10 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="GitHub"
                >
                  <FaGithub />
                </motion.a>
                <motion.a
                  href="mailto:ankit@example.com"
                  className="text-3xl text-red-400 hover:text-red-600 transition-colors duration-300"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Email"
                >
                  <FaEnvelope />
                </motion.a>
              </motion.div>

              {/* Call to Action */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.5 }}
                className="mt-10 flex justify-center md:justify-start"
              >
                <Link
                  to="projects"
                  smooth={true}
                  duration={700}
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-lg font-semibold text-white shadow-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 cursor-pointer"
                  aria-label="Scroll to Projects"
                >
                  View My Work <FaArrowDown className="ml-2 animate-bounce" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}