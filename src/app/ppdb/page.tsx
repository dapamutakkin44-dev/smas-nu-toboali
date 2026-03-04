"use client";

import React from 'react';
import Link from 'next/image';
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
          <a href="/" className="bg-emerald-600 text-white px-8 py-4 rounded-2xl font-black no-underline uppercase tracking-widest inline-block hover:bg-emerald-700 transition-all shadow-lg">Kembali ke Beranda</a>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans leading-relaxed">
      
      {/* 1. NAVBAR SIMPEL (Agar tidak bentrok dengan navbar utama) */}
      <nav className="sticky top-0 z-[100] bg-white/90 backdrop-blur-md border-b border-slate-200 py-4 px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-black italic">NU</div>
          <span className="font-black text-slate-900 tracking-tighter italic uppercase text-sm">PPDB Online</span>
        </div>
        <a href="/" className="text-emerald-600 font-black text-[10px] uppercase tracking-widest no-underline flex items-center gap-2 hover:gap-3 transition-all">
          <ChevronLeft size={16} /> Kembali ke Beranda
        </a>
      </nav>

      <div className="max-w-5xl mx-auto py-12 px-6">
        
        {/* HEADER TEXT */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 uppercase italic tracking-tighter mb-4">
            MARI BERGABUNG BERSAMA <span className="text-emerald-600">SMAS NU</span>
          </h1>
          <p className="text-slate-500 font-medium max-w-2xl mx-auto italic">Isi data di bawah ini dengan lengkap untuk memulai masa depan yang Berakhlak & Kompeten.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* SISI KIRI: INFO & SYARAT */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-8 rounded-[32px] shadow-xl border-l-8 border-amber-400">
              <h3 className="font-black text-lg uppercase italic mb-6 flex items-center gap-2">📋 Syarat Daftar</h3>
              <ul className="space-y-4">
                {["Fotocopy Ijazah/SKL", "Fotocopy Akta Kelahiran", "Fotocopy Kartu Keluarga", "Pas Foto 3x4 Latar Merah"].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm font-bold text-slate-600 leading-tight">
                    <div className="bg-emerald-100 text-emerald-600 p-1 rounded-md"><CheckCircle2 size={14} /></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-emerald-900 p-8 rounded-[32px] text-white shadow-xl relative overflow-hidden">
               <div className="relative z-10">
                 <h3 className="font-black text-lg uppercase italic mb-4">Alur Daftar 🚀</h3>
                 <p className="text-emerald-100 text-xs font-bold leading-relaxed italic">Cukup isi form ini, tunggu konfirmasi via WA, lalu bawa berkas ke sekolah.</p>
               </div>
               <div className="absolute -right-4 -bottom-4 opacity-10"><Send size={100} /></div>
            </div>
          </div>

          {/* SISI KANAN: FORM UTAMA */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-2xl border border-slate-100">
              <h2 className="text-2xl font-black uppercase italic text-slate-900 mb-8 pb-4 border-b-2 border-slate-50">ISI DATA DIRI</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-emerald-700 mb-2 italic">Nama Lengkap</label>
                    <input name="nama" type="text" required 
                      className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 text-slate-900 placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white outline-none transition-all font-bold text-base"
                      placeholder="Masukkan nama sesuai ijazah" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-emerald-700 mb-2 italic">NISN</label>
                    <input name="nisn" type="text" required 
                      className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 text-slate-900 placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white outline-none transition-all font-bold text-base"
                      placeholder="10 digit nomor NISN" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-emerald-700 mb-2 italic">Asal Sekolah</label>
                    <input name="sekolah" type="text" required 
                      className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 text-slate-900 placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white outline-none transition-all font-bold text-base"
                      placeholder="SMP / MTs" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-emerald-700 mb-2 italic">WhatsApp Orang Tua</label>
                    <input name="wa_ortu" type="tel" required 
                      className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 text-slate-900 placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white outline-none transition-all font-bold text-base"
                      placeholder="08..." />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-emerald-700 mb-2 italic">Alamat Rumah</label>
                  <textarea name="alamat" required 
                    className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 text-slate-900 placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white outline-none transition-all font-bold text-base min-h-[100px]"
                    placeholder="Alamat lengkap calon siswa" />
                </div>

                <button 
                  type="submit" 
                  disabled={state.submitting}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-black py-6 rounded-2xl shadow-xl shadow-emerald-200 transition-all flex items-center justify-center gap-3 uppercase tracking-widest italic disabled:opacity-50 border-none cursor-pointer"
                >
                  {state.submitting ? "MENGIRIM..." : "KIRIM DATA SEKARANG"} <Send size={20} />
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}