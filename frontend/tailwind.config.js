/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
    extend: {
      colors: {
        'primary': '#ffc60a',
        //'white': '#fff1c2',
        'black': '#000000',
        'accent': '#ffcf33',
      },
      fontFamily: {
        'body': ['Nunito']
      }
    },
  },
  plugins: [],
}

