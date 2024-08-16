import type { Metadata } from "next";
import { gsap } from "gsap";
import "./globals.scss";
import "./styles/font.css"


export const metadata: Metadata = {
  title: "vojtikczhraje",
  description: "developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
