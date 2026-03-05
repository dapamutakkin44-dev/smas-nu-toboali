"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, Star, MapPin, MessageCircle, Building,
  Laptop, BookOpen, Home, History, Target,
  ChevronRight, Trophy, Instagram, Facebook, Users, Cloud, Award
} from 'lucide-react';

export default function SMASNUToboaliMasterFinal() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#f8fafc] overflow-x-hidden font-sans text-slate-800 text-left">
      
      {/* 1. NAVBAR FIXED */}
      <nav className="fixed top-0 w-full z-[100] bg-white/95 backdrop-blur-xl border-b border-emerald-100 py-4 px-6 md:px-12 flex justify-between items-center shadow-sm">
        <div className="flex items-center gap-4">
          <button onClick={() => setIsMenuOpen(true)} className="p-2 text-emerald-900 hover:bg-emerald-50 rounded-xl transition-all border-none bg-transparent outline-none cursor-pointer">
            <Menu size={28} />
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
        <Link href="/ppdb" className="bg-emerald-600 text-white px-6 py-2 rounded-full no-underline hover:bg-emerald-700 shadow-lg font-black text-[10px] uppercase tracking-widest transition-all">PPDB 2026</Link>
      </nav>

      {/* 2. RUNNING TEXT */}
      <div className="fixed top-[68px] md:top-[76px] w-full z-40 bg-amber-400 py-2 border-b border-amber-500/20">
        <motion.div animate={{ x: ["0%", "-100%"] }} transition={{ repeat: Infinity, duration: 25, ease: "linear" }} className="inline-block text-emerald-950 font-black text-[10px] uppercase tracking-[0.2em] whitespace-nowrap">
          ✨ PENERIMAAN PESERTA DIDIK BARU SMAS NU TOBOALI TAHUN PELAJARAN 2026/2027 TELAH DIBUKA! DAFTARKAN DIRI ANDA SEGERA ✨     
        </motion.div>
      </div>

      {/* 3. HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-50 via-white to-white">
        <div className="container mx-auto px-6 text-left">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-3/5 text-left">
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-emerald-600 text-white rounded-full text-[10px] font-black uppercase tracking-widest mb-8 shadow-xl">
                <Star size={14} className="fill-amber-400 text-amber-400" /> Terakreditasi Baik
              </div>
              <h2 className="text-5xl md:text-[80px] font-black text-slate-900 leading-[0.9] mb-8 uppercase italic tracking-tighter">PEMIMPIN <br/> <span className="text-emerald-600 text-6xl md:text-[90px]">MASA DEPAN</span> <br/> <span className="text-slate-300 underline decoration-emerald-500/30">DIMULAI DISINI</span></h2>
              <div className="flex flex-wrap gap-4">
                <Link href="/ppdb" className="bg-emerald-600 text-white px-10 py-5 rounded-2xl font-black text-sm no-underline uppercase tracking-widest shadow-2xl hover:scale-105 transition-all">Daftar PPDB</Link>
                <button onClick={() => setIsMenuOpen(true)} className="bg-white text-slate-800 border-2 border-slate-100 px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-slate-50 cursor-pointer">Menu Sekolah</button>
              </div>
            </div>
            <div className="md:w-2/5 relative">
              <div className="w-[280px] md:w-[450px] h-[380px] md:h-[550px] relative mx-auto">
                <Image src="/foto-anak-nu.png" alt="Siswa" fill className="object-contain drop-shadow-2xl" priority />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SAMBUTAN KEPSEK */}
      <section className="py-24 px-6 bg-white border-t border-slate-50 text-left">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 relative h-[500px] rounded-[40px] overflow-hidden shadow-2xl border-4 border-white">
            <img src="/foto-kepsek.jpg" alt="Kepsek" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-emerald-600 font-black uppercase tracking-[0.4em] text-[10px] mb-4">Message From Principal</p>
            <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-8 italic tracking-tighter uppercase leading-[0.9]">"Membangun <span className="text-emerald-600">Generasi Madani</span>"</h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-6 italic">"Pendidikan di SMAS NU Toboali menitikberatkan pada karakter Islami, kompetensi modern, dan pengabdian bangsa."</p>
            <div className="pt-6 border-t border-slate-100">
              <p className="font-black text-xl italic text-slate-800">Azharudin, S.Pd., M.E., Gr.</p>
              <p className="text-emerald-600 font-bold text-xs uppercase tracking-widest">Kepala Sekolah</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PRASARANA */}
      <section className="py-24 px-6 bg-emerald-50/30 text-left">
        <div className="max-w-7xl mx-auto text-left">
          <h2 className="text-4xl font-black text-slate-800 mb-16 italic uppercase tracking-tighter">Prasarana <span className="text-emerald-600">Terbaik</span></h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { nama: "Gedung Sekolah", icon: <Building size={24} />, desk: "Gedung belajar nyaman" },
              { nama: "Lab Komputer", icon: <Laptop size={24} />, desk: "Fasilitas IT modern" },
              { nama: "Asrama Siswa", icon: <Home size={24} />, desk: "Hunian islami & aman" },
              { nama: "Perpustakaan", icon: <BookOpen size={24} />, desk: "Koleksi buku lengkap" },
            ].map((f, i) => (
              <div key={i} className="bg-white p-8 rounded-[32px] border border-emerald-100 shadow-sm hover:shadow-xl transition-all group">
                <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all">{f.icon}</div>
                <h3 className="font-black text-sm italic text-slate-800 mb-1 uppercase leading-none">{f.nama}</h3>
                <p className="text-[10px] font-bold text-slate-400 uppercase italic leading-none">{f.desk}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. GALERI KEGIATAN */}
      <section className="py-24 px-6 bg-white text-left">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black text-slate-900 italic tracking-tighter uppercase mb-16">Galeri <span className="text-emerald-600">Siswa</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["/sma-1.jpg", "/sma-2.jpg", "/sma-3.jpg"].map((img, i) => (
              <div key={i} className="h-[350px] rounded-[32px] overflow-hidden relative group shadow-lg">
                <img src={img} alt="Galeri" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. UPDATE INFORMASI: WARTA PRESTASI NASIONAL */}
      <section className="py-24 px-6 bg-slate-900 text-left border-y-8 border-amber-400">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
               <div className="inline-block bg-amber-400 text-emerald-950 px-4 py-1.5 rounded-lg font-black text-[10px] uppercase tracking-widest mb-6 italic">Update Informasi Terbaru</div>
               <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter uppercase text-white leading-none mb-8">Dahsyat! Nabila Alfira <span className="text-emerald-400">Juara 1 Nasional</span> Pidato PAI FAIR</h2>
               <p className="text-emerald-100/70 text-lg italic leading-relaxed mb-8">
                 Membanggakan! Siswi SMAS NU Toboali berhasil menyabet Juara 1 tingkat Kabupaten dan kini siap mengharumkan nama Bangka Selatan di kancah Nasional.
               </p>
               <Link href="/berita" className="inline-flex items-center gap-3 bg-white text-slate-900 px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest no-underline hover:bg-amber-400 transition-all shadow-xl">
                 Buka Warta Lengkap <ChevronRight size={16} />
               </Link>
            </div>
            <div className="md:w-1/2 h-[400px] rounded-[40px] overflow-hidden border-4 border-emerald-500 shadow-2xl relative group">
               <img src="/sma-3.jpg" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt="Prestasi Nasional" />
               <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. GOOGLE MAPS */}
      <section className="w-full h-[400px] relative bg-slate-200 border-t-8 border-emerald-600">
        <div className="absolute top-0 left-0 z-10 bg-emerald-600 text-white px-8 py-3 rounded-br-[32px] font-black italic uppercase tracking-widest text-xs shadow-xl">Lokasi SMAS NU Toboali 📍</div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15938.826244434254!2d106.444!3d-3.012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwMDAnNDMuMiJTIDEwNsKwMjYnMzguNCJF!5e0!3m2!1sid!2sid!4v1700000000000" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" className="grayscale hover:grayscale-0 transition-all duration-1000"></iframe>
      </section>

      {/* 9. FOOTER FINAL */}
      <footer className="bg-white pt-20 pb-12 border-t border-slate-100 text-left">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          <div className="text-left">
            <div className="flex gap-2 items-center mb-6">
               <Image src="/logo-sma.png" alt="S" width={40} height={40} />
               <h4 className="font-black italic uppercase text-emerald-900 tracking-tighter text-2xl mb-0">SMAS NU TOBOALI</h4>
            </div>
            <p className="text-slate-500 text-sm font-bold italic leading-relaxed mb-8 max-w-md italic">Unggul dalam Prestasi, Berkarakter Islami, Berwawasan Kebangsaan.</p>
            <div className="flex flex-wrap gap-4">
              <a href="https://www.instagram.com/official.smasnutoboali/" target="_blank" className="bg-pink-600 text-white px-6 py-2 rounded-xl font-black text-[9px] uppercase tracking-widest no-underline shadow-lg hover:scale-110 transition-all">Instagram</a>
              <a href="https://www.tiktok.com/@official.smasnu.toboali" target="_blank" className="bg-black text-white px-6 py-2 rounded-xl font-black text-[9px] uppercase tracking-widest no-underline shadow-lg hover:scale-110 transition-all">TikTok</a>
              <a href="https://wa.me/6287813180362" target="_blank" className="bg-emerald-600 text-white px-6 py-2 rounded-xl font-black text-[9px] uppercase tracking-widest no-underline shadow-lg hover:scale-110 transition-all">WhatsApp</a>
            </div>
          </div>
          <div className="text-left space-y-6">
            <h4 className="font-black italic uppercase text-emerald-900 text-xl underline decoration-amber-400 decoration-4 underline-offset-8">Alamat & Kontak</h4>
            <div className="flex items-start gap-4"><MapPin className="text-emerald-600 shrink-0" size={24} /><p className="text-sm font-bold text-slate-500 italic">Jl. Desa Rias, Kec. Toboali, Kab. Bangka Selatan, 33783</p></div>
            <div className="flex items-center gap-4 text-sm font-black text-emerald-900 italic"><MessageCircle className="text-emerald-600 shrink-0" size={24} /><span>0878-1318-0362 (Admin Dapa)</span></div>
            <div className="flex items-center gap-4 text-sm font-black text-emerald-900 italic"><Cloud className="text-emerald-600 shrink-0" size={24} /><span>smasnutoboali@gmail.com</span></div>
          </div>
        </div>
        <div className="text-center pt-10 border-t border-slate-50 px-6">
          <p className="font-black tracking-[0.5em] uppercase text-[10px] text-slate-300 italic mb-0">© 2026 SMAS NU TOBOALI • BANGKA SELATAN</p>
        </div>
      </footer>

      {/* 10. DRAWER MENU (HOVER FIXED) */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsMenuOpen(false)} className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[110]" />
            <motion.div initial={{ x: '-100%' }} animate={{ x: 0 }} exit={{ x: '-100%' }} className="fixed top-0 left-0 h-full w-[300px] md:w-[420px] bg-emerald-900 z-[120] shadow-2xl p-8 flex flex-col text-left">
              <div className="flex justify-between items-center mb-10">
                <p className="font-black italic text-xl tracking-tighter text-white uppercase mb-0">Navigasi Utama</p>
                <button onClick={() => setIsMenuOpen(false)} className="text-emerald-200 bg-transparent border-none cursor-pointer"><X size={32} /></button>
              </div>
              <div className="space-y-2">
                <Link onClick={() => setIsMenuOpen(false)} href="/" className="flex items-center justify-between text-white text-2xl font-black italic no-underline hover:text-amber-400 py-2 uppercase tracking-tighter transition-all group">Beranda <ChevronRight className="group-hover:translate-x-2 transition-transform"/></Link>
                
                <div className="pt-6 pb-2 border-t border-emerald-800/50">
                  <p className="text-[10px] font-black text-emerald-400 tracking-[0.4em] uppercase mb-4">Profil Sekolah</p>
                  <div className="flex flex-col gap-4 ml-2">
                    <Link onClick={() => setIsMenuOpen(false)} href="/profil/sejarah" className="text-emerald-100 no-underline font-bold text-lg flex items-center gap-4 uppercase italic tracking-tighter transition-all hover:text-amber-400 hover:translate-x-2 group">
                      <div className="p-2 bg-emerald-800 rounded-lg group-hover:bg-amber-400 transition-colors"><History size={18} className="group-hover:text-emerald-900" /></div> Sejarah
                    </Link>
                    <Link onClick={() => setIsMenuOpen(false)} href="/profil/visi-misi" className="text-emerald-100 no-underline font-bold text-lg flex items-center gap-4 uppercase italic tracking-tighter transition-all hover:text-amber-400 hover:translate-x-2 group">
                      <div className="p-2 bg-emerald-800 rounded-lg group-hover:bg-amber-400 transition-colors"><Target size={18} className="group-hover:text-emerald-900" /></div> Visi & Misi
                    </Link>
                    <Link onClick={() => setIsMenuOpen(false)} href="/profil/struktur" className="text-emerald-100 no-underline font-bold text-lg flex items-center gap-4 uppercase italic tracking-tighter transition-all hover:text-amber-400 hover:translate-x-2 group">
                      <div className="p-2 bg-emerald-800 rounded-lg group-hover:bg-amber-400 transition-colors"><Users size={18} className="group-hover:text-emerald-900" /></div> Struktur
                    </Link>
                  </div>
                </div>

                <Link onClick={() => setIsMenuOpen(false)} href="/berita" className="flex items-center justify-between text-white text-2xl font-black italic no-underline hover:text-amber-400 py-4 uppercase tracking-tighter transition-all group border-t border-emerald-800/50 mt-4">Berita & Prestasi <ChevronRight className="group-hover:translate-x-2 transition-transform"/></Link>
                <Link onClick={() => setIsMenuOpen(false)} href="/ppdb" className="mt-8 block bg-amber-400 text-emerald-950 p-5 rounded-2xl text-center font-black text-lg no-underline shadow-xl uppercase italic tracking-widest hover:bg-white transition-all">Daftar PPDB 2026</Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </main>
  );
}