"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { GraduationCap, Book, Users, Star, ChevronRight, Bell } from 'lucide-react';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#fcfdfd] overflow-x-hidden font-sans text-slate-800">
      
      {/* 1. NAVBAR PUTIH BERSIH (GAYA UNIV) */}
      <nav className="fixed top-0 w-full z-[100] bg-white/90 backdrop-blur-lg border-b border-emerald-100 py-3 px-6 md:px-12 flex justify-between items-center shadow-sm">
        <div className="flex items-center gap-3">
          {/* DERETAN LOGO LENGKAP */}
          <div className="flex gap-2 bg-white p-1.5 rounded-xl border border-emerald-50 shadow-sm">
            <Image src="/logo-yayasan.png" alt="Logo Yayasan" width={28} height={28} className="object-contain" />
            <Image src="/logo-sma.png" alt="Logo SMA" width={28} height={28} className="object-contain" />
            <Image src="/logo-pendidikan.png" alt="Logo Pendidikan" width={28} height={28} className="object-contain" />
          </div>
          <div className="flex flex-col">
            <h1 className="font-black text-emerald-900 text-[10px] md:text-sm tracking-tighter uppercase italic leading-tight">SMAS NU TOBOALI</h1>
            <span className="text-[7px] font-bold text-emerald-600 tracking-[0.2em] uppercase">Bangka Selatan</span>
          </div>
        </div>
        
        {/* MENU NAVIGASI */}
        <div className="hidden md:flex gap-8 text-[11px] font-bold uppercase text-slate-500 tracking-widest items-center">
          {['Tentang', 'Akademik', 'Layanan', 'Galeri'].map(item => (
            <Link key={item} href="#" className="hover:text-emerald-600 transition-colors no-underline">{item}</Link>
          ))}
          <Link href="/ppdb" className="bg-emerald-600 text-white px-6 py-2.5 rounded-full no-underline hover:bg-emerald-700 shadow-lg shadow-emerald-200 transition-all font-black">PPDB 2026</Link>
        </div>
      </nav>

      {/* 2. RUNNING TEXT - TIPIS & ELEGAN */}
      <div className="fixed top-[68px] w-full z-40 bg-amber-400 py-1.5 overflow-hidden whitespace-nowrap shadow-sm">
        <motion.div animate={{ x: ["0%", "-100%"] }} transition={{ repeat: Infinity, duration: 30, ease: "linear" }} className="inline-block text-emerald-950 font-black text-[9px] uppercase tracking-[0.2em]">
          ✨ INFO PPDB: PENERIMAAN PESERTA DIDIK BARU SMAS NU TOBOALI TAHUN 2026/2027 TELAH DIBUKA! DAFTARKAN DIRI SEGERA ✨ &nbsp;&nbsp;&nbsp;&nbsp;
        </motion.div>
      </div>

      {/* 3. HERO SECTION GAYA MODERN UNIV */}
      <section className="relative min-h-screen flex items-center pt-24 px-6 md:px-20 overflow-hidden">
        {/* Ornamen Melayang (Background) */}
        <motion.div animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 6 }} className="absolute top-40 right-[15%] opacity-10 hidden md:block text-emerald-600">
          <GraduationCap size={150} />
        </motion.div>
        
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-10">
          
          {/* SISI KIRI: TEKS UTAMA */}
          <div className="md:w-3/5 text-center md:text-left z-10">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-50 text-emerald-700 rounded-full text-[10px] font-bold uppercase mb-8 border border-emerald-100">
              <Bell size={14} className="animate-bounce" /> Pendaftaran Online Telah Dibuka
            </motion.div>
            
            <motion.h2 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-5xl md:text-8xl font-black text-slate-800 leading-[1.0] mb-8 uppercase italic tracking-tighter">
              Membangun <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-green-500 to-emerald-400">Berakhlak</span> <br/> & Kompeten
            </motion.h2>
            
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="text-slate-500 text-sm md:text-lg mb-10 max-w-xl font-medium leading-relaxed">
              Mencetak generasi unggul yang religius, cerdas, dan siap menghadapi tantangan masa depan bersama SMAS NU Toboali.
            </motion.p>

            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6 }}>
              <Link href="/ppdb" className="bg-emerald-600 text-white px-12 py-5 rounded-2xl font-black text-sm no-underline uppercase tracking-widest shadow-2xl hover:bg-slate-800 transition-all inline-block border-none">
                Daftar Sekarang <ChevronRight className="inline ml-1" />
              </Link>
            </motion.div>
          </div>

          {/* SISI KANAN: TEMPAT FOTO ANAK-ANAK (SLOT) */}
          <div className="md:w-2/5 relative mt-12 md:mt-0">
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="relative z-10 w-full h-[400px] md:h-[600px] flex items-center justify-center">
              
              {/* --- TEMPAT FOTO SISWA --- */}
              {/* Ganti '/foto-anak-nu.png' dengan nama file foto siswa mimin yang sudah dihapus backgroundnya */}
              <Image 
                src="/foto-anak-nu.png" 
                alt="Siswa SMAS NU" 
                fill 
                className="object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
              />
              
              {/* Efek Cahaya Belakang */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-emerald-400/20 rounded-full blur-[100px] -z-10 animate-pulse"></div>
            </motion.div>
            
            {/* Kartu Pencapaian Kecil (Hiasan ala Univ) */}
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 4 }} className="absolute -bottom-5 -left-5 bg-white p-4 rounded-2xl shadow-2xl border border-emerald-50 z-20 hidden md:block">
              <div className="flex items-center gap-3">
                <div className="bg-amber-100 p-2 rounded-lg text-amber-600"><Star size={20} fill="currentColor"/></div>
                <div>
                  <p className="text-[10px] font-black uppercase text-slate-400 leading-none">Akreditasi</p>
                  <p className="text-lg font-black text-emerald-800 leading-none">A (UNGGUL)</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. FOOTER IDENTITAS */}
      <footer className="bg-slate-50 py-16 border-t border-emerald-100 text-center">
        <div className="flex justify-center gap-6 mb-8 items-center opacity-70">
          <Image src="/logo-yayasan.png" alt="Yayasan" width={40} height={40} />
          <Image src="/logo-sma.png" alt="SMA" width={40} height={40} />
          <Image src="/logo-pendidikan.png" alt="Kemendikbud" width={40} height={40} />
        </div>
        <p className="font-black tracking-[0.3em] uppercase text-[10px] text-slate-400 mb-2">© 2026 SMAS NU TOBOALI</p>
        <p className="text-[9px] uppercase tracking-[0.2em] text-emerald-600/60 font-bold">Membangun Berakhlak & Kompeten</p>
      </footer>
    </main>
  );
}