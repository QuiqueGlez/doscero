// tailwind.config.cjs
module.exports = {
    content: [
      "./src/**/*.{astro,html,js,jsx,ts,tsx}"
    ],
    theme: {
      extend: {
        colors: {
          primary: '#2dd4bf',
        },
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
        },
      },
    },
    plugins: [],
  };
  