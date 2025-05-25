"use client";
const experiences = [
  {
    company: "Tech Solutions Pvt Ltd",
    role: "Frontend Developer",
    period: "2022 - Present",
    description:
      "Developed and maintained modern web applications using React and Next.js. Collaborated with UI/UX teams to deliver seamless user experiences and optimized performance.",
  },
  {
    company: "Web Innovators",
    role: "Intern Developer",
    period: "2021 - 2022",
    description:
      "Assisted in building responsive websites and dashboards. Gained hands-on experience with JavaScript, Tailwind CSS, and agile workflows.",
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
                  <span className="text-xs sm:text-sm text-cyan-700 font-semibold bg-cyan-50 px-3 py-1 rounded-full mt-2 sm:mt-0">
                    {exp.period}
                  </span>
                </div>
                <div className="font-semibold text-cyan-700 mb-1 text-base sm:text-lg">
                  {exp.role}
                </div>
                <div className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {exp.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}