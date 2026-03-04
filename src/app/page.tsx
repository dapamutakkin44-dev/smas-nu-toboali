"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, GraduationCap, Users, Bell, ChevronRight, MapPin, 
  MessageCircle, Building2, Laptop, Trophy, Home, 
  ShieldCheck, Briefcase, ChevronDown, Cloud, Star 
} from 'lucide-react';

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#f8fafc] overflow-x-hidden font-sans text-slate-800">
      
      {/* 1. NAVBAR - GAYA GLASSMORPHISM DENGAN MENU HP */}
      <nav className="fixed top-0 w-full z-[100] bg-white/70 backdrop-blur-md border-b border-emerald-100 py-4 px-6 md:px-12 flex justify-between items-center shadow-sm">
        <div className="flex items-center gap-3">
          {/* TOMBOL MENU GARIS TIGA (Hanya Tampil di HP) */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-emerald-900 hover:bg-emerald-50 rounded-xl transition-all"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          <div className="flex gap-2 bg-white p-2 rounded-2xl shadow-sm border border-emerald-50">
            <Image src="/logo-pendidikan.png" alt="Pusat" width={30} height={30} className="object-contain" />
            <Image src="/logo-yayasan.png" alt="Yayasan" width={30} height={30} className="object-contain" />
            <Image src="/logo-sma.png" alt="SMA" width={30} height={30} className="object-contain" />
          </div>
          <div className="flex flex-col text-left">
            <h1 className="font-black text-emerald-900 text-[10px] md:text-lg tracking-tighter uppercase italic leading-none">SMAS NU TOBOALI</h1>
            <span className="text-[7px] md:text-[8px] font-bold text-emerald-600 tracking-[0.3em] uppercase italic">Pendidikan Berkualitas</span>
          </div>
        </div>
        
        {/* MENU DESKTOP */}
        <div className="hidden md:flex gap-8 text-[11px] font-black uppercase text-slate-500 tracking-widest items-center">
          <Link href="/" className="text-emerald-600 no-underline">Beranda</Link>
          <div className="relative group py-2 cursor-pointer">
            <span className="hover:text-emerald-600 transition-all flex items-center gap-1">Profil <ChevronDown size={12} /></span>
            <div className="absolute top-full left-0 w-52 bg-white shadow-2xl rounded-2xl p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all translate-y-4 group-hover:translate-y-0 border-none">
              <Link href="/profil/struktur" className="block px-4 py-3 hover:bg-emerald-50 hover:text-emerald-700 no-underline text-slate-500 font-bold rounded-xl transition-all">Struktur Organisasi</Link>
            </div>
          </div>
          <Link href="/akademik" className="hover:text-emerald-600 transition-all no-underline">Akademik</Link>
          <Link href="/ppdb" className="bg-emerald-600 text-white px-8 py-3 rounded-full no-underline hover:bg-emerald-700 shadow-lg shadow-emerald-200 transition-all font-black border-none">PPDB 2026</Link>
        </div>

        {/* OVERLAY MENU HP (Sesuai Permintaan) */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              className="fixed inset-0 top-[78px] bg-white z-[90] md:hidden flex flex-col p-8 gap-6 shadow-2xl border-t border-emerald-50 text-left"
            >
              <Link onClick={() => setIsMenuOpen(false)} href="/" className="text-2xl font-black text-emerald-900 italic no-underline border-b border-slate-100 pb-4">BERANDA</Link>
              <div className="flex flex-col gap-4 border-b border-slate-100 pb-4">
                <p className="text-[10px] font-black text-slate-400 tracking-[0.3em] mb-0">PROFIL SEKOLAH</p>
                <Link onClick={() => setIsMenuOpen(false)} href="/profil/struktur" className="text-xl font-bold text-slate-600 no-underline">Struktur Organisasi</Link>
              </div>
              <Link onClick={() => setIsMenuOpen(false)} href="/akademik" className="text-2xl font-black text-slate-600 italic no-underline border-b border-slate-100 pb-4">AKADEMIK</Link>
              <Link onClick={() => setIsMenuOpen(false)} href="/ppdb" className="bg-emerald-600 text-white p-5 rounded-2xl text-center font-black text-xl no-underline shadow-xl shadow-emerald-100">DAFTAR SEKARANG</Link>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* 2. HERO SECTION - GAYA UNIVERSITAS GAHAR */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-50 via-white to-white text-left">
        
        {/* ELEMEN DEKORATIF: AWAN */}
        <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute top-40 left-[10%] opacity-20 hidden md:block text-emerald-300 pointer-events-none">
          <Cloud size={120} />
        </motion.div>
        
        {/* ICON TOGA GIGANTIK DI BACKGROUND */}
        <motion.div 
          animate={{ rotate: [0, 10, -10, 0], y: [0, -30, 0] }} 
          transition={{ duration: 8, repeat: Infinity }} 
          className="absolute top-40 right-[10%] text-emerald-600/10 hidden md:block pointer-events-none"
        >
          <GraduationCap size={200} />
        </motion.div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            
            <div className="md:w-3/5 text-center md:text-left">
              <motion.div 
                initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 px-5 py-2 bg-emerald-600 text-white rounded-full text-[10px] font-black uppercase tracking-widest mb-8 shadow-xl"
              >
                <Star size={14} className="fill-amber-400 text-amber-400" /> Terakreditasi Baik
              </motion.div>
              
              <h2 className="text-5xl md:text-[90px] font-black text-slate-900 leading-[0.9] mb-8 uppercase italic tracking-tighter">
                PEMIMPIN <br/> <span className="text-emerald-600 text-6xl md:text-[100px]">MASA DEPAN</span> <br/> <span className="text-slate-300 underline decoration-emerald-500/30">DIMULAI DISINI</span>
              </h2>
              
              <p className="text-slate-500 text-lg md:text-xl font-medium max-w-xl mb-10 leading-relaxed italic">
                Mencetak generasi cerdas, kompeten, dan berakhlaqul karimah dengan standar pendidikan kelas tinggi.
              </p>

              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Link href="/ppdb" className="bg-emerald-600 text-white px-10 py-5 rounded-2xl font-black text-sm no-underline uppercase tracking-widest shadow-[0_20px_40px_-10px_rgba(16,185,129,0.5)] hover:scale-105 transition-all border-none">
                  Daftar Sekarang
                </Link>
                <Link href="/profil/struktur" className="bg-white text-slate-800 border-2 border-slate-100 px-10 py-5 rounded-2xl font-black text-sm no-underline uppercase tracking-widest hover:bg-slate-50 transition-all">
                  Lihat Profil
                </Link>
              </div>
            </div>

            <div className="md:w-2/5 relative">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}
                className="relative z-20 w-[300px] md:w-[550px] h-[400px] md:h-[650px]"
              >
                <div className="absolute inset-0 bg-emerald-500 rounded-full blur-[100px] opacity-20 scale-75 animate-pulse"></div>
                <Image src="/foto-anak-nu.png" alt="Siswa SMAS NU" fill className="object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.3)]" priority />
              </motion.div>
              
              {/* KARTU STATISTIK MELAYANG */}
              <motion.div 
                animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity }}
                className="absolute -left-10 bottom-20 bg-white/90 backdrop-blur-xl p-6 rounded-[24px] shadow-2xl border border-white/50 z-30 hidden md:block"
              >
                <div className="flex items-center gap-4 text-left">
                  <div className="bg-emerald-600 p-3 rounded-xl text-white"><Users /></div>
                  <div>
                    <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">Siswa Aktif</p>
                    <p className="text-2xl font-black italic tracking-tighter">500+</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. STRUKTUR MANAJEMEN - GAYA BLACK LABEL */}
      <section className="py-32 px-6 bg-slate-900 text-white relative overflow-hidden text-center">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-20">
            <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter mb-4">Pimpinan <span className="text-emerald-500">Sekolah</span></h2>
            <div className="w-20 h-2 bg-emerald-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { nama: "H. M. Karyawan, S.Ag., M.Pd.", jabatan: "Ketua Yayasan", icon: <ShieldCheck size={32} /> },
              { nama: "Azharudin, S.Pd., M.E., Gr.", jabatan: "Kepala Sekolah", icon: <GraduationCap size={32} /> },
              { nama: "Mahfudz Maladzi, S.Pd., Gr.", jabatan: "Waka Sekolah", icon: <Users size={32} /> },
              { nama: "Dapa Mutakkin, S.Pd.", jabatan: "Operator Sekolah", icon: <Briefcase size={32} /> },
            ].map((staff, idx) => (
              <div key={idx} className="group relative bg-white/5 border border-white/10 p-10 rounded-[40px] hover:bg-emerald-600 transition-all duration-500">
                <div className="text-emerald-500 group-hover:text-white mb-6 transition-colors flex justify-center">
                  {staff.icon}
                </div>
                <h3 className="font-black text-lg italic leading-tight mb-2 tracking-tighter h-12 flex items-center justify-center">
                  {staff.nama}
                </h3>
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-400 group-hover:text-white/80">{staff.jabatan}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FOOTER */}
      <footer className="bg-white py-20 border-t border-emerald-50 text-center">
        <div className="flex justify-center gap-8 mb-10 items-center">
           <Image src="/logo-pendidikan.png" alt="Pusat" width={45} height={45} />
           <Image src="/logo-yayasan.png" alt="Yayasan" width={45} height={45} />
           <Image src="/logo-sma.png" alt="SMA" width={45} height={45} />
        </div>
        <p className="font-black tracking-[0.5em] uppercase text-[10px] text-slate-300 italic">© 2026 SMAS NU TOBOALI • Unggul Dalam Keberagaman</p>
      </footer>

    </main>
  );
}