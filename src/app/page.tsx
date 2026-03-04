"use client";

import React from 'react';
import Link from 'next/link';
import { ChevronLeft, Send, CheckCircle2 } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

export default function PPDBPage() {
  // SUDAH PAKAI KODE UNIK MIMIN
  const [state, handleSubmit] = useForm("xvzberpk");

  // Tampilan kalau pendaftaran sukses terkirim
  if (state.succeeded) {
    return (
      <main className="min-h-screen bg-slate-50 flex items-center justify-center px-6">
        <div className="bg-white p-12 rounded-[40px] shadow-2xl text-center max-w-md border border-emerald-100">
          <div className="flex justify-center mb-6 text-emerald-600">
            <CheckCircle2 size={80} />
          </div>
          <h2 className="text-3xl font-black italic text-slate-900 uppercase tracking-tighter mb-4">DATA TERKIRIM!</h2>
          <p className="text-slate-500 font-medium mb-8">
            Alhamdulillah, data pendaftaran Anda telah kami terima di sistem Email Sekolah. 
            Panitia PPDB SMAS NU Toboali akan segera menghubungi Anda.
          </p>
          <Link href="/" className="bg-emerald-600 text-white px-8 py-4 rounded-2xl font-black no-underline uppercase tracking-widest inline-block hover:bg-emerald-700 transition-all shadow-lg border-none">
            Kembali ke Beranda
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-emerald-700 font-black no-underline mb-8 hover:gap-4 transition-all text-sm tracking-widest uppercase">
          <ChevronLeft size={20} /> Kembali Ke Beranda
        </Link>

        <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-2xl border border-emerald-100">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-black italic text-slate-900 uppercase tracking-tighter">PENDAFTARAN <span className="text-emerald-600">PPDB 2026</span></h2>
            <p className="text-slate-500 font-bold uppercase text-[10px] tracking-[0.3em] mt-2">SMAS NU TOBOALI - UNGGUL & ISLAMI</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* NAMA LENGKAP */}
            <div>
              <label htmlFor="nama" className="block text-[10px] font-black uppercase tracking-widest text-emerald-700 mb-2 italic">Nama Lengkap Siswa</label>
              <input 
                id="nama" name="nama" type="text" required
                className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 text-slate-900 focus:border-emerald-500 outline-none transition-all font-black text-lg shadow-sm"
                placeholder="Contoh: Ahmad Fauzi"
              />
              <ValidationError prefix="Nama" field="nama" errors={state.errors} className="text-red-500 text-xs mt-1" />
            </div>

            {/* ASAL SEKOLAH */}
            <div>
              <label htmlFor="asalSekolah" className="block text-[10px] font-black uppercase tracking-widest text-emerald-700 mb-2 italic">Asal Sekolah (SMP/MTs)</label>
              <input 
                id="asalSekolah" name="asalSekolah" type="text" required
                className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 text-slate-900 focus:border-emerald-500 outline-none transition-all font-black text-lg shadow-sm"
                placeholder="Contoh: SMPN 1 Toboali"
              />
            </div>

            {/* EMAIL & WHATSAPP */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-[10px] font-black uppercase tracking-widest text-emerald-700 mb-2 italic">Email Pendaftar</label>
                <input 
                  id="email" name="email" type="email" required
                  className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 text-slate-900 focus:border-emerald-500 outline-none transition-all font-black text-lg shadow-sm"
                  placeholder="fauzi@email.com"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-xs mt-1" />
              </div>
              <div>
                <label htmlFor="whatsapp" className="block text-[10px] font-black uppercase tracking-widest text-emerald-700 mb-2 italic">No. WhatsApp</label>
                <input 
                  id="whatsapp" name="whatsapp" type="tel" required
                  className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 text-slate-900 focus:border-emerald-500 outline-none transition-all font-black text-lg shadow-sm"
                  placeholder="087813180362"
                />
              </div>
            </div>

            {/* PESAN */}
            <div>
              <label htmlFor="pesan" className="block text-[10px] font-black uppercase tracking-widest text-emerald-700 mb-2 italic">Catatan/Pesan</label>
              <textarea 
                id="pesan" name="pesan"
                className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 text-slate-900 focus:border-emerald-500 outline-none transition-all font-black text-lg shadow-sm min-h-[120px]"
                placeholder="Tanyakan sesuatu jika bingung..."
              />
            </div>

            <button 
              type="submit" 
              disabled={state.submitting}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-black py-6 rounded-2xl shadow-xl shadow-emerald-200 transition-all flex items-center justify-center gap-3 uppercase tracking-[0.2em] italic disabled:opacity-50 border-none cursor-pointer"
            >
              {state.submitting ? "Sabar Ya, Lagi Ngirim..." : "Kirim Data Sekarang"} <Send size={20} />
            </button>
          </form>

          <div className="mt-10 pt-10 border-t border-slate-50 text-center">
             <p className="text-[9px] font-black text-slate-300 uppercase tracking-[0.3em]">© 2026 SISTEM PPDB SMAS NU TOBOALI</p>
          </div>
        </div>
      </div>
    </main>
  );
}