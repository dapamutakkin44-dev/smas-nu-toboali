"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, GraduationCap, Users, Star, 
  MapPin, MessageCircle, Building,
  Laptop, BookOpen, Home, History, Target,
  ChevronRight, Send, Cloud, Instagram, Facebook, Youtube
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
    <main className="min-h-screen bg-[#f8fafc] overflow-x-hidden font-sans text-slate-800 text-left">
      
      {/* 1. NAVBAR - TIGA LOGO LENGKAP */}
      <nav className="fixed top-0 w-full z-[100] bg-white/95 backdrop-blur-xl border-b border-emerald-100 py-4 px-6 md:px-12 flex justify-between items-center shadow-sm">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsMenuOpen(true)} 
            className="p-2 text-emerald-900 hover:bg-emerald-50 rounded-xl transition-all flex items-center gap-2 group cursor-pointer border-none bg-transparent"
          >
            <Menu size={28} />
            <span className="hidden md:inline font-black text-[10px] tracking-[0.2em] uppercase text-emerald-900">Menu</span>
          </button>

          <div className="flex gap-2 bg-white p-1.5 rounded-xl border border-emerald-50 shadow-sm">
            <div className="flex gap-1.5 items-center px-1">
              <Image src="/logo-pendidikan.png" alt="Pendidikan" width={22} height={22} className="object-contain" />
              <Image src="/logo-yayasan.png" alt="Yayasan" width={22} height={22} className="object-contain" />
              <Image src="/logo-sma.png" alt="SMA" width={22} height={22} className="object-contain" />
            </div>
            <div className="flex flex-col border-l border-emerald-100 pl-2">
              <h1 className="font-black text-emerald-900 text-[10px] md:text-sm tracking-tighter uppercase italic leading-none">SMAS NU TOBOALI</h1>
              <span className="text-[7px] md:text-[8px] font-bold text-emerald-600 tracking-[0.2em] uppercase italic leading-none mt-1">Unggul & Islami</span>
            </div>
          </div>
        </div>
        <Link href="/ppdb" className="hidden md:block bg-emerald-600 text-white px-8 py-2.5 rounded-full no-underline hover:bg-emerald-700 shadow-lg font-black text-[10px] uppercase tracking-widest border-none transition-all">PPDB 2026</Link>
      </nav>

      {/* 2. RUNNING TEXT */}
      <div className="fixed top-[68px] md:top-[76px] w-full z-40 bg-amber-400 py-2 overflow-hidden whitespace-nowrap border-b border-amber-500/20 pointer-events-none">
        <motion.div 
          animate={{ x: ["0%", "-100%"] }} 
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }} 
          className="inline-block text-emerald-950 font-black text-[10px] uppercase tracking-[0.2em]"
        >
          ✨ PENERIMAAN PESERTA DIDIK BARU SMAS NU TOBOALI TAHUN PELAJARAN 2026/2027 TELAH DIBUKA! DAFTARKAN DIRI ANDA SEGERA ✨     
        </motion.div>
      </div>

      {/* 3. HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 md:pt-40 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-50 via-white to-white">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 text-left">
            <div className="md:w-3/5">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-5 py-2 bg-emerald-600 text-white rounded-full text-[10px] font-black uppercase tracking-widest mb-8 shadow-xl">
                <Star size={14} className="fill-amber-400 text-amber-400" /> Terakreditasi Baik
              </motion.div>
              <h2 className="text-5xl md:text-[80px] font-black text-slate-900 leading-[0.9] mb-8 uppercase italic tracking-tighter">PEMIMPIN <br/> <span className="text-emerald-600 text-6xl md:text-[90px]">MASA DEPAN</span> <br/> <span className="text-slate-300 underline decoration-emerald-500/30">DIMULAI DISINI</span></h2>
              <div className="flex flex-wrap gap-4">
                <Link href="/ppdb" className="bg-emerald-600 text-white px-10 py-5 rounded-2xl font-black text-sm no-underline uppercase tracking-widest shadow-2xl hover:scale-105 transition-all border-none">Daftar Sekarang</Link>
                <button onClick={() => setIsMenuOpen(true)} className="bg-white text-slate-800 border-2 border-slate-100 px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-slate-50 transition-all cursor-pointer">Jelajahi Menu</button>
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

      {/* 4. PRASARANA */}
      <section className="py-24 px-6 bg-emerald-50/30">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-emerald-600 font-black uppercase tracking-[0.4em] text-[10px] mb-4">Fasilitas</p>
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

      {/* 5. SEKSI BERITA TERBARU */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div className="text-left">
              <p className="text-emerald-600 font-black uppercase tracking-[0.4em] text-[10px] mb-2 text-left">Update Harian</p>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 italic tracking-tighter uppercase text-left">Warta <span className="text-emerald-600">Sekolah</span></h2>
            </div>
            <Link href="/berita" className="hidden md:block bg-slate-100 text-slate-900 px-8 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest no-underline hover:bg-emerald-600 hover:text-white transition-all">Lihat Semua Berita</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { tgl: "15 Mar 2026", judul: "Penerimaan Siswa Baru Gelombang 1 Dibuka", img: "/gedung.jpg" },
              { tgl: "10 Mar 2026", judul: "Siswa SMAS NU Raih Juara Lomba Adzan Kabupaten", img: "/lab.jpg" },
              { tgl: "05 Mar 2026", judul: "Kegiatan Rutin Kajian Islam Remaja di Masjid", img: "/asrama.jpg" }
            ].map((news, i) => (
              <div key={i} className="group cursor-pointer text-left">
                <div className="relative h-[250px] rounded-[32px] overflow-hidden mb-6 shadow-lg">
                  <img src={news.img} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700" alt="Berita" />
                </div>
                <h3 className="text-xl font-black italic text-slate-900 uppercase tracking-tighter group-hover:text-emerald-600 transition-colors leading-tight mb-2">{news.judul}</h3>
                <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest">{news.tgl} — BACA SELENGKAPNYA →</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FOOTER LENGKAP - MAPS & MEDSOS */}
      <footer className="bg-slate-50 pt-24 pb-12 border-t border-emerald-50 text-left">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-16 mb-20 text-left">
          
          {/* Kolom Alamat & Maps */}
          <div>
            <h4 className="font-black italic uppercase mb-8 text-emerald-900 tracking-tighter text-xl underline decoration-amber-400 decoration-4 underline-offset-8">Lokasi Kami</h4>
            <div className="rounded-[32px] overflow-hidden shadow-xl border-4 border-white mb-6 h-[220px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1136.216348625906!2d106.4335559!3d-3.0449444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e173f0055555555%3A0xe51e94838638b931!2sSMAS%20NU%20TOBOALI!5e0!3m2!1sid!2sid!4v1711234567890!5m2!1sid!2sid" 
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" 
              ></iframe>
            </div>
            <div className="flex gap-4">
              <MapPin className="text-emerald-600 shrink-0" />
              <p className="text-sm font-bold text-slate-500 italic leading-relaxed">Jl. Desa Rias, Kec. Toboali, Kab. Bangka Selatan, Bangka Belitung 33783</p>
            </div>
          </div>

          {/* Kolom Kontak */}
          <div>
            <h4 className="font-black italic uppercase mb-8 text-emerald-900 tracking-tighter text-xl underline decoration-amber-400 decoration-4 underline-offset-8">Hubungi Kami</h4>
            <div className="space-y-4">
              <a href="https://wa.me/6287813180362" target="_blank" className="flex gap-4 items-center p-5 bg-white rounded-2xl no-underline border border-emerald-100 hover:shadow-xl hover:border-emerald-500 transition-all group">
                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all"><MessageCircle /></div>
                <div><p className="text-[10px] font-black uppercase mb-0 text-slate-400 leading-none">WhatsApp Admin</p><p className="text-sm font-black italic text-slate-800 uppercase tracking-tighter">0878-1318-0362</p></div>
              </a>
              <div className="flex gap-4 items-center p-5 bg-white rounded-2xl border border-emerald-100">
                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600"><Cloud /></div>
                <div><p className="text-[10px] font-black uppercase mb-0 text-slate-400 leading-none">Email Sekolah</p><p className="text-sm font-black italic text-slate-800 uppercase tracking-tighter">smasnutoboali@gmail.com</p></div>
              </div>
            </div>
          </div>

          {/* Kolom Medsos & Tiga Logo */}
          <div>
            <h4 className="font-black italic uppercase mb-8 text-emerald-900 tracking-tighter text-xl underline decoration-amber-400 decoration-4 underline-offset-8">Ikuti Kami</h4>
            <div className="flex gap-4 mb-10">
              <a href="https://instagram.com/smasnu_toboali" className="bg-pink-600 text-white p-3 rounded-xl shadow-lg hover:scale-110 transition-all"><Instagram size={24} /></a>
              <a href="https://facebook.com/smasnutoboali" className="bg-blue-700 text-white p-3 rounded-xl shadow-lg hover:scale-110 transition-all"><Facebook size={24} /></a>
              <a href="https://youtube.com/@smasnutoboali" className="bg-red-600 text-white p-3 rounded-xl shadow-lg hover:scale-110 transition-all"><Youtube size={24} /></a>
            </div>
            <div className="flex items-center gap-3 bg-white p-4 rounded-3xl border border-emerald-50 shadow-sm">
               <Image src="/logo-pendidikan.png" alt="P" width={30} height={30} />
               <Image src="/logo-yayasan.png" alt="Y" width={30} height={30} />
               <Image src="/logo-sma.png" alt="S" width={30} height={30} />
               <div className="border-l border-slate-100 pl-3 leading-none">
                 <p className="text-[10px] font-black text-emerald-900 uppercase tracking-tighter mb-1">SMAS NU TOBOALI</p>
                 <p className="text-[8px] font-bold text-emerald-600 tracking-widest uppercase">UNGGUL & ISLAMI</p>
               </div>
            </div>
          </div>
        </div>
        <div className="text-center pt-10 border-t border-slate-100">
          <p className="font-black tracking-[0.5em] uppercase text-[10px] text-slate-300 italic mb-0">© 2026 SMAS NU TOBOALI • CREATED BY ADMIN SMAS NU</p>
        </div>
      </footer>

      {/* DRAWER MENU */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsMenuOpen(false)} className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[110]" />
            <motion.div initial={{ x: '-100%' }} animate={{ x: 0 }} exit={{ x: '-100%' }} className="fixed top-0 left-0 h-full w-[300px] md:w-[420px] bg-emerald-900 z-[120] shadow-2xl p-8 flex flex-col overflow-y-auto">
              <div className="flex justify-between items-center mb-10">
                <p className="font-black italic text-xl tracking-tighter text-white uppercase mb-0">Navigasi Utama</p>
                <button onClick={() => setIsMenuOpen(false)} className="text-emerald-200 hover:text-white bg-transparent border-none cursor-pointer"><X size={32} /></button>
              </div>
              <div className="space-y-4">
                <Link onClick={() => setIsMenuOpen(false)} href="/" className="group flex items-center justify-between text-white text-2xl font-black italic no-underline hover:text-amber-400 transition-all uppercase">Beranda <ChevronRight /></Link>
                <Link onClick={() => setIsMenuOpen(false)} href="/berita" className="group flex items-center justify-between text-white text-2xl font-black italic no-underline hover:text-amber-400 transition-all uppercase">Berita <ChevronRight /></Link>
                <Link onClick={() => setIsMenuOpen(false)} href="/ppdb" className="mt-10 block bg-amber-400 text-emerald-950 p-5 rounded-2xl text-center font-black text-lg no-underline shadow-xl uppercase italic">Daftar Sekarang</Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </main>
  );
}