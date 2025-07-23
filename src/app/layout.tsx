import type { Metadata } from "next";
import { Geist } from "next/font/google";

import { NuqsAdapter } from "nuqs/adapters/next/app";

import { helvetica } from "@/assets/fonts";
import { Footer, Navbar } from "@/components/layout";
import { Cta } from "@/components/sections/cta";
import { cn } from "@/lib/utils";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "100 Power | Next-Gen Lubrication Technology for Maximum Performance",
  description:
    "100 Power is a UAE-based brand delivering American innovation in lubrication. Maximize performance, minimize friction, and protect the planet with our military-grade, eco-conscious solutions.",
  openGraph: {
    title:
      "100 Power | Next-Gen Lubrication Technology for Maximum Performance",
    description:
      "100 Power is a UAE-based brand delivering American innovation in lubrication. Maximize performance, minimize friction, and protect the planet with our military-grade, eco-conscious solutions.",
    url: "https://100power.com/",
    siteName: "100 Power",
    images: [
      {
        url: "/images/hero-oil.webp",
        width: 1200,
        height: 630,
        alt: "100 Power - Next-Gen Lubrication Technology",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "100 Power | Next-Gen Lubrication Technology for Maximum Performance",
    description:
      "100 Power is a UAE-based brand delivering American innovation in lubrication. Maximize performance, minimize friction, and protect the planet with our military-grade, eco-conscious solutions.",
    images: ["/images/hero-oil.webp"],
    site: "@100poweruae",
  },
  metadataBase: new URL("https://www.100power.com"),
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn("antialiased", geistSans.className, helvetica.variable)}
      >
        <NuqsAdapter>
          <Navbar />
          {children}
          <Cta />
          <Footer />
        </NuqsAdapter>
      </body>
    </html>
  );
}
