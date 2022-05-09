module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'work': ['Work Sans'],
      },
      animation: {
        wiggle: 'wiggle 0.15s linear infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { backgroundImage: 'linear-gradient(to right, var(--tw-gradient-stops))',transition:'all 0.5s' },
          // '25%,75%': { backgroundImage: 'linear-gradient(to top, var(--tw-gradient-stops))',transition:'all 0.25s' },
          '33%': { backgroundImage: 'linear-gradient(to top left, var(--tw-gradient-stops))',transition:'all 0.5s' },
          '66%': { backgroundImage: 'linear-gradient(to bottom left, var(--tw-gradient-stops))',transition:'all 0.5s' },
        }
      }
    },
  },
  plugins: [],
}
