"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link'; // Import Link untuk navigasi
import { ArrowLeft } from 'lucide-react'; // Import icon panah

export default function SejarahPage() {
  return (
    <main className="min-h-screen bg-white pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Tombol Kembali */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }} 
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-emerald-600 font-bold hover:text-emerald-700 transition-colors"
          >
            <ArrowLeft size={20} />
            Kembali ke Beranda
          </Link>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
          <span className="text-emerald-600 font-black tracking-[0.3em] uppercase text-[10px]">Profil Sekolah</span>
          <h1 className="text-4xl md:text-6xl font-black text-slate-800 uppercase italic mt-2">
            Sejarah <span className="text-emerald-600">Singkat</span>
          </h1>
          <div className="w-20 h-1.5 bg-amber-400 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <div className="mt-16 text-slate-600 leading-relaxed text-lg italic space-y-6">
          <p>
            SMAS NU Toboali merupakan wujud nyata dedikasi dalam dunia pendidikan di Bangka Selatan. Berdiri dengan semangat kemandirian dan nilai-nilai keislaman.
          </p>
          <div className="p-8 bg-emerald-900 text-white rounded-[2rem] shadow-xl font-bold">
            "Menjadi institusi pendidikan yang menjembatani ilmu pengetahuan umum dengan penguatan karakter religius bagi putra-putri daerah."
          </div>
          <p>
            Hingga saat ini, sekolah terus berkembang untuk mencetak lulusan yang siap bersaing namun tetap teguh memegang adab dan tradisi.
          </p>
        </div>
      </div>
    </main>
  );
}