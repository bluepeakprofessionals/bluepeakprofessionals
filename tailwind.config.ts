import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#0A1E4D",
        "mid-blue": "#15418C",
        "accent-blue": "#1E62C9",
        "light-blue": "#4FA3F7",
        sky: "#E8F2FE",
        bg: "#F4F8FE",
      },
      fontFamily: {
        dm: ["var(--font-dm-sans)", "sans-serif"],
        oswald: ["var(--font-oswald)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
