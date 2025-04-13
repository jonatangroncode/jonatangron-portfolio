import React from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="bg-background-dark text-neutral-100 dark:bg-background rounded-xl p-6 shadow-md border border-neutral-800 hover:shadow-lg transition">
      <h3 className="text-xl font-bold mb-2 text-primary">Projektnamn</h3>
      <p className="text-sm mb-4">
        Beskrivning av projektet. Det här är en kort sammanfattning av vad
        projektet handlar om och vilka teknologier som används.
      </p>
      <div className="flex gap-4">
        <a
          href="#"
          className="px-4 py-2 bg-primary text-gray-900 rounded-md font-medium hover:bg-primary-light transition"
        >
          GitHub
        </a>
        <a
          href="#"
          className="px-4 py-2 border border-primary rounded-md font-medium hover:bg-primary hover:text-gray-900 transition"
        >
          Demo
        </a>
      </div>
    </div>
  );
};
export default Projects;
