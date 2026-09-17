import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './hooks/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Palette naturelle : forêt, pierre et terre cuite.
        ink: {
          DEFAULT: '#243D34', 50: '#F1F4F0', 100: '#E0E7DF',
          200: '#C4D0C4', 300: '#A3B4A5', 400: '#7A9181',
          500: '#607868', 600: '#486250', 700: '#354E40',
          800: '#293F34', 900: '#20382D', 950: '#172B23',
        },
        canal: {
          DEFAULT: '#71866A', 50: '#F2F5ED', 100: '#E5EBD9',
          200: '#D0DBBB', 300: '#B9CA9A', 400: '#97AF78',
          500: '#718D56', 600: '#536E3D', 700: '#405731',
          800: '#344629', 900: '#293924',
        },
        brick: {
          DEFAULT: '#AC5438', 50: '#FCF3ED', 100: '#F7E3D5',
          200: '#EDC5AB', 300: '#DEA07E', 400: '#C97A55',
          500: '#AC5438', 600: '#93422D', 700: '#773626', 800: '#612F23',
        },
        sand: {
          DEFAULT: '#F7F5EF', 50: '#FDFCF9', 100: '#F7F5EF',
          200: '#EFEADD', 300: '#E0D8C6', 400: '#C7BDA8',
        },
        status: {
          available: '#39A78E',
          reserved: '#D81B60',
          rented: '#6B7280',
          draft: '#9CA3AF',
        },
      },
      fontFamily: {
        sans: ['var(--font-open-sans)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-lg': ['3.5rem', { lineHeight: '1.05', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-md': ['2.5rem', { lineHeight: '1.1', letterSpacing: '-0.015em', fontWeight: '700' }],
        'display-sm': ['1.875rem', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '700' }],
        eyebrow: ['0.75rem', { lineHeight: '1', letterSpacing: '0.14em', fontWeight: '600' }],
      },
      borderRadius: {
        xl: '0.875rem',
        '2xl': '1.25rem',
        '3xl': '1.75rem',
      },
      boxShadow: {
        soft: '0 2px 10px -2px rgba(36,61,52,0.12), 0 1px 2px -1px rgba(23,43,35,0.08)',
        card: '0 8px 24px -8px rgba(36,61,52,0.18), 0 2px 6px -2px rgba(23,43,35,0.08)',
        lifted: '0 22px 48px -14px rgba(23,43,35,0.28)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-700px 0' },
          '100%': { backgroundPosition: '700px 0' },
        },
        float: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s cubic-bezier(0.16,1,0.3,1) both',
        'fade-in': 'fade-in 0.4s ease-out both',
        shimmer: 'shimmer 1.6s linear infinite',
        float: 'float 4s ease-in-out infinite',
      },
      backgroundImage: {
        'canal-line':
          'linear-gradient(90deg, transparent, rgba(14,165,233,0.28) 20%, rgba(14,165,233,0.28) 80%, transparent)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;
