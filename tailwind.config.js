/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#0c0808",
        green: "#1E3329",
        pink: "#fed2d1",
        yellow: "#FFc94b",
        grey: "#e6eaef",
        "light-grey": "#ECECEC",
        "dark-grey": "#B8B8B8",
        light: "#FAFAFA",
      },
    },
  },
  plugins: [],
};
