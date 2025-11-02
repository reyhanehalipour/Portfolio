import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "background-light": "#F9FAFB",
        "background-dark": "#111827",
        green: "#637B54",
        gray: "#3B3D3E",
        lightapricot: "#C0AEA033",
        darkapricot: "#C0AEA0",
        neutral: {
          800: "#262626",
        },
      },
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      fontFamily: {
        sans: ["Vazirmatn", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
