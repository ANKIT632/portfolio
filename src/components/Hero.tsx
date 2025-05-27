"use client";
import { motion } from "framer-motion";
import { FaArrowDown, FaLinkedin, FaGithub, FaEnvelope, FaLaptopCode } from "react-icons/fa";
import { Link } from "react-scroll";
import Head from "next/head";

export function Hero() {
  return (
    <>
      {/* SEO */}
      <Head>
        <title>Ankit Kumar Gupta | Software Engineer & Full Stack Developer</title>
        <meta
          name="description"
          content="Ankit Kumar Gupta - Software Engineer & Full Stack Developer. Explore my portfolio, projects, and contact details."
        />
        <meta name="keywords" content="Ankit Kumar Gupta, Portfolio, Software Engineer, Full Stack Developer, Web Developer, App Developer" />
        <meta name="author" content="Ankit Kumar Gupta" />
        <meta property="og:title" content="Ankit Kumar Gupta | Software Engineer & Full Stack Developer" />
        <meta property="og:description" content="Explore the portfolio of Ankit Kumar Gupta, a creative software engineer and full stack developer." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ankitkumargupta.me" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ankitkumargupta.me" />
      </Head>

      <main>
        <section
          id="hero"
          className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden"
          aria-label="Hero section introducing Ankit Kumar Gupta"
        >
          {/* Animated Backgrounds */}
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

          {/* Content */}
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-center w-full max-w-6xl px-6 py-16">
            {/* Left: Icon */}
            <motion.div
              className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl flex flex-col items-center justify-center p-10 md:mr-16 mb-10 md:mb-0"
              initial={{ x: -100, opacity: 0, rotate: -8 }}
              animate={{ x: 0, opacity: 1, rotate: 0 }}
              transition={{ duration: 1.2, delay: 0.2, type: "spring" }}
            >
              <div className="w-40 h-40 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 flex items-center justify-center shadow-xl border-4 border-white mb-4">
                <FaLaptopCode className="text-7xl text-white" aria-label="Developer Icon" />
              </div>
            </motion.div>

            {/* Right: Text, Badges, Socials, CTA */}
            <motion.div
              className="flex-1 flex flex-col items-center md:items-start"
              initial={{ x: 100, opacity: 0, rotate: 8 }}
              animate={{ x: 0, opacity: 1, rotate: 0 }}
              transition={{ duration: 1.2, delay: 0.4, type: "spring" }}
            >
              <motion.h1
                className="text-4xl md:text-5xl  font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 drop-shadow-lg text-left"
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.7 }}
              >
                Ankit Kumar Gupta
              </motion.h1>

              <motion.p
                className="text-md md:text-xl text-left text-gray-200 font-medium max-w-2xl mb-4 leading-snug"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.1 }}
              >
                <span className="text-blue-400 font-bold">
                  Software Engineer | Full Stack Developer | GATE Aspirant.
                </span>
                <br />
                I’m a passionate software engineer who designs and builds seamless, user-focused digital solutions. With a strong foundation in full stack development and a keen eye for design, I strive to deliver products that are both innovative and intuitive—bridging technology and user experience for real-world impact.
              </motion.p>
              {/* Social Icons */}
              <motion.div
                className="flex gap-6 mt-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.3 }}
                aria-label="Social Links"
              >
                <a
                  href="https://www.linkedin.com/in/ankit-kumar-gupta-69537b228/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl text-blue-400 hover:text-blue-600 transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://github.com/ANKIT632"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl text-gray-300 hover:text-white transition-colors duration-300"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>
                <a
                  href="mailto:ankitgupta17878@gmail.com"
                  className="text-3xl text-red-400 hover:text-red-600 transition-colors duration-300"
                  aria-label="Email"
                >
                  <FaEnvelope />
                </a>
              </motion.div>

              {/* Call to Action */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.5 }}
                className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              >
                <Link
                  to="projects"
                  smooth={true}
                  duration={700}
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-md font-semibold text-white shadow-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 cursor-pointer"
                  aria-label="Scroll to Projects"
                >
                  View My Work <FaArrowDown className="ml-2 animate-bounce" />
                </Link>
                <a
                  href="https://drive.google.com/file/d/1IV-mjkcsGKXpjQbuFJLmvHb1sab9Xv2F/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-md font-semibold text-white shadow-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 cursor-pointer"
                  aria-label="View Resume"
                >
                  View Resume
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}