"use client";

import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
import Footer from "./footer";
import "./globals.css";
import Header from "./header";

const inter = Inter({ subsets: ["latin"] });

const enableHeaderFooter = [
  "/",
  "/destinasi",
  "/destinasi/*",
  "/register",
  "/register/user",
  "/register/hoster",
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body className={inter.className}>
        {(enableHeaderFooter.includes(pathname) ||
          enableHeaderFooter.some(
            (value) =>
              value.includes("*") && pathname.startsWith(value.split("*")[0])
          )) && <Header />}
        {children}
        {(enableHeaderFooter.includes(pathname) ||
          enableHeaderFooter.some(
            (value) =>
              value.includes("*") && pathname.startsWith(value.split("*")[0])
          )) && <Footer />}
      </body>
    </html>
  );
}
