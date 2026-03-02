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
      
      {/* 1. NAVBAR FIXED */}
      <nav className="bg-[#064E3B] text-white py-4 shadow-2xl sticky top-0 z-[100] border-b border-amber-500/30">
        <div className="container mx-auto flex justify-between items-center px-6">
          <div className="flex items-center gap-3">
            <div className="flex gap-1 bg-white p-1 rounded-full shadow-md">
              <Image src="/logo-yayasan.png" alt="Logo" width={24} height={24} />
              <Image src="/logo-sma.png" alt="Logo" width={24} height={24} />
            </div>
            <h1 className="text-xs md:text-lg font-black tracking-tighter uppercase italic">
              SMAS NU TOBOALI
            </h1>
          </div>
          <div className="hidden md:flex space-x-6 text-[10px] font-bold uppercase tracking-widest items-center">
            {['Profil', 'Akademik', 'Fasilitas', 'Galeri', 'Kontak'].map((item) => (
              <Link key={item} href={`/${item.toLowerCase()}`} className="text-white hover:text-amber-400 no-underline">
                {item}
              </Link>
            ))}
            <Link href="/ppdb" className="bg-amber-500 text-emerald-900 px-4 py-1 rounded-lg font-black no-underline shadow-lg">PPDB</Link>
          </div>
        </div>
      </nav>

      {/* 2. RUNNING TEXT (PENGUMUMAN) - WARNA AMBER TERANG */}
      <div className="bg-amber-500 py-2 overflow-hidden whitespace-nowrap border-b border-black/10 relative z-50">
        <motion.div 
          animate={{ x: ["100%", "-100%"] }} 
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="inline-block text-emerald-950 font-black text-[10px] md:text-xs uppercase tracking-[0.2em]"
        >
          ✨ PENERIMAAN PESERTA DIDIK BARU (PPDB) SMAS NU TOBOALI TAHUN PELAJARAN 2026/2027 TELAH DIBUKA! SEGERA DAFTARKAN DIRI ANDA ✨ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ✨ PENERIMAAN PESERTA DIDIK BARU (PPDB) SMAS NU TOBOALI TAHUN PELAJARAN 2026/2027 TELAH DIBUKA! SEGERA DAFTARKAN DIRI ANDA ✨
        </motion.div>
      </div>

      {/* 3. HERO SECTION - UKURAN FONT DIKECILKAN BIAR RAPI */}
      <section className="relative h-[80vh] flex items-center justify-center text-white text-center pt-10">
        <div className="absolute inset-0 z-0">
          <Image src="/gedung-sekolah.jpg" alt="Gedung" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-[#064E3B]/90"></div>
        </div>
        
        <div className="relative z-10 px-6 max-w-4xl">
          <div className="inline-block px-4 py-1 border border-amber-500 text-amber-400 rounded-full text-[9px] font-bold uppercase mb-6 bg-black/40">
            Akreditasi A (UNGGUL)
          </div>
          
          <h2 className="text-4xl md:text-7xl font-black mb-8 leading-tight uppercase italic drop-shadow-2xl">
            Membangun <br/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-500 to-amber-600">
              Berakhlak
            </span> <br className="md:hidden" /> & Kompeten
          </h2>

          <div className="mt-4">
            <Link href="/ppdb" className="inline-block bg-amber-500 text-emerald-900 px-10 py-4 rounded-xl font-black text-sm no-underline uppercase tracking-widest shadow-2xl hover:bg-white transition-all">
              Daftar Sekarang <ChevronRight className="inline ml-1" size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. MENU CEPAT - MEPET KE ATAS (NEGATIF MARGIN) */}
      <section className="relative z-20 -mt-16 max-w-6xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {[
            { n: "Visi Misi", h: "/profil", c: "bg-emerald-800", i: <Users size={20}/> },
            { n: "Kurikulum", h: "/akademik", c: "bg-emerald-700", i: <GraduationCap size={20}/> },
            { n: "Sarana", h: "/fasilitas", c: "bg-emerald-600", i: <BookOpen size={20}/> },
            { n: "Kegiatan", h: "/galeri", c: "bg-emerald-500", i: <Camera size={20}/> },
            { n: "Lokasi", h: "/kontak", c: "bg-amber-600", i: <MapPin size={20}/> },
          ].map((m) => (
            <Link key={m.n} href={m.h} className={`${m.c} flex flex-col items-center justify-center p-4 rounded-2xl text-white shadow-xl no-underline h-32 hover:-translate-y-2 transition-transform`}>
              <div className="mb-2 bg-white/10 p-2 rounded-lg">{m.i}</div>
              <span className="font-black uppercase text-[10px] italic">{m.n}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#011f18] py-12 text-center border-t-4 border-amber-500 text-white">
        <p className="font-black tracking-[0.3em] uppercase text-xs mb-2">© 2026 SMAS NU TOBOALI</p>
      </footer>
    </main>
  );
}