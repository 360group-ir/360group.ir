/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
import daisyui from "daisyui";
export default {
  //...
  plugins: [daisyui],
};
