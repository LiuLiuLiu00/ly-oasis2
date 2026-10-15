import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#171717",
        paper: "#fbfbf7",
        mist: "#edf3f1",
        moss: "#b8f36f",
        aqua: "#5ed6d1",
        coral: "#ff7c66",
        lemon: "#f6d94b",
        grape: "#8f7bff"
      },
      boxShadow: {
        soft: "0 24px 60px rgba(23, 23, 23, 0.08)",
        line: "0 0 0 1px rgba(23, 23, 23, 0.08)"
      },
      borderRadius: {
        card: "8px"
      }
    }
  },
  plugins: []
};

export default config;
