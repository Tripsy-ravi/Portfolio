import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const displayFont = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
});

const bodyFont = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});

const siteUrl = "https://tripsy-ravi-portfolio.netlify.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Ravi Tripathi | Full-Stack + Product",
  description:
    "Ravi Tripathi is a full-stack engineer with a product-first mindset, building reliable systems and calm user experiences.",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Ravi Tripathi",
    "Full-stack engineer",
    "Product manager mindset",
    "Healthcare automation",
    "Technical Account Manager",
    "Portfolio",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Ravi Tripathi | Full-Stack + Product",
    description:
      "I turn complex systems into simple, high-impact products. Full-stack engineering with a product-first mindset.",
    url: siteUrl,
    siteName: "Ravi Tripathi",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ravi Tripathi portfolio preview",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ravi Tripathi | Full-Stack + Product",
    description:
      "Full-stack engineer with a product-first mindset. Building reliable systems and calm experiences.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${displayFont.variable} ${bodyFont.variable}`}>
        <div className="relative z-10 min-h-screen bg-canvas text-ink">
          <Nav />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
