import React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ThemeToggle } from "@/components/theme-toggle";
import { DownloadResume } from "@/components/download-resume";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Rishav Chatterjee | Full-Stack Developer",
//   description:
//     "Full-Stack MERN Developer with 6+ years of experience building reliable, high-performance web applications",
//   icons: {
//     apple: "/apple-icon.png",
//   },
// };

export const metadata = {
  title: "Rishav Chatterjee | Full-Stack MERN & Next.js Developer Portfolio",
  description:
    "Full-Stack MERN Developer with 6+ years of experience building high-performance web apps, real-time collaboration tools, scalable backend APIs, and production-grade Next.js applications.",
  keywords: [
    "Rishav Chatterjee",
    "Full Stack Developer",
    "MERN Developer",
    "React Developer",
    "Next.js Developer",
    "Web Developer India",
    "JavaScript Developer",
    "TypeScript Developer",
    "Node.js Developer",
    "Frontend Developer",
    "Backend Developer",
    "Portfolio",
    "Software Engineer",
    "Developer West Bengal",
  ],
  authors: [{ name: "Rishav Chatterjee" }],
  creator: "Rishav Chatterjee",
  robots: "index, follow",
  metadataBase: new URL("https://portfolio-woad-zeta-y1qrwo0z1a.vercel.app/"),
  openGraph: {
    title: "Rishav Chatterjee — Full-Stack MERN & Next.js Developer",
    description:
      "Experienced 6+ years in building scalable, fast, and modern web apps using MERN, Next.js, TypeScript, Redux, WebSockets, and cloud technologies.",
    url: "https://portfolio-woad-zeta-y1qrwo0z1a.vercel.app/",
    siteName: "Rishav Chatterjee Portfolio",
    images: [
      {
        url: "https://portfolio-woad-zeta-y1qrwo0z1a.vercel.app/",
        width: 1200,
        height: 630,
        alt: "Rishav Chatterjee Portfolio Preview",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rishav Chatterjee — Full-Stack & Next.js Developer",
    description:
      "Portfolio of a full-stack engineer specializing in MERN, Next.js, TypeScript, real-time apps, and scalable systems.",
    images: ["https://your-portfolio-domain.com/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head></head>
      <body className={`font-sans antialiased`}>
        {children}
        <DownloadResume />
        <ThemeToggle />
        <Analytics />
      </body>
    </html>
  );
}
