import React from "react";

const ProjectCard = ({
  title,
  description,
  githubLink,
  demoLink,
  image,
  technologies,
}) => {
  return (
    <article className="w-full h-full bg-background text-text-light dark:bg-background-dark dark:text-text-dark rounded-xl p-6 shadow-md border border-neutral-800 hover:shadow-lg transition">
      {image && (
        <img
          src={image}
          alt={`Skärmdump av ${title}`}
          className="w-full h-48 object-cover rounded-md mb-4 border border-neutral-700"
        />
      )}
      <h3 className="text-xl font-bold mb-2 text-primary dark:text-primary-light">
        {title}
      </h3>
      <p className="text-sm mb-4">{description}</p>

      {technologies?.length > 0 && (
        <ul className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <li
              key={index}
              className="text-xs px-2 py-1 bg-neutral-800 text-neutral-200 rounded-md border border-neutral-600"
            >
              {tech}
            </li>
          ))}
        </ul>
      )}

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
