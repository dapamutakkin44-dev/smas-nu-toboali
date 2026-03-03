"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { GraduationCap, Book, Users, Star, ChevronRight, Bell, Camera, MapPin, ChevronDown } from 'lucide-react';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#fcfdfd] overflow-x-hidden font-sans text-slate-800">
      
      {/* 1. NAVBAR - URUTAN: PENDIDIKAN, YAYASAN, SMA */}
      <nav className="fixed top-0 w-full z-[100] bg-white/80 backdrop-blur-xl border-b border-emerald-100 py-3 px-6 md:px-12 flex justify-between items-center shadow-sm">
        <div className="flex items-center gap-3">
          <div className="flex gap-2 bg-white p-1.5 rounded-2xl border border-emerald-50 shadow-inner">
            <Image src="/logo-pendidikan.png" alt="Pusat" width={28} height={28} className="object-contain" />
            <Image src="/logo-yayasan.png" alt="Yayasan" width={28} height={28} className="object-contain" />
            <Image src="/logo-sma.png" alt="SMA" width={28} height={28} className="object-contain" />
          </div>
          <div className="flex flex-col text-left">
            <h1 className="font-black text-emerald-900 text-[10px] md:text-sm tracking-tighter uppercase italic leading-tight">SMAS NU TOBOALI</h1>
            <span className="text-[7px] font-bold text-emerald-600 tracking-[0.2em] uppercase italic">Bangka Selatan</span>
          </div>
        </div>
        
        <div className="hidden md:flex gap-8 text-[11px] font-black uppercase text-slate-500 tracking-widest items-center">
          {/* MENU DROPDOWN PROFIL */}
          <div className="relative group py-2 cursor-pointer">
            <span className="hover:text-emerald-600 transition-all flex items-center gap-1">
              Profil <ChevronDown size={12} />
            </span>
            <div className="absolute top-full left-0 w-56 bg-white shadow-2xl rounded-2xl border border-emerald-50 py-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-4 group-hover:translate-y-0">
              <Link href="/profil/sejarah" className="block px-6 py-2.5 hover:bg-emerald-50 hover:text-emerald-700 no-underline text-slate-500 font-bold tracking-normal">Sejarah Sekolah</Link>
              <Link href="/profil/visi-misi" className="block px-6 py-2.5 hover:bg-emerald-50 hover:text-emerald-700 no-underline text-slate-500 font-bold tracking-normal">Visi & Misi</Link>
            </div>
          </div>

          <Link href="/akademik" className="hover:text-emerald-600 transition-all no-underline">Akademik</Link>
          <Link href="/galeri" className="hover:text-emerald-600 transition-all no-underline">Galeri</Link>
          <Link href="/ppdb" className="bg-emerald-600 text-white px-7 py-2.5 rounded-full no-underline hover:shadow-xl hover:shadow-emerald-200 transition-all font-black border-none">PPDB 2026</Link>
        </div>
      </nav>

      {/* 2. RUNNING TEXT */}
      <div className="fixed top-[68px] w-full z-40 bg-amber-400 py-1.5 overflow-hidden whitespace-nowrap shadow-sm border-b border-amber-500/20">
        <motion.div animate={{ x: ["0%", "-100%"] }} transition={{ repeat: Infinity, duration: 35, ease: "linear" }} className="inline-block text-emerald-950 font-black text-[9px] uppercase tracking-[0.2em]">
          ✨ PENERIMAAN PESERTA DIDIK BARU SMAS NU TOBOALI TAHUN PELAJARAN 2026/2027 TELAH DIBUKA! DAFTARKAN DIRI ANDA SEGERA ✨ &nbsp;&nbsp;&nbsp;&nbsp;
        </motion.div>
      </div>

      {/* 3. HERO SECTION */}
      <section className="relative min-h-screen flex items-center pt-32 px-6 md:px-20 overflow-hidden bg-gradient-to-b from-white to-emerald-50/30">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-3/5 text-center md:text-left z-10">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-50 text-emerald-700 rounded-full text-[9px] font-bold uppercase mb-8 border border-emerald-100">
              <Bell size={12} className="animate-bounce" /> Pendaftaran Online Dibuka
            </motion.div>
            <h2 className="text-5xl md:text-8xl font-black text-slate-800 leading-[1.0] mb-8 uppercase italic tracking-tighter">
              Membangun <br/> <span className="text-emerald-600">Berakhlak</span> <br/> & Kompeten
            </h2>
            <Link href="/ppdb" className="bg-emerald-600 text-white px-12 py-5 rounded-2xl font-black text-sm no-underline uppercase tracking-widest shadow-2xl hover:bg-slate-800 transition-all inline-block border-none">
              Daftar Sekarang <ChevronRight className="inline ml-1" />
            </Link>
          </div>
          <div className="md:w-2/5 relative mt-12 md:mt-0 flex justify-center">
            <div className="relative z-10 w-[350px] md:w-[500px] h-[450px] md:h-[600px]">
              <Image src="/foto-anak-nu.png" alt="Siswa SMAS NU" fill className="object-contain drop-shadow-2xl" priority />
            </div>
          </div>
        </div>
      </section>

      {/* 4. FOOTER */}
      <footer className="bg-white py-16 border-t border-emerald-100 text-center">
        <div className="flex justify-center gap-6 mb-8 items-center opacity-80">
          <Image src="/logo-pendidikan.png" alt="Kemendikbud" width={40} height={40} />
          <Image src="/logo-yayasan.png" alt="Yayasan" width={40} height={40} />
          <Image src="/logo-sma.png" alt="SMA" width={40} height={40} />
        </div>
        <p className="font-black tracking-[0.4em] uppercase text-[10px] text-slate-400">© 2026 SMAS NU TOBOALI</p>
      </footer>
    </main>
  );
}