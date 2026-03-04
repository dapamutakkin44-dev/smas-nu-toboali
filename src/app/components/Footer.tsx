import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-2xl font-black mb-4 italic">SMAS NU <span className="text-emerald-400">TOBOALI</span></h2>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Membentuk generasi berakhlak mulia, cerdas, dan mandiri berlandaskan nilai-nilai Ahlussunnah wal Jama’ah An-Nahdliyah.
            </p>
          </div>
          <div className="md:text-right">
            <p className="text-emerald-400 font-bold uppercase tracking-widest text-xs mb-2">Lokasi Kami</p>
            <p className="text-slate-300 text-sm">Toboali, Bangka Selatan, Kepulauan Bangka Belitung</p>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-800 text-center text-slate-500 text-[10px] uppercase tracking-[0.3em]">
          © 2026 SMAS NU Toboali - All Rights Reserved
        </div>
      </div>
    </footer>
  );
}