"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, GraduationCap, Users, Star, 
  ShieldCheck, Briefcase, Cloud, ChevronRight,
  Bell, MapPin, MessageCircle
} from 'lucide-react';

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#f8fafc] overflow-x-hidden font-sans text-slate-800">
      
      {/* 1. NAVBAR FIXED - Z-INDEX PALING ATAS (100) */}
      <nav className="fixed top-0 w-full z-[100] bg-white/90 backdrop-blur-xl border-b border-emerald-100 py-4 px-6 md:px-12 flex justify-between items-center shadow-md">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsMenuOpen(true)} 
            className="p-2 text-emerald-900 hover:bg-emerald-50 rounded-xl transition-all flex items-center gap-2 group pointer-events-auto"
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
            <span className="text-[7px] md:text-[8px] font-bold text-emerald-600 tracking-[0.2em] uppercase italic">Unggul & Islami</span>
          </div>
        </div>
        <Link href="/ppdb" className="hidden md:block bg-emerald-600 text-white px-8 py-2.5 rounded-full no-underline hover:bg-emerald-700 shadow-lg transition-all font-black text-[10px] uppercase tracking-widest border-none">PPDB 2026</Link>
      </nav>

      {/* 2. RUNNING TEXT - FIX: TIDAK MENGHALANGI KLIK (Z-INDEX 40) */}
      <div className="fixed top-[72px] md:top-[78px] w-full z-40 bg-amber-400 py-2 overflow-hidden whitespace-nowrap border-b border-amber-500/20 pointer-events-none">
        <motion.div 
          animate={{ x: ["0%", "-100%"] }} 
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }} 
          className="inline-block text-emerald-950 font-black text-[10px] uppercase tracking-[0.2em]"
        >
          ✨ PENERIMAAN PESERTA DIDIK BARU SMAS NU TOBOALI TAHUN PELAJARAN 2026/2027 TELAH DIBUKA! DAFTARKAN DIRI ANDA SEGERA ✨     
        </motion.div>
      </div>

      {/* 3. DRAWER MENU - Z-INDEX SUPER (120) */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              onClick={() => setIsMenuOpen(false)} 
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[110]" 
            />
            <motion.div 
              initial={{ x: '-100%' }} 
              animate={{ x: 0 }} 
              exit={{ x: '-100%' }} 
              transition={{ type: 'spring', damping: 25, stiffness: 200 }} 
              className="fixed top-0 left-0 h-full w-[300px] md:w-[400px] bg-emerald-900 z-[120] shadow-2xl p-8 flex flex-col text-left"
            >
              <div className="flex justify-between items-center mb-12">
                <div className="text-white">
                  <p className="font-black italic text-xl tracking-tighter mb-0 uppercase">Navigasi Utama</p>
                  <div className="w-10 h-1 bg-amber-400 rounded-full"></div>
                </div>
                <button onClick={() => setIsMenuOpen(false)} className="text-emerald-200 hover:text-white transition-colors">
                  <X size={32} />
                </button>
              </div>
              <div className="space-y-6">
                <Link onClick={() => setIsMenuOpen(false)} href="/" className="group flex items-center justify-between text-white text-2xl font-black italic no-underline hover:text-amber-400 transition-all">BERANDA <ChevronRight /></Link>
                
                <div className="py-4 space-y-4 border-t border-emerald-800">
                   <p className="text-[10px] font-black text-emerald-400 tracking-[0.4em] uppercase mb-2">Profil Sekolah</p>
                   <Link onClick={() => setIsMenuOpen(false)} href="/profil/struktur" className="block text-xl font-bold text-emerald-100 no-underline hover:text-white transition-all">Struktur Organisasi</Link>
                   <Link onClick={() => setIsMenuOpen(false)} href="/profil/visi-misi" className="block text-xl font-bold text-emerald-100 no-underline hover:text-white transition-all">Visi & Misi</Link>
                </div>

                <Link onClick={() => setIsMenuOpen(false)} href="/akademik" className="group flex items-center justify-between text-white text-2xl font-black italic no-underline hover:text-amber-400 transition-all border-t border-emerald-800 pt-6">AKADEMIK <ChevronRight /></Link>
                
                <Link onClick={() => setIsMenuOpen(false)} href="/ppdb" className="mt-10 block bg-amber-400 text-emerald-950 p-5 rounded-2xl text-center font-black text-lg no-underline shadow-xl hover:bg-white transition-all uppercase">Daftar Sekarang</Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* 4. HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center pt-40 overflow-hidden bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-50 via-white to-white text-left">
        <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute top-40 left-[10%] opacity-20 hidden md:block text-emerald-300 pointer-events-none"><Cloud size={120} /></motion.div>
        <motion.div animate={{ rotate: [0, 10, -10, 0], y: [0, -30, 0] }} transition={{ duration: 8, repeat: Infinity }} className="absolute top-40 right-[10%] text-emerald-600/10 hidden md:block pointer-events-none"><GraduationCap size={200} /></motion.div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-3/5 text-center md:text-left">
              <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} className="inline-flex items-center gap-2 px-5 py-2 bg-emerald-600 text-white rounded-full text-[10px] font-black uppercase tracking-widest mb-8 shadow-xl"><Star size={14} className="fill-amber-400 text-amber-400" /> Terakreditasi Baik</motion.div>
              <h2 className="text-5xl md:text-[90px] font-black text-slate-900 leading-[0.9] mb-8 uppercase italic tracking-tighter">PEMIMPIN <br/> <span className="text-emerald-600 text-6xl md:text-[100px]">MASA DEPAN</span> <br/> <span className="text-slate-300 underline decoration-emerald-500/30">DIMULAI DISINI</span></h2>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Link href="/ppdb" className="bg-emerald-600 text-white px-10 py-5 rounded-2xl font-black text-sm no-underline uppercase tracking-widest shadow-2xl hover:scale-105 transition-all border-none">Daftar Sekarang</Link>
                <button onClick={() => setIsMenuOpen(true)} className="bg-white text-slate-800 border-2 border-slate-100 px-10 py-5 rounded-2xl font-black text-sm no-underline uppercase tracking-widest hover:bg-slate-50 transition-all">Jelajahi Menu</button>
              </div>
            </div>
            <div className="md:w-2/5 relative">
              <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="relative z-20 w-[300px] md:w-[550px] h-[400px] md:h-[650px]"><Image src="/foto-anak-nu.png" alt="Siswa" fill className="object-contain drop-shadow-2xl" priority /></motion.div>
              <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute -left-5 md:-left-10 bottom-20 bg-white/95 backdrop-blur-xl p-6 rounded-[24px] shadow-2xl border border-white/50 z-30">
                <div className="flex items-center gap-4 text-left"><div className="bg-emerald-600 p-3 rounded-xl text-white"><Users size={24} /></div><div><p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest mb-0">Siswa Aktif</p><p className="text-3xl font-black italic tracking-tighter text-slate-800">32</p></div></div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SAMBUTAN KEPSEK */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 text-left">
          <div className="w-full md:w-1/2 relative">
            <div className="absolute -inset-4 bg-emerald-600/10 rounded-[40px] rotate-3"></div>
            <div className="relative h-[500px] w-full rounded-[40px] overflow-hidden shadow-2xl border-4 border-white">
              <img src="/foto-kepsek.jpg" alt="Kepsek" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-emerald-600 font-black uppercase tracking-[0.4em] text-[10px] mb-4">Pesan Kepala Sekolah</p>
            <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-8 italic tracking-tighter uppercase leading-[0.9]">"Membangun <span className="text-emerald-600">Generasi Madani</span>"</h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-6 italic">"Di SMAS NU Toboali, kami percaya bahwa pendidikan bukan hanya soal nilai, tapi soal pembentukan karakter yang berakhlaqul karimah."</p>
            <div className="pt-6 border-t border-slate-100">
              <p className="font-black text-xl italic text-slate-800 mb-0">Azharudin, S.Pd., M.E., Gr.</p>
              <p className="text-emerald-600 font-bold text-xs uppercase tracking-widest">Kepala Sekolah</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. STRUKTUR MANAJEMEN */}
      <section className="py-32 px-6 bg-slate-900 text-white text-center">
        <div className="max-w-7xl mx-auto"><div className="mb-20"><h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter mb-4">Pimpinan <span className="text-emerald-500">Sekolah</span></h2><div className="w-20 h-2 bg-emerald-500 mx-auto rounded-full"></div></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { nama: "H. M. Karyawan, S.Ag., M.Pd.", jabatan: "Ketua Yayasan", icon: <ShieldCheck size={32} /> },
              { nama: "Azharudin, S.Pd., M.E., Gr.", jabatan: "Kepala Sekolah", icon: <GraduationCap size={32} /> },
              { nama: "Mahfudz Maladzi, S.Pd., Gr.", jabatan: "Waka Sekolah", icon: <Users size={32} /> },
              { nama: "Dapa Mutakkin, S.Pd.", jabatan: "Operator Sekolah", icon: <Briefcase size={32} /> },
            ].map((staff, idx) => (
              <div key={idx} className="group bg-white/5 border border-white/10 p-10 rounded-[40px] hover:bg-emerald-600 transition-all duration-500">
                <div className="text-emerald-500 group-hover:text-white mb-6 transition-colors flex justify-center">{staff.icon}</div>
                <h3 className="font-black text-lg italic leading-tight mb-2 tracking-tighter h-12 flex items-center justify-center">{staff.nama}</h3>
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-400 group-hover:text-white/80">{staff.jabatan}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. KONTAK & LOKASI */}
      <section className="py-24 px-6 bg-white text-left">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/3">
            <h2 className="text-4xl font-black text-slate-800 tracking-tighter italic uppercase mb-8">Layanan <span className="text-emerald-600">Informasi</span></h2>
            <div className="space-y-6">
              <div className="flex gap-4"><div className="text-emerald-600"><MapPin /></div><p className="text-sm font-bold text-slate-600 italic">Desa Rias, Kec. Toboali, Kab. Bangka Selatan</p></div>
              <Link href="https://wa.me/6287813180362" target="_blank" className="flex gap-4 items-center p-6 bg-emerald-50 rounded-3xl no-underline border border-emerald-100 hover:shadow-xl transition-all">
                <MessageCircle className="text-emerald-600" />
                <div><p className="text-[9px] font-black text-emerald-600 uppercase mb-1">Admin (Dapa)</p><p className="text-sm font-bold text-slate-700 italic">Klik Chat WhatsApp</p></div>
              </Link>
            </div>
          </div>
          <div className="lg:w-2/3 w-full h-[400px] rounded-[40px] overflow-hidden shadow-xl border-8 border-white">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15940.697387431358!2d106.4431!3d-3.0334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwMDInMDAuMCJTIDEwNiw0NCcyNi40IkU!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid" width="100%" height="100%" style={{ border: 0 }} loading="lazy"></iframe>
          </div>
        </div>
      </section>

      {/* 8. FOOTER */}
      <footer className="bg-slate-50 py-20 border-t border-emerald-50 text-center">
        <div className="flex justify-center gap-8 mb-10"><Image src="/logo-pendidikan.png" alt="P" width={40} height={40} /><Image src="/logo-yayasan.png" alt="Y" width={40} height={40} /><Image src="/logo-sma.png" alt="S" width={40} height={40} /></div>
        <p className="font-black tracking-[0.5em] uppercase text-[10px] text-slate-300 italic">© 2026 SMAS NU TOBOALI • AKHLAK</p>
      </footer>
    </main>
  );
}