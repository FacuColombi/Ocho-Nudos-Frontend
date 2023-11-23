/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'custom-primary':'#B6814F',
        'custom-scondary': '#0A0A0A'
      }
    }
  },
  plugins: [
    require('daisyui')
  ]
};