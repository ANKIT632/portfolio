"use client";

const aboutCards = [
  {
    title: "Why Hire Me?",
    color: "text-blue-700",
    items: [
      "Fullstack developer: web & app (frontend & backend)",
      "Expert in monolithic & microservices",
      "Punctual and reliable",
      "Remote-ready, team player",
    ],
  },
  {
    title: "What Interests Me?",
    color: "text-cyan-700",
    items: [
      "Building projects independently or with a team",
      "Scalable web & mobile apps",
      "Cloud-native & automation",
      "Learning new tech",
      "Efficient, real-world solutions",
    ],
  },
  {
    title: "Let's Work Together",
    color: "text-blue-700",
    items: [
      "Open to remote, freelance, full-time",
      "Work well with teams or independently",
      "Focus on efficiency & impact",
      "Grow your business with modern web & app solutions",
      "Let’s build something great!",
    ],
  },
];

const educationData = [
  {
    icon: "🎓",
    label: "B.Tech in Computer Science",
    year: "2020 - 2024",
    cgpa: "CGPA: 7.8/10",
    place: "R.D Engineering College , AKTU University",
    circle: "bg-gradient-to-br from-blue-500 to-cyan-400",
  },
  {
    icon: "🏫",
    label: "12th (Science)",
    year: "2020",
    cgpa: "CGPA: 7.2/10",
    place: "Govt. Boys Senior Secondary School , Delhi",
    circle: "bg-gradient-to-br from-pink-400 to-blue-400",
  },
];

export function AboutUs() {
  return (
    <section id="about" className="py-16 px-4 bg-gradient-to-br from-blue-50 via-white to-cyan-50 relative overflow-hidden">
      <div className="max-w-3xl mx-auto mb-12">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-400">
          About Me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {aboutCards.map((card) => (
            <div key={card.title} className="bg-white/90 rounded-xl shadow p-6 flex flex-col items-center text-center">
              <h3 className={`text-xl font-bold mb-2 ${card.color}`}>{card.title}</h3>
              <ul className="text-gray-600 text-sm list-disc list-inside space-y-1 text-left">
                {card.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Education Timeline */}
      <div className="relative max-w-2xl mx-auto mt-16">
        <h3 className="text-2xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-400 mb-10">
          🎓 Education
        </h3>
        <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-cyan-400 to-blue-400 rounded-full" />
        <div className="flex flex-col gap-12 pl-12">
          {educationData.map((edu) => (
            <div key={edu.label} className="relative flex items-start">
              <div className={`z-10 mt-1 w-6 h-6 rounded-full ${edu.circle} border-4 border-white shadow-lg flex items-center justify-center`}>
                <span role="img" aria-label="education" className="text-lg">{edu.icon}</span>
              </div>
              <div className="ml-8 bg-white rounded-xl shadow p-5 w-full">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                  <span className="font-bold text-blue-700 text-base">{edu.label}</span>
                  <span className="text-xs text-cyan-700 font-semibold bg-cyan-50 px-3 py-1 rounded-full mt-2 sm:mt-0">{edu.year}</span>
                </div>
                <div className="text-gray-600 text-sm">{edu.place}</div>
                {edu.cgpa && (
                  <div className="text-gray-500 text-xs mt-1 ml-1">{edu.cgpa}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}