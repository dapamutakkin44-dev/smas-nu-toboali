"use client";

import React from 'react';

export default function PPDBPage() {
  return (
    <main className="min-h-screen bg-slate-100 py-12 px-4 font-sans">
      <div className="max-w-5xl mx-auto">
        
        {/* HEADER HALAMAN */}
        <div className="text-center mb-12 animate-[fadeIn_0.8s_ease-out]">
          <h1 className="text-4xl font-black text-[#064E3B] mb-4 uppercase tracking-tight">Penerimaan Peserta Didik Baru</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">Selamat datang di gerbang masa depan. Mari bergabung bersama keluarga besar SMAS NU TOBOALI untuk menjadi generasi yang Berakhlak & Kompeten.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* KOLOM KIRI: SYARAT & ALUR */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* KOTAK SYARAT */}
            <div className="bg-white p-6 rounded-2xl shadow-md border-l-8 border-amber-500">
              <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                📋 Syarat Pendaftaran
              </h2>
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex gap-2"><span>✅</span> Fotocopy Ijazah/SKL (3 Lembar)</li>
                <li className="flex gap-2"><span>✅</span> Fotocopy Akta Kelahiran</li>
                <li className="flex gap-2"><span>✅</span> Fotocopy Kartu Keluarga (KK)</li>
                <li className="flex gap-2"><span>✅</span> Pas Foto 3x4 Latar Merah (4 Lembar)</li>
                <li className="flex gap-2"><span>✅</span> Fotocopy KIP/PKH (Jika ada)</li>
              </ul>
            </div>

            {/* KOTAK ALUR */}
            <div className="bg-[#064E3B] p-6 rounded-2xl shadow-md text-white">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                🚀 Alur Pendaftaran
              </h2>
              <div className="space-y-4 text-sm">
                <div className="flex gap-3">
                  <span className="bg-amber-500 w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs">1</span>
                  <p>Isi Formulir Online di website ini</p>
                </div>
                <div className="flex gap-3">
                  <span className="bg-amber-500 w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs">2</span>
                  <p>Verifikasi berkas ke sekretariat sekolah</p>
                </div>
                <div className="flex gap-3">
                  <span className="bg-amber-500 w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs">3</span>
                  <p>Tes Wawancara & Baca Tulis Al-Qur'an</p>
                </div>
                <div className="flex gap-3">
                  <span className="bg-amber-500 w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs">4</span>
                  <p>Pengumuman & Daftar Ulang</p>
                </div>
              </div>
            </div>
          </div>

          {/* KOLOM KANAN: FORMULIR */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 rounded-2xl shadow-xl border-t-8 border-[#064E3B]">
              <h2 className="text-2xl font-black text-slate-800 mb-6 uppercase">Isi Data Diri</h2>
              <form className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Nama Lengkap</label>
                    <input type="text" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#064E3B] outline-none transition" placeholder="Sesuai Ijazah" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-500 mb-1">NISN</label>
                    <input type="number" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#064E3B] outline-none transition" placeholder="10 Digit Nomor NISN" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Asal Sekolah</label>
                    <input type="text" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#064E3B] outline-none transition" placeholder="SMP / MTs" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-500 mb-1">WhatsApp Orang Tua</label>
                    <input type="tel" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#064E3B] outline-none transition" placeholder="08..." />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Alamat Rumah</label>
                  <textarea className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#064E3B] outline-none transition h-28" placeholder="Alamat lengkap calon siswa"></textarea>
                </div>

                <div className="bg-amber-50 p-4 rounded-xl border border-amber-200 mb-6">
                  <p className="text-xs text-amber-800 leading-relaxed">
                    <strong>Catatan:</strong> Pastikan nomor WhatsApp aktif untuk mendapatkan konfirmasi jadwal verifikasi berkas dari panitia PPDB.
                  </p>
                </div>

                <button type="button" className="w-full bg-[#064E3B] text-white font-black py-4 rounded-2xl shadow-lg hover:bg-[#053d2e] transition-all active:scale-95 uppercase tracking-widest text-lg shadow-green-900/20">
                  Kirim Data Sekarang
                </button>
              </form>
            </div>
          </div>

        </div>

        <div className="text-center mt-12">
          <a href="/" className="text-slate-500 font-bold hover:text-[#064E3B] transition-colors flex items-center justify-center gap-2">
            <span>←</span> Kembali ke Beranda Utama
          </a>
        </div>
      </div>
    </main>
  );
}