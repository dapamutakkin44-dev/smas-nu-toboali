"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, CheckCircle2, DollarSign, ClipboardList, Phone } from 'lucide-react';

export default function PPDBPage() {
  const biaya = [
    { item: "Formulir", harga: "Rp 150.000" },
    { item: "Infaq Pondok", harga: "Rp 2.000.000" },
    { item: "Uang Sekolah", harga: "Rp 200.000" },
    { item: "Uang Makan", harga: "Rp 550.000" },
    { item: "Seragam Sekolah", harga: "Rp 500.000" },
    { item: "Perlengkapan Pondok", harga: "Rp 250.000" },
    { item: "Kitab & Al-Qur'an", harga: "Rp 280.000" },
    { item: "Sewa Lemari", harga: "Rp 400.000" },
    { item: "Uang Kesehatan", harga: "Rp 15.000" },
    { item: "Sampul Raport", harga: "Rp 50.000" },
    { item: "Uang Kegiatan", harga: "Rp 150.000" },
  ];

  return (
    <main className="min-h-screen bg-[#f8fafc] text-left font-sans">
      <nav className="p-6 bg-white border-b flex justify-between items-center sticky top-0 z-50">
        <Link href="/" className="flex items-center gap-2 no-underline text-emerald-900 font-black uppercase text-xs italic">
          <ChevronLeft size={18} /> Kembali ke Beranda
        </Link>
        <Image src="/logo-sma.png" alt="Logo" width={30} height={30} />
      </nav>

      <header className="py-20 bg-emerald-900 text-white px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter leading-none mb-4">Penerimaan Siswa Baru <br/><span className="text-amber-400 text-4xl md:text-6xl">Tahun 2026/2027</span></h1>
          <p className="text-emerald-200 font-bold italic uppercase tracking-widest text-sm">Unggul dalam Prestasi, Berkarakter Islami</p>
        </div>
      </header>

      <section className="py-20 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* SYARAT & BIAYA */}
        <div className="space-y-8">
          <div className="bg-white p-10 rounded-[40px] shadow-xl border-t-8 border-emerald-600">
            <h3 className="text-2xl font-black italic uppercase mb-8 flex items-center gap-3"><ClipboardList className="text-emerald-600" /> Syarat Masuk</h3>
            <ul className="space-y-3 p-0 list-none">
              {["Isi Formulir Online", "FC Akta & KK", "FC KTP Orang Tua", "Pas Foto 3x4 (4 Lembar)", "FC Rapor Terakhir", "Wajib Tinggal di Asrama"].map((s, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-bold italic text-slate-600"><CheckCircle2 size={18} className="text-emerald-500" /> {s}</li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-900 text-white p-10 rounded-[40px] shadow-2xl border-t-8 border-amber-400">
            <h3 className="text-2xl font-black italic uppercase mb-8 flex items-center gap-3"><DollarSign className="text-amber-400" /> Rincian Biaya</h3>
            <div className="space-y-2">
              {biaya.map((b, i) => (
                <div key={i} className="flex justify-between border-b border-slate-800 pb-1 text-[11px] font-bold uppercase italic tracking-tighter opacity-80">
                  <span>{b.item}</span><span>{b.harga}</span>
                </div>
              ))}
              <div className="flex justify-between pt-6 border-t-2 border-amber-400 mt-4 font-black text-xl italic uppercase">
                <span>Total</span><span className="text-amber-400">Rp 4.545.000</span>
              </div>
            </div>
          </div>
        </div>

        {/* FORMULIR */}
        <div className="bg-white p-10 md:p-12 rounded-[40px] shadow-2xl border border-emerald-50 h-fit sticky top-24">
          <h3 className="text-3xl font-black italic uppercase mb-8">Formulir <span className="text-emerald-600">Pendaftaran</span></h3>
          <form className="space-y-6">
            <div>
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-2">Nama Lengkap Calon Siswa</label>
              <input type="text" className="w-full bg-slate-50 border-2 border-slate-100 p-4 rounded-2xl outline-none focus:border-emerald-600 font-bold italic" placeholder="Contoh: Ahmad Fauzan" />
            </div>
            <div>
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-2">WhatsApp Orang Tua</label>
              <input type="text" className="w-full bg-slate-50 border-2 border-slate-100 p-4 rounded-2xl outline-none focus:border-emerald-600 font-bold italic" placeholder="08..." />
            </div>
            <button className="w-full bg-emerald-600 text-white py-5 rounded-2xl font-black uppercase italic tracking-widest shadow-xl hover:bg-emerald-700 transition-all">Kirim Data Sekarang</button>
          </form>
        </div>
      </section>
    </main>
  );
}