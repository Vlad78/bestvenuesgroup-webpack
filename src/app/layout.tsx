import type { Metadata } from "next";
import { Lora, Onest } from "next/font/google";
import "./globals.css";

const loraSans = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

const onestSans = Onest({
  variable: "--font-onest",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "bestvenuesgroup",
  description: "Presentation for Best Venues Group",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${loraSans.variable} ${onestSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
