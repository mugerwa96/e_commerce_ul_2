/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors:{
        'primary':'#FD3D57',
        'secondary':'#1E293B'
      },
      fontFamily:{
        'roboto':['Roboto','sans-serif']
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}

