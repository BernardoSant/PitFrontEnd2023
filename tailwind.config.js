/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily:{
        'Passion' : 'Passion One',
        'Quicksand' : 'Quicksand',
        'Kanit' : 'Kanit',
        'Archivo' : 'Archivo Black'
      },
      backgroundImage:{
        'food' : "url('/segundaImagem_Fundo.jpg')"
      }
    }
  },
  plugins: []
}
