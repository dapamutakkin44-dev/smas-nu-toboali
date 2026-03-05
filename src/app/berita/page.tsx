"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ArrowRight, Calendar, User, Trophy } from 'lucide-react';

export default function NewsPortal() {
  return (
    <main className="min-h-screen bg-[#f8fafc] text-left font-sans">
      <nav className="p-6 bg-white border-b flex justify-between items-center sticky top-0 z-50">
        <Link href="/" className="flex items-center gap-2 no-underline text-emerald-900 font-black uppercase text-xs italic">
          <ChevronLeft size={18} /> Kembali
        </Link>
        <span className="font-black text-emerald-900 text-xs italic tracking-widest uppercase">Portal Berita SMAS NU</span>
      </nav>

      <header className="py-20 bg-emerald-900 text-white px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter leading-none mb-4">Warta <span className="text-emerald-400">Sekolah</span></h1>
        </div>
      </header>

      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* BERITA UTAMA NABILA */}
          <article className="lg:col-span-2 bg-white rounded-[40px] overflow-hidden shadow-2xl border border-slate-100 flex flex-col md:flex-row">
            <div className="md:w-1/2 h-[400px]">
              <img src="/sma-3.jpg" className="w-full h-full object-cover" alt="Nabila Alfira" />
            </div>
            <div className="md:w-1/2 p-10 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 text-amber-600 font-black text-[10px] uppercase mb-4 tracking-widest italic"><Trophy size={14} /> Berita Utama</div>
              <h2 className="text-3xl font-black italic uppercase tracking-tighter mb-4 leading-none">Nabila Alfira Sabet Juara 1 Nasional Pidato PAI FAIR 2025</h2>
              <p className="text-slate-500 font-bold italic text-sm mb-8">Prestasi luar biasa yang mengharumkan nama Bangka Selatan di kancah nasional...</p>
              <Link href="#" className="text-emerald-600 font-black uppercase text-xs no-underline flex items-center gap-2">Baca Selengkapnya <ArrowRight size={16} /></Link>
            </div>
          </article>

          {/* BERITA LAINNYA */}
          <article className="bg-white rounded-[40px] overflow-hidden shadow-xl border border-slate-100 p-8">
            <div className="h-[200px] rounded-3xl overflow-hidden mb-6">
              <img src="/sma-1.jpg" className="w-full h-full object-cover" alt="Rapat" />
            </div>
            <div className="flex gap-4 text-[10px] font-black uppercase text-slate-400 mb-4 italic">
              <span className="flex items-center gap-1"><Calendar size={12} /> 15 Maret 2026</span>
            </div>
            <h3 className="font-black italic uppercase text-xl leading-none mb-4 tracking-tighter">Evaluasi Pembelajaran Mutu Pendidikan Semester Genap</h3>
            <Link href="#" className="text-emerald-600 font-black uppercase text-[10px] no-underline">Buka Berita →</Link>
          </article>
        </div>
      </section>
    </main>
  );
}