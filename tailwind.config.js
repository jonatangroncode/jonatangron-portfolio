// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class", // 🔥 För framtida dark/light toggle
    theme: {
      extend: {
        colors: {
          primary: {
            DEFAULT: "#84cc16", // t.ex. lime-500
            dark: "#65a30d",
            light: "#bef264",
          },
          background: {
            DEFAULT: "#f9fafb", // light
            dark: "#111827", // gray-900
          },
        },
      },
    },
    plugins: [],
  }
  