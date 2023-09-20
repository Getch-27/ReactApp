/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '128': '90%',
      }
    },
    colors: {

      transparent: 'transparent',
      primary: '#030F1E' ,
      secondary: '#01254D',
      'black' : '#000000',
      'white' : '#ffffff',
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
