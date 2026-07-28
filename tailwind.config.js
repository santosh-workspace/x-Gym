/** @type {import('tailwindcss').Config} */
// Build the stylesheet after changing any classes in index.html:
//   npx tailwindcss@3 -i src/input.css -o assets/styles.css --minify
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#e11d48',
          darkred: '#be123c',
          orange: '#f97316',
          sky: '#0284c7',
          dark: '#0f172a',
          card: '#1e293b'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Oswald', 'sans-serif']
      }
    }
  },
  plugins: []
}
