"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight, GraduationCap, MapPin, Users, BookOpen, Camera } from 'lucide-react';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white font-sans overflow-x-hidden text-slate-900">
      
      {/* 1. NAVBAR */}
      <nav className="bg-[#064E3B] text-white py-3 shadow-xl sticky top-0 z-[100] border-b border-amber-500/30">
        <div className="container mx-auto flex justify-between items-center px-6">
          <div className="flex items-center gap-2">
            <div className="flex gap-1 bg-white p-1 rounded-full shadow-sm">
              <Image src="/logo-yayasan.png" alt="Logo" width={22} height={22} />
              <Image src="/logo-sma.png" alt="Logo" width={22} height={22} />
            </div>
            <h1 className="text-[10px] md:text-base font-black tracking-tighter uppercase italic">SMAS NU TOBOALI</h1>
          </div>
          <div className="hidden md:flex space-x-5 text-[9px] font-bold uppercase tracking-widest items-center">
            {['Profil', 'Akademik', 'Fasilitas', 'Galeri', 'Kontak'].map((item) => (
              <Link key={item} href={`/${item.toLowerCase()}`} className="text-white hover:text-amber-400 no-underline">{item}</Link>
            ))}
            <Link href="/ppdb" className="bg-amber-500 text-emerald-900 px-3 py-1 rounded-md font-black no-underline">PPDB</Link>
          </div>
        </div>
      </nav>

      {/* 2. RUNNING TEXT */}
      <div className="bg-amber-500 py-1.5 overflow-hidden whitespace-nowrap border-b border-black/10 relative z-50">
        <div className="flex">
          <motion.div animate={{ x: ["0%", "-100%"] }} transition={{ repeat: Infinity, duration: 25, ease: "linear" }} className="inline-block text-emerald-950 font-black text-[9px] md:text-[11px] uppercase tracking-wider flex-shrink-0">
            ✨ PPDB SMAS NU TOBOALI 2026/2027 TELAH DIBUKA! DAFTARKAN DIRI ANDA SEGERA ✨ &nbsp;&nbsp;&nbsp;&nbsp;
          </motion.div>
          <motion.div animate={{ x: ["0%", "-100%"] }} transition={{ repeat: Infinity, duration: 25, ease: "linear" }} className="inline-block text-emerald-950 font-black text-[9px] md:text-[11px] uppercase tracking-wider flex-shrink-0">
            ✨ PPDB SMAS NU TOBOALI 2026/2027 TELAH DIBUKA! DAFTARKAN DIRI ANDA SEGERA ✨ &nbsp;&nbsp;&nbsp;&nbsp;
          </motion.div>
        </div>
      </div>

      {/* 3. HERO SECTION - TINGGI DITAMBAH BIAR TOMBOL GAK KETUTUP */}
      <section className="relative min-h-[90vh] flex items-center justify-center text-white text-center pt-10 pb-32">
        <div className="absolute inset-0 z-0">
          <Image src="/gedung-sekolah.jpg" alt="Gedung" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-[#064E3B]/90"></div>
        </div>
        
        <div className="relative z-10 px-6 max-w-4xl">
          <div className="inline-block px-3 py-1 border border-amber-500 text-amber-400 rounded-full text-[8px] font-bold uppercase mb-4 bg-black/40">Akreditasi A (UNGGUL)</div>
          
          <h2 className="text-4xl md:text-6xl font-black mb-6 leading-[1.1] uppercase italic drop-shadow-2xl">
            Membangun <br/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-600">Berakhlak</span> <br className="md:hidden" /> & Kompeten
          </h2>

          {/* TOMBOL DAFTAR - DIBERI MARGIN BAWAH LEBIH BANYAK */}
          <div className="mt-10 mb-10">
            <Link href="/ppdb" className="relative z-50 inline-block bg-amber-500 text-emerald-900 px-10 py-4 rounded-xl font-black text-sm no-underline uppercase tracking-widest shadow-2xl hover:bg-white transition-all transform hover:scale-105 border-none">
              Daftar Sekarang <ChevronRight className="inline ml-1" size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. MENU CEPAT */}
      <section className="relative z-[60] -mt-20 max-w-6xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {[
            { n: "Visi Misi", h: "/profil", c: "bg-emerald-800", i: <Users size={20}/> },
            { n: "Kurikulum", h: "/akademik", c: "bg-emerald-700", i: <GraduationCap size={20}/> },
            { n: "Sarana", h: "/fasilitas", c: "bg-emerald-600", i: <BookOpen size={20}/> },
            { n: "Kegiatan", h: "/galeri", c: "bg-emerald-500", i: <Camera size={20}/> },
            { n: "Lokasi", h: "/kontak", c: "bg-amber-600", i: <MapPin size={20}/> },
          ].map((m) => (
            <Link key={m.n} href={m.h} className={`${m.c} flex flex-col items-center justify-center p-4 rounded-2xl text-white shadow-xl no-underline h-32 hover:-translate-y-2 transition-transform border-b-4 border-black/10`}>
              <div className="mb-2 bg-white/10 p-2 rounded-lg">{m.i}</div>
              <span className="font-black uppercase text-[10px] italic tracking-tighter">{m.n}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* 5. FOOTER */}
      <footer className="bg-[#011f18] py-16 text-center border-t-4 border-amber-500 text-white">
        <div className="flex justify-center gap-6 mb-8 items-center">
          <Image src="/logo-yayasan.png" alt="Logo" width={45} height={45} />
          <div className="w-[1px] h-10 bg-white/20"></div>
          <Image src="/logo-sma.png" alt="Logo" width={45} height={45} />
        </div>
        <p className="font-black tracking-[0.3em] uppercase text-[11px] mb-2">© 2026 SMAS NU TOBOALI</p>
        <p className="text-[9px] uppercase tracking-widest text-white/40">Di bawah naungan Yayasan Pendidikan Fathmah Alwi</p>
      </footer>
    </main>
  );
}