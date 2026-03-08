"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, Flag, Award } from 'lucide-react';

export default function SejarahPage() {
  return (
    <div style={{ backgroundColor: '#faf6ef', minHeight: '100vh', padding: '120px 5% 80px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        
        {/* JUDUL BESAR */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h1 style={{ color: '#0d4f3c', fontSize: '3rem', fontWeight: '900', marginBottom: '10px' }}>SEJARAH SINGKAT</h1>
          <div style={{ width: '100px', height: '5px', background: '#c9a227', margin: '0 auto' }}></div>
          <p style={{ marginTop: '20px', color: '#666', fontSize: '1.1rem', fontWeight: 'bold' }}>SMAS NU TOBOALI - MA'ARIF NU BANGKA SELATAN</p>
        </div>

        {/* TIMELINE NARRATIVE */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
          
          {/* TAHUN 2020 */}
          <div style={{ display: 'flex', gap: '20px', background: 'white', padding: '30px', borderRadius: '20px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}>
            <div style={{ background: '#0d4f3c', width: '50px', height: '50px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Calendar color="white" />
            </div>
            <div>
              <h3 style={{ color: '#0d4f3c', marginTop: 0 }}>2020: Gagasan & Niat Suci</h3>
              <p style={{ lineHeight: 1.7, color: '#444' }}>Didasari semangat untuk mencetak generasi yang unggul dalam Imtaq dan Iptek, para tokoh Ma'arif NU Bangka Selatan mulai merumuskan pendirian SMAS NU Toboali sebagai wadah pendidikan formal berbasis pesantren.</p>
            </div>
          </div>

          {/* TAHUN 2021-2022 */}
          <div style={{ display: 'flex', gap: '20px', background: 'white', padding: '30px', borderRadius: '20px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}>
            <div style={{ background: '#0d4f3c', width: '50px', height: '50px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Flag color="white" />
            </div>
            <div>
              <h3 style={{ color: '#0d4f3c', marginTop: 0 }}>2021 - 2022: Pembangunan & Izin</h3>
              <p style={{ lineHeight: 1.7, color: '#444' }}>Masa perjuangan fisik dan administrasi. Pembangunan gedung dilakukan di lokasi strategis Toboali sembari mengurus segala kelengkapan izin operasional agar sesuai dengan standar nasional pendidikan.</p>
            </div>
          </div>

          {/* TAHUN 2023 */}
          <div style={{ display: 'flex', gap: '20px', background: '#0d4f3c', padding: '30px', borderRadius: '20px', boxShadow: '0 10px 20px rgba(0,0,0,0.1)', color: 'white' }}>
            <div style={{ background: '#c9a227', width: '50px', height: '50px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Award color="#0d4f3c" />
            </div>
            <div>
              <h3 style={{ color: '#c9a227', marginTop: 0 }}>2023: Peresmian & Angkatan Pertama</h3>
              <p style={{ lineHeight: 1.7, opacity: 0.9 }}>Alhamdulillah, pada tahun 2023 SMAS NU Toboali resmi beroperasi dan menerima santri angkatan pertama. Sekolah ini menjadi tonggak sejarah baru pendidikan NU di wilayah Bangka Selatan.</p>
            </div>
          </div>

        </div>

        {/* KATA PENUTUP */}
        <div style={{ marginTop: '50px', textAlign: 'center', fontStyle: 'italic', color: '#888' }}>
          <p>"Membangun Peradaban, Menjaga Tradisi, Mengukir Prestasi."</p>
        </div>
      </div>
    </div>
  );
}