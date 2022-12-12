/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", ,],
  theme: {
    extend: {
      dropShadow: {
        "3xl": "-3px 6px 20px rgba(0, 0, 0, 1)",
      },
      plugins: [],
    },
  },
};
