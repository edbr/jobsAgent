import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jobs Agent",
  description: "A job search and application tracking agent built with Next.js and shadcn/ui.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
