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

export const metadata: Metadata = {
  title: "Ravi Tripathi | Full-Stack + Product",
  description:
    "Portfolio of Ravi Tripathi, a full-stack developer with a product manager mindset.",
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
