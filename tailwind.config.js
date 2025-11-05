/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#D4AF37',
        secondary: '#000000',
        accent: '#FFD700',
        background: '#0A0A0A',
        surface: '#1A1A1A',
        textPrimary: '#FFFFFF',
        textSecondary: '#B8B8B8',
        success: '#10B981',
      },
      fontFamily: {
        heading: ['Bebas Neue', 'Oswald', 'sans-serif'],
        body: ['Inter', 'Poppins', 'Montserrat', 'sans-serif'],
        accent: ['Playfair Display', 'serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          'from': {
            'box-shadow': '0 0 10px #D4AF37, 0 0 20px #D4AF37, 0 0 30px #D4AF37',
          },
          'to': {
            'box-shadow': '0 0 20px #FFD700, 0 0 30px #FFD700, 0 0 40px #FFD700',
          },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-gold': 'linear-gradient(135deg, #D4AF37 0%, #FFD700 100%)',
        'gradient-dark': 'linear-gradient(135deg, #0A0A0A 0%, #1A1A1A 100%)',
      },
    },
  },
  plugins: [],
}
