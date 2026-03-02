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
      
      {/* 1. NAVBAR GLASSMORPHISM (Efek Kaca Futuristik) */}
      <nav className="bg-[#064E3B]/80 backdrop-blur-lg text-white py-3 shadow-2xl sticky top-0 z-[100] border-b border-amber-500/30 transition-all duration-300">
        <div className="container mx-auto flex justify-between items-center px-6">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-3">
            <div className="flex gap-1 bg-white p-1.5 rounded-full shadow-inner">
              <Image src="/logo-yayasan.png" alt="Logo Yayasan" width={28} height={28} className="object-contain" />
              <div className="w-[1px] h-6 bg-slate-200 self-center"></div>
              <Image src="/logo-sma.png" alt="Logo SMA" width={28} height={28} className="object-contain" />
            </div>
            <h1 className="text-sm md:text-lg font-black tracking-tighter uppercase italic bg-gradient-to-r from-white to-amber-200 bg-clip-text text-transparent">
              SMAS NU TOBOALI
            </h1>
          </motion.div>

          <div className="hidden md:flex space-x-6 text-[10px] font-bold uppercase tracking-widest">
            {['Profil', 'Akademik', 'Fasilitas', 'Galeri', 'Kontak'].map((item) => (
              <Link key={item} href={`/${item.toLowerCase()}`} className="text-white hover:text-amber-400 no-underline transition-all hover:scale-110">
                {item}
              </Link>
            ))}
            <Link href="/ppdb" className="bg-amber-500 text-[#064E3B] px-4 py-1 rounded-lg font-black no-underline hover:bg-white transition-all shadow-lg hover:shadow-amber-500/50">PPDB</Link>
          </div>
        </div>
      </nav>

      {/* 2. HERO SECTION DENGAN JUDUL GRADASI EMAS */}
      <section className="relative h-[85vh] flex items-center justify-center text-white text-center">
        <div className="absolute inset-0 z-0">
          <Image src="/gedung-sekolah.jpg" alt="Gedung" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#064E3B]/90"></div>
        </div>
        
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="relative z-10 px-6">
          <motion.div 
            initial={{ scale: 0.8 }} 
            animate={{ scale: 1 }} 
            className="inline-block px-4 py-1 border border-amber-500 text-amber-400 rounded-full text-[9px] font-bold uppercase tracking-[0.2em] mb-6 bg-black/40 backdrop-blur-sm shadow-lg shadow-amber-500/20"
          >
            Akreditasi A (UNGGUL)
          </motion.div>
          
          <h2 className="text-6xl md:text-9xl font-black mb-6 leading-none uppercase tracking-tighter italic drop-shadow-2xl">
            Membangun <br/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-500 to-amber-600">
              Berakhlak
            </span> <br className="md:hidden" /> & Kompeten
          </h2>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="mt-8">
            <Link href="/ppdb" className="inline-block bg-gradient-to-r from-amber-600 to-amber-500 text-white px-12 py-4 rounded-2xl font-black text-sm hover:from-amber-500 hover:to-amber-400 transition-all no-underline uppercase tracking-widest shadow-[0_10px_40px_rgba(217,119,6,0.4)] border-none">
              Daftar Sekarang <ChevronRight className="inline ml-1" size={18} />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* 3. MENU CEPAT (Efek Hover Melayang) */}
      <section className="relative z-20 -mt-16 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            { n: "Visi Misi", h: "/profil", c: "bg-emerald-800", i: <Users size={24}/> },
            { n: "Kurikulum", h: "/akademik", c: "bg-emerald-700", i: <GraduationCap size={24}/> },
            { n: "Sarana", h: "/fasilitas", c: "bg-emerald-600", i: <BookOpen size={24}/> },
            { n: "Kegiatan", h: "/galeri", c: "bg-[#00b894]", i: <Camera size={24}/> },
            { n: "Lokasi", h: "/kontak", c: "bg-amber-600", i: <MapPin size={24}/> },
          ].map((m, idx) => (
            <motion.div key={m.n} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }}>
              <Link href={m.h} className={`${m.c} flex flex-col items-center justify-center p-6 rounded-3xl text-white shadow-2xl no-underline hover:-translate-y-3 hover:rotate-2 transition-all duration-300 border-b-8 border-black/20 group h-36`}>
                <div className="mb-3 opacity-90 group-hover:scale-125 transition-transform duration-300 bg-white/10 p-3 rounded-2xl">{m.i}</div>
                <span className="font-black uppercase tracking-tighter text-[11px] italic">{m.n}</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#011f18] py-16 text-center border-t-4 border-amber-500 text-white mt-20">
        <div className="flex justify-center gap-6 mb-8 items-center">
          <Image src="/logo-yayasan.png" alt="Logo Yayasan" width={50} height={50} className="object-contain transition-opacity hover:opacity-100" />
          <div className="w-[1px] h-10 bg-white/20"></div>
          <Image src="/logo-sma.png" alt="Logo SMA" width={50} height={50} className="object-contain transition-opacity hover:opacity-100" />
        </div>
        <p className="font-black tracking-[0.3em] uppercase text-sm mb-2">© 2026 SMAS NU TOBOALI</p>
        <p className="text-[10px] uppercase tracking-widest text-white/50">Di bawah naungan Yayasan Pendidikan Fathmah Alwi</p>
      </footer>
    </main>
  );
}