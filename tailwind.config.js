/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'media',
  theme: {
    extend: {
      fontFamily: {
        'sf-pro-display': ['SF Pro Display', ...defaultTheme.fontFamily.sans],
        'sf-pro-text': ['SF Pro Text', ...defaultTheme.fontFamily.sans],
        'fira-code': ['Fira Code', ...defaultTheme.fontFamily.mono],
      },
      colors: {
	      primary: '#1A1A1A',     // Almost black
	      secondary: '#2C3333',   // Dark grey
	      accent: {
          light: '#397861',      // Bright green
          DEFAULT: '#428B70',
          dark: '#3D5C5F',
        },
	      text: {
          light: '#E7F6F2',        // Light grey
          DEFAULT: '#E7F6F2',
          dark: '#E7F6F2',
        },
	      background: '#1A1A1A',  // Almost black
	      highlight: '#FFFFFF',    // White
        iowa: '#FFCD00'         // Iowa gold
      },
    },
  },
  plugins: [],
}
