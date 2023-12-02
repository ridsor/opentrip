import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Open Trip - Register",
  description: "open trip",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
