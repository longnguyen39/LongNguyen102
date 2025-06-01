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
  title: "LongNguyen39",
  description: "Long Nguyen Portfolio",
  icons: {
    icon: [
      { url: '/profile.jpg', sizes: '512x512', type: 'image/jpg' },
      { url: '/profile.jpg', sizes: 'any', type: 'image/jpg' },
    ],
    apple: [
      { url: '/profile.jpg', type: 'image/jpg' },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
