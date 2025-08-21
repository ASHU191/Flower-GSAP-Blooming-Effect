import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "fLOWER GSAP - A Beautiful Scrolling Experience",
  description: "A beautiful scrolling experience with flower blooming effect",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
