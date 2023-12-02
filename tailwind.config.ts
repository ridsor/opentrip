import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/assets/js/*.js"
  ],
  theme: {
    extend: {
      colors: {
        "dark-grey": "#4A4A4A",
        "dark-pink": "#FF385C",
      },
    },
    container: {
      padding: "1.25rem",
      center: true
    },
  },
  plugins: [],
};
export default config;
