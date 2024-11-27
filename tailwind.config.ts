import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#4A77FF",
        text: "#FFFFFFCC;",
        second: "rgba(64, 226, 232, 1)",
        purple: "rgba(74, 119, 255, 1)",
        gray: "rgba(94, 98, 111, 1)",
        green: "rgba(0, 198, 150, 1)",
        black: "rgba(52, 55, 65, 1)",
        blackBold: "rgba(94, 98, 111, 1)",
        footer: "rgba(94, 98, 111, 1)",
        yellow: 'rgba(251, 255, 35, 1)'
      },
      backgroundImage: {
        rectangle: "linear-gradient(151.17deg, #26C2B9 8.69%, #288BE7 126.06%)",
      },
      backgroundColor: {
        whiteTransparent: "rgba(255, 255, 255, 0.2)",
        whiteIcon: "rgba(255, 255, 255, 0.4)",
        tooltipCorausel: "rgba(233, 247, 239, 1)",
        opacityGreen: "rgba(187, 243, 210, 1)",
        carouselExclude: "rgba(237, 252, 255, 1)",
        carousel: "rgba(255, 255, 255, 1)",
        footer: "rgba(239, 241, 246, 1)",
        tooltipMobile: "rgba(139, 196, 255, 1)",
        checked: 'rgba(232, 236, 255, 1)'
      },
      borderColor: {
        gray: "rgba(193, 197, 207, 1)",
        cardExclude: "rgba(130, 191, 212, 1)",
      },
      boxShadow: {
        card: "0px 15px 24px 0px rgba(0, 0, 0, 0.12)",
        cardExclude: "0px 13.53px 21.65px 0px rgba(0, 0, 0, 0.12)",
      },
    },
    screens: {
      "md-max": { max: "961px" },
      md: {min: '960px'}
    },
  },
  plugins: [],
} satisfies Config;
