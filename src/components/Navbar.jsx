import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 px-6 py-4 flex justify-between items-center shadow-md">
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
    </nav>
  );
};

export default Navbar;
