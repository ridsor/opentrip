"use client";

import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
import Footer from "./footer";
import "./globals.css";
import Header from "./header";

const inter = Inter({ subsets: ["latin"] });

const enableHeaderFooter = ["/destinasi", "/register"];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        {enableHeaderFooter.some(
          (value) => pathname.includes(value) || pathname === "/"
        ) && <Header />}
        {children}
        {enableHeaderFooter.some(
          (value) => pathname.includes(value) || pathname === "/"
        ) && <Footer />}
      </body>
    </html>
  );
}
