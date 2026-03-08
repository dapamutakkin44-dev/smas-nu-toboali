"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Trophy, Star, Shield, Heart, 
  Languages, Mic2, FlaskConical, Palette,
  MapPin, Instagram, Facebook, Mail 
} from 'lucide-react';

export default function EkskulPage() {
  const ekskuls = [
    { 
      name: 'Olimpiade Sains (OSN)', 
      icon: <FlaskConical size={40} />, 
      desc: 'Pembinaan intensif bidang Matematika, Fisika, Biologi, Kimia, Astronomi, dan Ekonomi.' 
    },
    { 
      name: 'FLS2N', 
      icon: <Palette size={40} />, 
      desc: 'Wadah kreativitas siswa dalam bidang seni, vokal, desain poster, dan baca puisi.' 
    },
    { 
      name: 'Debat Bahasa', 
      icon: <Languages size={40} />, 
      desc: 'Latihan debat formal dalam Bahasa Indonesia dan Inggris untuk mengasah berpikir kritis.' 
    },
    { 
      name: 'Pramuka', 
      icon: <Shield size={40} />, 
      desc: 'Ekstrakurikuler wajib untuk membentuk kedisiplinan dan jiwa kepemimpinan.' 
    },
    { 
      name: 'Seni Musik/Hadroh', 
      icon: <Mic2 size={40} />, 
      desc: 'Mengembangkan bakat seni suara dan pelestarian budaya Islami.' 
    },
    { 
      name: 'PMR & UKS', 
      icon: <Heart size={40} />, 
      desc: 'Pelatihan kesehatan remaja dan kesiapsiagaan bantuan pertama.' 
    }
  ];

  return (
    <div style={{ backgroundColor: '#fcfaf7', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* 1. HEADER GAHAR */}
      <section style={{ 
        background: 'linear-gradient(135deg, #0d4f3c 0%, #062b21 100%)', 
        padding: '140px 5% 80px', color: 'white', textAlign: 'center', 
        borderRadius: '0 0 60px 60px' 
      }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 style={{ fontSize: 'clamp(2.2rem, 8vw, 3.5rem)', fontWeight: '900', margin: 0 }}>
            MINAT, BAKAT & <span style={{ color: '#c9a227' }}>PRESTASI</span>
          </h1>
          <div style={{ height: '5px', width: '80px', background: '#c9a227', margin: '20px auto', borderRadius: '10px' }} />
          <p style={{ opacity: 0.8, maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem' }}>
            SMAS NU Toboali aktif mencetak prestasi melalui ajang OSN, FLS3N, hingga kompetisi debat tingkat daerah dan nasional.
          </p>
        </motion.div>
      </section>

      {/* 2. GRID KONTEN EKSKUL */}
      <main style={{ flex: 1, padding: '80px 5%', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          {ekskuls.map((e, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -12, boxShadow: '0 25px 50px rgba(13, 79, 60, 0.12)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{ 
                background: 'white', 
                padding: '45px 30px', 
                borderRadius: '40px', 
                textAlign: 'center', 
                border: '1px solid #eee',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{ color: '#c9a227', marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
                {e.icon}
              </div>
              <h3 style={{ color: '#0d4f3c', fontWeight: '900', fontSize: '1.5rem', marginBottom: '12px' }}>{e.name}</h3>
              <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: 1.7 }}>{e.desc}</p>
              
              {/* Efek watermark di tiap kotak */}
              <div style={{ position: 'absolute', bottom: '-15px', right: '-15px', opacity: 0.03, color: '#0d4f3c' }}>
                <Trophy size={100} />
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      {/* 3. FOOTER IDENTITAS */}
      <footer style={{ background: '#0d4f3c', paddingTop: '100px', borderRadius: '100px 100px 0 0', color: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 5% 60px' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <div style={{ fontSize: '3.5rem', fontWeight: 'bold', color: '#c9a227', marginBottom: '10px', fontFamily: 'serif' }}>
              حِمَايَةُ الدِّيْنِ وَالدَّوْلَةِ
            </div>
            <h3 style={{ fontSize: '1.8rem', fontWeight: '950', letterSpacing: '4px' }}>HIMAYATUDDIN WAD DAULAH</h3>
            <p style={{ color: '#c9a227', fontWeight: '700', fontSize: '1.2rem', fontStyle: 'italic' }}>"Berguna Bagi Agama dan Negara"</p>
          </div>

          <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '50px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '30px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <MapPin color="#c9a227" size={30} />
              <p style={{ margin: 0, fontSize: '0.9rem', opacity: 0.8 }}>Jl. Raya Rias, Desa Rias, Kec. Toboali, Kab. Bangka Selatan</p>
            </div>
            <div style={{ display: 'flex', gap: '20px' }}>
              <Instagram size={24} className="cursor-pointer hover:text-yellow-500" /> 
              <Facebook size={24} className="cursor-pointer hover:text-yellow-500" /> 
              <Mail size={24} className="cursor-pointer hover:text-yellow-500" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}