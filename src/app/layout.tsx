import type { Metadata } from "next";
import { Inria_Serif, Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

const Serif = Inria_Serif ({
  weight: ['300','400','700'],
  style: "normal",
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "DisCode",
  description: "Site que fornece discos distribuídos pela Code JR",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={Serif.className}>
      <Header />
      {children}
      <Footer />
      </body>
    </html>
  )
}
