import type { Metadata } from "next";
import "./globals.css";
import AppLayout from "../components/layout/AppLayout";

export const metadata: Metadata = { title: "Flora", description: "Tvůj osobní průvodce světem rostlin.", applicationName: "Flora", appleWebApp: { capable: true, title: "Flora", statusBarStyle: "default" }, formatDetection: { telephone: false } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="cs" suppressHydrationWarning><body><AppLayout>{children}</AppLayout></body></html>; }
