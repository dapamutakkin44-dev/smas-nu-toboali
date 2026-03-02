"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ProfilPage() {
  const stafGuru = [
    { nama: "Mahfudz Maladzi, S.Pd., Gr.", jabatan: "Wakil Kepala Sekolah" },
    { nama: "Yuspita, S.Pd., M.Pd.", jabatan: "Kepala Perpustakaan" },
    { nama: "Fadilah Hasan, S.Pd.I.", jabatan: "Pimpinan PP Tarbiyatul Muta'allimin" },
    { nama: "Anisa Fitriyani, S.Pd.", jabatan: "Bendahara" },
    { nama: "Dapa Mutakkin, S.Pd.", jabatan: "Kepala Tata Usaha" },
    { nama: "Sari Dwi Puspita, S.Pd.", jabatan: "Kepala UKS" },
    { nama: "Yuliyanti, S.Pd.", jabatan: "Koordinator P5" },
    { nama: "Ust. Saeful Anwar, S.Pd.I.", jabatan: "Guru Mapel" },
    { nama: "H. Yanto, M.Pd.", jabatan: "Guru Mapel" },
    { nama: "Faisal Romdon, S.Pd.", jabatan: "Kepala Lab Komputer" },
    { nama: "Ust. Muhammad Chaidar Suwito", jabatan: "Guru Mapel" },
    { nama: "Ust. Bakhrudin", jabatan: "Guru Mapel" },
  ];

  return (
    <main className="min-h-screen bg-white font-sans overflow-x-hidden">
      {/* HEADER PROFIL */}
      <div className="bg-[#064E3B] text-white py-20 text-center border-b-4 border-amber-500 relative">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/islamic-art.png')` }}></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter">Profil Sekolah</h1>
          <p className="text-amber-400 mt-2 font-bold tracking-[0.3em] uppercase text-sm">SMAS NU TOBOALI</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        
        {/* SEKSI KETUA YAYASAN */}
        <section className="mb-12 bg-white p-8 rounded-[2.5rem] border-2 border-amber-500 shadow-xl flex flex-col items-center text-center max-w-2xl mx-auto">
          <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mb-4 border-2 border-amber-500 shadow-inner">
             <span className="text-[#064E3B] font-black text-xl">HM</span>
          </div>
          <h2 className="text-amber-600 font-bold uppercase tracking-widest text-[10px] mb-2 text-center">Ketua Yayasan Pendidikan Fathmah Alwi</h2>
          <h3 className="text-2xl font-black text-[#064E3B]">H. M. Karyawan, S.Ag., M.Pd.</h3>
        </section>

        {/* SEKSI KEPALA SEKOLAH */}
        <section className="flex flex-col md:flex-row gap-12 items-start mb-24 bg-emerald-50 p-10 rounded-[3rem] border border-emerald-100 shadow-lg">
          <div className="w-72 h-96 bg-slate-200 rounded-2xl overflow-hidden relative shadow-2xl border-4 border-white flex-shrink-0 mx-auto md:mx-0">
            <Image 
              src="/foto-kepsek.jpg" 
              alt="Azharudin, S.Pd., M.E., Gr." 
              fill 
              className="object-cover"
              priority
            />
          </div>
          
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-amber-600 font-bold uppercase tracking-widest text-xs mb-2">Kata Sambutan</h2>
            <h3 className="text-3xl font-black text-[#064E3B] mb-6 italic">Azharudin, S.Pd., M.E., Gr.</h3>
            
            <div className="space-y-4 text-slate-700 leading-relaxed text-justify">
              <p>Assalamu’alaikum Warahmatullahi Wabarakatuh,</p>
              <p>
                Puji syukur kita panjatkan ke hadirat Allah SWT atas rahmat dan hidayah-Nya. SMAS NU Toboali hadir sebagai lembaga pendidikan menengah yang mengintegrasikan kecerdasan intelektual dengan kekokohan spiritual berbasis pondok pesantren.
              </p>
              <p>
                Fokus utama kami adalah membekali santri dengan penguasaan literatur kitab kuning dan ilmu agama yang mumpuni, tanpa mengesampingkan kemajuan teknologi dan sains duniawi. Kami berkomitmen mencetak generasi yang tidak hanya kompeten secara nasional, namun juga memiliki akhlakul karimah yang berguna bagi agama dan negara sesuai semboyan kami, <i>Himayatud Din wad Daulah</i>.
              </p>
              <p>Terima kasih atas kepercayaan Bapak/Ibu wali murid. Mari bersama mewujudkan masa depan generasi emas yang berkarakter Ahlussunnah wal Jama’ah.</p>
              <p className="font-bold text-[#064E3B]">Wassalamu’alaikum Warahmatullahi Wabarakatuh.</p>
            </div>
          </div>
        </section>

        {/* VISI & MISI */}
        <section className="grid lg:grid-cols-3 gap-12 mb-28">
          <div className="lg:col-span-1 bg-[#064E3B] text-white p-10 rounded-[3rem] shadow-2xl">
            <h2 className="text-3xl font-black text-amber-400 uppercase mb-6 italic">Visi</h2>
            <p className="leading-relaxed font-medium italic text-lg text-justify">
              "Menjadi Lembaga Pendidikan Menengah Atas berbasis pondok pesantren dengan kearifan lokal berstandar nasional yang memberi mashlahat bagi umat."
            </p>
          </div>
          
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-black text-[#064E3B] uppercase mb-8 flex items-center gap-4 italic">
              Misi Sekolah <span className="h-1 bg-amber-500 flex-grow rounded-full"></span>
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Pendidikan agama Islam, Qur’an Hadits & kitab kuning",
                "Melestarikan nilai Islam Ahlussunnah wal Jama’ah",
                "Pengembangan kurikulum 8 standar pendidikan",
                "Pembekalan IPTEK dan keterampilan mutu",
                "Pribadi Islami dan pola berfikir kritis",
                "Semangat berprestasi akademik & non-akademik"
              ].map((misi, i) => (
                <div key={i} className="flex gap-3 p-4 bg-slate-50 rounded-2xl border-l-4 border-amber-500">
                  <span className="font-black text-amber-600">0{i+1}</span>
                  <p className="text-xs text-slate-700 font-semibold uppercase">{misi}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DAFTAR GURU */}
        <section className="text-center mb-20">
          <h2 className="text-4xl font-black text-[#064E3B] uppercase mb-12 italic tracking-tighter">Tenaga Pendidik & Kependidikan</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {stafGuru.map((guru) => (
              <div key={guru.nama} className="p-6 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl transition-all hover:-translate-y-2 border-b-4 hover:border-amber-500 group">
                <div className="w-14 h-14 bg-slate-100 rounded-2xl mx-auto mb-4 flex items-center justify-center text-[#064E3B] font-black group-hover:bg-[#064E3B] group-hover:text-white transition-all transform group-hover:rotate-12">
                  {guru.nama.substring(0, 2).toUpperCase()}
                </div>
                <h4 className="font-bold text-slate-800 text-[11px] mb-1 tracking-tight leading-tight italic">
                  {guru.nama}
                </h4>
                <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">
                  {guru.jabatan}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* MOTTO & SLOGAN */}
        <section className="bg-slate-900 text-white p-12 rounded-[3rem] text-center shadow-2xl border-b-8 border-amber-500">
          <h2 className="text-amber-500 font-black tracking-[0.5em] uppercase text-xs mb-4">Motto Sekolah</h2>
          <h3 className="text-5xl font-black italic mb-6 tracking-tighter">"AKHLAK"</h3>
          <p className="text-slate-400 max-w-2xl mx-auto text-[10px] leading-relaxed uppercase tracking-[0.2em] font-bold">
            Aqidah, Kepribadian, Harmonis, Loyalitas, Adaptif, Kompeten
          </p>
          <div className="mt-8 pt-8 border-t border-white/10 italic text-amber-400 font-medium">
            "Himayatud Din wad Daulah — Berguna bagi Agama dan Negara"
          </div>
        </section>

        {/* TOMBOL KEMBALI */}
        <div className="mt-16 text-center">
          <Link href="/" className="inline-block bg-[#064E3B] text-white px-10 py-4 rounded-full font-black hover:bg-amber-600 transition-all no-underline shadow-xl">
            KEMBALI KE BERANDA
          </Link>
        </div>
      </div>
    </main>
  );
}