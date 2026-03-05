"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, Calendar, User, Trophy, ArrowRight, Share2, Award, MapPin } from 'lucide-react';

export default function PortalBeritaTunggal() {
  const daftarBerita = [
    {
      id: "prestasi-nasional",
      kategori: "PRESTASI NASIONAL",
      tgl: "04 Nov 2025",
      penulis: "Kulul Sari",
      judul: "Dahsyat! SMAS NU Toboali Borong Juara 1 Pidato PAI FAIR, Melaju Ke Tingkat Nasional!",
      ringkasan: "Nabila Alfira berhasil memukau dewan juri dengan orasi Islami yang karismatik, membuktikan kualitas pendidikan SMAS NU siap bersaing di level tertinggi.",
      img: "/sma-3.jpg",
      highlight: true
    },
    {
      id: "evaluasi-mutu",
      kategori: "AKADEMIK",
      tgl: "15 Mar 2026",
      penulis: "Admin Sekolah",
      judul: "Evaluasi Pembelajaran Semester Genap: Konsistensi Menjaga Mutu Pendidikan",
      ringkasan: "Rapat koordinasi dewan guru dalam memastikan setiap siswa mendapatkan standar pembelajaran terbaik sesuai visi Madani.",
      img: "/sma-1.jpg",
      highlight: false
    }
  ];

  return (
    <main className="min-h-screen bg-[#f8fafc] text-left font-sans">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-[100] bg-white/95 backdrop-blur-md border-b border-emerald-100 py-4 px-6 md:px-12 flex justify-between items-center shadow-sm">
        <Link href="/" className="flex items-center gap-2 text-emerald-900 no-underline font-black text-[10px] uppercase tracking-widest hover:text-emerald-600 transition-all">
          <ChevronLeft size={16} /> Kembali ke Beranda
        </Link>
        <div className="flex items-center gap-3">
          <Image src="/logo-sma.png" alt="Logo" width={25} height={25} />
          <span className="font-black text-emerald-900 text-[10px] uppercase tracking-tighter italic">SMAS NU News Center</span>
        </div>
      </nav>

      <header className="py-16 bg-emerald-900 text-white px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-amber-400 font-black uppercase tracking-[0.5em] text-[10px] mb-4 italic">Update Informasi</p>
          <h1 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter leading-[0.9]">Warta <span className="text-emerald-400">Terbaru</span></h1>
        </div>
      </header>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto space-y-20">
          
          {/* LOOPING BERITA */}
          {daftarBerita.map((berita, index) => (
            <article key={berita.id} className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center border-b border-slate-100 pb-20 last:border-0`}>
              
              {/* IMAGE SECTION */}
              <div className="w-full md:w-1/2 relative group">
                <div className={`absolute -inset-4 ${berita.highlight ? 'bg-amber-400/20' : 'bg-emerald-600/10'} rounded-[40px] rotate-2 group-hover:rotate-0 transition-transform duration-500`}></div>
                <div className="relative h-[350px] md:h-[450px] rounded-[40px] overflow-hidden shadow-2xl border-4 border-white">
                  <img src={berita.img} alt={berita.judul} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  {berita.highlight && (
                    <div className="absolute top-6 left-6 bg-amber-400 text-emerald-950 px-4 py-2 rounded-xl font-black text-[10px] uppercase tracking-widest shadow-lg flex items-center gap-2">
                      <Trophy size={14} /> Berita Populer
                    </div>
                  )}
                </div>
              </div>

              {/* TEXT SECTION */}
              <div className="w-full md:w-1/2 space-y-6">
                <div className="flex items-center gap-4 text-emerald-600 font-black text-[10px] uppercase tracking-[0.3em] italic">
                  <span>{berita.kategori}</span>
                  <span className="text-slate-300">|</span>
                  <span className="text-slate-400">{berita.tgl}</span>
                </div>
                
                <h2 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter leading-[0.9] text-slate-900 group-hover:text-emerald-600 transition-colors">
                  {berita.judul}
                </h2>

                <p className="text-lg text-slate-500 font-medium italic leading-relaxed">
                  {ringkasanBerita(berita.ringkasan)}
                </p>

                <div className="pt-6 flex flex-wrap gap-4">
                  {/* Link ke detail tetap bisa ditaruh di sini atau cukup satu halaman panjang */}
                  <div className="flex items-center gap-4 text-slate-400 font-bold italic text-xs mb-6">
                    <User size={14} className="text-emerald-600" /> Penulis: {berita.penulis}
                  </div>
                </div>

                {/* MODAL / LINK TRIGGER */}
                <button className="bg-slate-900 text-white px-10 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-emerald-600 hover:scale-105 transition-all shadow-xl flex items-center gap-3 border-none cursor-pointer">
                  Baca Selengkapnya <ArrowRight size={16} />
                </button>
              </div>
            </article>
          ))}

        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 bg-white border-t border-slate-100 text-center">
        <p className="font-black text-[10px] uppercase tracking-[0.5em] text-slate-300 italic">© 2026 SMAS NU TOBOALI • MEDIA CENTER</p>
      </footer>
    </main>
  );
}

// Fungsi pembantu untuk membatasi teks ringkasan
function ringkasanBerita(text: string) {
  return text.length > 150 ? text.substring(0, 150) + "..." : text;
}