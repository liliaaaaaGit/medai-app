import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MedAI — Traust du mir?",
  description: "KI-gestützte Gesundheitsberatung",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-inter">{children}</body>
    </html>
  );
}
