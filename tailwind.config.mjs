import {heroui} from "@heroui/theme"

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  darkMode: "class",
  plugins: [heroui({
    "themes": {
      "light": {
        "colors": {
          "secondary": {
            "50": "#f5e1e5",
            "100": "#e8b7c0",
            "200": "#da8d9c",
            "300": "#cc6377",
            "400": "#bf3953",
            "500": "#b10f2e",
            "600": "#920c26",
            "700": "#730a1e",
            "800": "#540716",
            "900": "#35050e",
            "foreground": "#fff",
            "DEFAULT": "#b10f2e"
          }
        }
      },
      "dark": {
        "colors": {
          "secondary": {
            "50": "#35050e",
            "100": "#540716",
            "200": "#730a1e",
            "300": "#920c26",
            "400": "#b10f2e",
            "500": "#bf3953",
            "600": "#cc6377",
            "700": "#da8d9c",
            "800": "#e8b7c0",
            "900": "#f5e1e5",
            "foreground": "#fff",
            "DEFAULT": "#b10f2e"
          }
        }
      }
    }
  })],
}

module.exports = config;