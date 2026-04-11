"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Share2, Award, Search, BookOpen, PartyPopper } from 'lucide-react';
import Link from 'next/link';

export default function BeritaPage() {
  const [searchTerm, setSearchTerm] = useState('');

  // ==========================================
  // DATA BERITA (UPDATE: PTKIN SUDAH MASUK!)
  // ==========================================
  const dataBerita = [
    {
      id: 1,
      judul: "SEJARAH BARU! Siswa SMAS NU Toboali Lolos Seleksi Jalur SPAN-PTKIN 2026",
      slug: "lolos-span-ptkin-2026",
      tanggal: "15 April 2026",
      penulis: "Admin Sekolah",
      kategori: "PRESTASI AKADEMIK",
      ringkasan: "Alhamdulillah! Kebanggaan luar biasa bagi keluarga besar SMAS NU Toboali. Tahun ini siswa-siswi kita kembali mengukir prestasi dengan lolos seleksi masuk Perguruan Tinggi Keagamaan Islam Negeri (PTKIN) di berbagai kampus ternama Indonesia.",
      gambar: "/lolos-span-ptkin.png", // Menggunakan file desain Mimin
      linkAsli: "" 
    },
    {
      id: 2,
      judul: "Luar Biasa! Siswi SMAS NU Toboali Dipercaya Menjadi Penceramah dalam Roadshow Ramadan Kemenag Basel",
      slug: "siswi-nu-penceramah-ramadan",
      tanggal: "12 Maret 2026",
      penulis: "Admin Sekolah",
      kategori: "PRESTASI UNGGULAN",
      ringkasan: "Sebuah kebanggaan bagi keluarga besar SMAS NU Toboali, siswi kami sukses menjadi penceramah dalam kegiatan Roadshow Ramadan Kemenag Bangka Selatan. Hal ini membuktikan kualitas pembinaan karakter.",
      gambar: "/safari-ramadan.jpeg",
      linkAsli: "https://www.facebook.com/100058740190399/posts/1433395045295155"
    },
    {
      id: 3,
      judul: "Pendaftaran Murid Baru (SPMB) SMAS NU Toboali Tahun 2026 Resmi Dibuka",
      slug: "ppdb-2026",
      tanggal: "01 April 2026",
      penulis: "Panitia PPDB",
      kategori: "INFO PENDAFTARAN",
      ringkasan: "Dapatkan kesempatan belajar dengan fasilitas lengkap, asrama, dan program unggulan Tahfidz serta Kitab Kuning. Segera daftarkan diri Anda dan raih masa depan gemilang bersama kami!",
      gambar: "/foto-promosi.png",
      linkAsli: "" 
    }
  ];

  const filteredBerita = dataBerita.filter(berita => 
    berita.judul.toLowerCase().includes(searchTerm.toLowerCase()) ||
    berita.kategori.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ backgroundColor: '#fcfaf7', minHeight: '100vh', padding: '50px 5%' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        
        {/* HEADER & SEARCH SECTION */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h1 style={{ color: '#0d4f3c', fontWeight: '900', fontSize: '2.8rem', marginBottom: '15px' }}>Warta Sekolah</h1>
          <div style={{ height: '4px', width: '80px', background: '#c9a227', margin: '0 auto 30px' }}></div>
          
          <div style={{ position: 'relative', maxWidth: '500px', margin: '0 auto' }}>
            <Search style={{ position: 'absolute', left: '20px', top: '50%', transform: 'translateY(-50%)', color: '#888' }} size={20} />
            <input 
              type="text" 
              placeholder="Cari berita atau kegiatan..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={searchBarStyle}
            />
          </div>
        </div>

        {/* LIST BERITA GRID */}
        {filteredBerita.length > 0 ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '40px' }}>
            {filteredBerita.map((item) => (
              <motion.div 
                key={item.id} 
                whileHover={{ y: -10 }} 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                style={cardStyle}
              >
                <div style={{ height: '260px', overflow: 'hidden', backgroundColor: '#eee', position: 'relative' }}>
                  <img 
                    src={item.gambar} 
                    alt="thumbnail" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onError={(e) => { (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x250?text=Gambar+Belum+Ada'; }}
                  />
                  {/* Label Khusus buat Berita PTKIN */}
                  {item.id === 1 && (
                    <div style={topBadgeStyle}>
                      <PartyPopper size={14} /> TERBARU
                    </div>
                  )}
                </div>
                
                <div style={{ padding: '30px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                    <span style={badgeStyle}>{item.kategori}</span>
                    <span style={{ fontSize: '12px', color: '#999', display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <Calendar size={14} /> {item.tanggal}
                    </span>
                  </div>
                  
                  <h3 style={{ color: '#0d4f3c', fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '15px', lineHeight: '1.4' }}>{item.judul}</h3>
                  <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.7', marginBottom: '25px', flexGrow: 1 }}>
                    {item.ringkasan}
                  </p>

                  <div style={{ display: 'flex', gap: '15px', marginTop: 'auto' }}>
                    {item.linkAsli ? (
                      <button onClick={() => window.open(item.linkAsli, '_blank')} style={fbButtonStyle}>
                        Baca di Facebook <Share2 size={16} />
                      </button>
                    ) : (
                      <Link href={item.id === 1 ? "/berita/lolos-span-ptkin-2026" : "/ppdb"} style={ppdbButtonStyle}>
                        {item.id === 1 ? "Lihat Detail" : "Daftar Sekarang"} <ArrowRight size={16} />
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div style={{ textAlign: 'center', marginTop: '80px', color: '#888' }}>
            <BookOpen size={48} color="#ddd" style={{ marginBottom: '20px' }} />
            <p>Maaf, berita yang Mimin cari tidak ditemukan.</p>
          </div>
        )}

      </div>
    </div>
  );
}

// CSS STYLES
const cardStyle: React.CSSProperties = {
  background: 'white', borderRadius: '25px', overflow: 'hidden',
  boxShadow: '0 15px 40px rgba(13, 79, 60, 0.05)', border: '1px solid #eee',
  display: 'flex', flexDirection: 'column'
};

const topBadgeStyle: React.CSSProperties = {
  position: 'absolute', top: '20px', left: '20px', background: '#0d4f3c',
  color: '#c9a227', padding: '8px 15px', borderRadius: '12px', fontSize: '12px',
  fontWeight: '900', display: 'flex', alignItems: 'center', gap: '8px',
  boxShadow: '0 10px 20px rgba(0,0,0,0.2)'
};

const badgeStyle: React.CSSProperties = {
  background: '#fdf8e9', color: '#c9a227', padding: '6px 15px', borderRadius: '50px',
  fontSize: '11px', fontWeight: 'bold'
};

const searchBarStyle: React.CSSProperties = {
  width: '100%', padding: '15px 15px 15px 60px', borderRadius: '50px',
  border: '2px solid #eee', fontSize: '16px', outline: 'none', background: 'white'
};

const fbButtonStyle: React.CSSProperties = {
  background: '#1877F2', color: 'white', border: 'none', padding: '12px 25px',
  borderRadius: '12px', fontWeight: 'bold', cursor: 'pointer',
  display: 'flex', alignItems: 'center', gap: '10px'
};

const ppdbButtonStyle: React.CSSProperties = {
  background: '#0d4f3c', color: 'white', padding: '12px 25px',
  borderRadius: '12px', fontWeight: 'bold', textDecoration: 'none',
  display: 'flex', alignItems: 'center', gap: '10px'
};