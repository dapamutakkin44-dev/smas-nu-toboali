"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Target, Eye, Star, CheckCircle2, Quote } from 'lucide-react';

export default function VisiMisiPage() {
  const misiList = [
    "Menyelenggarakan pendidikan ilmu agama Islam, Qur’an Hadits, dan literatur kitab kuning.",
    "Melestarikan nilai Islam Ahlussunnah wal Jama’ah An-Nahdliyah dan kepesantrenan.",
    "Mewujudkan pengembangan kurikulum meliputi 8 standar pendidikan.",
    "Membekali siswa dengan IPTEK dan keterampilan mutu pendidikan.",
    "Membentuk pribadi Islami dan pola pikir kritis.",
    "Menumbuhkan semangat berprestasi akademik dan non-akademik.",
    "Melaksanakan kegiatan sosial untuk mendorong kemandirian bermasyarakat.",
    "Melakukan kerjasama kemitraan berbasis kompetensi dan kapasitas lembaga."
  ];

  return (
    <main className="min-h-screen bg-[#f8fafc] pt-32 pb-20 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Navigasi & Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
          <Link href="/" className="group flex items-center gap-2 text-emerald-700 font-bold bg-white px-5 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all border border-emerald-100">
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Kembali
          </Link>
          <div className="text-right">
            <span className="text-emerald-600 font-black tracking-[0.3em] uppercase text-[10px] block">Official Profile</span>
            <h1 className="text-3xl font-black text-slate-900 uppercase italic">Visi & <span className="text-emerald-600">Misi</span></h1>
          </div>
        </div>

        {/* Hero Visi - Tampilan Lebih Gahar */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }}
          className="relative bg-emerald-950 rounded-[3rem] p-8 md:p-16 overflow-hidden shadow-2xl mb-10"
        >
          <div className="absolute top-0 right-0 p-10 opacity-10 text-white">
            <Eye size={200} />
          </div>
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-400 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-emerald-500/30">
              <Star size={14} fill="currentColor" /> Visi Utama
            </div>
            <h2 className="text-white text-2xl md:text-4xl font-black leading-tight italic mb-6">
              "Menjadi Lembaga Pendidikan Menengah Atas berbasis pondok pesantren dengan kearifan lokal berstandar nasional yang memberi mashlahat bagi umat..."
            </h2>
            <div className="h-1.5 w-24 bg-amber-400 rounded-full"></div>
          </div>
        </motion.section>

        {/* Grid Misi & Motto */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Misi List - 2/3 Width */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2 bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-slate-100"
          >
            <div className="flex items-center gap-3 mb-10">
              <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-600">
                <Target size={28} />
              </div>
              <h3 className="text-2xl font-black text-slate-800 uppercase italic">Misi Strategis</h3>
            </div>
            <div className="grid md:grid-cols-1 gap-4">
              {misiList.map((item, index) => (
                <div key={index} className="group flex gap-4 p-4 rounded-2xl hover:bg-emerald-50 transition-colors border border-transparent hover:border-emerald-100">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  <p className="text-slate-600 font-medium leading-relaxed group-hover:text-slate-900 transition-colors">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Motto & Slogan - 1/3 Width */}
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: 20 }} 
              animate={{ opacity: 1, x: 0 }}
              className="bg-amber-400 rounded-[2.5rem] p-8 shadow-xl relative overflow-hidden group"
            >
              <Quote className="absolute -right-4 -bottom-4 text-amber-500/30 rotate-12 group-hover:scale-110 transition-transform" size={120} />
              <h3 className="text-amber-950 font-black uppercase italic text-xl mb-4">Motto Kami</h3>
              <p className="text-amber-900 font-black text-3xl leading-none tracking-tighter">AKHLAK</p>
              <p className="mt-4 text-amber-950/80 font-bold text-sm leading-relaxed uppercase">
                Aqidah, Kepribadian, Harmonis, Loyalitas, Adaptif, Kompeten
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} 
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white border-4 border-emerald-600 rounded-[2.5rem] p-8 shadow-xl text-center"
            >
              <h3 className="text-slate-400 font-black uppercase text-[10px] tracking-[0.3em] mb-4">Slogan Sekolah</h3>
              <p className="text-emerald-700 font-black text-xl italic mb-2 leading-tight">
                "Himayatud Din wad Daulah"
              </p>
              <p className="text-slate-500 font-bold text-xs uppercase tracking-widest">
                — Berguna bagi Agama & Negara —
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}