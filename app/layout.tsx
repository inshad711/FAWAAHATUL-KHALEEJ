
// D:\Fawaahatul Khaleej\fawaahatul\app\layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./component/Header";
import FooterMain from "./component/Footer";
// import HeaderTwo from "./component/HeaderTwo";





const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "  Fawaahatul Khaleej",
  description: "preserving the noble legacy of pure Oudh and authentic Dahn Al Oudh in its most royal and untouched form",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} primaryBg `}
      >
        <Header />
        {/* <HeaderTwo /> */}
        {children}

        <FooterMain />
      </body>
    </html>
  );
}
