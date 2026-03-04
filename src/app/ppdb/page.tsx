"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, Send, CheckCircle2 } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

export default function PPDBPage() {
  const [state, handleSubmit] = useForm("xvzberpk");

  if (state.succeeded) {
    return (
      <main className="min-h-screen bg-slate-50 flex items-center justify-center px-6">
        <div className="bg-white p-12 rounded-[40px] shadow-2xl text-center max-w-md border border-emerald-100">
          <div className="flex justify-center mb-6 text-emerald-600">
            <CheckCircle2 size={80} />
          </div>
          <h2 className="text-3xl font-black italic text-slate-900 uppercase tracking-tighter mb-4">BERHASIL!</h2>
          <p className="text-slate-500 font-medium mb-8">Data pendaftaran sudah masuk ke email sekolah. Panitia akan segera menghubungi Anda.</p>
          <Link href="/" className="bg-emerald-600 text-white px-8 py-4 rounded-2xl font-black no-underline uppercase tracking-widest inline-block hover:bg-emerald-700 transition-all shadow-lg border-none">Kembali ke Beranda</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans leading-relaxed">
      
      {/* 1. NAVBAR PERBAIKAN - LOGO LENGKAP & BISA DIKLIK */}
      <nav className="sticky top-0 z-[100] bg-white/95 backdrop-blur-md border-b border-slate-200 py-4 px-6 md:px-12 flex justify-between items-center shadow-sm">
        <Link href="/" className="flex items-center gap-3 no-underline group">
          <div className="flex gap-1.5 items-center">
            <Image src="/logo-pendidikan.png" alt="Pendidikan" width={24} height={24} className="object-contain" />
            <Image src="/logo-yayasan.png" alt="Yayasan" width={24} height={24} className="object-contain" />
            <Image src="/logo-sma.png" alt="SMA" width={24} height={24} className="object-contain" />
          </div>
          <div className="flex flex-col border-l-2 border-emerald-100 pl-3">
            <span className="font-black text-emerald-900 tracking-tighter italic uppercase text-xs md:text-sm leading-none">SMAS NU TOBOALI</span>
            <span className="text-[7px] md:text-[9px] font-bold text-emerald-600 tracking-widest uppercase">Penerimaan Siswa Baru</span>
          </div>
        </Link>
        
        <Link href="/" className="text-slate-400 hover:text-emerald-600 font-black text-[9px] md:text-[10px] uppercase tracking-widest no-underline flex items-center gap-2 transition-all">
          <ChevronLeft size={16} /> <span className="hidden md:inline">Kembali Ke</span> Beranda
        </Link>
      </nav>

      <div className="max-w-6xl mx-auto py-10 md:py-16 px-6">
        
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 uppercase italic tracking-tighter mb-4">
            GABUNG BERSAMA <span className="text-emerald-600">KELUARGA NU</span>
          </h1>
          <div className="w-20 h-1.5 bg-amber-400 mx-auto rounded-full mb-4"></div>
          <p className="text-slate-500 font-medium max-w-2xl mx-auto italic text-sm md:text-base">Wujudkan cita-citamu dengan pendidikan yang unggul dalam IPTEK dan kuat dalam IMTAK.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* INFO BOX */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-8 rounded-[32px] shadow-xl border-t-8 border-emerald-600">
              <h3 className="font-black text-lg uppercase italic mb-6 text-slate-800 border-b border-slate-100 pb-2">Persyaratan</h3>
              <ul className="space-y-4">
                {["FC Ijazah/SKL Terlegalisir", "FC Akta Kelahiran", "FC Kartu Keluarga", "Pas Foto Terbaru"].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm font-bold text-slate-600">
                    <CheckCircle2 size={18} className="text-emerald-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-emerald-900 p-8 rounded-[32px] text-white shadow-2xl relative overflow-hidden group">
               <div className="relative z-10">
                 <h3 className="font-black text-lg uppercase italic mb-3">Butuh Bantuan?</h3>
                 <p className="text-emerald-200 text-xs font-medium leading-relaxed mb-6 italic">Jika ada kendala saat mengisi formulir, silakan hubungi Admin Dapa melalui WhatsApp.</p>
                 <a href="https://wa.me/6287813180362" target="_blank" className="inline-block bg-amber-400 text-emerald-950 px-6 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest no-underline hover:bg-white transition-all">Chat Admin Sekarang</a>
               </div>
               <Send className="absolute -right-6 -bottom-6 opacity-10 group-hover:scale-110 transition-transform duration-700" size={120} />
            </div>
          </div>

          {/* FORM FORMULIR */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-2xl border border-emerald-50 relative">
              <div className="absolute top-0 right-10 bg-emerald-600 text-white px-4 py-2 rounded-b-xl font-black text-[10px] uppercase tracking-widest">Tahun Ajaran 2026/2027</div>
              
              <h2 className="text-2xl font-black uppercase italic text-slate-900 mb-8 flex items-center gap-3">
                <span className="w-8 h-8 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-sm not-italic font-black italic">1</span>
                Data Diri Calon Siswa
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-emerald-700 mb-2 italic ml-2">Nama Lengkap</label>
                    <input name="nama" type="text" required 
                      className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 text-slate-900 placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white outline-none transition-all font-bold text-base shadow-sm"
                      placeholder="Nama Lengkap" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-emerald-700 mb-2 italic ml-2">Asal Sekolah</label>
                    <input name="asal_sekolah" type="text" required 
                      className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 text-slate-900 placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white outline-none transition-all font-bold text-base shadow-sm"
                      placeholder="SMP / MTs" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-emerald-700 mb-2 italic ml-2">No. WhatsApp Aktif</label>
                    <input name="whatsapp" type="tel" required 
                      className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 text-slate-900 placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white outline-none transition-all font-bold text-base shadow-sm"
                      placeholder="08..." />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-emerald-700 mb-2 italic ml-2">Email</label>
                    <input name="email" type="email" required 
                      className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 text-slate-900 placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white outline-none transition-all font-bold text-base shadow-sm"
                      placeholder="email@pribadi.com" />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-emerald-700 mb-2 italic ml-2">Alamat Tinggal</label>
                  <textarea name="alamat" required 
                    className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 text-slate-900 placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white outline-none transition-all font-bold text-base shadow-sm min-h-[120px]"
                    placeholder="Alamat Lengkap" />
                </div>

                <button 
                  type="submit" 
                  disabled={state.submitting}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-black py-6 rounded-2xl shadow-xl shadow-emerald-200 transition-all flex items-center justify-center gap-3 uppercase tracking-[0.2em] italic disabled:opacity-50 border-none cursor-pointer mt-4"
                >
                  {state.submitting ? "PROSES PENGIRIMAN..." : "KIRIM FORM PENDAFTARAN"} <Send size={20} />
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>

      <footer className="py-12 border-t border-slate-100 text-center">
        <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.5em] italic">SMAS NU Toboali • Akhlakul Karimah</p>
      </footer>
    </main>
  );
}