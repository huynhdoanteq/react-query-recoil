/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      mono: ["ui-monospace", "Roboto Mono"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      colors: {
        red: {
          200: "#FFE5D3",
          800: "#FF3A29",
        },
        blue: {
          200: "#CCF8FE",
          800: "#02A0FC",
          900: "#4339F2"
        },
        green: {
          200: "#E2FBD7",
          800: "#34B53A"
        },
        yellow: {
          200: "#FFF5CC",
          800: "#FFB200"
        },
        purple: {
          200: "#DAD7FE"
        },
        black: {
          900: "#000"
        },
        gray: {
          200: "#F8F8F8"
        },
        white: {
          100: "#FFF"
        }
      },
      boxShadow: {
        "common-modal": "4px 4px 20px 0px rgba(0, 0, 0, 0.20)",
      },
      transitionProperty: {
        height: "height",
      },
    },
  },
  variants: {},
  plugins: [],
};
