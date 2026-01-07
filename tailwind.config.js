/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#F5F7FA',
          100: '#E4E9F2',
          200: '#C8D1E0',
          300: '#A0AEBF',
          400: '#6B7A8F',
          500: '#4A5568',
          600: '#2D3748',
          700: '#1A1D2E',
          800: '#0F1419',
          900: '#0A1128',
          950: '#050811'
        },
        gold: {
          50: '#FEFCF3',
          100: '#FDF8E1',
          200: '#FAEDBD',
          300: '#F4DD8B',
          400: '#E5C158',
          500: '#D4AF37',
          600: '#B8982D',
          700: '#967C24',
          800: '#7A6521',
          900: '#685520'
        },
        copper: {
          50: '#FDF6F3',
          100: '#FAE9E1',
          200: '#F5D0C0',
          300: '#EDB095',
          400: '#D98F6E',
          500: '#B87333',
          600: '#A3612A',
          700: '#8A5123',
          800: '#71441F',
          900: '#5E391B'
        },
        emerald: {
          50: '#ECFDF5',
          100: '#D1FAE5',
          200: '#A7F3D0',
          300: '#6EE7B7',
          400: '#34D399',
          500: '#059669',
          600: '#047857',
          700: '#065F46',
          800: '#064E3B',
          900: '#064E3B'
        },
        stone: {
          50: '#FAFAF9',
          100: '#F5F5F4',
          200: '#E7E5E4',
          300: '#D6D3D1',
          400: '#A8A29E',
          500: '#78716C',
          600: '#57534E',
          700: '#44403C',
          800: '#292524',
          900: '#1C1917'
        }
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Work Sans', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Courier New', 'monospace']
      },
      animation: {
        'slide-down': 'slideDown 0.3s ease-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.4s ease-out',
        'shimmer': 'shimmer 3s infinite linear',
        'gentle-pulse': 'gentlePulse 3s ease-in-out infinite'
      },
      keyframes: {
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' }
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' }
        },
        gentlePulse: {
          '0%, 100%': { opacity: '0.8' },
          '50%': { opacity: '1' }
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-gold': 'linear-gradient(135deg, #D4AF37 0%, #B87333 100%)',
        'gradient-navy': 'linear-gradient(135deg, #0A1128 0%, #1A1D2E 100%)',
        'paper-texture': 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(212, 175, 55, 0.02) 2px, rgba(212, 175, 55, 0.02) 4px)'
      },
      boxShadow: {
        'gold-glow': '0 0 20px rgba(212, 175, 55, 0.3), 0 0 40px rgba(212, 175, 55, 0.1)',
        'gold-glow-lg': '0 0 30px rgba(212, 175, 55, 0.4), 0 0 60px rgba(212, 175, 55, 0.2)',
        'refined': '0 4px 24px rgba(0, 0, 0, 0.3), 0 2px 8px rgba(0, 0, 0, 0.2)',
        'refined-lg': '0 8px 40px rgba(0, 0, 0, 0.4), 0 4px 16px rgba(0, 0, 0, 0.3)'
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        refined: {
          "primary": "#D4AF37",
          "primary-content": "#0A1128",
          "secondary": "#B87333",
          "secondary-content": "#FAFAF9",
          "accent": "#059669",
          "accent-content": "#FAFAF9",
          "neutral": "#1A1D2E",
          "neutral-content": "#FAFAF9",
          "base-100": "#0A1128",
          "base-200": "#1A1D2E",
          "base-300": "#2D3748",
          "base-content": "#FAFAF9",
          "info": "#3B82F6",
          "success": "#059669",
          "warning": "#F59E0B",
          "error": "#B91C1C",
        },
      },
    ],
    darkTheme: "refined",
    base: true,
    styled: true,
    utils: true,
  },
}
