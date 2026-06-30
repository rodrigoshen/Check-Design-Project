import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({
  variable : "--font-inter",
  subsets : ["latin"]
})

export const metadata: Metadata = {
  title: "Check Design - Home",
  description: "Página inicial do aplicativo Check Design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
        <html
          lang="pt-br"
          className={`${inter.variable} h-full antialiased`}
        >
          <body className="min-h-full flex items-center flex-col">{children}</body>
        </html>
  );
}
