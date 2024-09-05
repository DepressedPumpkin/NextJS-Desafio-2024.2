import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'bege':'#F9F6E7',
        'salmao' : '#E3776A',
        'amarelo' : '#EAB53F',
        'verde' : '#355852',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        'md': '768px',
        'lg': '1280px',
        'xl': '1920px',
        '2xl': '2560px',
        '3xl': '3440px',
      }
    },
  },
  plugins: [],
};
export default config;
