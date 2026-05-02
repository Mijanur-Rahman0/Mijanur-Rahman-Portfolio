import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Mijanur Rahman | Front-end Developer Portfolio",
  description: "Modern portfolio of Mijanur Rahman, a software engineer specializing in Next.js, React, and high-performance web applications.",
  keywords: ["Software Engineer", "Front-end Developer", "Next.js", "React", "Portfolio", "Web Design"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
