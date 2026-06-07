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
  keywords: [
    "Marthan Lanuzga",
    "Marthan",
    "Lanuzga",
    "AI Specialist",
    "Software Developer",
    "Web Developer",
    "bikemaster2331",
    "portfolio"
  ],
  authors: [{ name: "Marthan Lanuzga" }],
  creator: "Marthan Lanuzga",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://mll-porpolyo.vercel.app'),
  alternates: {
    canonical: '/',
  },
  verification: {
    google: '1BqGB9l6NLATwfrOY-lk15Z_CRtVP9PJApcsxruFomQ',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Marthan Lanuzga | AI & Software Developer",
    description: "Get to know me.",
    url: 'https://mll-porpolyo.vercel.app',
    siteName: 'Marthan Lanuzga Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Marthan Lanuzga | AI & Software Developer",
    description: "Get to know me.",
  },
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