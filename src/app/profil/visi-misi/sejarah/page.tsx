"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function SejarahPage() {
  return (
    <main className="min-h-screen bg-white pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header Judul */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="text-center mb-16"
        >
          <span className="text-emerald-600 font-black tracking-[0.3em] uppercase text-[10px]">Profil Sekolah</span>
          <h1 className="text-4xl md:text-6xl font-black text-slate-800 uppercase italic mt-2">
            Sejarah <span className="text-emerald-600">Sekolah</span>
          </h1>
          <div className="w-20 h-1.5 bg-amber-400 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        {/* Konten Sejarah */}
        <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed text-lg italic">
          <p className="mb-6">
            SMAS NU Toboali didirikan sebagai bentuk pengabdian Lembaga Pendidikan Ma'arif NU dalam mencerdaskan kehidupan bangsa di wilayah Bangka Selatan.
          </p>
          
          <div className="my-10 p-8 bg-emerald-50 border-l-8 border-emerald-600 rounded-r-3xl shadow-sm">
            <p className="font-bold text-emerald-900 text-xl">
              "Berdiri dengan semangat perjuangan untuk melahirkan generasi yang tidak hanya cerdas secara intelektual, tapi juga kokoh secara spiritual dan beradab."
            </p>
          </div>

          <p>
            Sejak awal berdirinya, sekolah ini berkomitmen untuk menyelenggarakan pendidikan yang memadukan kurikulum nasional dengan nilai-nilai keislaman Ahlussunnah wal Jama'ah, guna membentuk karakter siswa yang unggul dan kompeten.
          </p>
        </div>
      </div>
    </main>
  );
}