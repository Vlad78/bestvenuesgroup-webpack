import type { Config } from "tailwindcss";
import { theme } from "./src/shared/lib/theme/theme";
import animation from "tailwindcss-animate";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    colors: { ...theme.colors },
    fontSize: {
      ...theme.fontSize,
    },
    fontFamily: {
      ...theme.fontFamily,
    },
  },
  plugins: [animation],
} satisfies Config;
