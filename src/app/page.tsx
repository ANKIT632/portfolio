import{ Navbar } from "../components/Navbar";
import{ Hero } from "../components/Hero";
import{ Skills } from "../components/Skills";
import{ Projects } from "../components/Projects";
import{ Certificates } from "../components/Certificates";
import{ Contact } from "../components/Contact";
import{ Footer } from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Certificates />
      <Contact />
      <Footer />
    </div>
  );
}