/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f6ff', // Fondo muy claro
          100: '#e4edff', // Fondo de cards
          200: '#d1e0ff', // Bordes suaves
          500: '#3b82f6', // Color principal
          600: '#2563eb', // Hover/Activo
          700: '#1d4ed8', // Texto importante
        },
        background: {
          50: '#fafafa', // Fondo principal
          100: '#f4f4f5', // Fondo secundario
          200: '#e4e4e7', // Bordes
        },
      },
    },
  },
  plugins: [],
}
