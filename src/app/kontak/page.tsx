"use client";

import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, MessageCircle, Home, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export default function KontakPage() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans">
      {/* NAVBAR NAVIGASI */}
      <nav className="bg-[#064E3B] text-white py-4 shadow-xl sticky top-0 z-[100] border-b-2 border-amber-500">
        <div className="container mx-auto flex justify-between items-center px-6">
          <Link href="/" className="flex items-center gap-2 text-white no-underline hover:text-amber-400 transition-all font-black uppercase text-xs">
            <Home size={18} /> Beranda
          </Link>
          <span className="text-[10px] font-bold tracking-widest opacity-50 uppercase">Halaman Kontak</span>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto py-16 px-6">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* KARTU INFORMASI */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="lg:col-span-1">
            <div className="bg-[#064E3B] text-white p-8 rounded-[2.5rem] shadow-2xl border-b-8 border-amber-500">
              <h2 className="text-2xl font-black mb-8 uppercase italic tracking-tighter">Hubungi Kami</h2>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <MapPin className="text-amber-400 shrink-0" size={24} />
                  <div>
                    <p className="text-[10px] uppercase font-bold text-amber-500 tracking-widest mb-1">Alamat</p>
                    <p className="text-sm leading-relaxed">Jl. Raya rias Desa rias,Kecamatan Toboali,Kabupaten Bangka Selatan, Provinsi Kep. Bangka Belitung.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Phone className="text-amber-400 shrink-0" size={24} />
                  <div>
                    <p className="text-[10px] uppercase font-bold text-amber-500 tracking-widest mb-1">WhatsApp</p>
                    <p className="text-sm">0831-7521-3223 (Bapak Azharudin)</p>
                  </div>
                </div>
              </div>

              <a href="https://wa.me/6283175213223" target="_blank" className="mt-10 flex items-center justify-center gap-2 bg-amber-500 text-[#064E3B] py-4 rounded-2xl font-black no-underline uppercase text-xs shadow-lg hover:bg-white transition-all">
                <MessageCircle size={20} /> Chat Admin Sekarang
              </a>
            </div>
          </motion.div>

          {/* MAPS ASLI DARI MIMIN */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} className="lg:col-span-2">
            <div className="bg-white p-3 rounded-[2.5rem] shadow-xl border border-slate-200 h-[500px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.431602351519!2d106.44087477351412!3d-2.977639139810879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e3d810060079def%3A0xfb7b05320ca1154b!2sSMA%20NU%20TOBOALI!5e0!3m2!1sen!2sid!4v1772422855420!5m2!1sen!2sid" 
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen={true} loading="lazy" className="rounded-[2rem]"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}