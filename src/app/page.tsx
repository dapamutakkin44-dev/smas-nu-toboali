"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, GraduationCap, Users, Star, 
  ShieldCheck, Briefcase, Cloud, ChevronRight
} from 'lucide-react';

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#f8fafc] overflow-x-hidden font-sans text-slate-800">
      
      {/* 1. NAVBAR FIXED */}
      <nav className="fixed top-0 w-full z-[100] bg-white/90 backdrop-blur-xl border-b border-emerald-100 py-4 px-6 md:px-12 flex justify-between items-center shadow-md">
        <div className="flex items-center gap-4">
          {/* TOMBOL GARIS TIGA (Laptop & HP Ada) */}
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="p-2 text-emerald-900 hover:bg-emerald-50 rounded-xl transition-all flex items-center gap-2 group"
          >
            <Menu size={28} />
            <span className="hidden md:inline font-black text-[10px] tracking-[0.2em] uppercase">Menu</span>
          </button>

          <div className="flex gap-2 bg-white p-1.5 rounded-xl border border-emerald-50 shadow-sm">
            <Image src="/logo-pendidikan.png" alt="Pusat" width={28} height={28} className="object-contain" />
            <Image src="/logo-yayasan.png" alt="Yayasan" width={28} height={28} className="object-contain" />
            <Image src="/logo-sma.png" alt="SMA" width={28} height={28} className="object-contain" />
          </div>
          <div className="flex flex-col text-left">
            <h1 className="font-black text-emerald-900 text-[10px] md:text-sm tracking-tighter uppercase italic leading-none">SMAS NU TOBOALI</h1>
            <span className="text-[7px] font-bold text-emerald-600 tracking-[0.2em] uppercase">Unggul & Islami</span>
          </div>
        </div>

        <Link href="/ppdb" className="hidden md:block bg-emerald-600 text-white px-8 py-2.5 rounded-full no-underline hover:bg-emerald-700 shadow-lg shadow-emerald-100 transition-all font-black text-[10px] uppercase tracking-widest border-none">
          Daftar PPDB 2026
        </Link>
      </nav>

      {/* 2. DRAWER MENU (Gahar & Tidak Tembus) */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Overlay Gelap di Belakang Menu */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[110]"
            />
            
            {/* Panel Menu Samping */}
            <motion.div 
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 h-full w-[300px] md:w-[400px] bg-emerald-900 z-[120] shadow-2xl p-8 flex flex-col text-left"
            >
              <div className="flex justify-between items-center mb-12">
                <div className="text-white">
                   <p className="font-black italic text-xl tracking-tighter mb-0">NAVIGASI</p>
                   <div className="w-10 h-1 bg-amber-400 rounded-full"></div>
                </div>
                <button onClick={() => setIsMenuOpen(false)} className="text-emerald-200 hover:text-white transition-colors">
                  <X size={32} />
                </button>
              </div>

              <div className="space-y-4">
                <p className="text-[10px] font-black text-emerald-400 tracking-[0.4em] uppercase mb-6">Menu Utama</p>
                
                <Link onClick={() => setIsMenuOpen(false)} href="/" className="group flex items-center justify-between text-white text-2xl font-black italic no-underline hover:text-amber-400 transition-all">
                  BERANDA <ChevronRight className="opacity-0 group-hover:opacity-100 transition-all" />
                </Link>

                <div className="py-4 space-y-4">
                   <p className="text-[10px] font-black text-emerald-400 tracking-[0.4em] uppercase mb-2">Profil Sekolah</p>
                   <Link onClick={() => setIsMenuOpen(false)} href="/profil/struktur" className="block text-xl font-bold text-emerald-100 no-underline hover:text-white transition-all">
                    Struktur Organisasi
                   </Link>
                   <Link onClick={() => setIsMenuOpen(false)} href="/profil/visi-misi" className="block text-xl font-bold text-emerald-100 no-underline hover:text-white transition-all">
                    Visi & Misi
                   </Link>
                </div>

                <Link onClick={() => setIsMenuOpen(false)} href="/akademik" className="group flex items-center justify-between text-white text-2xl font-black italic no-underline hover:text-amber-400 transition-all border-t border-emerald-800 pt-6">
                  AKADEMIK <ChevronRight className="opacity-0 group-hover:opacity-100 transition-all" />
                </Link>

                <Link onClick={() => setIsMenuOpen(false)} href="/ppdb" className="mt-10 block bg-amber-400 text-emerald-950 p-5 rounded-2xl text-center font-black text-lg no-underline shadow-xl hover:bg-white transition-all">
                  DAFTAR SEKARANG
                </Link>
              </div>

              <div className="mt-auto pt-10 border-t border-emerald-800 text-emerald-400">
                 <p className="text-[9px] font-bold uppercase tracking-widest leading-loose">
                   © 2026 SMAS NU TOBOALI <br/> Membangun Berakhlak & Kompeten
                 </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* 3. HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-50 via-white to-white text-left">
        
        {/* Dekoras: Awan */}
        <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute top-40 left-[10%] opacity-20 hidden md:block text-emerald-300 pointer-events-none">
          <Cloud size={120} />
        </motion.div>
        
        {/* Toga Gigantik */}
        <motion.div animate={{ rotate: [0, 10, -10, 0], y: [0, -30, 0] }} transition={{ duration: 8, repeat: Infinity }} className="absolute top-40 right-[10%] text-emerald-600/10 hidden md:block pointer-events-none">
          <GraduationCap size={200} />
        </motion.div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            
            <div className="md:w-3/5 text-center md:text-left">
              <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} className="inline-flex items-center gap-2 px-5 py-2 bg-emerald-600 text-white rounded-full text-[10px] font-black uppercase tracking-widest mb-8 shadow-xl">
                <Star size={14} className="fill-amber-400 text-amber-400" /> Terakreditasi Baik
              </motion.div>
              
              <h2 className="text-5xl md:text-[90px] font-black text-slate-900 leading-[0.9] mb-8 uppercase italic tracking-tighter">
                PEMIMPIN <br/> <span className="text-emerald-600 text-6xl md:text-[100px]">MASA DEPAN</span> <br/> <span className="text-slate-300 underline decoration-emerald-500/30">DIMULAI DISINI</span>
              </h2>
              
              <p className="text-slate-500 text-lg md:text-xl font-medium max-w-xl mb-10 leading-relaxed italic">
                Mencetak generasi cerdas, kompeten, dan berakhlaqul karimah dengan standar pendidikan kelas tinggi.
              </p>

              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Link href="/ppdb" className="bg-emerald-600 text-white px-10 py-5 rounded-2xl font-black text-sm no-underline uppercase tracking-widest shadow-2xl hover:scale-105 transition-all border-none">
                  Daftar Sekarang
                </Link>
                <button onClick={() => setIsMenuOpen(true)} className="bg-white text-slate-800 border-2 border-slate-100 px-10 py-5 rounded-2xl font-black text-sm no-underline uppercase tracking-widest hover:bg-slate-50 transition-all">
                  Lihat Menu
                </button>
              </div>
            </div>

            <div className="md:w-2/5 relative">
              <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="relative z-20 w-[300px] md:w-[550px] h-[400px] md:h-[650px]">
                <div className="absolute inset-0 bg-emerald-500 rounded-full blur-[100px] opacity-20 scale-75 animate-pulse"></div>
                <Image src="/foto-anak-nu.png" alt="Siswa SMAS NU" fill className="object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.3)]" priority />
              </motion.div>
              
              {/* Siswa Aktif: 32 */}
              <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute -left-5 md:-left-10 bottom-20 bg-white/90 backdrop-blur-xl p-6 rounded-[24px] shadow-2xl border border-white/50 z-30">
                <div className="flex items-center gap-4 text-left">
                  <div className="bg-emerald-600 p-3 rounded-xl text-white"><Users size={24} /></div>
                  <div>
                    <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest mb-0 leading-none">Siswa Aktif</p>
                    <p className="text-3xl font-black italic tracking-tighter text-slate-800">32</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. STRUKTUR MANAJEMEN */}
      <section className="py-32 px-6 bg-slate-900 text-white relative overflow-hidden text-center">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-20">
            <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter mb-4">Pimpinan <span className="text-emerald-500">Sekolah</span></h2>
            <div className="w-20 h-2 bg-emerald-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { nama: "H. M. Karyawan, S.Ag., M.Pd.", jabatan: "Ketua Yayasan", icon: <ShieldCheck size={32} /> },
              { nama: "Azharudin, S.Pd., M.E., Gr.", jabatan: "Kepala Sekolah", icon: <GraduationCap size={32} /> },
              { nama: "Mahfudz Maladzi, S.Pd., Gr.", jabatan: "Waka Sekolah", icon: <Users size={32} /> },
              { nama: "Dapa Mutakkin, S.Pd.", jabatan: "Operator Sekolah", icon: <Briefcase size={32} /> },
            ].map((staff, idx) => (
              <div key={idx} className="group relative bg-white/5 border border-white/10 p-10 rounded-[40px] hover:bg-emerald-600 transition-all duration-500">
                <div className="text-emerald-500 group-hover:text-white mb-6 transition-colors flex justify-center">{staff.icon}</div>
                <h3 className="font-black text-base md:text-lg italic leading-tight mb-2 tracking-tighter h-12 flex items-center justify-center">{staff.nama}</h3>
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-400 group-hover:text-white/80">{staff.jabatan}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FOOTER */}
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