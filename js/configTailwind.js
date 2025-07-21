tailwind.config = {
  theme: {
    extend: {
      colors: {
        rockRed: '#e63946',
        rockDark: '#121212',
        rockGray: '#333333',
      },
      fontFamily: {
        stencil: ['Staatliches', 'sans-serif'],
        typewriter: ['Special Elite', 'monospace'],
        marker: ['Permanent Marker', 'cursive'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        flicker: 'flicker 2s infinite alternate',
      },
      keyframes: {
        flicker: {
          '0%, 18%, 22%, 25%, 53%, 57%, 100%': { opacity: 1 },
          '20%, 24%, 55%': { opacity: 0.5 },
        },
      },
    },
  },
};
