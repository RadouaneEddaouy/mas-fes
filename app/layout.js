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

export const metadata = {
  title: "MAS Fès Official Website",
  description: "MAS Fès Official Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        style={{ fontFamily: "'Cairo', sans-serif" }}
        className="bg-[#09090b] text-white"
      >
        {children}
      </body>
    </html>
  );
}
