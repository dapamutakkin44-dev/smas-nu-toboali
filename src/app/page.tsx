"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, Star, MapPin, MessageCircle, Building,
  Laptop, BookOpen, Home, History, Target,
  ChevronRight, Send, Cloud, Instagram, Facebook, Youtube, Users
} from 'lucide-react';

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // DATA SOSMED (SESUAI REQUEST MIMIN)
  const medsos = [
    { 
      name: "Instagram", 
      icon: <Instagram size={20} />, 
      link: "https://www.instagram.com/official.smasnutoboali/", 
      appLink: "instagram://user?username=official.smasnutoboali",
      color: "hover:text-pink-600" 
    },
    { 
      name: "Facebook", 
      icon: <Facebook size={20} />, 
      link: "https://www.facebook.com/Smas NU toboali", 
      color: "hover:text-blue-700" 
    },
    { 
      name: "TikTok", 
      icon: <span className="font-black text-xs">TT</span>, 
      link: "https://www.tiktok.com/@official.smasnu.toboali", 
      color: "hover:text-black" 
    }
  ];

  return (
    <main className="min-h-screen bg-[#f8fafc] overflow-x-hidden font-sans text-slate-800 text-left">
      
      {/* 1. NAVBAR */}
      <nav className="fixed top-0 w-full z-[100] bg-white/95 backdrop-blur-xl border-b border-emerald-100 py-4 px-6 md:px-12 flex justify-between items-center shadow-sm">
        <div className="flex items-center gap-4">
          <button onClick={() => setIsMenuOpen(true)} className="p-2 text-emerald-900 hover:bg-emerald-50 rounded-xl transition-all flex items-center gap-2 group cursor-pointer border-none bg-transparent outline-none">
            <Menu size={28} />
            <span className="hidden md:inline font-black text-[10px] tracking-[0.2em] uppercase">Menu</span>
          </button>
          <div className="flex gap-2 bg-white p-1.5 rounded-xl border border-emerald-50 shadow-sm">
            <div className="flex gap-1.5 items-center px-1">
              <Image src="/logo-pendidikan.png" alt="P" width={22} height={22} />
              <Image src="/logo-yayasan.png" alt="Y" width={22} height={22} />
              <Image src="/logo-sma.png" alt="S" width={22} height={22} />
            </div>
            <div className="flex flex-col border-l border-emerald-100 pl-2 text-left leading-none">
              <h1 className="font-black text-emerald-900 text-[10px] md:text-sm tracking-tighter uppercase italic mb-1">SMAS NU TOBOALI</h1>
              <span className="text-[7px] md:text-[8px] font-bold text-emerald-600 tracking-[0.2em] uppercase italic">Unggul & Islami</span>
            </div>
          </div>
        </div>
        <Link href="/ppdb" className="bg-emerald-600 text-white px-6 md:px-8 py-2.5 rounded-full no-underline hover:bg-emerald-700 shadow-lg font-black text-[10px] uppercase tracking-widest transition-all">PPDB 2026</Link>
      </nav>

      {/* 2. RUNNING TEXT */}
      <div className="fixed top-[68px] md:top-[76px] w-full z-40 bg-amber-400 py-2 overflow-hidden whitespace-nowrap border-b border-amber-500/20">
        <motion.div animate={{ x: ["0%", "-100%"] }} transition={{ repeat: Infinity, duration: 30, ease: "linear" }} className="inline-block text-emerald-950 font-black text-[10px] uppercase tracking-[0.2em]">
          ✨ PENERIMAAN PESERTA DIDIK BARU SMAS NU TOBOALI TAHUN PELAJARAN 2026/2027 TELAH DIBUKA! DAFTARKAN DIRI ANDA SEGERA ✨ &nbsp;&nbsp;&nbsp;&nbsp;
        </motion.div>
      </div>

      {/* 3. HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 md:pt-40 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-50 via-white to-white text-left">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-3/5">
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-emerald-600 text-white rounded-full text-[10px] font-black uppercase tracking-widest mb-8 shadow-xl">
                <Star size={14} className="fill-amber-400 text-amber-400" /> Terakreditasi Baik
              </div>
              <h2 className="text-5xl md:text-[80px] font-black text-slate-900 leading-[0.9] mb-8 uppercase italic tracking-tighter">PEMIMPIN <br/> <span className="text-emerald-600 text-6xl md:text-[90px]">MASA DEPAN</span> <br/> <span className="text-slate-300 underline decoration-emerald-500/30">DIMULAI DISINI</span></h2>
              <div className="flex flex-wrap gap-4">
                <Link href="/ppdb" className="bg-emerald-600 text-white px-10 py-5 rounded-2xl font-black text-sm no-underline uppercase tracking-widest shadow-2xl hover:scale-105 transition-all">Daftar Sekarang</Link>
                <button onClick={() => setIsMenuOpen(true)} className="bg-white text-slate-800 border-2 border-slate-100 px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-slate-50 transition-all cursor-pointer outline-none">Jelajahi Menu</button>
              </div>
            </div>
            <div className="md:w-2/5 relative">
              <div className="relative z-20 w-[280px] md:w-[450px] h-[380px] md:h-[550px] mx-auto">
                <Image src="/foto-anak-nu.png" alt="Siswa" fill className="object-contain drop-shadow-2xl" priority />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SAMBUTAN KEPSEK */}
      <section className="py-24 px-6 bg-white overflow-hidden text-left border-t border-slate-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 text-left">
          <div className="w-full md:w-1/2 relative">
            <div className="absolute -inset-4 bg-emerald-600/10 rounded-[40px] rotate-3"></div>
            <div className="relative h-[450px] w-full rounded-[40px] overflow-hidden shadow-2xl border-4 border-white">
              <img src="/foto-kepsek.jpg" alt="Kepsek" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-emerald-600 font-black uppercase tracking-[0.4em] text-[10px] mb-4">Message From Principal</p>
            <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-8 italic tracking-tighter uppercase leading-[0.9]">"Membangun <span className="text-emerald-600">Generasi Madani</span>"</h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-6 italic">"Di SMAS NU Toboali, kami percaya bahwa pendidikan adalah kunci untuk membangun karakter yang kuat, kompeten, dan berakhlaqul karimah."</p>
            <div className="pt-6 border-t border-slate-100">
              <p className="font-black text-xl italic text-slate-800 mb-0">Azharudin, S.Pd., M.E., Gr.</p>
              <p className="text-emerald-600 font-bold text-xs uppercase tracking-widest">Kepala Sekolah</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. WARTA SEKOLAH */}
      <section className="py-24 px-6 bg-slate-50/50 text-left">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div className="text-left">
              <p className="text-emerald-600 font-black uppercase tracking-[0.4em] text-[10px] mb-2">Informasi Terbaru</p>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 italic tracking-tighter uppercase">Warta <span className="text-emerald-600">Sekolah</span></h2>
            </div>
            <Link href="/berita" className="hidden md:block bg-white border-2 border-slate-100 text-slate-900 px-8 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest no-underline hover:bg-emerald-600 hover:text-white transition-all shadow-sm">Lihat Semua Berita</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { tgl: "15 Mar 2026", judul: "Penerimaan Siswa Baru Gelombang 1 Dibuka", img: "/gedung.jpg" },
              { tgl: "10 Mar 2026", judul: "Siswa SMAS NU Raih Juara Lomba Adzan Kabupaten", img: "/lab.jpg" },
              { tgl: "05 Mar 2026", judul: "Kegiatan Rutin Kajian Islam Remaja di Masjid", img: "/asrama.jpg" }
            ].map((news, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative h-[250px] rounded-[32px] overflow-hidden mb-6 shadow-lg border-2 border-white">
                  <img src={news.img} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700" alt="Berita" />
                </div>
                <h3 className="text-xl font-black italic text-slate-900 uppercase tracking-tighter group-hover:text-emerald-600 transition-colors leading-tight mb-2">{news.judul}</h3>
                <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest">{news.tgl} — BACA SELENGKAPNYA →</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. GOOGLE MAPS - FULL WIDTH */}
      <section className="w-full h-[400px] relative bg-slate-200 border-t-8 border-emerald-600">
        <div className="absolute top-0 left-0 z-10 bg-emerald-600 text-white px-8 py-3 rounded-br-[32px] font-black italic uppercase tracking-widest text-xs shadow-xl">
           Lokasi SMAS NU Toboali 📍
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15938.826244434254!2d106.444!3d-3.012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwMDAnNDMuMiJTIDEwNsKwMjYnMzguNCJF!5e0!3m2!1sid!2sid!4v1700000000000" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" className="grayscale hover:grayscale-0 transition-all duration-1000"></iframe>
      </section>

      {/* 7. FOOTER */}
      <footer className="bg-white pt-20 pb-12 border-t border-slate-100 text-left">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
          <div className="text-left">
            <div className="flex gap-2 items-center mb-6">
               <Image src="/logo-pendidikan.png" alt="P" width={28} height={28} />
               <Image src="/logo-yayasan.png" alt="Y" width={28} height={28} />
               <Image src="/logo-sma.png" alt="S" width={28} height={28} />
            </div>
            <h4 className="font-black italic uppercase text-emerald-900 tracking-tighter mb-4 text-xl">SMAS NU TOBOALI</h4>
            <p className="text-slate-500 text-sm font-bold italic leading-relaxed mb-6">Mewujudkan generasi yang Unggul dalam Prestasi dan Berkarakter Islami.</p>
            
            {/* SOSMED DENGAN LINK APLIKASI */}
            <div className="flex flex-wrap gap-4">
              {medsos.map((m, i) => (
                <a key={i} href={m.link} target="_blank" className={`text-slate-400 ${m.color} transition-all transform hover:scale-125`} aria-label={m.name}>
                  {m.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="text-left">
            <h4 className="font-black italic uppercase mb-8 text-emerald-900 tracking-tighter text-lg underline decoration-amber-400 decoration-4 underline-offset-8">Hubungi Kami</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-4 text-left">
                <MapPin className="text-emerald-600 shrink-0" size={20} />
                <p className="text-sm font-bold text-slate-500 italic">Jl. Desa Rias, Kec. Toboali, Bangka Selatan</p>
              </div>
              <a href="https://wa.me/6287813180362" target="_blank" className="flex items-center gap-4 text-sm font-bold text-slate-500 italic no-underline hover:text-emerald-600 transition-colors">
                <MessageCircle className="text-emerald-600 shrink-0" size={20} />
                <span>0878-1318-0362 (Admin Dapa)</span>
              </a>
            </div>
          </div>

          <div className="text-left">
            <h4 className="font-black italic uppercase mb-8 text-emerald-900 tracking-tighter text-lg underline decoration-amber-400 decoration-4 underline-offset-8">Navigasi Web</h4>
            <div className="grid grid-cols-2 gap-3 text-left">
              <Link href="/profil/sejarah" className="text-slate-500 font-bold text-[10px] no-underline hover:text-emerald-600 uppercase tracking-widest italic leading-none py-1">Sejarah</Link>
              <Link href="/profil/visi-misi" className="text-slate-500 font-bold text-[10px] no-underline hover:text-emerald-600 uppercase tracking-widest italic leading-none py-1">Visi Misi</Link>
              <Link href="/profil/struktur" className="text-slate-500 font-bold text-[10px] no-underline hover:text-emerald-600 uppercase tracking-widest italic leading-none py-1">Struktur</Link>
              <Link href="/berita" className="text-slate-500 font-bold text-[10px] no-underline hover:text-emerald-600 uppercase tracking-widest italic leading-none py-1">Berita</Link>
              <Link href="/ppdb" className="text-emerald-600 font-black text-[10px] no-underline hover:text-emerald-700 uppercase tracking-widest italic leading-none py-1">Daftar PPDB</Link>
            </div>
          </div>
        </div>
        <div className="text-center pt-10 border-t border-slate-50">
          <p className="font-black tracking-[0.5em] uppercase text-[10px] text-slate-300 italic mb-0">© 2026 SMAS NU TOBOALI • BANGKA SELATAN</p>
        </div>
      </footer>

      {/* 8. DRAWER MENU */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsMenuOpen(false)} className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[110]" />
            <motion.div initial={{ x: '-100%' }} animate={{ x: 0 }} exit={{ x: '-100%' }} className="fixed top-0 left-0 h-full w-[300px] md:w-[420px] bg-emerald-900 z-[120] shadow-2xl p-8 flex flex-col overflow-y-auto text-left">
              <div className="flex justify-between items-center mb-10">
                <p className="font-black italic text-xl tracking-tighter text-white uppercase mb-0">Navigasi Utama</p>
                <button onClick={() => setIsMenuOpen(false)} className="text-emerald-200 hover:text-white bg-transparent border-none cursor-pointer outline-none"><X size={32} /></button>
              </div>
              <div className="space-y-2 text-left">
                <Link onClick={() => setIsMenuOpen(false)} href="/" className="flex items-center justify-between text-white text-2xl font-black italic no-underline hover:text-amber-400 py-2 uppercase tracking-tighter">Beranda <ChevronRight /></Link>
                <div className="pt-4 pb-2 border-t border-emerald-800/50">
                  <p className="text-[10px] font-black text-emerald-400 tracking-[0.4em] uppercase mb-3">Profil Sekolah</p>
                  <div className="flex flex-col gap-4 ml-2">
                    <Link onClick={() => setIsMenuOpen(false)} href="/profil/sejarah" className="text-emerald-100 no-underline hover:text-white font-bold text-lg flex items-center gap-3 uppercase italic tracking-tighter leading-none"><History size={18} className="text-amber-400" /> Sejarah</Link>
                    <Link onClick={() => setIsMenuOpen(false)} href="/profil/visi-misi" className="text-emerald-100 no-underline hover:text-white font-bold text-lg flex items-center gap-3 uppercase italic tracking-tighter leading-none"><Target size={18} className="text-amber-400" /> Visi & Misi</Link>
                    <Link onClick={() => setIsMenuOpen(false)} href="/profil/struktur" className="text-emerald-100 no-underline hover:text-white font-bold text-lg flex items-center gap-3 uppercase italic tracking-tighter leading-none"><Users size={18} className="text-amber-400" /> Struktur</Link>
                  </div>
                </div>
                <Link onClick={() => setIsMenuOpen(false)} href="/berita" className="flex items-center justify-between text-white text-2xl font-black italic no-underline hover:text-amber-400 py-4 uppercase tracking-tighter">Berita <ChevronRight /></Link>
                <Link onClick={() => setIsMenuOpen(false)} href="/ppdb" className="mt-8 block bg-amber-400 text-emerald-950 p-5 rounded-2xl text-center font-black text-lg no-underline shadow-xl uppercase italic">Daftar PPDB 2026</Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </main>
  );
}