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
    <article className="w-full h-full bg-[#eaf0f8] text-[#1f2937] dark:bg-[#282d38] dark:text-[#f9fafb] rounded-xl p-6 shadow-md border border-neutral-800 hover:shadow-lg transition">
      {image && (
        <img
          src={image}
          alt={`Skärmdump av ${title}`}
          className="w-full h-48 object-cover rounded-md mb-4 border border-neutral-700"
        />
      )}

      <h3 className="text-xl font-bold mb-2 text-[#60a5fa] dark:text-[#93c5fd]">
        {title}
      </h3>

      <p className="text-sm mb-4">{description}</p>

      {technologies?.length > 0 && (
        <ul className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <li
              key={index}
              className="text-xs px-2 py-1 bg-[#374151] text-[#f3f4f6] rounded-md border border-neutral-600"
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
            className="px-4 py-2 bg-[#60a5fa] text-[#1f2937] rounded-md font-medium hover:bg-[#93c5fd] transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        )}
        {demoLink && (
          <a
            href={demoLink}
            className="px-4 py-2 border border-[#60a5fa] rounded-md font-medium hover:bg-[#60a5fa] hover:text-[#1f2937] transition"
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
