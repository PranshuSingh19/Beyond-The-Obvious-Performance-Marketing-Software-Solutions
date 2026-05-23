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
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
      colors: {
        obsidian: '#07070B',
        titanium: '#12121A',
        silver: '#7D7D8A',
        chrome: '#E5E5EB',
        royal: '#53105B',
        'royal-light': '#8B1A9A',
        'royal-glow': 'rgba(83,16,91,0.45)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'purple-glow': 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(83,16,91,0.3) 0%, transparent 70%)',
      },
      boxShadow: {
        'glow-purple': '0 0 40px rgba(83,16,91,0.5), 0 0 80px rgba(83,16,91,0.2)',
        'glow-purple-sm': '0 0 20px rgba(83,16,91,0.4)',
        'card-dark': '0 4px 24px rgba(0,0,0,0.4)',
        'card-dark-hover': '0 12px 40px rgba(0,0,0,0.6), 0 0 30px rgba(83,16,91,0.2)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 12s linear infinite',
        'ticker': 'ticker 30s linear infinite',
        'ticker-rev': 'ticker-reverse 35s linear infinite',
      },
    },
  },
  plugins: [],
}
