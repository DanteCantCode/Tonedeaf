import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tonedeaf — ECU DJ Club",
  description:
    "Tonedeaf is Edith Cowan University's club for DJ'ing, electronic music, and event production.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className="min-h-full bg-brand text-ink antialiased">{children}</body>
    </html>
  );
}
