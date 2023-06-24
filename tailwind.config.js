/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      height: {
        '1px': '1px',
        '108': '27rem',
        "bottom-card": 'calc( 100% - 15rem )',
      },
      inset: {
        '5px': '5px',
      },
      margin: {
        '2px': '2px',
      },
    }
  },
  plugins: []
};