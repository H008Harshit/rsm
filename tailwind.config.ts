import type { Config } from "tailwindcss";

const Td_Colors = {
  primary: "#BE3455",
  primary_enabled: "#BE3455",
  secondary: "#F29F02",
  secondary_enabled: "#F29F02",
  black: "#222222",
  grey_light: "#C6C6C6",
  blue: "#161630",
  grey_dark: "#6c6c6c",
  grey: "#D9D9D9",
  white: "#ffffff",
  primary_disabled: "#be345591",
  grey_light_variant: "#EEEEEE",
  grey_outline: "#73777F",
};
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: Td_Colors,
    fontSize: {
      DH1: [
        "28px",
        {
          lineHeight: "42px",
          fontWeight: "600",
        },
      ],
      DH2: [
        "20px",
        {
          lineHeight: "30px",
          fontWeight: "600",
        },
      ],
      DH3: [
        "24px",
        {
          lineHeight: "30px",
          fontWeight: "600",
        },
      ],
      DMH1: [
        "54px",
        {
          lineHeight: "74px",
          fontWeight: "700",
        },
      ],
      MMH1: [
        "34px",
        {
          lineHeight: "46px",
          fontWeight: "400",
        },
      ],
      DT1: [
        "18px",
        {
          lineHeight: "27px",
          fontWeight: "600",
        },
      ],
      DT2: [
        "16px",
        {
          lineHeight: "24px",
          fontWeight: "500",
        },
      ],
      DT3: [
        "16px",
        {
          lineHeight: "18px",
          fontWeight: "600",
        },
      ],
      DT4: [
        "16px",
        {
          lineHeight: "18px",
          fontWeight: "400",
        },
      ],
      DB1: [
        "15px",
        {
          lineHeight: "23px",
          fontWeight: "400",
        },
      ],
      DB2: [
        "14px",
        {
          lineHeight: "24px",
          fontWeight: "400",
        },
      ],
      MH1: [
        "20px",
        {
          lineHeight: "30px",
          fontWeight: "700",
        },
      ],
      MH2: [
        "18px",
        {
          lineHeight: "30px",
          fontWeight: "600",
        },
      ],
      MT1: [
        "14px",
        {
          lineHeight: "21px",
          fontWeight: "600",
        },
      ],
      MT2: [
        "14px",
        {
          lineHeight: "24px",
          fontWeight: "500",
        },
      ],
      MB1: [
        "13px",
        {
          lineHeight: "20px",
          fontWeight: "400",
        },
      ],
      MB2: [
        "12px",
        {
          lineHeight: "18px",
          fontWeight: "400",
        },
      ],
      MB3: [
        "13px",
        {
          lineHeight: "18px",
          fontWeight: "600",
        },
      ],
      DBTN1: [
        "15px",
        {
          lineHeight: "18px",
          fontWeight: "500",
        },
      ],
      MB4: [
        "12px",
        {
          lineHeight: "18px",
          fontWeight: "500",
        },
      ],
    },
    extend: {
      screens: {
        desktop: "768px",
        mobile: "320px",
      },
      // fontFamily: {
      // 	poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
      // },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
};
export default config;
