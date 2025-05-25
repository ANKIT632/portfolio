"use client";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Portfolio Website",
    description: "A modern, animated portfolio built with Next.js, Tailwind CSS, and Framer Motion. Features responsive design, dark mode, and smooth page transitions.",
    image: "/images/project1.jpg",
    liveLink: "https://your-portfolio-live-link.com",
    githubRepo: "https://github.com/yourusername/portfolio",
    tech: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Chat App",
    description: "A real-time chat application with Socket.io, Node.js, and MongoDB. Includes authentication, group chats, and emoji support.",
    image: "/images/project2.jpg",
    liveLink: "https://your-chatapp-live-link.com",
    githubRepo: "https://github.com/yourusername/chat-app",
    tech: ["Node.js", "Socket.io", "MongoDB", "React"],
  },
  {
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform with product search, cart, payment integration, and admin dashboard.",
    image: "/images/project3.jpg",
    liveLink: "https://your-ecommerce-live-link.com",
    githubRepo: "https://github.com/yourusername/ecommerce-platform",
    tech: ["React", "Redux", "Express.js", "Stripe"],
  },
  {
    title: "Blog CMS",
    description: "A headless CMS for blogs with markdown support, user roles, and SEO optimization.",
    image: "/images/project4.jpg",
    liveLink: "https://your-blogcms-live-link.com",
    githubRepo: "https://github.com/yourusername/blog-cms",
    tech: ["Next.js", "MongoDB", "GraphQL", "Tailwind CSS"],
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="relative py-20 px-4 bg-gradient-to-br from-blue-50 via-white to-pink-50 overflow-hidden"
      aria-label="Projects Section"
    >
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 opacity-20 blur-3xl rounded-full z-0" />
      <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-gradient-to-tr from-pink-400 via-yellow-300 to-blue-400 opacity-20 blur-3xl rounded-full z-0" />

      <div className="relative z-10 flex flex-col items-center mb-14">
        <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 drop-shadow-lg tracking-tight text-center">
          <span className="inline-block animate-pulse">🚀</span> My Projects
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl text-center">
          A showcase of my favorite work—<span className="text-blue-500 font-semibold">modern</span>, <span className="text-purple-500 font-semibold">scalable</span>, and <span className="text-pink-500 font-semibold">creative</span> solutions.
        </p>
        <div className="w-32 h-1 mt-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full shadow-lg" />
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}