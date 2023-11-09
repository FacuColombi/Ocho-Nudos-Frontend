/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'custom-primary':'#B6814F',
      }
    }
  },
  plugins: [
    require('daisyui')
  ]
};