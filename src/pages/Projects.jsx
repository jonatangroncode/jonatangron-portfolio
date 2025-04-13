import React from "react";
import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <section className="min-h-screen px-6 py-12">
      <h2 className="text-3xl font-bold text-center mb-10">Mina Projekt</h2>
      <div className="max-w-4xl mx-auto">
        <ProjectCard
          title="Väderapp"
          description="En väderapp som visar väderprognoser för olika platser."
          githubLink="https://github.com/jonatangroncode/weather-app"
          demoLink="https://jensenflix.vercel.app"
        />
      </div>
    </section>
  );
};

export default Projects;
