"use client";

export function AboutUs() {
  return (
    <section id="about" className="py-16 px-4 bg-gradient-to-br from-blue-50 via-white to-cyan-50 relative overflow-hidden">
      <div className="relative z-10 flex flex-col items-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-400">
          <span className="inline-block animate-pulse">👋</span> About Me
        </h2>
      </div>
      <div className="relative z-10 max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white/90 rounded-xl shadow p-6 flex flex-col items-center text-center">
          <h3 className="text-xl font-bold text-blue-700 mb-2">Why Hire Me?</h3>
          <ul className="text-gray-600 text-sm list-disc list-inside space-y-1 text-left">
            <li>Fullstack developer: web & app (frontend & backend)</li>
            <li>Expert in monolithic & microservices</li>
            <li>Punctual and reliable</li>
            <li>Remote-ready, team player</li>
          </ul>
        </div>
        <div className="bg-white/90 rounded-xl shadow p-6 flex flex-col items-center text-center">
          <h3 className="text-xl font-bold text-cyan-700 mb-2">What Interests Me?</h3>
          <ul className="text-gray-600 text-sm list-disc list-inside space-y-1 text-left">
            <li>Building projects independently or with a team</li>
            <li>Scalable web & mobile apps</li>
            <li>Cloud-native & automation</li>
            <li>Learning new tech</li>
            <li>Efficient, real-world solutions</li>
          </ul>
        </div>
        <div className="bg-white/90 rounded-xl shadow p-6 flex flex-col items-center text-center">
          <h3 className="text-xl font-bold text-blue-700 mb-2">Let's Work Together</h3>
          <ul className="text-gray-600 text-sm list-disc list-inside space-y-1 text-left">
            <li>Open to remote, freelance, full-time</li>
            <li>Work well with teams or independently</li>
            <li>Focus on efficiency & impact</li>
            <li>Grow your business with modern web & app solutions</li>
            <li>Let’s build something great!</li>
          </ul>
        </div>
      </div>

      {/* Education Timeline */}
      <div className="relative max-w-2xl mx-auto mt-16">
        <h3 className="text-2xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-400 mb-10">
          🎓 Education
        </h3>
        {/* Vertical line */}
        <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-cyan-400 to-blue-400 rounded-full" />
        <div className="flex flex-col gap-12 pl-12">
          {/* B.Tech */}
          <div className="relative flex items-start">
            {/* Circle */}
            <div className="z-10 mt-1 w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 border-4 border-white shadow-lg flex items-center justify-center">
              <span role="img" aria-label="graduation cap" className="text-lg">🎓</span>
            </div>
            {/* Content */}
            <div className="ml-8 bg-white rounded-xl shadow p-5 w-full">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                <span className="font-bold text-blue-700 text-base">B.Tech in Computer Science</span>
                <span className="text-xs text-cyan-700 font-semibold bg-cyan-50 px-3 py-1 rounded-full mt-2 sm:mt-0">2021</span>
              </div>
              <div className="text-gray-600 text-sm">XYZ University</div>
            </div>
          </div>
          {/* 12th */}
          <div className="relative flex items-start">
            {/* Circle */}
            <div className="z-10 mt-1 w-6 h-6 rounded-full bg-gradient-to-br from-pink-400 to-blue-400 border-4 border-white shadow-lg flex items-center justify-center">
              <span role="img" aria-label="school" className="text-lg">🏫</span>
            </div>
            {/* Content */}
            <div className="ml-8 bg-white rounded-xl shadow p-5 w-full">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                <span className="font-bold text-blue-700 text-base">12th (Science)</span>
                <span className="text-xs text-cyan-700 font-semibold bg-cyan-50 px-3 py-1 rounded-full mt-2 sm:mt-0">2017</span>
              </div>
              <div className="text-gray-600 text-sm">ABC Senior Secondary School</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}