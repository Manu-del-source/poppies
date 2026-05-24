/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        poppies: {
          bg: '#050505',
          surface: '#0f0f0f',
          accent: '#ff5e00',
          muted: '#808080',
          secondary: '#e0e0e0',
        }
      },
      fontFamily: {
        clash: ['Clash Display', 'sans-serif'],
        satoshi: ['Satoshi', 'sans-serif'],
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s infinite',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { opacity: 0.3 },
          '50%': { opacity: 0.6 },
        }
      }
    },
  },
  plugins: [],
}
