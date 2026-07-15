import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import AppLayout from "../components/layout/AppLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Flora",
  description: "Tvůj osobní průvodce světem rostlin",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="cs"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>
        <AppLayout>
          {children}
        </AppLayout>
      </body>
    </html>
  );
}