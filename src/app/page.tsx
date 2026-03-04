"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, GraduationCap, Users, Star, 
  ShieldCheck, Briefcase, Cloud, ChevronRight,
  MapPin, MessageCircle, Building,
  Laptop, BookOpen, HeartPulse, Coffee, Home,
  History, Target
} from 'lucide-react';

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const fasilitas = [
    { nama: "Gedung Sekolah", icon: <Building size={24} />, deskripsi: "Gedung belajar nyaman" },
    { nama: "Lab Komputer", icon: <Laptop size={24} />, deskripsi: "Fasilitas IT modern" },
    { nama: "Asrama Siswa", icon: <Home size={24} />, deskripsi: "Hunian islami & aman" },
    { nama: "Perpustakaan", icon: <BookOpen size={24} />, deskripsi: "Koleksi buku lengkap" },
  ];

  return (
    <main className="min-h-screen bg-[#f8fafc] overflow-x-hidden font-sans text-slate-800">
      
      {/* 1. NAVBAR */}
      <nav className="fixed top-0 w-full z-[100] bg-white/90 backdrop-blur-xl border-b border-emerald-100 py-4 px-6 md:px-12 flex justify-between items-center shadow-md">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsMenuOpen(true)} 
            className="p-2 text-emerald-900 hover:bg-emerald-50 rounded-xl transition-all flex items-center gap-2 group"
          >
            <Menu size={28} />
            <span className="hidden md:inline font-black text-[10px] tracking-[0.2em] uppercase">Menu</span>
          </button>

          <div className="flex gap-2 bg-white p-1.5 rounded-xl border border-emerald-50 shadow-sm text-left">
            <Image src="/logo-sma.png" alt="Logo SMA" width={28} height={28} className="object-contain" />
            <div className="flex flex-col">
              <h1 className="font-black text-emerald-900 text-[10px] md:text-sm tracking-tighter uppercase italic leading-none">SMAS NU TOBOALI</h1>
              <span className="text-[7px] md:text-[8px] font-bold text-emerald-600 tracking-[0.2em] uppercase italic">Unggul & Islami</span>
            </div>
          </div>
        </div>
        <Link href="/ppdb" className="hidden md:block bg-emerald-600 text-white px-8 py-2.5 rounded-full no-underline hover:bg-emerald-700 shadow-lg font-black text-[10px] uppercase tracking-widest border-none transition-all">PPDB 2026</Link>
      </nav>

      {/* 2. RUNNING TEXT */}
      <div className="fixed top-[72px] md:top-[78px] w-full z-40 bg-amber-400 py-2 overflow-hidden whitespace-nowrap border-b border-amber-500/20 pointer-events-none">
        <motion.div 
          animate={{ x: ["0%", "-100%"] }} 
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }} 
          className="inline-block text-emerald-950 font-black text-[10px] uppercase tracking-[0.2em]"
        >
          ✨ PENERIMAAN PESERTA DIDIK BARU SMAS NU TOBOALI TAHUN PELAJARAN 2026/2027 TELAH DIBUKA! DAFTARKAN DIRI ANDA SEGERA ✨     
        </motion.div>
      </div>

      {/* 3. DRAWER MENU (SUDAH DIPERBAIKI) */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} 
              onClick={() => setIsMenuOpen(false)} 
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[110]" 
            />
            <motion.div 
              initial={{ x: '-100%' }} animate={{ x: 0 }} exit={{ x: '-100%' }} 
              transition={{ type: 'spring', damping: 25, stiffness: 200 }} 
              className="fixed top-0 left-0 h-full w-[300px] md:w-[420px] bg-emerald-900 z-[120] shadow-2xl p-8 flex flex-col text-left overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-10">
                <div className="text-white">
                  <p className="font-black italic text-xl tracking-tighter mb-0 uppercase">Navigasi Utama</p>
                  <div className="w-10 h-1 bg-amber-400 rounded-full"></div>
                </div>
                <button onClick={() => setIsMenuOpen(false)} className="text-emerald-200 hover:text-white transition-colors">
                  <X size={32} />
                </button>
              </div>

              <div className="space-y-2">
                <Link onClick={() => setIsMenuOpen(false)} href="/" className="group flex items-center justify-between text-white text-2xl font-black italic no-underline hover:text-amber-400 transition-all uppercase py-2">
                  Beranda <ChevronRight size={20} />
                </Link>
                
                {/* GRUP PROFIL SEKOLAH - SEKARANG TERPISAH RAPI */}
                <div className="pt-6 pb-4 space-y-3 border-t border-emerald-800/50">
                   <p className="text-[10px] font-black text-emerald-400 tracking-[0.4em] uppercase mb-4">Profil Sekolah</p>
                   
                   <Link onClick={() => setIsMenuOpen(false)} href="/profil/struktur" className="flex items-center gap-3 text-lg font-bold text-emerald-100 no-underline hover:text-white transition-all">
                    <Users size={18} className="text-amber-400" /> Struktur Organisasi
                   </Link>
                   
                   <Link onClick={() => setIsMenuOpen(false)} href="/profil/visi-misi" className="flex items-center gap-3 text-lg font-bold text-emerald-100 no-underline hover:text-white transition-all">
                    <Target size={18} className="text-amber-400" /> Visi & Misi
                   </Link>

                   <Link onClick={() => setIsMenuOpen(false)} href="/profil/sejarah" className="flex items-center gap-3 text-lg font-bold text-emerald-100 no-underline hover:text-white transition-all">
                    <History size={18} className="text-amber-400" /> Sejarah Sekolah
                   </Link>
                </div>

                <Link onClick={() => setIsMenuOpen(false)} href="/akademik" className="group flex items-center justify-between text-white text-2xl font-black italic no-underline hover:text-amber-400 transition-all border-t border-emerald-800/50 pt-6">
                  Akademik <ChevronRight size={20} />
                </Link>

                <Link onClick={() => setIsMenuOpen(false)} href="/ppdb" className="mt-8 block bg-amber-400 text-emerald-950 p-5 rounded-2xl text-center font-black text-lg no-underline shadow-xl hover:bg-white transition-all uppercase italic">
                  Daftar Sekarang
                </Link>
              </div>

              <div className="mt-auto pt-10 text-emerald-500/50">
                <p className="text-[9px] font-bold uppercase tracking-widest leading-loose">
                   SMAS NU TOBOALI <br/> Unggul Dalam Keberagaman
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* --- SECTION LAINNYA TETAP GAHAR SEPERTI SEBELUMNYA --- */}
      
      {/* 4. HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center pt-40 overflow-hidden bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-50 via-white to-white text-left">
        <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute top-40 left-[10%] opacity-20 hidden md:block text-emerald-300 pointer-events-none"><Cloud size={120} /></motion.div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-3/5 text-center md:text-left">
              <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} className="inline-flex items-center gap-2 px-5 py-2 bg-emerald-600 text-white rounded-full text-[10px] font-black uppercase tracking-widest mb-8 shadow-xl">
                <Star size={14} className="fill-amber-400 text-amber-400" /> Terakreditasi Baik
              </motion.div>
              <h2 className="text-5xl md:text-[80px] font-black text-slate-900 leading-[0.9] mb-8 uppercase italic tracking-tighter">PEMIMPIN <br/> <span className="text-emerald-600 text-6xl md:text-[90px]">MASA DEPAN</span> <br/> <span className="text-slate-300 underline decoration-emerald-500/30">DIMULAI DISINI</span></h2>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Link href="/ppdb" className="bg-emerald-600 text-white px-10 py-5 rounded-2xl font-black text-sm no-underline uppercase tracking-widest shadow-2xl hover:scale-105 transition-all border-none">Daftar Sekarang</Link>
                <button onClick={() => setIsMenuOpen(true)} className="bg-white text-slate-800 border-2 border-slate-100 px-10 py-5 rounded-2xl font-black text-sm no-underline uppercase tracking-widest hover:bg-slate-50 transition-all">Jelajahi Menu</button>
              </div>
            </div>
            <div className="md:w-2/5 relative">
               <div className="relative z-20 w-[300px] md:w-[450px] h-[400px] md:h-[550px] mx-auto">
                <Image src="/foto-anak-nu.png" alt="Siswa SMAS NU" fill className="object-contain drop-shadow-2xl" priority />
              </div>
              <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute -left-5 bottom-20 bg-white/95 backdrop-blur-xl p-6 rounded-[24px] shadow-2xl border border-white/50 z-30">
                <div className="flex items-center gap-4 text-left"><div className="bg-emerald-600 p-3 rounded-xl text-white"><Users size={24} /></div><div><p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest mb-0 leading-none">Siswa Aktif</p><p className="text-3xl font-black italic tracking-tighter text-slate-800">32</p></div></div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PRASARANA */}
      <section className="py-24 px-6 bg-emerald-50/50 text-center">
        <div className="max-w-7xl mx-auto">
          <p className="text-emerald-600 font-black uppercase tracking-[0.4em] text-[10px] mb-4">Fasilitas Sekolah</p>
          <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-16 italic tracking-tighter uppercase">Prasarana <span className="text-emerald-600">Terbaik</span></h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {fasilitas.map((f, i) => (
              <div key={i} className="bg-white p-8 rounded-[32px] border border-emerald-100 shadow-sm hover:shadow-xl transition-all group">
                <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all">{f.icon}</div>
                <h3 className="font-black text-sm italic text-slate-800 mb-1">{f.nama}</h3>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">{f.deskripsi}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SAMBUTAN KEPSEK */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 text-left">
          <div className="w-full md:w-1/2 relative">
            <div className="absolute -inset-4 bg-emerald-600/10 rounded-[40px] rotate-3"></div>
            <div className="relative h-[500px] w-full rounded-[40px] overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
              <img src="/foto-kepsek.jpg" alt="Kepsek SMAS NU" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-emerald-600 font-black uppercase tracking-[0.4em] text-[10px] mb-4">Message From Principal</p>
            <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-8 italic tracking-tighter uppercase leading-[0.9]">"Membangun <span className="text-emerald-600">Generasi Madani</span>"</h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-6 italic">"Di SMAS NU Toboali, kami percaya bahwa pendidikan adalah kunci untuk membangun karakter yang kuat, kompeten, dan berakhlaqul karimah."</p>
            <div className="pt-6 border-t border-slate-100 text-left">
              <p className="font-black text-xl italic text-slate-800 mb-0">Azharudin, S.Pd., M.E., Gr.</p>
              <p className="text-emerald-600 font-bold text-xs uppercase tracking-widest">Kepala Sekolah</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. GALERI */}
      <section className="py-24 px-6 bg-slate-900 text-white text-center">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-emerald-400 font-black uppercase tracking-[0.4em] text-[10px] mb-4">Momen Sekolah</p>
          <h2 className="text-4xl md:text-5xl font-black mb-16 italic tracking-tighter uppercase">Galeri <span className="text-emerald-500">Aktivitas</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-auto md:min-h-[600px]">
            <div className="md:col-span-2 bg-slate-800 rounded-[32px] overflow-hidden relative group h-[300px] md:h-full">
              <img src="/lab.jpg" className="w-full h-full object-cover opacity-60 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700" alt="Lab" />
              <div className="absolute bottom-8 left-8 text-left"><p className="font-black italic text-xl uppercase">Praktikum Lab Komputer</p></div>
            </div>
            <div className="bg-emerald-800 rounded-[32px] overflow-hidden relative group h-[300px] md:h-full">
              <img src="/gedung-sekolah.jpg" className="w-full h-full object-cover opacity-60 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700" alt="Gedung" />
              <div className="absolute bottom-8 left-8 text-left"><p className="font-black italic text-xl uppercase">Gedung Utama</p></div>
            </div>
            <div className="bg-amber-600 rounded-[32px] overflow-hidden relative group h-[300px] md:h-full">
              <img src="/asrama.jpg" className="w-full h-full object-cover opacity-60 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700" alt="Asrama" />
              <div className="absolute bottom-8 left-8 text-left"><p className="font-black italic text-xl uppercase">Asrama Santri</p></div>
            </div>
            <div className="md:col-span-2 bg-emerald-600 rounded-[32px] overflow-hidden relative group h-[300px] md:h-full">
               <img src="/gedung.jpg" className="w-full h-full object-cover opacity-60 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700" alt="Lingkungan" />
               <div className="absolute bottom-8 left-8 text-left"><p className="font-black italic text-xl uppercase">Lingkungan Sekolah</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FOOTER */}
      <footer className="bg-white py-20 border-t border-emerald-50 text-center">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 mb-20 text-left">
          <div>
            <h4 className="font-black italic uppercase mb-6 text-emerald-900 tracking-tighter">Lokasi Kami</h4>
            <div className="flex gap-4 mb-4">
              <MapPin className="text-emerald-600 shrink-0" />
              <p className="text-sm font-bold text-slate-500 italic leading-relaxed">Jl. Desa Rias, Kec. Toboali, Kab. Bangka Selatan, Kepulauan Bangka Belitung</p>
            </div>
          </div>
          <div>
            <h4 className="font-black italic uppercase mb-6 text-emerald-900 tracking-tighter">Hubungi Kami</h4>
            <Link href="https://wa.me/6287813180362" target="_blank" className="flex gap-4 items-center p-4 bg-emerald-50 rounded-2xl no-underline border border-emerald-100 hover:bg-emerald-600 hover:text-white transition-all group">
              <MessageCircle className="text-emerald-600 group-hover:text-white" />
              <div>
                <p className="text-[10px] font-black uppercase mb-0">Admin (Dapa)</p>
                <p className="text-sm font-bold italic">Tanya via WhatsApp</p>
              </div>
            </Link>
          </div>
          <div className="flex justify-center items-center gap-4">
             <Image src="/logo-pendidikan.png" alt="P" width={40} height={40} />
             <Image src="/logo-yayasan.png" alt="Y" width={40} height={40} />
             <Image src="/logo-sma.png" alt="S" width={40} height={40} />
          </div>
        </div>
        <p className="font-black tracking-[0.5em] uppercase text-[10px] text-slate-300 italic pt-10 border-t border-slate-50">© 2026 SMAS NU TOBOALI • AKHLAK</p>
      </footer>
    </main>
  );
}