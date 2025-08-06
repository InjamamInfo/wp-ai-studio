import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WordPress AI Theme Generator",
  description: "Create production-ready WordPress themes with AI-powered workflows",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}