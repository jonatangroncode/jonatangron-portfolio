// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#84cc16", // lime-400
        "primary-light": "#bef264", // lime-300
        "primary-dark": "#65a30d", // lime-600
        background: "#f9fafb",
        "background-dark": "#111827",
        "background-light": "white",
        "text-light": "#111827",
        "text-dark": "#f9fafb",
      },
    },
  },
  plugins: [],
};
