/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,css}"],
  theme: {
    extend: {
      screens: {
        'xs': '350px',
        'sm': '550px',
        'md': '750px',
        'lg': '900px',
        'xl': '1200px' 
      },
      colors: {
        'hero-bg': '#dff1d9',
        'menu-bg': '#0c1923',
        'start-btn-bg-off': '#ef8829',
        'start-btn-bg-on': '#0c4123',
        'features-bg': '#f1f7fc',
      },
      fontSize: {
        '6xl': '4rem', // Add custom size 6xl
        '7xl': '5rem', // Add custom size 7xl
      },
    },
  },
  plugins: [],
}
