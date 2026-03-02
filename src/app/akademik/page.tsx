"use client";

import React from 'react';
import Link from 'next/link';

export default function AkademikPage() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans">
      {/* HEADER AKADEMIK */}
      <div className="bg-[#064E3B] text-white py-24 text-center border-b-4 border-amber-500 relative">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/islamic-art.png')` }}></div>
        <div className="relative z-10 px-6">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Program Akademik</h1>
          <p className="mt-4 text-amber-400 font-bold tracking-widest uppercase text-sm">Informasi Kurikulum & Peminatan</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto py-16 px-6">
        
        {/* PENJELASAN KURIKULUM */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-3xl font-black text-[#064E3B] uppercase">Sistem Kurikulum</h2>
            <div className="h-1 bg-amber-500 flex-grow rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-lg border-t-8 border-[#064E3B]">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-black text-[#064E3B]">Kurikulum Merdeka</h3>
                <span className="bg-amber-100 text-amber-700 text-[10px] font-bold px-3 py-1 rounded-full uppercase">Kelas X & XI</span>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Diterapkan bagi siswa kelas X dan XI dengan fokus pada materi esensial, pengembangan karakter profil pelajar Pancasila, dan fleksibilitas dalam pembelajaran.
              </p>
            </div>
            <div className="bg-slate-100 p-8 rounded-3xl shadow-md border-t-8 border-slate-400 opacity-80">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-black text-slate-600">KTSP 2013</h3>
                <span className="bg-slate-200 text-slate-500 text-[10px] font-bold px-3 py-1 rounded-full uppercase">Kelas XII</span>
              </div>
              <p className="text-slate-500 leading-relaxed">
                Masih diterapkan khusus untuk siswa kelas XII hingga masa kelulusan. Setelah tahun ajaran ini berakhir, sekolah akan beralih sepenuhnya ke Kurikulum Merdeka.
              </p>
            </div>
          </div>
        </section>

        {/* ALUR PEMINATAN JURUSAN */}
        <section className="mb-20 bg-white p-10 md:p-16 rounded-[3rem] shadow-xl border border-slate-100 relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-black text-[#064E3B] uppercase mb-10 text-center">Alur Pemilihan Jurusan</h2>
            <div className="grid md:grid-cols-3 gap-8 items-start">
              
              {/* KELAS X */}
              <div className="text-center group">
                <div className="w-20 h-20 bg-[#064E3B] text-white rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-black group-hover:scale-110 transition-transform shadow-lg">X</div>
                <h4 className="font-black text-[#064E3B] text-xl mb-3">Masa Umum</h4>
                <p className="text-slate-500 text-sm">Siswa mempelajari semua mata pelajaran secara umum sebagai dasar penentuan minat dan bakat.</p>
              </div>

              {/* TANDA PANAH */}
              <div className="hidden md:flex h-20 items-center justify-center text-amber-500 text-4xl">→</div>

              {/* KELAS XI & XII */}
              <div className="text-center group">
                <div className="w-20 h-20 bg-amber-500 text-[#064E3B] rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-black group-hover:scale-110 transition-transform shadow-lg">XI</div>
                <h4 className="font-black text-[#064E3B] text-xl mb-3">Penentuan Jurusan</h4>
                <p className="text-slate-500 text-sm">Berdasarkan nilai dan minat, siswa mulai memilih peminatan **MIPA** atau **IPS** untuk persiapan jenjang karir.</p>
              </div>

            </div>
          </div>
        </section>

        {/* DETAIL JURUSAN */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-emerald-50 p-8 rounded-3xl border-2 border-dashed border-emerald-200">
            <h3 className="text-2xl font-black text-[#064E3B] mb-4">SMA MIPA</h3>
            <p className="text-slate-600 text-sm italic">Matematika dan Ilmu Pengetahuan Alam.</p>
          </div>
          <div className="bg-amber-50 p-8 rounded-3xl border-2 border-dashed border-amber-200">
            <h3 className="text-2xl font-black text-amber-700 mb-4">SMA IPS</h3>
            <p className="text-slate-600 text-sm italic">Ilmu Pengetahuan Sosial.</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/" className="inline-block bg-[#064E3B] text-white px-10 py-4 rounded-full font-black hover:bg-amber-600 transition-all no-underline shadow-xl">
            KEMBALI KE BERANDA
          </Link>
        </div>
      </div>
    </main>
  );
}