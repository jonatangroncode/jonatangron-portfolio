import React from "react";
import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "Väderapp",
      description: "En väderapp som visar väderprognoser för olika platser.",
      githubLink: "https://github.com/jonatangroncode/weather-app",
      demoLink: "https://weather-demo.vercel.app",
    },
    {
      title: "JensenFlix",
      description: "En streamingplattform byggd med React, API och dark mode.",
      githubLink: "https://github.com/jonatangroncode/jensenflix",
      demoLink: "https://jensenflix.vercel.app",
    },
    {
      title: "Portfolio",
      description: "Denna portfolio byggd med React, Vite och Tailwind v4.",
      githubLink: "https://github.com/jonatangroncode/jonatangron-portfolio",
    },
  ];

  return (
    <section className="min-h-screen px-6 py-12">
      <h2 className="text-3xl font-bold text-center mb-10">Mina Projekt</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            githubLink={project.githubLink}
            demoLink={project.demoLink}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
