"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Target, Eye, Star, Quote, Award } from 'lucide-react';

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
    <main className="min-h-screen bg-[#f8fafc] pt-32 pb-20 px-4">
      <div className="max-w-5xl mx-auto">
        
        {/* Header & Back Button */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
          <Link href="/" className="group flex items-center gap-2 text-emerald-700 font-bold bg-white px-5 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all border border-emerald-100">
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Kembali ke Beranda
          </Link>
          <div className="md:text-right">
            <span className="text-emerald-600 font-black tracking-[0.3em] uppercase text-[10px] block">Profil Sekolah</span>
            <h1 className="text-4xl font-black text-slate-900 uppercase italic">Visi & <span className="text-emerald-600">Misi</span></h1>
          </div>
        </div>

        {/* SECTION 1: VISI (Besar & Center) */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }}
          className="relative bg-emerald-950 rounded-[3rem] p-10 md:p-16 overflow-hidden shadow-2xl mb-12 text-center"
        >
          <div className="absolute top-0 right-0 p-10 opacity-5 text-white">
            <Eye size={300} />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-400 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-emerald-500/30">
              <Star size={14} fill="currentColor" /> Visi SMAS NU Toboali
            </div>
            <h2 className="text-white text-2xl md:text-3xl font-bold leading-relaxed italic mb-8">
              "Menjadi Lembaga Pendidikan Menengah Atas berbasis pondok pesantren dengan kearifan lokal berstandar nasional yang memberi mashlahat bagi umat dalam rangka meningkatkan kualitas dan mencerdaskan kehidupan bangsa untuk bersaing di kancah nasional."
            </h2>
            <div className="h-1.5 w-24 bg-amber-400 rounded-full mx-auto"></div>
          </div>
        </motion.section>

        {/* SECTION 2: MISI (Full Width) */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[3rem] p-8 md:p-12 shadow-xl border border-slate-100 mb-12"
        >
          <div className="flex items-center gap-3 mb-10 justify-center md:justify-start">
            <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600">
              <Target size={28} />
            </div>
            <h3 className="text-3xl font-black text-slate-800 uppercase italic">Misi Strategis</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {misiList.map((item, index) => (
              <div key={index} className="flex gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-emerald-200 hover:bg-emerald-50 transition-all group">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold text-sm shadow-md">
                  {index + 1}
                </span>
                <p className="text-slate-600 font-medium leading-relaxed group-hover:text-slate-900">{item}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* SECTION 3: MOTTO & SLOGAN (Di Bawah) */}
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }}
            className="bg-amber-400 rounded-[3rem] p-10 shadow-xl relative overflow-hidden flex flex-col justify-center"
          >
            <Quote className="absolute -right-4 -bottom-4 text-amber-500/30 rotate-12" size={150} />
            <div className="relative z-10">
              <h3 className="text-amber-950 font-black uppercase italic text-xl mb-4 flex items-center gap-2">
                <Award size={24} /> Motto Sekolah
              </h3>
              <p className="text-amber-900 font-black text-4xl leading-none tracking-tighter mb-4">AKHLAK</p>
              <p className="text-amber-950 font-bold text-sm leading-relaxed uppercase border-t border-amber-500/50 pt-4">
                Aqidah, Kepribadian, Harmonis, Loyalitas, Adaptif, Kompeten
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }} 
            animate={{ opacity: 1, x: 0 }}
            className="bg-emerald-900 rounded-[3rem] p-10 shadow-xl text-center flex flex-col justify-center border-t-8 border-emerald-500"
          >
            <h3 className="text-emerald-400 font-black uppercase text-[10px] tracking-[0.4em] mb-6">Slogan Kebanggaan</h3>
            <p className="text-white font-black text-2xl italic mb-4 leading-tight">
              "Himayatud Din wad Daulah"
            </p>
            <div className="w-12 h-1 bg-amber-400 mx-auto mb-4"></div>
            <p className="text-emerald-200/80 font-bold text-xs uppercase tracking-widest">
              — Berguna bagi Agama & Negara —
            </p>
          </motion.div>
        </div>

      </div>
    </main>
  );
}