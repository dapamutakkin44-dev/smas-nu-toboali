"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function VisiMisiPage() {
  return (
    <main className="min-h-screen bg-white pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="text-emerald-600 font-black tracking-[0.3em] uppercase text-[10px]">Profil Sekolah</span>
          <h1 className="text-4xl md:text-6xl font-black text-slate-800 uppercase italic mt-2">
            Visi & <span className="text-emerald-600">Misi</span>
          </h1>
          <div className="w-20 h-1.5 bg-amber-400 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <div className="mt-16 bg-emerald-900 rounded-[40px] p-10 md:p-16 text-white shadow-2xl relative overflow-hidden text-left">
          <h2 className="text-amber-400 font-black uppercase tracking-widest text-sm mb-4 italic">Visi Kami</h2>
          <p className="text-2xl md:text-4xl font-bold leading-tight italic">
            "Terwujudnya Generasi Emas yang Unggul dalam Prestasi, Mulia dalam Adab, dan Berjiwa Ahlussunnah wal Jama'ah."
          </p>
        </div>
      </div>
    </main>
  );
}