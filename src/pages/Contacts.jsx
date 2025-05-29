import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contacts = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-background text-text-light dark:bg-background-dark dark:text-text-dark">
      <h2 className="text-3xl font-bold mb-6 text-center">Kontakta mig</h2>
      <p className="text-lg mb-6 text-center max-w-xl">
        Vill du komma i kontakt med mig för samarbeten, frågor eller möjlig
        LIA-praktik? Tveka inte att höra av dig!
      </p>

      <div className="flex gap-6 text-3xl">
        <a
          href="mailto:jonatan.gron@hotmail.com"
          className="hover:text-primary transition"
          aria-label="Skicka e-post"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://github.com/jonatangroncode"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary transition"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/jonatan-gr%C3%B6n-745533205/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary transition"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
      </div>
    </section>
  );
};

export default Contacts;
