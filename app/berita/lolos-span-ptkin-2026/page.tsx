"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowLeft, Award, PartyPopper } from 'lucide-react';
import Link from 'next/link';

export default function DetailBeritaPTKIN() {
  return (
    <div style={{ backgroundColor: '#fcfaf7', minHeight: '100vh' }}>
      {/* TOMBOL KEMBALI */}
      <div style={{ padding: '30px 5%', maxWidth: '1100px', margin: '0 auto' }}>
        <Link href="/berita" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#0d4f3c', textDecoration: 'none', fontWeight: 'bold' }}>
          <ArrowLeft size={20} /> Kembali ke Berita
        </Link>
      </div>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 5% 100px' }}>
        {/* HEADER ARTIKEL */}
        <div style={{ marginBottom: '40px' }}>
          <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
            <span style={{ background: '#0d4f3c', color: '#c9a227', padding: '5px 15px', borderRadius: '50px', fontSize: '12px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '5px' }}>
              <PartyPopper size={14} /> PRESTASI AKADEMIK
            </span>
          </div>
          <h1 style={{ color: '#0d4f3c', fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: '950', lineHeight: 1.2, marginBottom: '20px' }}>
            SEJARAH BARU! Puluhan Siswa SMAS NU Toboali Lolos Seleksi Jalur SPAN-PTKIN 2026
          </h1>
          <div style={{ display: 'flex', gap: '20px', color: '#888', fontSize: '14px', borderBottom: '1px solid #eee', paddingBottom: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><Calendar size={16} /> 15 April 2026</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><User size={16} /> Admin Sekolah</div>
          </div>
        </div>

        {/* GAMBAR POSTER */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ marginBottom: '50px', borderRadius: '30px', overflow: 'hidden', boxShadow: '0 25px 50px rgba(0,0,0,0.1)' }}
        >
          <img 
            src="/PTKIN..jpg" 
            alt="Lolos PTKIN" 
            style={{ width: '100%', height: 'auto', display: 'block' }} 
            onError={(e) => { (e.target as any).src = "https://via.placeholder.com/1200x800?text=Poster+Pengumuman+PTKIN"; }}
          />
        </motion.div>

        {/* KONTEN ARTIKEL */}
        <div style={{ color: '#333', lineHeight: 1.8, fontSize: '1.1rem', textAlign: 'justify' }}>
          <p style={{ marginBottom: '20px' }}>
            <strong>TOBOALI, SMAS NU</strong> — Suasana haru dan bangga menyelimuti keluarga besar SMAS NU Toboali hari ini. Berdasarkan pengumuman resmi jalur Seleksi Prestasi Akademik Nasional Perguruan Tinggi Keagamaan Islam Negeri (SPAN-PTKIN) 2026, puluhan siswa-siswi terbaik kami dinyatakan lulus dan diterima di berbagai universitas Islam ternama di Indonesia.
          </p>
          
          <div style={{ background: '#0d4f3c', color: 'white', padding: '30px', borderRadius: '25px', marginBottom: '30px', marginTop: '30px' }}>
            <h3 style={{ color: '#c9a227', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 'bold' }}>
              <Award size={24} /> Pesan Kepala Sekolah
            </h3>
            <p style={{ fontStyle: 'italic', fontSize: '1rem' }}>
              "Ini adalah buah dari doa, kerja keras siswa, dan bimbingan bapak/ibu guru. Lolosnya siswa-siswi kami ke PTKIN membuktikan bahwa lulusan SMAS NU Toboali memiliki daya saing yang tinggi dan kualitas akademik yang mumpuni untuk melanjutkan pendidikan ke jenjang yang lebih tinggi." 
              <br/><br/><strong>— Azharudin, S.Pd., M.E.</strong>
            </p>
          </div>

          <p style={{ marginBottom: '20px' }}>
            Para siswa tersebar di berbagai program studi favorit, mulai dari Perbankan Syariah, Hukum Keluarga Islam, hingga Pendidikan Agama Islam. Kampus-kampus tujuan meliputi UIN Sunan Kalijaga Yogyakarta, UIN Syarif Hidayatullah Jakarta, dan UIN Raden Fatah Palembang.
          </p>

          <p style={{ marginBottom: '20px' }}>
            Prestasi ini juga diharapkan menjadi motivasi bagi adik-adik kelas X dan XI untuk terus meningkatkan prestasi akademik maupun non-akademik. SMAS NU Toboali terus berkomitmen mencetak generasi yang tidak hanya unggul secara intelektual, tapi juga kokoh secara spiritual sesuai nilai-nilai Ahlussunnah wal Jamaah.
          </p>
        </div>

        {/* FOOTER ARTIKEL */}
        <div style={{ marginTop: '60px', borderTop: '2px dashed #eee', paddingTop: '30px', textAlign: 'center' }}>
          <h4 style={{ color: '#0d4f3c', marginBottom: '20px', fontWeight: 'bold' }}>Bagikan Kabar Bahagia Ini:</h4>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
            <button style={shareButtonStyle}>WhatsApp</button>
            <button style={shareButtonStyle}>Facebook</button>
          </div>
        </div>
      </div>
    </div>
  );
}

const shareButtonStyle: React.CSSProperties = {
  background: 'white', 
  border: '1px solid #eee', 
  padding: '10px 20px', 
  borderRadius: '50px', 
  cursor: 'pointer', 
  fontWeight: 'bold', 
  color: '#0d4f3c',
  transition: '0.3s'
};