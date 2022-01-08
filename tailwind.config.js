module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        darkpurple: '#2d1137',
        lightpurple: '#802470'
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
};
