import React from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <nav className="bg-[#262c39] px-6 py-4 flex justify-between items-center shadow-md dark:bg-grey-800 dark:text-neutral-100 transition-colors">
      <h1 className="text-xl font-bold text-lime-400">Jonatan Grön</h1>
      <div className="space-x-6">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-lime-400 font-semibold"
              : "text-white hover:text-lime-300"
          }
        >
          Hem
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-lime-400 font-semibold"
              : "text-white hover:text-lime-300"
          }
        >
          Om mig
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive
              ? "text-lime-400 font-semibold"
              : "text-white hover:text-lime-300"
          }
        >
          Projekt
        </NavLink>
        <NavLink
          to="/cv"
          className={({ isActive }) =>
            isActive
              ? "text-lime-400 font-semibold"
              : "text-white hover:text-lime-300"
          }
        >
          CV
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-lime-400 font-semibold"
              : "text-white hover:text-lime-300"
          }
        >
          Kontakt
        </NavLink>
      </div>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="text-sm px-4 py-2 rounded bg-neutral-700 text-white hover:bg-neutral-600 transition"
      >
        {darkMode ? "☀️ Light" : "🌙 Dark"}
      </button>
    </nav>
  );
};

export default Navbar;
