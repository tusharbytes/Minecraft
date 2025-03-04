/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lakehurst: ['LakehurstGothic-Medium', 'sans-serif'],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
}
