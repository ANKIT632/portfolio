import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="p-4">
        <section className="text-center">
          <h1 className="text-4xl font-bold">Ankit Kumar Gupta</h1>
          <p className="text-lg text-gray-600">Software Engineer | Portfolio</p>
        </section>
        <section className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <ProjectCard
            title="Project 1"
            description="Description of project 1."
            image="/images/project1.jpg"
          />
          <ProjectCard
            title="Project 2"
            description="Description of project 2."
            image="/images/project2.jpg"
          />
        </section>
      </main>
      <Footer />
    </div>
  );
}