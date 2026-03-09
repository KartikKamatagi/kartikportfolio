/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0f172a', /* slate-900 */
          card: '#1e293b', /* slate-800 */
          text: '#f8fafc', /* slate-50 */
          muted: '#94a3b8', /* slate-400 */
          border: '#334155', /* slate-700 */
        },
        primary: {
          DEFAULT: '#3b82f6', /* blue-500 */
          hover: '#2563eb', /* blue-600 */
        },
        accent: {
          DEFAULT: '#8b5cf6', /* violet-500 */
          hover: '#7c3aed', /* violet-600 */
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'blob': 'blob 7s infinite',
        'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' }
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
