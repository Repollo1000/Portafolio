import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import { isUtf8 } from "buffer";
import Navbar from "@/components/navbar";
import Header from "@/components/header";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mi portafolio",
  description: "Mi pagina web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={urbanist.className}>
        <Navbar />
        <Header />
        {children}

      </body>
    </html>
  );
}
