module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  variants:{
    animation: ["motion-safe"],
  },
  theme: {
    extend: {
      fontFamily: {
        'work': ['Work Sans'],
      },
      animation: {
        wiggle: 'wiggle 0.15s linear infinite',
        'fade-in-down': 'fade-in-down 1s ease-out',
        'left-slide-in':'left-slide-in 1s ease-out',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { backgroundImage: 'linear-gradient(to right, var(--tw-gradient-stops))',transition:'all 0.5s' },
          // '25%,75%': { backgroundImage: 'linear-gradient(to top, var(--tw-gradient-stops))',transition:'all 0.25s' },
          '33%': { backgroundImage: 'linear-gradient(to top left, var(--tw-gradient-stops))',transition:'all 0.5s' },
          '66%': { backgroundImage: 'linear-gradient(to bottom left, var(--tw-gradient-stops))',transition:'all 0.5s' },
        },
        'fade-in-down': {
            '0%': {
                opacity: '0',
                transform: 'translateY(55px)'
            },
            '100%': {
                opacity: '1',
                transform: 'translateY(0)'
            },
        },
        'left-slide-in': {
          '0%': {
              opacity: '0',
              transform: 'translateX(-55px)'
          },
          '100%': {
              opacity: '1',
              transform: 'translateX(0)'
          },
      }
    },
    },
  },
  plugins: [],
}
