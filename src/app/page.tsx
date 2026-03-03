"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { GraduationCap, Book, Users, Star, ChevronRight } from 'lucide-react';

export default function ModernHero() {
  return (
    <main className="min-h-screen bg-[#f8fafc] overflow-hidden font-sans">
      {/* 1. NAVBAR TRANSPARAN MODERN */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-emerald-100 py-4 px-10 flex justify-between items-center shadow-sm">
        <div className="flex items-center gap-3">
          <Image src="/logo-sma.png" alt="Logo" width={40} height={40} />
          <h1 className="font-black text-emerald-800 tracking-tighter uppercase italic">SMAS NU TOBOALI</h1>
        </div>
        <div className="hidden md:flex gap-8 text-[11px] font-bold uppercase text-slate-600 tracking-widest">
          {['Tentang', 'Akademik', 'Admisi', 'Layanan'].map(item => (
            <Link key={item} href="#" className="hover:text-emerald-600 transition-colors no-underline">{item}</Link>
          ))}
          <Link href="/ppdb" className="bg-emerald-600 text-white px-5 py-2 rounded-full no-underline hover:bg-emerald-700 shadow-lg shadow-emerald-200">PPDB 2026</Link>
        </div>
      </nav>

      {/* 2. HERO SECTION GAYA UNIV */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-40 px-10">
        {/* Ornamen Melayang */}
        <motion.div animate={{ y: [0, -20, 0] }} transition={{ repeat: Infinity, duration: 5 }} className="absolute top-40 right-[10%] opacity-20 hidden md:block text-emerald-500">
          <GraduationCap size={120} />
        </motion.div>
        
        <div className="container mx-auto flex flex-col md:flex-row items-center relative z-10">
          {/* Sisi Kiri: Teks */}
          <div className="md:w-1/2 text-center md:text-left">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-block px-4 py-1 bg-emerald-100 text-emerald-700 rounded-full text-[10px] font-bold uppercase mb-6">
              Assalamu'alaikum Warahmatullahi Wabarakatuh
            </motion.div>
            <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-5xl md:text-7xl font-black text-slate-800 leading-[1.1] mb-8 uppercase italic">
              Membangun <br/> <span className="text-emerald-600">Berakhlak</span> <br/> & Kompeten
            </motion.h2>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
              <Link href="/ppdb" className="bg-gradient-to-r from-emerald-600 to-emerald-500 text-white px-10 py-5 rounded-2xl font-black text-sm no-underline uppercase tracking-widest shadow-2xl hover:scale-105 transition-all inline-block border-none">
                Jelajahi SMAS NU <ChevronRight className="inline ml-1" />
              </Link>
            </motion.div>
          </div>

          {/* Sisi Kanan: Foto Siswa (Contoh) */}
          <div className="md:w-1/2 mt-20 md:mt-0 relative">
            <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.8 }}>
              {/* Mimin bisa ganti src ini dengan foto siswa yang sudah dihapus backgroundnya */}
              <div className="relative w-full h-[500px] flex items-center justify-center">
                 <div className="absolute inset-0 bg-emerald-400/20 rounded-full blur-[80px] -z-10"></div>
                 <p className="text-slate-400 font-bold italic uppercase">[ Foto Siswa Disini ]</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}