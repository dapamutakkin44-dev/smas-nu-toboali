"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, GraduationCap, Users, Briefcase, 
  BookOpen, Laptop, HeartPulse, Wallet, Star, UserCheck
} from 'lucide-react';

export default function StrukturPage() {
  // Data Manajemen Inti
  const manajemenInti = [
    { nama: "H. M. Karyawan, S.Ag., M.Pd.", jabatan: "Ketua Yayasan", icon: ShieldCheck },
    { nama: "Azharudin, S.Pd., M.E., Gr.", jabatan: "Kepala Sekolah", icon: GraduationCap },
    { nama: "Mahfudz Maladzi, S.Pd., Gr.", jabatan: "Waka Sekolah", icon: Users },
    { nama: "Dapa Mutakkin, S.Pd.", jabatan: "Operator Sekolah", icon: Briefcase },
  ];

  // Data Koordinator Bidang Khusus
  const koordinator = [
    { nama: "Yuspita, M.Pd.", jabatan: "Kepala Perpustakaan", icon: BookOpen },
    { nama: "Anisa Fitriyani, S.Pd.", jabatan: "Bendahara Sekolah", icon: Wallet },
    { nama: "Faisal Romdon, S.Pd.", jabatan: "Kepala Lab Komputer", icon: Laptop },
    { nama: "Sari Dwi Puspita, S.Pd.", jabatan: "Kepala UKS", icon: HeartPulse },
    { nama: "Yuliyanti, S.Pd.", jabatan: "Koordinator P5", icon: Star },
  ];

  // Daftar Seluruh Pendidik & Tenaga Kependidikan (PTK)
  const daftarGuru = [
    { no: 1, nama: "Azharudin, S.Pd., M.E.", ptk: "Kepala Sekolah", pendidikan: "S-2" },
    { no: 2, nama: "Mahfudz Maladzi, S.Pd.", ptk: "Guru Mapel", pendidikan: "S-1" },
    { no: 3, nama: "Yuspita, S.Pd., M.Pd.", ptk: "Guru Mapel", pendidikan: "S-2" },
    { no: 4, nama: "Fadilah Hasan, S.Pd.I.", ptk: "Guru Mapel", pendidikan: "S-1" },
    { no: 5, nama: "Anisa Fitriyani, S.Pd.", ptk: "Guru Mapel", pendidikan: "S-1" },
    { no: 6, nama: "Dapa Mutakkin, S.Pd.", ptk: "Operator Sekolah", pendidikan: "S-1" },
    { no: 7, nama: "Sari Dwi Puspita, S.Pd.", ptk: "Guru Mapel", pendidikan: "S-1" },
    { no: 8, nama: "Yuliyanti, S.Pd.", ptk: "Guru Mapel", pendidikan: "S-1" },
    { no: 9, nama: "Ust. Saeful Anwar, S.Pd.I.", ptk: "Guru Mapel", pendidikan: "S-1" },
    { no: 10, nama: "H. Yanto, M.Pd.", ptk: "Guru Mapel", pendidikan: "S-2" },
    { no: 11, nama: "Faisal Romdon, S.Pd.", ptk: "Guru Mapel", pendidikan: "S-1" },
    { no: 12, nama: "Rendi Saputra, S.Pd., M.M.", ptk: "Pendidik (PTK)", pendidikan: "S-2" },
    { no: 13, nama: "Ust. Muhammad Chaidar Suwito", ptk: "Guru Keagamaan", pendidikan: "Ponpes" },
    { no: 14, nama: "Ust. Bakhrudin", ptk: "Guru Keagamaan", pendidikan: "Ponpes" },
  ];

  return (
    <div className="min-h-screen bg-[#fcfdfd] pt-28 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER HALAMAN */}
        <div className="text-center mb-20">
          <p className="text-emerald-600 font-black uppercase tracking-[0.4em] text-[10px] mb-4">Sinergi & Dedikasi</p>
          <h1 className="text-4xl md:text-6xl font-black text-slate-800 tracking-tighter italic uppercase leading-none">
            Struktur <span className="text-emerald-600">Organisasi</span>
          </h1>
          <div className="w-24 h-1.5 bg-amber-400 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* SECTION 1: MANAJEMEN INTI */}
        <div className="mb-24 text-center">
          <h2 className="text-xl font-black text-slate-400 uppercase tracking-widest mb-10 italic">Pimpinan Utama</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {manajemenInti.map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-[32px] border border-emerald-100 shadow-sm hover:shadow-xl hover:shadow-emerald-100 transition-all group">
                <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                  <item.icon size={28} />
                </div>
                <h3 className="font-black text-sm italic tracking-tighter text-slate-800 mb-2 leading-tight h-10 flex items-center justify-center underline-none">
                  {item.nama}
                </h3>
                <p className="text-[9px] font-bold uppercase tracking-widest text-emerald-600">{item.jabatan}</p>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 2: KOORDINATOR BIDANG */}
        <div className="mb-24 text-center">
          <h2 className="text-xl font-black text-slate-400 uppercase tracking-widest mb-10 italic">Koordinator Bidang</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {koordinator.map((item, idx) => (
              <div key={idx} className="bg-emerald-900 p-6 rounded-[24px] text-white hover:bg-emerald-800 transition-all group">
                <div className="text-amber-400 mb-4 flex justify-center group-hover:scale-110 transition-transform">
                  <item.icon size={24} />
                </div>
                <h3 className="font-bold text-[11px] mb-1 leading-tight tracking-tight">
                  {item.nama}
                </h3>
                <p className="text-[8px] font-medium text-emerald-300 uppercase tracking-tighter">{item.jabatan}</p>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 3: TABEL DAFTAR PTK LENGKAP */}
        <div className="bg-white rounded-[40px] border border-emerald-100 overflow-hidden shadow-2xl">
          <div className="bg-emerald-700 p-8 text-white">
            <h2 className="text-2xl font-black italic tracking-tighter uppercase">Daftar Pendidik & Tenaga Kependidikan</h2>
            <p className="text-emerald-100 text-xs font-bold uppercase tracking-widest mt-1">Tahun Pelajaran 2026/2027</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-emerald-50 text-emerald-900 border-b border-emerald-100">
                  <th className="p-6 font-black uppercase text-[10px] tracking-widest w-16 text-center">No</th>
                  <th className="p-6 font-black uppercase text-[10px] tracking-widest">Nama Lengkap & Gelar</th>
                  <th className="p-6 font-black uppercase text-[10px] tracking-widest">Jenis PTK</th>
                  <th className="p-6 font-black uppercase text-[10px] tracking-widest text-center">Pendidikan</th>
                </tr>
              </thead>
              <tbody>
                {daftarGuru.map((guru, index) => (
                  <tr key={index} className="border-b border-emerald-50 hover:bg-emerald-50/30 transition-colors">
                    <td className="p-6 text-sm font-bold text-slate-400 text-center">{guru.no}</td>
                    <td className="p-6 text-sm font-black text-slate-700 italic">{guru.nama}</td>
                    <td className="p-6 text-[10px] font-bold uppercase text-emerald-600 tracking-wider">{guru.ptk}</td>
                    <td className="p-6 text-center">
                      <span className="inline-block px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-[10px] font-black uppercase tracking-tighter">
                        {guru.pendidikan}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* JARGON AKHLAK */}
        <div className="mt-20 py-10 text-center">
          <p className="text-emerald-800 font-black italic text-2xl tracking-[0.3em] mb-3 uppercase">"AKHLAK"</p>
          <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em]">
            Aqidah • Kepribadian • Harmonis • Loyalitas • Adaptif • Kompeten
          </p>
        </div>

      </div>
    </div>
  );
}