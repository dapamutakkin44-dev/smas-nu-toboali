import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// Import komponen Navbar dan Footer (sesuaikan jalurnya kalau error)
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SMAS NU TOBOALI - Berakhlak & Kompeten",
  description: "Website resmi SMAS NU TOBOALI, sekolah menengah atas berbasis pondok pesantren di Bangka Selatan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Navbar ditaruh di atas biar muncul di setiap halaman */}
        <Navbar />
        
        {/* Isi halaman (Visi Misi, Sejarah, dll) akan muncul di sini */}
        {children}
        
        {/* Footer ditaruh di bawah biar muncul di setiap halaman */}
        <Footer />
      </body>
    </html>
  );
}