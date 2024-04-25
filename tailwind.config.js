/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      signature: ["Great Vibes"],
    }
  },
  plugins: [],
  theme: {
    extend: {
      keyframes: {
        zoomInOut: {
          '0%, 100%': { transform: 'scale(1)' }, 
          '50%': { transform: 'scale(1.1)' }, 
        },
      },
      animation: {
        zoomInOut: 'zoomInOut 4s ease-in-out infinite', 
      },
    },
  },
}
