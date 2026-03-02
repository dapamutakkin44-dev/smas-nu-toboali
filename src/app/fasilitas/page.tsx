"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function FasilitasPage() {
  const daftarFasilitas = [
    {
      nama: "Gedung Sekolah",
      deskripsi: "Gedung belajar yang representatif dengan suasana asri untuk kenyamanan santri.",
      gambar: "/fasilitas/gedung.jpg"
    },
    {
      nama: "Asrama Santri",
      deskripsi: "Fasilitas tempat tinggal yang bersih dan terpantau untuk mendukung kemandirian.",
      gambar: "/fasilitas/asrama.jpg"
    },
    {
      nama: "Laboratorium Komputer",
      deskripsi: "Ruang komputer modern untuk menunjang pembelajaran teknologi dan informatika.",
      gambar: "/fasilitas/lab.jpg"
    },
    {
      nama: "Perpustakaan",
      deskripsi: "Koleksi buku umum dan Kitab Kuning yang lengkap sebagai pusat literasi.",
      gambar: "/fasilitas/perpus.jpg"
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <div className="bg-[#064E3B] text-white py-20 text-center border-b-4 border-amber-500">
        <h1 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter">Sarana & Fasilitas</h1>
        <p className="text-amber-400 mt-2 font-bold tracking-widest uppercase text-xs">SMAS NU TOBOALI</p>
      </div>

      <div className="max-w-6xl mx-auto py-16 px-6">
        <div className="grid md:grid-cols-2 gap-8">
          {daftarFasilitas.map((item, index) => (
            <div key={index} className="group bg-slate-50 rounded-[2.5rem] overflow-hidden border border-slate-100 hover:shadow-xl transition-all">
              <div className="relative h-72 bg-slate-200">
                <Image 
                  src={item.gambar} 
                  alt={item.nama}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://placehold.co/800x600/064e3b/white?text=${item.nama.replace(/ /g, "+")}`;
                  }}
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-black text-[#064E3B] uppercase mb-3">{item.nama}</h3>
                <p className="text-slate-600 italic text-sm leading-relaxed">"{item.deskripsi}"</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Link href="/galeri" className="inline-block bg-amber-500 text-[#064E3B] px-8 py-3 rounded-full font-black hover:bg-amber-600 transition-all no-underline uppercase text-xs tracking-widest">
            Lihat Galeri Kegiatan →
          </Link>
        </div>
      </div>
    </main>
  );
}