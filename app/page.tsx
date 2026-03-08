"use client";

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { 
  BookOpen, Star, ShieldCheck, Heart, Award, Bell, 
  GraduationCap, School, Zap, Facebook, Instagram, 
  MapPin, Trophy, Target, ArrowRight, Mail, Library,
  Coffee, Wifi, Microscope, Users
} from 'lucide-react';

export default function HomePage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  const sloganAkhlak = [
    { h: 'A', t: 'Aqidah' }, { h: 'K', t: 'Kepribadian' }, { h: 'H', t: 'Harmonis' },
    { h: 'L', t: 'Loyalitas' }, { h: 'A', t: 'Adaptif' }, { h: 'K', t: 'Kompeten' }
  ];

  const programUnggulan = [
    { 
      icon: <BookOpen size={45} />, 
      title: "Tahfidzul Qur'an", 
      desc: "Mencetak generasi penghafal Al-Qur'an dengan standar tajwid yang mutqin.",
      color: "#0d4f3c" 
    },
    { 
      icon: <Library size={45} />, 
      title: "Kitab Kuning", 
      desc: "Menjaga khazanah intelektual pesantren melalui kajian kitab turots klasik.",
      color: "#c9a227" 
    },
    { 
      icon: <Trophy size={45} />, 
      title: "Prestasi OSN & FLS3N", 
      desc: "Pembinaan intensif untuk mencetak juara di kompetisi sains dan seni nasional.",
      color: "#0d4f3c" 
    }
  ];

  const fasilitas = [
    { title: "Ruang Kelas Modern", desc: "Dilengkapi multimedia untuk pembelajaran interaktif.", icon: <School size={35} /> },
    { title: "Mushola Nurul Alwiyah", desc: "Pusat spiritual dan pembinaan adab santri.", icon: <Heart size={35} /> },
    { title: "Lab. Komputer & IPA", desc: "Sarana riset dan teknologi masa depan.", icon: <Microscope size={35} /> },
    { title: "Perpustakaan", desc: "Ribuan koleksi literatur umum dan kitab salaf.", icon: <Library size={35} /> },
    { title: "Outdoor Sport Center", desc: "Lapangan luas untuk voli, futsal, dan basket.", icon: <Target size={35} /> },
    { title: "WIFI & Digital Corner", desc: "Akses informasi global yang terkontrol dan sehat.", icon: <Wifi size={35} /> }
  ];

  return (
    <div style={{ backgroundColor: '#faf6ef', minHeight: '100vh', overflowX: 'hidden' }}>
      
      {/* 1. RUNNING TEXT */}
      <div style={{ 
        background: '#c9a227', color: '#0d4f3c', padding: '12px 0', 
        fontSize: '12px', fontWeight: '900', overflow: 'hidden', 
        whiteSpace: 'nowrap', borderBottom: '2px solid #0d4f3c',
        position: 'fixed', top: 0, width: '100%', zIndex: 100
      }}>
        {mounted && (
          <motion.div 
            animate={{ x: [1200, -2500] }} 
            transition={{ repeat: Infinity, duration: 35, ease: "linear" }} 
            style={{ display: 'inline-block' }}
          >
            <Bell size={16} style={{ marginBottom: '-4px', marginRight: '10px' }} />
            SELAMAT DATANG DI SMAS NU TOBOALI --- PPDB TAHUN AJARAN 2026/2027 TELAH DIBUKA! --- حِمَايَةُ الدِّيْنِ وَالدَّوْلَةِ (MENJAGA AGAMA, MENJAGA NEGARA) --- SEGERA DAFTARKAN DIRI ANDA ---
          </motion.div>
        )}
      </div>

      {/* 2. HERO SECTION */}
      <section style={{ 
        minHeight: '100vh', display: 'flex', alignItems: 'center', 
        background: 'linear-gradient(135deg, #0d4f3c 0%, #062b21 100%)', 
        padding: '120px 5% 80px', position: 'relative', overflow: 'hidden' 
      }}>
        <motion.div style={{ position: 'absolute', top: '20%', left: '5%', opacity: 0.1, y: y1 }}>
          <School size={180} color="white" />
        </motion.div>
        <motion.div style={{ position: 'absolute', bottom: '10%', right: '10%', opacity: 0.1, y: y2 }}>
          <GraduationCap size={250} color="white" />
        </motion.div>

        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '50px', alignItems: 'center', position: 'relative', zIndex: 10 }}>
          <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 style={{ color: 'white', fontSize: 'clamp(2.5rem, 8vw, 4.8rem)', fontWeight: '950', fontStyle: 'italic', lineHeight: 0.85, marginBottom: '25px', letterSpacing: '-2px' }}>
              PARA PEMIMPIN <br/> <span style={{ color: '#c9a227' }}>DIMULAI DARI SINI</span>
            </h1>
            <motion.p 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ delay: 0.5, duration: 1 }}
              style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.25rem', marginBottom: '40px', borderLeft: '5px solid #c9a227', paddingLeft: '25px', maxWidth: '550px', lineHeight: 1.6 }}
            >
              Membentuk generasi tangguh yang berakar pada tradisi pesantren dan siap menghadapi tantangan global.
            </motion.p>
            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/ppdb" style={{ background: '#c9a227', color: '#0d4f3c', padding: '20px 45px', borderRadius: '15px', fontWeight: '900', textDecoration: 'none', boxShadow: '0 20px 40px rgba(201, 162, 39, 0.3)', display: 'block' }}>DAFTAR SEKARANG</Link>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 100 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 1, ease: "backOut" }} 
            style={{ position: 'relative' }}
          >
            <motion.div 
              animate={{ rotate: [0, -5, 0] }} 
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              style={{ position: 'absolute', inset: '-15px', border: '6px solid #c9a227', borderRadius: '50px', zIndex: 1 }} 
            />
            <img src="/foto-anak-nu.png" alt="Siswa" style={{ width: '100%', borderRadius: '40px', position: 'relative', zIndex: 2, filter: 'drop-shadow(0 40px 80px rgba(0,0,0,0.6))' }} 
                   onError={(e) => { (e.target as any).src = "https://via.placeholder.com/500x600?text=Siswa+SMAS+NU"; }} />
          </motion.div>
        </div>
      </section>

      {/* 3. PROGRAM UNGGULAN */}
      <section style={{ padding: '140px 5% 120px', maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 5 }}>
        <div style={{ textAlign: 'center', marginBottom: '100px' }}>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ fontSize: 'clamp(2.5rem, 6vw, 3.5rem)', fontWeight: '950', color: '#0d4f3c' }}>
            PROGRAM <span style={{ color: '#c9a227' }}>UNGGULAN</span>
          </motion.h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px' }}>
          {programUnggulan.map((item, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.2 }} whileHover={{ y: -20 }} 
              style={{ background: 'white', padding: '60px 40px', borderRadius: '50px', boxShadow: '0 30px 70px rgba(0,0,0,0.06)', border: '1px solid #eee', textAlign: 'center' }}>
              <div style={{ color: item.color, marginBottom: '35px', background: '#fcfaf7', width: '100px', height: '100px', borderRadius: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 30px' }}>{item.icon}</div>
              <h3 style={{ color: '#0d4f3c', fontWeight: '900', fontSize: '1.8rem', marginBottom: '20px' }}>{item.title}</h3>
              <p style={{ color: '#666', lineHeight: 1.8 }}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. FASILITAS */}
      <section style={{ padding: '120px 5%', background: '#f4f1ea' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '60px', flexWrap: 'wrap', gap: '20px' }}>
            <div>
              <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} style={{ color: '#c9a227', fontWeight: '800', letterSpacing: '3px' }}>LUXURY FACILITIES</motion.span>
              <h2 style={{ fontSize: '3.5rem', fontWeight: '950', color: '#0d4f3c', lineHeight: 1, marginTop: '10px' }}>SARANA <br/>TERBAIK.</h2>
            </div>
            <p style={{ maxWidth: '400px', color: '#666', fontSize: '1.1rem', borderLeft: '4px solid #c9a227', paddingLeft: '20px' }}>
              Kami percaya lingkungan yang berkualitas akan melahirkan kualitas berfikir yang jernih.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px' }}>
            {fasilitas.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ backgroundColor: '#0d4f3c', color: '#fff', y: -10 }}
                transition={{ delay: i * 0.1 }}
                style={{
                  background: 'white', padding: '40px', borderRadius: '40px', 
                  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  cursor: 'pointer', border: '1px solid rgba(0,0,0,0.05)'
                }}
              >
                <div style={{ marginBottom: '25px', opacity: 0.8 }}>{f.icon}</div>
                <h3 style={{ fontWeight: '900', fontSize: '1.5rem', marginBottom: '12px' }}>{f.title}</h3>
                <p style={{ opacity: 0.7, lineHeight: 1.6 }}>{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. GALERI KEGIATAN (FIXED) */}
      <section style={{ padding: '120px 5%', background: '#faf6ef' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              style={{ fontSize: 'clamp(2.5rem, 6vw, 3.5rem)', fontWeight: '950', color: '#0d4f3c' }}
            >
              JEJAK <span style={{ color: '#c9a227' }}>AKTIVITAS</span>
            </motion.h2>
            <Link href="/galeri" style={{ color: '#c9a227', fontWeight: '800', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginTop: '10px' }}>
              LIHAT SEMUA GALERI <ArrowRight size={20} />
            </Link>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
            gap: '25px' 
          }}>
            {[
              { img: "XII-TKA.jpg", tag: "Akademik", title: "Tes Kemampuan Akademik (TKA)", desc: "Evaluasi standar kompetensi siswa kelas XII." },
              { img: "anbk-XI.jpg", tag: "Nasional", title: "ANBK Kelas XI", desc: "Asesmen Nasional Berbasis Komputer untuk pemetaan mutu pendidikan." },
              { img: "opsi-sma.jpeg", tag: "Lomba", title: "Persiapan OPSI", desc: "Olimpiade Penelitian Siswa Indonesia tingkat SMA." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                style={{
                  position: 'relative',
                  borderRadius: '35px',
                  overflow: 'hidden',
                  height: '450px',
                  background: '#eee',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                }}
              >
                <img 
                  src={`/${item.img}`} 
                  alt={item.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={(e) => { (e.target as any).src = "https://via.placeholder.com/500x600?text=Dokumentasi+SMAS+NU"; }}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(13, 79, 60, 0.95) 10%, transparent 60%)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '35px',
                  color: 'white'
                }}>
                  <span style={{ 
                    background: '#c9a227', color: '#0d4f3c', padding: '6px 15px', 
                    borderRadius: '10px', fontSize: '11px', fontWeight: '900',
                    width: 'fit-content', marginBottom: '15px', textTransform: 'uppercase'
                  }}>{item.tag}</span>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: '900', marginBottom: '8px', lineHeight: 1.2 }}>{item.title}</h3>
                  <p style={{ fontSize: '0.9rem', opacity: 0.8, lineHeight: 1.5 }}>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SAMBUTAN KEPALA SEKOLAH */}
      <section style={{ padding: '140px 5%', background: '#0d4f3c', color: 'white', borderRadius: '100px 100px 0 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '100px', alignItems: 'center' }}>
          <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -50 }} viewport={{ once: true }} style={{ position: 'relative' }}>
            <img src="/foto-kepsek.jpg" alt="Kepsek" style={{ width: '100%', maxWidth: '420px', borderRadius: '50px', border: '6px solid #c9a227' }} 
                   onError={(e) => { (e.target as any).src = "https://via.placeholder.com/400x500?text=Kepala+Sekolah"; }} />
            <div style={{ background: '#c9a227', color: '#0d4f3c', padding: '25px 40px', borderRadius: '25px', position: 'absolute', bottom: '-30px', right: '-20px', fontWeight: '950' }}>Azharudin, S.Pd., M.E.</div>
          </motion.div>
          <div>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '950', marginBottom: '40px' }}>ADAB DULU, <br/><span style={{ color: '#c9a227' }}>BARU ILMU.</span></h2>
            <p style={{ fontSize: '1.4rem', lineHeight: 1.8, opacity: 0.9, fontStyle: 'italic', borderLeft: '6px solid #c9a227', paddingLeft: '30px' }}>
              "Di SMAS NU Toboali, pendidikan bukan hanya soal angka, tapi soal membentuk jiwa yang berbakti pada kiai, orang tua, dan negeri."
            </p>
          </div>
        </div>
      </section>

      {/* 7. FOOTER FINAL */}
      <footer style={{ background: '#082b21', color: 'white', paddingTop: '120px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 5% 80px' }}>
          <div style={{ textAlign: 'center', marginBottom: '100px' }}>
            <div style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 'bold', color: '#c9a227', marginBottom: '15px', fontFamily: 'serif' }}>حِمَايَةُ الدِّيْنِ وَالدَّوْلَةِ</div>
            <h3 style={{ fontSize: '2rem', fontWeight: '950', letterSpacing: '6px' }}>HIMAYATUDDIN WAD DAULAH</h3>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '20px', marginBottom: '100px' }}>
            {sloganAkhlak.map((item, i) => (
              <motion.div key={i} whileHover={{ y: -10, backgroundColor: 'rgba(201, 162, 39, 0.1)' }}
                style={{ background: 'rgba(255,255,255,0.03)', padding: '35px 15px', borderRadius: '30px', textAlign: 'center', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                <div style={{ fontSize: '3rem', fontWeight: '950', color: '#c9a227', lineHeight: 1 }}>{item.h}</div>
                <div style={{ fontSize: '0.9rem', fontWeight: '900', textTransform: 'uppercase', marginTop: '10px', color: 'rgba(255,255,255,0.6)' }}>{item.t}</div>
              </motion.div>
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '60px', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '80px' }}>
            <div>
              <h3 style={{ color: '#c9a227', fontWeight: '950', marginBottom: '25px', fontSize: '1.5rem' }}>SMAS NU TOBOALI</h3>
              <div style={{ display: 'flex', gap: '20px', alignItems: 'start', opacity: 0.8 }}>
                <MapPin size={32} color="#c9a227" style={{ flexShrink: 0 }} />
                <p>Jl. Raya Rias, Desa Rias, Kecamatan Toboali, Kabupaten Bangka Selatan.</p>
              </div>
            </div>
            <div>
              <h4 style={{ fontWeight: '950', marginBottom: '25px' }}>KONEKSI</h4>
              <div style={{ display: 'flex', gap: '25px' }}>
                <Instagram size={32} /> <Facebook size={32} /> <Mail size={32} />
              </div>
            </div>
            <div>
              <h4 style={{ fontWeight: '950', marginBottom: '25px' }}>SERTIFIKASI</h4>
              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '20px', borderRadius: '25px', display: 'flex', alignItems: 'center', gap: '20px' }}>
                <Award size={45} color="#c9a227" />
                <div>
                  <div style={{ fontWeight: '950', fontSize: '1.2rem' }}>TERAKREDITASI A</div>
                  <div style={{ fontSize: '12px', opacity: 0.6 }}>BAN-S/M PROVINSI BABEL</div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '100px', opacity: 0.3, fontSize: '13px' }}>© 2026 SMAS NU TOBOALI | PENERUS PERJUANGAN MA'ARIF NU</div>
        </div>
      </footer>
    </div>
  );
}