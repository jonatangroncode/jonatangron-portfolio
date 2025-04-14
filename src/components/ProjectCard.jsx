import React from "react";

const ProjectCard = ({ title, description, githubLink, demoLink, image }) => {
  return (
    <article className="bg-background-dark w-full h-full text-neutral-100 dark:bg-background rounded-xl p-6 shadow-md border border-neutral-800 hover:shadow-lg transition">
      {image && (
        <img
          src={image}
          alt={`Skärmdump av ${title}`}
          className="w-full h-48 object-cover rounded-md mb-4 border border-neutral-700"
        />
      )}
      <h3 className="text-xl font-bold mb-2 text-primary">{title}</h3>
      <p className="text-sm mb-4">{description}</p>
      <div className="flex gap-4">
        {githubLink && (
          <a
            href={githubLink}
            className="px-4 py-2 bg-primary text-gray-900 rounded-md font-medium hover:bg-primary-light transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        )}
        {demoLink && (
          <a
            href={demoLink}
            className="px-4 py-2 border border-primary rounded-md font-medium hover:bg-primary hover:text-gray-900 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            Demo
          </a>
        )}
      </div>
    </article>
  );
};

export default ProjectCard;
