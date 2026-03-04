"use client";
import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-[100] bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center text-white font-black shadow-lg shadow-emerald-200">
            NU
          </div>
          <div className="flex flex-col">
            <span className="font-black text-slate-800 tracking-tighter text-lg leading-none">SMAS NU</span>
            <span className="text-emerald-600 font-bold text-[10px] tracking-[0.2em] uppercase">Toboali</span>
          </div>
        </Link>

        {/* MENU */}
        <div className="hidden md:flex items-center gap-8 text-[11px] font-black text-slate-500 uppercase tracking-[0.2em]">
          <Link href="/" className="hover:text-emerald-600 transition-colors">Beranda</Link>
          <Link href="/profil/visi-misi" className="hover:text-emerald-600 transition-colors">Visi Misi</Link>
          <Link href="/profil/sejarah" className="hover:text-emerald-600 transition-colors">Sejarah</Link>
        </div>
      </div>
    </nav>
  );
}