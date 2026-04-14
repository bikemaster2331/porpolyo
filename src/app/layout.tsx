import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const satoshi = localFont({
  src: "../../public/fonts/Satoshi-Variable.woff2",
  variable: "--font-satoshi",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Marthan Lanuzga | AI & Software Developer",
  description: "Portfolio of Marthan Lanuzga - Lead Developer & AI Specialist",
};

import Script from "next/script";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${satoshi.variable} h-full antialiased dark`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full flex flex-col">
        <Script
          src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.4.0/model-viewer.min.js"
          strategy="afterInteractive"
          type="module"
        />
        <Script
          src="https://unpkg.com/meshoptimizer@0.19.0/meshopt_decoder.js"
          strategy="afterInteractive"
        />
        <Navbar />
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
}