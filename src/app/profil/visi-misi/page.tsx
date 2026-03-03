"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Target, Eye, ShieldCheck, Heart } from 'lucide-react';

export default function VisiMisiPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Tombol Kembali */}
        <Link href="/" className="inline-flex items-center gap-2 text-emerald-600 font-bold mb-10 hover:gap-3 transition-all group">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> 
          Kembali ke Beranda
        </Link>

        {/* Bagian Visi */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="bg-white p-10 rounded-[3rem] shadow-xl border-b-8 border-emerald-600 mb-12 text-center"
        >
          <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 mb-6 mx-auto">
            <Eye size={35} />
          </div>
          <h2 className="text-4xl font-black text-slate-800 mb-6 uppercase italic tracking-wider">Visi Sekolah</h2>
          <p className="text-xl text-slate-700 leading-relaxed font-medium italic">
            "Menjadi Lembaga Pendidikan Menengah Atas berbasis pondok pesantren dengan kearifan lokal berstandar nasional yang memberi mashlahat bagi umat dalam rangka meningkatkan kualitas dan mencerdaskan kehidupan bangsa untuk bersaing di kancah nasional."
          </p>
        </motion.div>

        {/* Bagian Misi */}
        <div className="grid md:grid-cols-1 gap-8 mb-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }} 
            className="bg-emerald-900 p-10 rounded-[3rem] shadow-xl text-white"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-emerald-800 rounded-xl flex items-center justify-center text-emerald-400">
                <Target size={28} />
              </div>
              <h2 className="text-3xl font-black uppercase italic text-amber-400">Misi Sekolah</h2>
            </div>
            <ul className="grid md:grid-cols-2 gap-6 text-emerald-50/90">
              <li className="flex gap-3 items-start"><span className="text-amber-400 font-bold">01.</span> Menyelenggarakan pendidikan ilmu agama Islam, Qur’an Hadits, dan literatur kitab kuning.</li>
              <li className="flex gap-3 items-start"><span className="text-amber-400 font-bold">02.</span> Melestarikan nilai Islam Ahlussunnah wal Jama’ah An-Nahdliyah dan kepesantrenan.</li>
              <li className="flex gap-3 items-start"><span className="text-amber-400 font-bold">03.</span> Mewujudkan pengembangan kurikulum meliputi 8 standar pendidikan.</li>
              <li className="flex gap-3 items-start"><span className="text-amber-400 font-bold">04.</span> Membekali siswa dengan IPTEK dan keterampilan mutu pendidikan.</li>
              <li className="flex gap-3 items-start"><span className="text-amber-400 font-bold">05.</span> Membentuk pribadi Islami dan pola pikir kritis.</li>
              <li className="flex gap-3 items-start"><span className="text-amber-400 font-bold">06.</span> Menumbuhkan semangat berprestasi akademik dan non-akademik.</li>
              <li className="flex gap-3 items-start"><span className="text-amber-400 font-bold">07.</span> Melaksanakan kegiatan sosial untuk mendorong kemandirian bermasyarakat.</li>
              <li className="flex gap-3 items-start"><span className="text-amber-400 font-bold">08.</span> Melakukan kerjasama kemitraan berbasis kompetensi dan kapasitas lembaga.</li>
            </ul>
          </motion.div>
        </div>

        {/* Bagian Motto & Slogan */}
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-amber-400 p-8 rounded-[2.5rem] shadow-lg text-amber-950">
            <h3 className="font-black uppercase text-xl mb-2 italic">Motto: AKHLAK</h3>
            <p className="font-bold text-lg">“Aqidah, Kepribadian, Harmonis, Loyalitas, Adaptif, Kompeten”</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-emerald-100 p-8 rounded-[2.5rem] shadow-lg text-emerald-900 border-2 border-emerald-200">
            <h3 className="font-black uppercase text-xl mb-2 italic">Slogan: Himayatud Din wad Daulah</h3>
            <p className="font-bold text-lg">“Berguna bagi Agama dan Negara”</p>
          </motion.div>
        </div>
      </div>
    </main>
  );
}