/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Remove font-primary or define it properly
        // primary: ['Inter', 'sans-serif'], // Uncomment if you want custom font
      },
      colors: {
        primary: "#6A47ED",
        secondary: "#1A1A1A",
      },
      animation: {
        "float-bob-y": "floatBobY 2s ease-in-out infinite",
        "float-bob-x": "floatBobX 2s ease-in-out infinite",
        "img-custom-anim-left": "imgCustomAnimLeft 1.5s ease forwards",
        "img-custom-anim-right": "imgCustomAnimRight 1.5s ease forwards",
        "img-custom-anim-top": "imgCustomAnimTop 1.5s ease forwards",
      },
      keyframes: {
        floatBobY: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        floatBobX: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(-20px)" },
        },
        imgCustomAnimLeft: {
          "0%": {
            opacity: "0",
            transform: "translateX(-100px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        imgCustomAnimRight: {
          "0%": {
            opacity: "0",
            transform: "translateX(100px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        imgCustomAnimTop: {
          "0%": {
            opacity: "0",
            transform: "translateY(-100px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      backgroundImage: {
        "hero-bg": "url('/assets/img/hero/hero-bg.jpg')",
        "about-bg": "url('/assets/img/about/about-bg.png')",
        "audience-bg": "url('/img/audience-bg.jpg')",
        "cta-bg": "url('/img/cta-bg.jpg')",
      },
    },
  },
  plugins: [],
};