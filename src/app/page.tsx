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
      
      {/* 1. NAVBAR GLASSMORPHISM */}
      <nav className="bg-[#064E3B]/90 backdrop-blur-lg text-white py-4 shadow-2xl sticky top-0 z-[100] border-b border-amber-500/30">
        <div className="container mx-auto flex justify-between items-center px-6">
          <div className="flex items-center gap-3">
            <div className="flex gap-1 bg-white p-1 rounded-full">
              <Image src="/logo-yayasan.png" alt="Logo" width={24} height={24} />
              <div className="w-[1px] h-4 bg-slate-200 self-center"></div>
              <Image src="/logo-sma.png" alt="Logo" width={24} height={24} />
            </div>
            <h1 className="text-sm md:text-lg font-black tracking-tighter uppercase italic">
              SMAS NU TOBOALI
            </h1>
          </div>
          <div className="hidden md:flex space-x-6 text-[10px] font-bold uppercase tracking-widest">
            {['Profil', 'Akademik', 'Fasilitas', 'Galeri', 'Kontak'].map((item) => (
              <Link key={item} href={`/${item.toLowerCase()}`} className="text-white hover:text-amber-400 no-underline transition-all">
                {item}
              </Link>
            ))}
            <Link href="/ppdb" className="bg-amber-500 text-emerald-900 px-4 py-1 rounded-lg font-black no-underline hover:bg-white transition-all">PPDB</Link>
          </div>
        </div>
      </nav>

      {/* 2. RUNNING TEXT (PENGUMUMAN) */}
      <div className="bg-amber-500 py-2 overflow-hidden whitespace-nowrap border-b border-emerald-900/20 sticky top-[72px] z-[90]">
        <motion.div 
          animate={{ x: [1000, -1200] }} 
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="inline-block text-emerald-900 font-bold text-[10px] uppercase tracking-[0.2em]"
        >
          ✨ PENERIMAAN PESERTA DIDIK BARU (PPDB) SMAS NU TOBOALI TAHUN PELAJARAN 2026/2027 TELAH DIBUKA! SEGERA DAFTARKAN DIRI ANDA ✨
        </motion.div>
      </div>

      {/* 3. HERO SECTION - POSISI PRESISI */}
      <section className="relative h-[88vh] flex items-center justify-center text-white text-center pt-20 pb-20">
        <div className="absolute inset-0 z-0">
          <Image src="/gedung-sekolah.jpg" alt="Gedung" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#064E3B]/90"></div>
        </div>
        
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="relative z-10 px-6 max-w-5xl flex flex-col items-center">
          <div className="inline-block px-4 py-1 border border-amber-500 text-amber-400 rounded-full text-[9px] font-bold uppercase tracking-[0.2em] mb-10 bg-black/40 backdrop-blur-sm">
            Akreditasi A (UNGGUL)
          </div>
          
          <h2 className="text-5xl md:text-8xl font-black mb-10 leading-[1.1] uppercase italic drop-shadow-2xl">
            Membangun <br/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-500 to-amber-600">
              Berakhlak
            </span> <br className="md:hidden" /> & Kompeten
          </h2>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="mt-8">
            <Link href="/ppdb" className="inline-block bg-gradient-to-r from-amber-600 to-amber-500 text-white px-12 py-5 rounded-2xl font-black text-sm hover:from-amber-500 hover:to-amber-400 transition-all no-underline uppercase tracking-widest shadow-2xl border-none">
              Daftar Sekarang <ChevronRight className="inline ml-1" size={18} />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* 4. MENU CEPAT - MEPET KE ATAS */}
      <section className="relative z-20 -mt-20 max-w-6xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            { n: "Visi Misi", h: "/profil", c: "bg-emerald-800", i: <Users size={24}/> },
            { n: "Kurikulum", h: "/akademik", c: "bg-emerald-700", i: <GraduationCap size={24}/> },
            { n: "Sarana", h: "/fasilitas", c: "bg-emerald-600", i: <BookOpen size={24}/> },
            { n: "Kegiatan", h: "/galeri", c: "bg-[#00b894]", i: <Camera size={24}/> },
            { n: "Lokasi", h: "/kontak", c: "bg-amber-600", i: <MapPin size={24}/> },
          ].map((m, idx) => (
            <motion.div key={m.n} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }}>
              <Link href={m.h} className={`${m.c} flex flex-col items-center justify-center p-6 rounded-3xl text-white shadow-2xl no-underline hover:-translate-y-3 transition-all duration-300 border-b-8 border-black/20 h-36`}>
                <div className="mb-3 bg-white/10 p-3 rounded-2xl">{m.i}</div>
                <span className="font-black uppercase tracking-tighter text-[11px] italic">{m.n}</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#011f18] py-16 text-center border-t-4 border-amber-500 text-white">
        <div className="flex justify-center gap-6 mb-8 items-center">
          <Image src="/logo-yayasan.png" alt="Logo Yayasan" width={50} height={50} />
          <div className="w-[1px] h-10 bg-white/20"></div>
          <Image src="/logo-sma.png" alt="Logo SMA" width={50} height={50} />
        </div>
        <p className="font-black tracking-[0.3em] uppercase text-sm mb-2">© 2026 SMAS NU TOBOALI</p>
        <p className="text-[10px] uppercase tracking-widest text-white/50">Di bawah naungan Yayasan Pendidikan Fathmah Alwi</p>
      </footer>
    </main>
  );
}