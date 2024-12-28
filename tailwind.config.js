/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ceramic: {
          50: "#faf8f6",
          100: "#e8e6e4",
          200: "#d5d0cc",
          300: "#beb7b2",
        },
        accent: {
          600: "#4a4a8f", // Deeper purple-blue
        },
      },
    },
  },
  plugins: [],
};
