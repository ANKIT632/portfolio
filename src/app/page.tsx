import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { AboutUs } from "../components/AboutUs";
import { Skills } from "../components/Skills";
import { Experience } from "../components/Exprience";
import { Projects } from "../components/Projects";
import { Certificates } from "../components/Certificates";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutUs />
      <Skills />
      <Experience />
      <Projects />
      <Certificates />
      <Contact />
      <Footer />
    </div>
  );
}