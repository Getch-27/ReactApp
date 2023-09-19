/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      primary: '#040d19' ,
      secondary: '#01254D',
      'midnight': '#40E8F2',
      'metal': '#df2672',
      'tahiti': '#fe4f32',
  },
  fontFamily: {
    martian: ['Martian Mono', 'monospace'],
    nunito: ['Nunito', 'sans-serif'],
    roboto: ['Roboto Slab', 'serif'],
    inter:[ 'Inter', 'sans-serif']
  },
  plugins: [],
}
}
