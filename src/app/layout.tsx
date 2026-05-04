import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "M&M Cooking - Home of Authentic Flavours",
  description:
    "Order authentic homemade Pakistani and Italian food from M&M Cooking. Located in Chaklala Scheme 3, Islamabad & Rawalpindi. Lunch, dinner, frozen items, and more.",
  keywords: [
    "food",
    "restaurant",
    "Pakistani food",
    "Islamabad",
    "Rawalpindi",
    "menu",
    "order",
  ],
  openGraph: {
    title: "M&M Cooking - Home of Authentic Flavours",
    description: "Order authentic homemade Pakistani and Italian food online",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
