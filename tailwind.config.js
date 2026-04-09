/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f4efff',
          100: '#ebe0ff',
          400: '#8f4bff',
          500: '#6c25ff',
          600: '#5b1fe0',
        },
        ink: {
          900: '#1d2226',
          700: '#4a4f57',
          500: '#6b7280',
          300: '#cfd3d8',
          200: '#e5e7eb',
          100: '#f7f8f9',
        },
        gold: '#f7b500',
      },
      boxShadow: {
        phone: '0 28px 90px rgba(29, 34, 38, 0.14)',
      },
      fontFamily: {
        sans: ['Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
