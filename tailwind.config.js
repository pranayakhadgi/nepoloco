/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        // Luxury Dark theme
        'event-bg': {
          dark: '#0f172a', // slate-900
          darker: '#020617', // slate-950
        },
        'event-accent': {
          light: '#f59e0b', // amber-500
          DEFAULT: '#d97706', // amber-600
        },
      },
    },
  },
  plugins: [],
}
