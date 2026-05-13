import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Meisterbetrieb Fensterbau — Fenster, Türen & Wintergärten",
  description:
    "Ihr regionaler Fensterbau-Meisterbetrieb. Beratung, Fertigung und Montage von Fenstern, Haustüren und Wintergärten aus einer Hand.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={inter.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
