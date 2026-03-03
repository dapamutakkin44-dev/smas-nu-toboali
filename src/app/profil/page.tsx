"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function VisiMisiPage() {
  return (
    <main className="min-h-screen bg-white pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-black text-slate-800 uppercase italic"
        >
          Visi & <span className="text-emerald-600">Misi</span>
        </motion.h1>
        <div className="mt-10 p-8 bg-emerald-50 rounded-3xl border border-emerald-100">
          <p className="text-xl font-bold text-emerald-900 italic">
            "Terwujudnya Generasi Emas yang Unggul dalam Prestasi dan Mulia dalam Adab."
          </p>
        </div>
      </div>
    </main>
  );
}