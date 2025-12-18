/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bee-yellow': '#FFC107',
        'bee-black': '#212121',
        'bee-dark': '#1A1A1A',
      },
    },
  },
  plugins: [],
}

