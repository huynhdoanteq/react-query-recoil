/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      mono: ["ui-monospace", "Roboto Mono"],
    },
    extend: {
      backgroundImage: {},
      colors: {
      },
      boxShadow: {
        "list-modal": "4px 4px 50px rgba(0, 0, 0, 0.04)",
        "common-modal": "4px 4px 20px 0px rgba(0, 0, 0, 0.20)",
        "dropdown-shadow": "0px 2px 4px 0px rgba(0, 0, 0, 0.14)",
      },
      transitionProperty: {
        height: "height",
      },
    },
  },
  variants: {},
  plugins: [],
};
