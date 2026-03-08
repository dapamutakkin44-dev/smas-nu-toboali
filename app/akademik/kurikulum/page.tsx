"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, Layers, GraduationCap, Star, 
  CheckCircle2, Info, MapPin, Instagram, Facebook, Mail 
} from 'lucide-react';

export default function KurikulumPage() {
  return (
    <div style={{ backgroundColor: '#fcfaf7', minHeight: '100vh' }}>
      
      {/* 1. HERO SECTION */}
      <section style={{ 
        background: 'linear-gradient(135deg, #0d4f3c 0%, #062b21 100%)', 
        padding: '140px 5% 80px', color: 'white', textAlign: 'center',
        borderRadius: '0 0 60px 60px'
      }}>
        <motion.h1 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }}
          style={{ fontSize: '3.5rem', fontWeight: '900', margin: 0 }}
        >
          STRUKTUR <span style={{ color: '#c9a227' }}>KURIKULUM</span>
        </motion.h1>
        <p style={{ opacity: 0.8, maxWidth: '700px', margin: '15px auto' }}>
          Perpaduan Standar Nasional dan Nilai Luhur Pesantren guna mencetak generasi yang intelek dan berakhlak.
        </p>
      </section>

      {/* 2. DUAL KURIKULUM (MERDEKA & KTSP) */}
      <section style={{ padding: '80px 5%', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}>
          
          {/* KARTU KURIKULUM MERDEKA */}
          <motion.div whileHover={{ scale: 1.02 }} style={cardStyle}>
            <div style={badgeStyle}>KELAS X & XI</div>
            <h2 style={{ color: '#0d4f3c', fontWeight: '900' }}>Kurikulum Merdeka</h2>
            <p style={{ color: '#666' }}>
              Fokus pada pengembangan karakter (P5) dan materi esensial. Di Kelas X, siswa mempelajari **Mata Pelajaran Umum** secara menyeluruh sebagai pondasi sebelum menentukan arah minat.
            </p>
          </motion.div>

          {/* KARTU KTSP */}
          <motion.div whileHover={{ scale: 1.02 }} style={cardStyle}>
            <div style={badgeStyle}>KELAS XII</div>
            <h2 style={{ color: '#0d4f3c', fontWeight: '900' }}>KTSP 2013</h2>
            <p style={{ color: '#666' }}>
              Diterapkan secara intensif untuk Kelas XII guna mempersiapkan kelulusan dan seleksi masuk perguruan tinggi dengan pendalaman materi sesuai jurusan.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. SISTEM PEMINATAN (IPA/IPS) */}
      <section style={{ padding: '60px 5%', background: '#f0ede6' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <Info color="#c9a227" size={40} style={{ marginBottom: '20px' }} />
          <h2 style={{ color: '#0d4f3c', fontWeight: '900', fontSize: '2rem' }}>Sistem Peminatan</h2>
          <p style={{ lineHeight: 1.8, color: '#444' }}>
            Pada jenjang **Kelas XII**, siswa mulai difokuskan pada peminatan **IPA (Ilmu Pengetahuan Alam)** atau **IPS (Ilmu Pengetahuan Sosial)**. Pemilihan ini didasarkan pada minat, bakat, dan hasil observasi akademik selama di kelas X dan XI.
          </p>
        </div>
      </section>

      {/* 4. INTEGRASI PESANTREN */}
      <section style={{ padding: '80px 5%', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ background: '#0d4f3c', color: 'white', borderRadius: '50px', padding: '60px', position: 'relative', overflow: 'hidden' }}>
          <BookOpen size={250} style={{ position: 'absolute', right: '-50px', bottom: '-50px', opacity: 0.1 }} />
          <div style={{ position: 'relative', zIndex: 10 }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '900', color: '#c9a227' }}>Terintegrasi Pondok Pesantren</h2>
            <p style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '20px 0', opacity: 0.9 }}>
              Seluruh jenjang pendidikan di SMAS NU Toboali wajib mengikuti muatan lokal Ke-NU-an dan kurikulum pesantren yang meliputi:
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' }}>
              {['Kajian Kitab Kuning', 'Nahwu & Shorof', 'Aqidah Aswaja', 'Adab & Akhlak'].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', background: 'rgba(255,255,255,0.1)', padding: '15px', borderRadius: '15px' }}>
                  <CheckCircle2 color="#c9a227" size={20} /> {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER TETAP */}
      <footer style={{ background: '#0d4f3c', padding: '80px 5%', color: 'white', textAlign: 'center', marginTop: '100px' }}>
        <h2 style={{ color: '#c9a227', fontFamily: 'serif' }}>حِمَايَةُ الدِّيْنِ وَالدَّوْلَةِ</h2>
        <p>© 2026 SMAS NU TOBOALI</p>
      </footer>
    </div>
  );
}

const cardStyle = {
  background: 'white',
  padding: '50px 40px',
  borderRadius: '40px',
  boxShadow: '0 20px 50px rgba(0,0,0,0.03)',
  border: '1px solid #eee',
  position: 'relative' as 'relative'
};

const badgeStyle = {
  background: '#c9a227',
  color: '#0d4f3c',
  padding: '5px 15px',
  borderRadius: '10px',
  fontWeight: '900',
  fontSize: '12px',
  display: 'inline-block',
  marginBottom: '20px'
};