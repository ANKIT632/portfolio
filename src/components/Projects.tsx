"use client";
import ProjectCard from "./ProjectCard";

export  function Projects() {
  return (
    <section id="projects" className="p-8 bg-white">
      <h2 className="text-3xl font-bold text-center mb-6">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
      </div>
    </section>
  );
}