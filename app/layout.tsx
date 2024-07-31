import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import { isUtf8 } from "buffer";

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
      <body className={urbanist.className}>{children}</body>
    </html>
  );
}
