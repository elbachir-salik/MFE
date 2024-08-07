module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/home/**/*.{js,jsx,ts,tsx}",],
  safelist: [
    'p-5',
    'bg-blue-500',
    'text-white',
    'text-3xl',
    'font-bold'
  ],
  darkMode: true, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
