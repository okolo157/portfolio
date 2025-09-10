import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
   theme: {
    extend: {
      keyframes: {
        floatRight: {
          "0%": { transform: "translateX(0) scale(1)" },
          "100%": { transform: "translateX(100vw) scale(1.2)" },
        },
      },
      animation: {
        floatRight: "floatRight 60s linear infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
