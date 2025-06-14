"use client";
import { FaEnvelope, FaPhone, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const contacts = [
  {
    icon: <FaEnvelope className="text-2xl text-blue-500" />,
    label: "Mail",
    value: "ankitgupta17878@gmail.com",
    href: "mailto:ankitgupta17878@gmail.com",
    text: "text-blue-700",
  },
  {
    icon: <FaPhone className="text-2xl text-cyan-500" />,
    label: "Mobile",
    value: "+91 9311062533",
    href: "tel:+919311062533",
    text: "text-cyan-700",
  },
  {
    icon: <FaWhatsapp className="text-2xl text-green-500" />,
    label: "WhatsApp",
    value: "+91 9311062533",
    href: "https://wa.me/919311062533",
    text: "text-green-700",
  },
  {
    icon: <FaLinkedin className="text-2xl text-blue-700" />,
    label: "LinkedIn",
    value: "linkedin.com/in/ankit-kumar-gupta-69537b228",
    href: "https://www.linkedin.com/in/ankit-kumar-gupta-69537b228/",
    text: "text-blue-700",
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-16 px-4 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <h2 className="text-4xl font-extrabold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-400">
        Hire Me
      </h2>
      <p className="text-center text-base text-gray-700 max-w-xl mx-auto">
        I’m open to freelance opportunities and innovative projects.
      </p>
      <p className="text-center text-base text-gray-700 max-w-xl mx-auto mb-8">
        Let’s connect to discuss how we can collaborate on innovative solutions, drive results, or simply exchange ideas. Your next project could be the start of something exceptional.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
        {contacts.map((c) => (
          <div
            key={c.label}
            className="flex items-center gap-4 bg-white rounded-xl shadow border border-blue-100 px-5 py-4 min-w-0"
          >
            <span className="flex-shrink-0">{c.icon}</span>
            <div className="flex flex-col min-w-0 w-full">
              <span className="text-xs text-gray-500">{c.label}</span>
              <a
                href={c.href}
                target={["LinkedIn", "WhatsApp"].includes(c.label) ? "_blank" : undefined}
                rel="noopener noreferrer"
                className={`${c.text} font-bold text-base hover:underline truncate`}
                title={c.value}
                style={{ wordBreak: "break-all" }}
              >
                {c.value}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}