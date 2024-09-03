/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
      "bedroom": "url('/bg-bedroom.webp')",
      "livingroom": "url('/bg-livingroom.webp')",
      "mall": "url('/bg-mall.webp')",
      "ge": "url('/bg-ge.webp')",
      },
    },
  },
  plugins: [],
};
