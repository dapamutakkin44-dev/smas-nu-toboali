"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { GraduationCap, ChevronRight, Bell, Star } from 'lucide-react';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#fcfdfd] overflow-x-hidden font-sans text-slate-800">
      
      {/* NAVBAR GAYA UNIV - FIX LOGO */}
      <nav className="fixed top-0 w-full z-[100] bg-white/90 backdrop-blur-lg border-b border-emerald-100 py-3 px-6 flex justify-between items-center shadow-sm">
        <div className="flex items-center gap-3">
          <div className="flex gap-2 bg-white p-1.5 rounded-xl border border-emerald-50 shadow-sm">
            {/* Memanggil file sesuai folder mimin */}
            <Image src="/logo-yayasan.png" alt="Logo Yayasan" width={28} height={28} className="object-contain" />
            <Image src="/logo-sma.png" alt="Logo SMA" width={28} height={28} className="object-contain" />
            <Image src="/logo-pendidikan.png" alt="Logo Pendidikan" width={28} height={28} className="object-contain" />
          </div>
          <div className="flex flex-col">
            <h1 className="font-black text-emerald-900 text-[10px] md:text-sm tracking-tighter uppercase italic leading-tight">SMAS NU TOBOALI</h1>
            <span className="text-[7px] font-bold text-emerald-600 tracking-[0.2em] uppercase italic">Bangka Selatan</span>
          </div>
        </div>
        
        <div className="hidden md:flex gap-6 text-[10px] font-bold uppercase text-slate-500 tracking-widest items-center">
          <Link href="/ppdb" className="bg-emerald-600 text-white px-5 py-2 rounded-full no-underline hover:bg-emerald-700 transition-all font-black shadow-md">PPDB 2026</Link>
        </div>
      </nav>

      {/* HERO SECTION - DENGAN FOTO ANAK-ANAK */}
      <section className="relative min-h-screen flex items-center pt-24 px-6 md:px-20 overflow-hidden">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-10">
          
          {/* SISI KIRI: TEKS */}
          <div className="md:w-3/5 text-center md:text-left z-10">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-50 text-emerald-700 rounded-full text-[9px] font-bold uppercase mb-6 border border-emerald-100">
              <Bell size={12} className="animate-bounce" /> Pendaftaran Online Dibuka
            </motion.div>
            
            <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-5xl md:text-7xl font-black text-slate-800 leading-[1.0] mb-6 uppercase italic tracking-tighter">
              Membangun <br/> <span className="text-emerald-600">Berakhlak</span> <br/> & Kompeten
            </motion.h2>

            <Link href="/ppdb" className="bg-emerald-600 text-white px-10 py-4 rounded-2xl font-black text-xs no-underline uppercase tracking-widest shadow-xl hover:bg-slate-800 transition-all inline-block border-none">
              Daftar Sekarang <ChevronRight className="inline ml-1" size={16} />
            </Link>
          </div>

          {/* SISI KANAN: FOTO ANAK-ANAK - FIX NAMA FILE */}
          <div className="md:w-2/5 relative mt-12 md:mt-0">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="relative z-10 w-full h-[450px] md:h-[550px]">
              {/* Memastikan nama file sesuai dengan Screenshot: foto-anak-nu.png */}
              <Image 
                src="/foto-anak-nu.png" 
                alt="Siswa SMAS NU" 
                fill 
                className="object-contain drop-shadow-2xl"
                priority
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-emerald-400/20 rounded-full blur-[80px] -z-10"></div>
            </motion.div>

            {/* Floating Badge Akreditasi */}
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 4 }} className="absolute bottom-10 left-0 bg-white p-3 rounded-xl shadow-2xl border border-emerald-50 z-20 hidden md:block">
              <div className="flex items-center gap-2">
                <Star className="text-amber-500" fill="currentColor" size={16} />
                <p className="text-[10px] font-black text-emerald-800 uppercase leading-none">Akreditasi A</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-50 py-10 border-t border-emerald-100 text-center">
        <p className="font-black tracking-[0.3em] uppercase text-[9px] text-slate-400">© 2026 SMAS NU TOBOALI</p>
      </footer>
    </main>
  );
}