import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sumeet Surana - Builder, Writer, Photographer",
  description: "Personal site of Sumeet Surana - VC at Cypher Capital, builder, writer, and photographer based in Dubai",
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
