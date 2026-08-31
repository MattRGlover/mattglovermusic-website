/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"taurunum-ferrum-steel"', 'Inter', 'system-ui', 'sans-serif'],
        name: ['raceway', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        dark: {
          900: '#0c0c0d',
          800: '#141416',
          700: '#1c1a20',
          600: '#28242c',
        },
        accent: {
          primary: '#7c9b6e',
          tertiary: '#4a6b42',
          secondary: '#b9a2c8',
        },
        green: {
          light: '#c3d9b4',
          DEFAULT: '#7c9b6e',
          dark: '#4a6b42',
        },
        lilac: {
          light: '#dcd0e6',
          DEFAULT: '#b9a2c8',
          dark: '#8f6ba8',
        },
      },
      animation: {
        'gradient': 'gradient 8s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2.5s ease-in-out infinite alternate',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(124, 155, 110, 0.25)' },
          '100%': { boxShadow: '0 0 40px rgba(185, 162, 200, 0.35)' },
        },
      },
    },
  },
  plugins: [],
}
