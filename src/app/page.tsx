"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  GraduationCap, Book, Users, Star, ChevronRight, Bell, Camera, 
  MapPin, ChevronDown, Building2, Laptop, Trophy, Home,
  Phone, Mail, Instagram, Facebook, Send, MessageCircle,
  ShieldCheck, Briefcase, UserCheck
} from 'lucide-react';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#fcfdfd] overflow-x-hidden font-sans text-slate-800">
      
      {/* 1. NAVBAR */}
      <nav className="fixed top-0 w-full z-[100] bg-white/80 backdrop-blur-xl border-b border-emerald-100 py-3 px-6 md:px-12 flex justify-between items-center shadow-sm">
        <div className="flex items-center gap-3">
          <div className="flex gap-2 bg-white p-1.5 rounded-2xl border border-emerald-50 shadow-inner">
            <Image src="/logo-pendidikan.png" alt="Pusat" width={28} height={28} className="object-contain" />
            <Image src="/logo-yayasan.png" alt="Yayasan" width={28} height={28} className="object-contain" />
            <Image src="/logo-sma.png" alt="SMA" width={28} height={28} className="object-contain" />
          </div>
          <div className="flex flex-col text-left">
            <h1 className="font-black text-emerald-900 text-[10px] md:text-sm tracking-tighter uppercase italic leading-tight">SMAS NU TOBOALI</h1>
            <span className="text-[7px] font-bold text-emerald-600 tracking-[0.2em] uppercase italic">Bangka Selatan</span>
          </div>
        </div>
        
        <div className="hidden md:flex gap-8 text-[11px] font-black uppercase text-slate-500 tracking-widest items-center">
          <div className="relative group py-2 cursor-pointer">
            <span className="hover:text-emerald-600 transition-all flex items-center gap-1">
              Profil <ChevronDown size={12} />
            </span>
            <div className="absolute top-full left-0 w-56 bg-white shadow-2xl rounded-2xl border border-emerald-50 py-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-4 group-hover:translate-y-0 text-left px-2 border-none">
              <Link href="/profil/sejarah" className="block px-6 py-2.5 hover:bg-emerald-50 hover:text-emerald-700 no-underline text-slate-500 font-bold tracking-normal rounded-xl">Sejarah Sekolah</Link>
              <Link href="/profil/visi-misi" className="block px-6 py-2.5 hover:bg-emerald-50 hover:text-emerald-700 no-underline text-slate-500 font-bold tracking-normal rounded-xl">Visi & Misi</Link>
              <Link href="/profil/struktur" className="block px-6 py-2.5 hover:bg-emerald-50 hover:text-emerald-700 no-underline text-slate-500 font-bold tracking-normal rounded-xl">Struktur Organisasi</Link>
            </div>
          </div>
          <Link href="/akademik" className="hover:text-emerald-600 transition-all no-underline">Akademik</Link>
          <Link href="/galeri" className="hover:text-emerald-600 transition-all no-underline">Galeri</Link>
          <Link href="/ppdb" className="bg-emerald-600 text-white px-7 py-2.5 rounded-full no-underline hover:shadow-xl hover:shadow-emerald-200 transition-all font-black border-none">PPDB 2026</Link>
        </div>
      </nav>

      {/* 2. RUNNING TEXT */}
      <div className="fixed top-[68px] w-full z-40 bg-amber-400 py-1.5 overflow-hidden whitespace-nowrap shadow-sm border-b border-amber-500/20">
        <motion.div animate={{ x: ["0%", "-100%"] }} transition={{ repeat: Infinity, duration: 35, ease: "linear" }} className="inline-block text-emerald-950 font-black text-[9px] uppercase tracking-[0.2em]">
          ✨ PENERIMAAN PESERTA DIDIK BARU SMAS NU TOBOALI TAHUN PELAJARAN 2026/2027 TELAH DIBUKA! DAFTARKAN DIRI ANDA SEGERA ✨     
        </motion.div>
      </div>

      {/* 3. HERO SECTION */}
      <section className="relative min-h-screen flex items-center pt-32 px-6 md:px-20 overflow-hidden bg-gradient-to-b from-white to-emerald-50/30">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-3/5 text-center md:text-left z-10">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-50 text-emerald-700 rounded-full text-[9px] font-bold uppercase mb-8 border border-emerald-100">
              <Bell size={12} className="animate-bounce" /> Pendaftaran Online Dibuka
            </motion.div>
            <h2 className="text-5xl md:text-8xl font-black text-slate-800 leading-[1.0] mb-8 uppercase italic tracking-tighter">
              Membangun <br/> <span className="text-emerald-600">Berakhlak</span> <br/> & Kompeten
            </h2>
            <Link href="/ppdb" className="bg-emerald-600 text-white px-12 py-5 rounded-2xl font-black text-sm no-underline uppercase tracking-widest shadow-2xl hover:bg-slate-800 transition-all inline-block border-none">
              Daftar Sekarang <ChevronRight className="inline ml-1" />
            </Link>
          </div>
          <div className="md:w-2/5 relative mt-12 md:mt-0 flex justify-center">
            <div className="relative z-10 w-[350px] md:w-[500px] h-[450px] md:h-[600px]">
              <Image src="/foto-anak-nu.png" alt="Siswa SMAS NU" fill className="object-contain drop-shadow-2xl" priority />
            </div>
          </div>
        </div>
      </section>

      {/* 4. SAMBUTAN KEPALA SEKOLAH */}
      <section className="py-24 px-6 bg-white relative">
        <div className="max-w-6xl mx-auto">
          <div className="group bg-white rounded-[40px] overflow-hidden shadow-[0_32px_64px_-16px_rgba(16,185,129,0.1)] flex flex-col md:flex-row items-center border border-emerald-50 transition-all duration-500 hover:shadow-emerald-200 hover:shadow-2xl hover:-translate-y-1">
            <div className="w-full md:w-2/5 bg-emerald-600 h-[550px] relative overflow-hidden">
              <img src="/foto-kepsek.jpg" alt="Azharudin, S.Pd., M.E." className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105" />
              <div className="absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-emerald-950 via-emerald-900/50 to-transparent">
                <p className="text-white font-black text-2xl tracking-tighter italic">Azharudin, S.Pd., M.E., Gr.</p>
                <p className="text-emerald-400 text-[10px] font-bold uppercase tracking-[0.3em] mt-1 text-white">Kepala Sekolah SMAS NU</p>
              </div>
            </div>
            <div className="w-full md:w-3/5 p-10 md:p-20 relative border-none">
              <div className="w-20 h-1.5 bg-emerald-500 mb-10 rounded-full group-hover:w-32 transition-all duration-500"></div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-800 mb-8 leading-tight italic tracking-tighter transition-colors group-hover:text-emerald-900">"Mencetak Generasi Unggul Berlandaskan Aswaja."</h2>
              <div className="space-y-6 text-slate-600 leading-relaxed text-base md:text-lg">
                <p className="font-bold text-emerald-700 italic">Assalamu’alaikum Warahmatullahi Wabarakatuh.</p>
                <p>Website ini hadir sebagai jembatan informasi antara sekolah dengan masyarakat luas.</p>
                <p>Di <strong>SMAS NU Toboali</strong>, kami membimbing siswa untuk cerdas berpikir dan mulia dalam bersikap.</p>
              </div>
              <div className="mt-12 pt-10 border-t border-slate-100 flex items-center gap-5 text-2xl font-black italic text-emerald-700">✍️ Azharudin</div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. STRUKTUR MANAJEMEN INTI (DATA SESUAI PDF) */}
      <section className="py-24 px-6 bg-white relative">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <p className="text-emerald-600 font-black uppercase tracking-[0.4em] text-[10px] mb-4">Leadership Team</p>
          <h2 className="text-4xl md:text-5xl font-black text-slate-800 tracking-tighter italic uppercase leading-none mb-6">
            Struktur <span className="text-emerald-600">Manajemen</span>
          </h2>
          <div className="w-24 h-1 bg-emerald-200 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {[
            { nama: "H. M. Karyawan, S.Ag., M.Pd.", jabatan: "Ketua Yayasan", icon: <ShieldCheck /> },
            { nama: "Azharudin, S.Pd., M.E., Gr.", jabatan: "Kepala Sekolah", icon: <GraduationCap /> },
            { nama: "Mahfudz Maladzi, S.Pd., Gr.", jabatan: "Waka Sekolah", icon: <Users /> },
            { nama: "Dapa Mutakkin, S.Pd.", jabatan: "Kepala Tata Usaha", icon: <Briefcase /> },
          ].map((staff, idx) => (
            <div key={idx} className="bg-emerald-50/50 p-8 rounded-[32px] border border-emerald-100 text-center hover:bg-emerald-600 hover:text-white transition-all duration-500 group">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:scale-110 transition-transform text-emerald-600">
                {staff.icon}
              </div>
              <h3 className="font-black text-[12px] md:text-sm uppercase italic tracking-tighter mb-2 leading-tight h-10 flex items-center justify-center">{staff.nama}</h3>
              <p className="text-[9px] font-bold uppercase tracking-widest opacity-60 group-hover:text-emerald-100 transition-colors">{staff.jabatan}</p>
            </div>
          ))}
        </div>

        {/* Jargon AKHLAK (Sesuai PDF) */}
        <div className="mt-20 max-w-4xl mx-auto py-10 border-y border-emerald-100 text-center bg-emerald-50/20 rounded-[40px]">
          <p className="text-emerald-800 font-black italic text-2xl tracking-[0.3em] mb-3">"AKHLAK"</p>
          <p className="text-slate-500 text-[9px] md:text-[11px] font-black uppercase tracking-[0.2em] px-4 leading-loose">
            Aqidah <span className="text-emerald-300 mx-2">•</span> 
            Kepribadian <span className="text-emerald-300 mx-2">•</span> 
            Harmonis <span className="text-emerald-300 mx-2">•</span> 
            Loyalitas <span className="text-emerald-300 mx-2">•</span> 
            Adaptif <span className="text-emerald-300 mx-2">•</span> 
            Kompeten
          </p>
        </div>
      </section>

      {/* 6. SARANA & PRASARANA */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <p className="text-emerald-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4">Fasilitas Sekolah</p>
          <h2 className="text-4xl md:text-6xl font-black text-slate-800 tracking-tighter italic uppercase">Sarana <span className="text-emerald-600">&</span> Prasarana</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
          {[
            { title: "Gedung Belajar", desc: "Ruang kelas nyaman berbasis multimedia.", icon: <Building2 />, img: "/gedung.jpg" },
            { title: "Lab Komputer", desc: "Fasilitas IT modern untuk praktik digital.", icon: <Laptop />, img: "/lab.jpg" },
            { title: "Lap. Olahraga", desc: "Sarana pengembangan bakat dan fisik.", icon: <Trophy />, img: "/foto-lapangan.jpg" },
            { title: "Asrama Siswa", desc: "Lingkungan hunian Islami yang nyaman.", icon: <Home />, img: "/asrama.jpg" }
          ].map((item, index) => (
            <div key={index} className="group bg-white rounded-3xl overflow-hidden shadow-lg shadow-slate-200/50 border border-slate-100 hover:-translate-y-2 transition-all duration-500">
              <div className="h-48 bg-slate-200 relative overflow-hidden">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700" />
              </div>
              <div className="p-6">
                <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600 mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <h3 className="font-black text-lg mb-1 text-slate-800 uppercase italic tracking-tighter">{item.title}</h3>
                <p className="text-slate-500 text-[11px] leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. KONTAK & LOKASI */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            
            <div className="lg:w-1/3 flex flex-col justify-center">
              <p className="text-emerald-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4">Hubungi Kami</p>
              <h2 className="text-4xl md:text-5xl font-black text-slate-800 tracking-tighter italic uppercase leading-[0.9] mb-10">
                Layanan <br/> <span className="text-emerald-600">Informasi</span>
              </h2>
              
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 shrink-0 shadow-inner"><MapPin size={22} /></div>
                  <div>
                    <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1">Alamat Sekolah</p>
                    <p className="text-sm font-bold text-slate-600 leading-relaxed italic">Jl. Raya Rias Desa Rias, Kec. Toboali, Kab. Bangka Selatan, Prov. Kep. Bangka Belitung</p>
                  </div>
                </div>

                <Link href="https://wa.me/6287813180362" target="_blank" className="flex gap-4 items-center p-4 bg-white border border-emerald-100 rounded-[24px] hover:shadow-xl hover:shadow-emerald-100 transition-all group no-underline">
                  <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center text-white shrink-0 group-hover:rotate-12 transition-transform"><MessageCircle size={20} /></div>
                  <div>
                    <p className="text-[9px] font-black uppercase text-emerald-600 tracking-widest mb-0.5">Admin (Dapa Mutakkin)</p>
                    <p className="text-xs font-bold text-slate-600 italic">Klik untuk Chat WhatsApp</p>
                  </div>
                </Link>

                <Link href="https://wa.me/6283175213223" target="_blank" className="flex gap-4 items-center p-4 bg-white border border-emerald-100 rounded-[24px] hover:shadow-xl hover:shadow-emerald-100 transition-all group no-underline">
                  <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center text-white shrink-0 group-hover:rotate-12 transition-transform"><MessageCircle size={20} /></div>
                  <div>
                    <p className="text-[9px] font-black uppercase text-emerald-600 tracking-widest mb-0.5">Admin (Azharudin)</p>
                    <p className="text-xs font-bold text-slate-600 italic">Klik untuk Chat WhatsApp</p>
                  </div>
                </Link>
              </div>

              <div className="flex gap-4 mt-12">
                <Link href="#" className="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-emerald-600 transition-all hover:-translate-y-1 shadow-lg"><Instagram size={20} /></Link>
                <Link href="#" className="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-emerald-600 transition-all hover:-translate-y-1 shadow-lg"><Facebook size={20} /></Link>
              </div>
            </div>

            <div className="lg:w-2/3 h-[500px] rounded-[40px] overflow-hidden shadow-2xl border-8 border-white relative group">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.431602351519!2d106.44087477351412!3d-2.977639139810879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e3d810060079def%3A0xfb7b05320ca1154b!2sSMA%20NU%20TOBOALI!5e0!3m2!1sen!2sid!4v1772587277118!5m2!1sen!2sid" 
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                className="grayscale group-hover:grayscale-0 transition-all duration-1000"
              ></iframe>
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur px-6 py-3 rounded-2xl shadow-xl pointer-events-none">
                <p className="text-[10px] font-black text-emerald-700 uppercase tracking-widest flex items-center gap-2">📍 Lokasi SMAS NU TOBOALI</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 8. FOOTER */}
      <footer className="bg-slate-50 py-16 border-t border-emerald-100 text-center">
        <div className="flex justify-center gap-6 mb-8 items-center opacity-80">
          <Image src="/logo-pendidikan.png" alt="Kemendikbud" width={40} height={40} />
          <Image src="/logo-yayasan.png" alt="Yayasan" width={40} height={40} />
          <Image src="/logo-sma.png" alt="SMA" width={40} height={40} />
        </div>
        <div className="mb-6">
           <h2 className="font-black text-emerald-900 text-sm tracking-tighter uppercase italic">SMAS NU TOBOALI</h2>
           <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em]">Membangun Berakhlak & Kompeten</p>
        </div>
        <p className="font-black tracking-[0.4em] uppercase text-[10px] text-slate-300">© 2026 SMAS NU TOBOALI</p>
      </footer>

    </main>
  );
}