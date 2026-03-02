"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function GaleriPage() {
  const listKegiatan = [
    { judul: "Kajian Kitab Kuning", kat: "Diniyah", img: "/kegiatan/kitab.jpg" },
    { judul: "Praktikum IT", kat: "Akademik", img: "/kegiatan/it.jpg" },
    { judul: "Seni Hadrah", kat: "Kesenian", img: "/kegiatan/hadrah.jpg" },
    { judul: "Pencak Silat Pagar Nusa", kat: "Ekstrakurikuler", img: "/kegiatan/silat.jpg" },
    { judul: "Pembiasaan Sholawat", kat: "Spiritual", img: "/kegiatan/sholawat.jpg" },
    { judul: "Kegiatan P5", kat: "Kurikulum", img: "/kegiatan/p5.jpg" },
  ];

  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <div className="bg-[#064E3B] py-20 text-center border-b-4 border-amber-500">
        <h1 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter">Galeri Kegiatan</h1>
        <p className="text-amber-400 mt-2 font-bold tracking-widest uppercase text-xs">Aktivitas Santri SMAS NU Toboali</p>
      </div>

      <div className="max-w-7xl mx-auto py-16 px-6">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {listKegiatan.map((item, index) => (
            <div key={index} className="relative rounded-3xl overflow-hidden break-inside-avoid group shadow-2xl">
              <Image 
                src={item.img} 
                alt={item.judul}
                width={500}
                height={600}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = `https://placehold.co/400x500/064e3b/fbbf24?text=${item.judul.replace(/ /g, "+")}`;
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#064E3B] via-transparent to-transparent opacity-80 transition-opacity"></div>
              <div className="absolute bottom-0 p-6">
                <span className="bg-amber-500 text-[#064E3B] text-[9px] font-black px-3 py-1 rounded-full uppercase mb-2 inline-block">
                  {item.kat}
                </span>
                <h3 className="text-xl font-black italic uppercase tracking-tight">{item.judul}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Link href="/" className="inline-block border-2 border-white text-white px-10 py-3 rounded-full font-black hover:bg-white hover:text-[#064E3B] transition-all no-underline uppercase text-xs tracking-widest">
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    </main>
  );
}