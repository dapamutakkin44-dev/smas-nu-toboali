"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Camera, Filter, Calendar, Award, 
  Users, BookOpen, ChevronRight, Home
} from 'lucide-react';
import Link from 'next/link';

export default function GaleriPage() {
  const [filter, setFilter] = useState('Semua');
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const categories = ['Semua', 'Akademik', 'Lomba', 'Prestasi', 'Guru', 'Nasional'];

  const dataGaleri = [
    { 
      img: "XII-TKA.jpg", 
      tag: "Akademik", 
      title: "Tes Kemampuan Akademik (TKA)", 
      desc: "Pelaksanaan evaluasi standar kompetensi untuk siswa kelas XII.",
      date: "2025"
    },
    { 
      img: "anbk-XI.jpg", 
      tag: "Nasional", 
      title: "Asesmen Nasional (ANBK)", 
      desc: "Pemetaan mutu pendidikan nasional bagi siswa kelas XI.",
      date: "2025"
    },
    { 
      img: "opsi-sma.jpeg", 
      tag: "Lomba", 
      title: "Persiapan OPSI SMA", 
      desc: "Bimbingan intensif penelitian siswa untuk ajang OPSI tahun ini.",
      date: "2026"
    },
    { 
      img: "psaj-XII.jpeg", 
      tag: "Akademik", 
      title: "Penilaian Akhir Jenjang (PSAJ)", 
      desc: "Momen krusial penentuan kelulusan santri kelas akhir.",
      date: "2026"
    },
    { 
      img: "lomba-festivalPAIfair-nasionaljpeg.jpeg", 
      tag: "Prestasi", 
      title: "Festival PAI Fair Nasional", 
      desc: "Perwakilan sekolah di tingkat Kabupaten, Provinsi hingga Nasional.",
      date: "2025"
    },
    { 
      img: "debat-bahasa-indonesia.jpeg", 
      tag: "Lomba", 
      title: "Debat Bahasa Indonesia", 
      desc: "Kompetisi adu gagasan dan retorika tingkat SMA tahun 2025.",
      date: "2025"
    },
    { 
      img: "iht-pm-guru-smanu.jpeg", 
      tag: "Guru", 
      title: "IHT Pembelajaran Mendalam", 
      desc: "Pelatihan peningkatan mutu guru sesuai standar kurikulum pemerintah.",
      date: "2026"
    },
  ];

  const filteredData = filter === 'Semua' 
    ? dataGaleri 
    : dataGaleri.filter(item => item.tag === filter);

  if (!mounted) return null;

  return (
    <div style={{ backgroundColor: '#faf6ef', minHeight: '100vh', paddingBottom: '100px' }}>
      
      {/* 1. HEADER PAGE */}
      <section style={{ 
        background: 'linear-gradient(135deg, #0d4f3c 0%, #062b21 100%)', 
        padding: '120px 5% 80px', 
        color: 'white',
        textAlign: 'center',
        borderRadius: '0 0 80px 80px'
      }}>
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', alignItems: 'center', marginBottom: '20px', opacity: 0.7 }}>
             <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>Beranda</Link> 
             <ChevronRight size={16} /> 
             <span style={{ color: '#c9a227' }}>Galeri</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: '950', letterSpacing: '-2px', marginBottom: '15px' }}>
            LENSA <span style={{ color: '#c9a227' }}>SMAS NU</span>
          </h1>
          <p style={{ maxWidth: '600px', margin: '0 auto', opacity: 0.8, fontSize: '1.1rem' }}>
            Setiap jepretan adalah cerita perjuangan, prestasi, dan dedikasi dalam mencetak generasi unggul.
          </p>
        </motion.div>
      </section>

      {/* 2. FILTER MENU */}
      <section style={{ marginTop: '-40px', padding: '0 5%', zIndex: 20, position: 'relative' }}>
        <div style={{ 
          background: 'white', 
          padding: '15px', 
          borderRadius: '30px', 
          boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
          display: 'flex',
          gap: '10px',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              style={{
                padding: '12px 25px',
                borderRadius: '20px',
                border: 'none',
                background: filter === cat ? '#0d4f3c' : 'transparent',
                color: filter === cat ? '#fff' : '#666',
                fontWeight: '800',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* 3. GALERI GRID */}
      <section style={{ padding: '80px 5%', maxWidth: '1300px', margin: '0 auto' }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
          gap: '30px' 
        }}>
          <AnimatePresence mode='popLayout'>
            {filteredData.map((item, i) => (
              <motion.div
                layout
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -10 }}
                style={{
                  background: 'white',
                  borderRadius: '40px',
                  overflow: 'hidden',
                  boxShadow: '0 15px 35px rgba(0,0,0,0.05)',
                  border: '1px solid #eee'
                }}
              >
                {/* Image Container */}
                <div style={{ height: '280px', overflow: 'hidden', position: 'relative' }}>
                  <img 
                    src={`/${item.img}`} 
                    alt={item.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onError={(e) => { (e.target as any).src = "https://via.placeholder.com/600x400?text=Dokumentasi+SMAS+NU"; }}
                  />
                  <div style={{ 
                    position: 'absolute', top: '20px', left: '20px',
                    background: '#c9a227', color: '#0d4f3c',
                    padding: '5px 15px', borderRadius: '10px',
                    fontSize: '11px', fontWeight: '900'
                  }}>
                    {item.tag}
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: '30px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#666', fontSize: '12px', marginBottom: '10px' }}>
                    <Calendar size={14} /> {item.date}
                  </div>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: '900', color: '#0d4f3c', marginBottom: '12px', lineHeight: 1.2 }}>
                    {item.title}
                  </h3>
                  <p style={{ color: '#777', fontSize: '0.95rem', lineHeight: 1.6 }}>
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* 4. CALL TO ACTION */}
      <section style={{ textAlign: 'center', padding: '50px 5%' }}>
         <div style={{ 
           background: '#0d4f3c', 
           padding: '60px', 
           borderRadius: '50px', 
           color: 'white',
           maxWidth: '800px',
           margin: '0 auto'
         }}>
            <Camera size={50} color="#c9a227" style={{ marginBottom: '20px' }} />
            <h2 style={{ fontWeight: '900' }}>Punya Foto Kegiatan?</h2>
            <p style={{ opacity: 0.7, marginBottom: '30px' }}>Kirimkan dokumentasi kegiatan ekstrakurikuler atau kelasmu ke tim jurnalistik sekolah.</p>
            <button style={{ 
              background: '#c9a227', border: 'none', padding: '15px 40px', 
              borderRadius: '15px', fontWeight: '900', cursor: 'pointer' 
            }}>
              KIRIM FOTO
            </button>
         </div>
      </section>
    </div>
  );
}