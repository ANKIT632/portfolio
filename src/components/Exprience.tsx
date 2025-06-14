"use client";

const experiences = [
  {
    company: "Webseeder Technologies Pvt Ltd",
    role: "Full Stack Web Developer Intern",
    period: "Jul 2024 - Sept 2024",
    remote: true,
    description: (
      <>
        • Developed and maintained full-stack web applications using MongoDB, Express.js, React.js, and Node.js.<br />
        • Collaborated with a team to design and implement scalable, user-friendly features (e.g., Hotel Management System, Infinity Talent ERP web application).<br />
        • Used Git for version control and collaborated in an Agile development environment; participated in code reviews, debugging, and testing to maintain high-quality standards.
      </>
    ),
    keySkills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "Git & GitHub",
      "Agile",
      "Teamwork"
    ],
  },
  {
    company: "Startup Project (Development)",
    role: "Founder & Developer",
    period: "Mar 2025 - Present",
    remote: true,
    description: (
      <>
       It is a web-based exam preparation platform that offers full-length mock tests, previous year questions (PYQs), and detailed performance analytics. Users can filter questions by subject, topic, and difficulty, and also create custom tests based on preferences. The platform simulates real exam environments and helps students identify strengths and weaknesses for focused, effective, and personalized learning.
      </>
    ),
    keySkills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "Motion",
      "Product Design",
      "Web Development",
      "Git & GitHub",
      "Leadership",
      "Entrepreneurship",
      "..."
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-16 px-4 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-400 drop-shadow-lg">
        Experience
      </h2>
      <div className="relative max-w-3xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-cyan-400 to-blue-400 rounded-full" />
        <div className="flex flex-col gap-16">
          {experiences.map((exp, i) => (
            <div key={i} className="relative flex items-start group">
              {/* Circle with glow */}
              <div className="z-10 mt-1 w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 border-4 border-white shadow-xl group-hover:scale-110 transition-transform duration-300" />
              {/* Content */}
              <div className="ml-12 bg-white/90 rounded-2xl shadow-xl p-6 w-full border border-blue-100 group-hover:shadow-2xl transition-shadow duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <span className="font-bold text-blue-700 text-lg sm:text-xl tracking-wide">
                    {exp.company}
                  </span>
                  <div className="flex  justify-between gap-2 mt-2 sm:mt-0">
                    <span className="text-xs sm:text-sm text-cyan-700 font-semibold bg-cyan-50 px-3 py-1 rounded-full">
                      {exp.period}
                    </span>
                    {exp.remote && (
                      <span className="text-xs sm:text-sm text-green-700 font-semibold bg-green-50 px-3 py-1 rounded-full">
                        Remote
                      </span>
                    )}
                  </div>
                </div>
                <div className="font-semibold text-cyan-700 mb-1 text-base sm:text-lg">
                  {exp.role}
                </div>
                <div className="text-gray-600 text-sm sm:text-base leading-relaxed mb-2">
                  {exp.description}
                </div>

                {exp.keySkills && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {exp.keySkills.map((skill) => (
                      <span
                        key={skill}
                        className="bg-cyan-100 text-cyan-700 px-2 py-1 rounded-full text-xs font-semibold"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}