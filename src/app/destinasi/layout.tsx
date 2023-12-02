import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Open Trip - Destinasi",
  description: "open trip",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
