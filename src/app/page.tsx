"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ChevronRight, 
  GraduationCap, 
  MapPin, 
  Users, 
  BookOpen, 
  Camera 
} from 'lucide-react';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white font-sans overflow-x-hidden text-slate-900">
      
      {/* 1. NAVBAR - JARAK AMAN */}
      <nav className="bg-[#064E3B]/90 backdrop-blur-lg text-white py-4 shadow-2xl sticky top-0 z-[100] border-b border-amber-500/30">
        <div className="container mx-auto flex justify-between items-center px-6">
          <div className="flex items-center gap-3">
            <div className="flex gap-1 bg-white p-1 rounded-full">
              <Image src="/logo-yayasan.png" alt="Logo" width={24} height={24} />
              <Image src="/logo-sma.png" alt="Logo" width={24} height={24} />
            </div>
            <h1 className="text-sm md:text-lg font-black tracking-tighter uppercase italic">
              SMAS NU TOBOALI
            </h1>
          </div>
          <div className="hidden md:flex space-x-6 text-[10px] font-bold uppercase tracking-widest">
            {['Profil', 'Akademik', 'Fasilitas', 'Galeri', 'Kontak'].map((item) => (
              <Link key={item} href={`/${item.toLowerCase()}`} className="text-white hover:text-amber-400 no-underline">
                {item}
              </Link>
            ))}
            <Link href="/ppdb" className="bg-amber-500 text-emerald-900 px-4 py-1 rounded-lg font-black no-underline">PPDB</Link>
          </div>
        </div>
      </nav>

      {/* 2. HERO SECTION - TULISAN TURUN & TOMBOL TURUN */}
      <section className="relative h-[95vh] flex items-center justify-center text-white text-center pt-32 pb-24">
        <div className="absolute inset-0 z-0">
          <Image src="/gedung-sekolah.jpg" alt="Gedung" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#064E3B]/90"></div>
        </div>
        
        <div className="relative z-10 px-6 max-w-5xl">
          <div className="inline-block px-4 py-1 border border-amber-500 text-amber-400 rounded-full text-[9px] font-bold mb-12 bg-black/40">
            Akreditasi A (UNGGUL)
          </div>
          
          <h2 className="text-5xl md:text-8xl font-black mb-12 leading-[1.1] uppercase italic drop-shadow-2xl">
            Membangun <br/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-500 to-amber-600">
              Berakhlak
            </span> <br className="md:hidden" /> & Kompeten
          </h2>

          <div className="mt-16">
            <Link href="/ppdb" className="bg-gradient-to-r from-amber-600 to-amber-500 text-white px-12 py-5 rounded-2xl font-black text-sm no-underline uppercase tracking-widest shadow-2xl">
              Daftar Sekarang <ChevronRight className="inline ml-1" size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. MENU CEPAT - MEPET KE ATAS */}
      <section className="relative z-20 -mt-24 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            { n: "Visi Misi", h: "/profil", c: "bg-emerald-800", i: <Users/> },
            { n: "Kurikulum", h: "/akademik", c: "bg-emerald-700", i: <GraduationCap/> },
            { n: "Sarana", h: "/fasilitas", c: "bg-emerald-600", i: <BookOpen/> },
            { n: "Kegiatan", h: "/galeri", c: "bg-[#00b894]", i: <Camera/> },
            { n: "Lokasi", h: "/kontak", c: "bg-amber-600", i: <MapPin/> },
          ].map((m) => (
            <Link key={m.n} href={m.h} className={`${m.c} flex flex-col items-center justify-center p-6 rounded-3xl text-white shadow-2xl no-underline h-36`}>
              <div className="mb-3 bg-white/10 p-3 rounded-2xl">{m.i}</div>
              <span className="font-black uppercase text-[11px] italic">{m.n}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#011f18] py-16 text-center border-t-4 border-amber-500 text-white mt-20">
        <div className="flex justify-center gap-6 mb-8 items-center">
          <Image src="/logo-yayasan.png" alt="Logo" width={50} height={50} />
          <Image src="/logo-sma.png" alt="Logo" width={50} height={50} />
        </div>
        <p className="font-black tracking-[0.3em] uppercase text-sm mb-2">© 2026 SMAS NU TOBOALI</p>
      </footer>
    </main>
  );
}