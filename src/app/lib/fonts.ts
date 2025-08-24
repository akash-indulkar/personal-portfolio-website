import { EB_Garamond, Noto_Sans_Display, Source_Code_Pro } from "next/font/google";

export const sourceCodePro = Source_Code_Pro({
  variable: "--font-source-code-pro",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"]
});

export const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
  weight: ["500"],
  style: ["normal", "italic"]
});

export const notoSansDisplay = Noto_Sans_Display({
  variable: "--font-noto-sans-display",
  subsets: ["latin"],
  weight: ["500"],
  style: ["normal", "italic"]
});