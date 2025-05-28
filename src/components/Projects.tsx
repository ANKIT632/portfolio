"use client";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A modern, animated portfolio built with Next.js, Tailwind CSS, and Framer Motion. Features responsive design, dark mode, and smooth page transitions.",
    image: "https://drive.google.com/uc?export=view&id=1p0qpOrv4uhnVpsKWG2658B6FTelOLnbr",
    liveLink: "https://ankitkumargupta.me",
    githubRepo: "#",
    tech: ["TypeScript", "Next.js", "React", "Tailwind CSS", "Framer Motion ","SEO"],
  },
  {
    title: "Image Gallery",
    description:
      "A user-friendly React web app to view, search, and download images with a simple interface and web search integration.",
    image: "https://drive.google.com/uc?export=view&id=1-5DM3Zn0ck2E4kKDRB5NXM_m_rkRYPUl",
    liveLink: "https://imagegallery0.netlify.app/",
    githubRepo: "#",
    tech: [
      "Bootstrap (Framework)",
      "CSS",
      "HTML",
      "JavaScript",
      "jsx",
      "React.js",
      "Redux Thunk",
      "Redux.js",
      "unsplash API",
      "Axios",
    ],
  },
  {
    title: "EcoEstate Application",
    description:
      "EcoEstate is a real estate app offering seamless property listings. The app features advanced search by area, property name, and user reviews. It also includes eco-friendly home features, allowing users to create profiles, schedule viewings, and manage property details. Built with JavaScript, React.js, Context API, TailwindCSS, Node.js, Express.js, MongoDB, JWT, REST API, and Postman. Deployed on Vercel.",
    image: "https://drive.google.com/uc?export=view&id=1Ps9uFEP4eDrxvJUn74M0IbaMxvvv76Nf",
    liveLink: "https://ecostate.vercel.app/",
    githubRepo: "#",
    tech: [
      "JavaScript",
      "React.js",
      "Context API",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "REST API",
      "Postman",
      "Vercel",
      "Axios",
    ],
  },
  {
    title: "Image-Craft",
    description:
      "Transformed the landscape of AI-powered image generation with Image-Craft, revolutionizing the way images are created and utilized. Pioneered the development of Image-Craft, a cutting-edge AI Image Generation application that has enabled unprecedented levels of creativity and innovation in the field of computer vision and artificial intelligence. Built with MERN stack, Cloudinary, and OpenAI API.",
    image: "https://drive.google.com/uc?export=view&id=1NNs-GgvkyTDv0uXm6UI7DmC8epgtB_37",
    liveLink: "#",
    githubRepo: "#",
    tech: [

      "JavaScript",
      "OpenAI API",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Cloudinary",
      "Tailwind CSS",
      "Axios",

    ],
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
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 drop-shadow-lg tracking-tight text-center">
          My Projects
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl text-center">
          A showcase of my work—<span className="text-blue-500 font-semibold">modern</span>, <span className="text-purple-500 font-semibold">scalable</span>, and <span className="text-pink-500 font-semibold">creative</span> solutions.
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