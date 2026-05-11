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
  metadataBase: new URL("https://mandm-cooking.vercel.app"),
  title: {
    default: "M&M Cooking",
    template: "%s | M&M Cooking",
  },
  description:
    "Homemade food, weekly menus, catering, and events by M&M Cooking.",
  keywords: [
    "M&M Cooking",
    "homemade food",
    "weekly menus",
    "catering",
    "events",
    "food",
    "restaurant",
    "Pakistani food",
    "Islamabad",
    "Rawalpindi",
    "menu",
    "order",
  ],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      {
        url: "/LOGO.png",
        type: "image/png",
        sizes: "1563x1563",
      },
    ],
    apple: [
      {
        url: "/LOGO.png",
        type: "image/png",
        sizes: "1563x1563",
      },
    ],
  },
  openGraph: {
    title: "M&M Cooking",
    description:
      "Homemade food, weekly menus, catering, and events by M&M Cooking.",
    url: "/",
    siteName: "M&M Cooking",
    images: [
      {
        url: "/LOGO.png",
        width: 1563,
        height: 1563,
        alt: "M&M Cooking logo",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "M&M Cooking",
    description:
      "Homemade food, weekly menus, catering, and events by M&M Cooking.",
    images: [
      {
        url: "/LOGO.png",
        alt: "M&M Cooking logo",
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
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
