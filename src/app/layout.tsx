import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'

// Import del font (opzionale)
const inter = Inter({ subsets: ["latin"] });

// Metadati globali del sito
export const metadata: Metadata = {
  title: "Simone Garofalo",
  description: "Simone Garofalo's personal website",
};

// Layout principale (root)
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

