/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      width: {
        128: "32rem",
      },
      colors: {
        "primary": {
          100: "#F0F4FF",
          200: "#D9E2FF",
          300: "#A6C1FF",
          400: "#598BFF",
          500: "#ebe375",
          600: "#254EDB",
          700: "#1939B7",
          800: "#102693",
          900: "#091A7A",
        },
      }
    },
  },
  plugins: [],
};
