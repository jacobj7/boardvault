import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Boardvault",
  description: "Compliance and document tracker for HOA and condo boards — insurance renewals, reserve studies, vendor COIs.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
