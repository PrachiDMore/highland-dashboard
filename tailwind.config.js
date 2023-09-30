/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "accentGreen" : "rgba(16,165,158,0.7)",
        "accentGreenHover" : "rgb(16,165,158)",
        "darkGreen" : "#062F2B",
        "light" : "#F5FBF4",
        "lightHover" : "#f4fbf4",
        "navHover" : "rgba(31, 61, 83, 0.5)",
        "customGray": "#6B7D89",
        'lightBlue': '#F9FBFD',
        "customeRed": "#ff4026",
        "redHover": "#ed381f"
      },
    },
  },
  plugins: [],
}
