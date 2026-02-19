import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Blissland Academy | Quality Education",
  description: "Blissland Academy provides quality education with modern curriculum and values-based learning for students from Nursery to Secondary.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://blisslandacademy.edu",
    title: "Blissland Academy | Quality Education",
    description: "Blissland Academy provides quality education with modern curriculum",
    images: [
      {
        url: "https://newlifeschool.edu/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

