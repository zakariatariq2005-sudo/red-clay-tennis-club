/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'charcoal': '#1a1a1a',
        'near-black': '#0f0f0f',
        'terracotta': '#8B4513',
        'clay-red': '#A0522D',
        'deep-clay': '#7A3A1F',
        'sand': '#F5F1E8',
        'warm-white': '#FAF8F3',
        'olive': '#556B2F',
        'forest': '#2F4F2F',
        'bronze': '#CD7F32',
        'gold': '#D4AF37',
      },
      fontFamily: {
        'grotesk': ['Inter', 'system-ui', 'sans-serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'clay-grain': "url(\"data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}


