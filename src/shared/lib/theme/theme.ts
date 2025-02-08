type FontType = [
  fontSize: string,
  configuration: Partial<{
    lineHeight: string;
    letterSpacing: string;
    fontWeight: string | number;
  }>
];

export const theme = {
  colors: {
    black: "#0A0700",
    white: "#FEFEFE",
    primary: {
      tan: {
        "-4": "#FAF4EB",
        "-3": "#F3E6D7",
        "-2": "#EAD5BE",
        "-1": "#D9B99B",
        "0": "#C8A377",
        "+1": "#B78E59",
        "+2": "#A5763A",
        "+3": "#916023",
        "+4": "#7D4C15",
      },
    },
    gray: {
      1: "#F7F7F7",
      2: "#EDEDED",
      3: "#E0E0E0",
      4: "#D1D1D1",
      5: "#BFBFBF",
      6: "#A9A9A9",
      7: "#919191",
      8: "#767676",
      9: "#5E5E5E",
      10: "#3E3E3E",
      11: "#1F1F1F",
    },
    transparentWhite: {
      10: "rgba(255, 255, 255, 0.1)",
      20: "rgba(255, 255, 255, 0.2)",
      30: "rgba(255, 255, 255, 0.3)",
      40: "rgba(255, 255, 255, 0.4)",
      50: "rgba(255, 255, 255, 0.5)",
      60: "rgba(255, 255, 255, 0.6)",
      70: "rgba(255, 255, 255, 0.7)",
      80: "rgba(255, 255, 255, 0.8)",
      90: "rgba(255, 255, 255, 0.9)",
    },
    transparentBlack: {
      10: "rgba(0, 0, 0, 0.1)",
      20: "rgba(0, 0, 0, 0.2)",
      30: "rgba(0, 0, 0, 0.3)",
      40: "rgba(0, 0, 0, 0.4)",
      50: "rgba(0, 0, 0, 0.5)",
      60: "rgba(0, 0, 0, 0.6)",
      70: "rgba(0, 0, 0, 0.7)",
      80: "rgba(0, 0, 0, 0.8)",
      90: "rgba(0, 0, 0, 0.9)",
    },
    red: {
      1: "#E63946",
      2: "#FFB3B3",
    },
    orange: {
      1: "#F4A261",
      2: "#FFD699",
    },
    green: {
      1: "#4CAF50",
      2: "#B2FF99",
    },
    blue: {
      1: "#4285F4",
      2: "#B3D9FF",
    },
  },
  fontSize: {
    display: ["60px", { lineHeight: "72px", fontWeight: "700" }] as FontType,
    h1: ["48px", { lineHeight: "62px", fontWeight: "700" }] as FontType,
    h2: ["40px", { lineHeight: "52px", fontWeight: "700" }] as FontType,
    h3: ["32px", { lineHeight: "44px", fontWeight: "700" }] as FontType,
    h4: ["28px", { lineHeight: "36px", fontWeight: "700" }] as FontType,
    h5: ["24px", { lineHeight: "32px", fontWeight: "700" }] as FontType,
    h6: ["19px", { lineHeight: "30px", fontWeight: "700" }] as FontType,
    subheading1: [
      "24px",
      { lineHeight: "38px", fontWeight: "300" },
    ] as FontType,
    subheading2: [
      "20px",
      { lineHeight: "32px", fontWeight: "300" },
    ] as FontType,
    body: ["16px", { lineHeight: "26px", fontWeight: "300" }] as FontType,
    bodySmall: ["14px", { lineHeight: "22px", fontWeight: "300" }] as FontType,
    caption: ["12px", { lineHeight: "18px", fontWeight: "300" }] as FontType,
    overline: ["12px", { lineHeight: "18px", fontWeight: "400" }] as FontType,
    menu: ["14px", { lineHeight: "22px", fontWeight: "400" }] as FontType,
    buttonLg: ["24px", { lineHeight: "36px", fontWeight: "700" }] as FontType,
    buttonMd: ["16px", { lineHeight: "24px", fontWeight: "700" }] as FontType,
    buttonSm: ["13px", { lineHeight: "20px", fontWeight: "500" }] as FontType,
    buttonXSm: ["11px", { lineHeight: "18px", fontWeight: "500" }] as FontType,
  },
  fontFamily: {
    onest: ["'Onest'", "sans-serif"],
    lora: ["'Lora'", "serif"],
  },
};
