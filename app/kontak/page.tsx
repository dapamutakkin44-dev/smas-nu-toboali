"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, MapPin, Clock, MessageCircle, 
  ChevronRight, Home, Mail, Facebook, Instagram 
} from 'lucide-react';
import Link from 'next/link';

export default function KontakPage() {
  const [formData, setFormData] = useState({
    nama: '',
    subjek: 'Informasi PPDB 2026/2027',
    pesan: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const noWA = "6283175213223"; 
    const teksPesan = `Assalamu'alaikum, Admin SMAS NU Toboali.%0A%0A*Nama:* ${formData.nama}%0A*Subjek:* ${formData.subjek}%0A*Pesan:* ${formData.pesan}`;
    window.open(`https://wa.me/${noWA}?text=${teksPesan}`, '_blank');
  };

  return (
    <div style={{ backgroundColor: '#faf6ef', minHeight: '100vh', paddingBottom: '100px', fontFamily: 'sans-serif' }}>
      
      {/* HEADER SECTION */}
      <section style={{ 
        background: 'linear-gradient(135deg, #0d4f3c 0%, #062b21 100%)', 
        padding: '100px 5% 120px', 
        color: 'white',
        textAlign: 'center',
        borderRadius: '0 0 60px 60px'
      }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', alignItems: 'center', marginBottom: '20px', opacity: 0.8, fontSize: '14px' }}>
             <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>Beranda</Link> 
             <ChevronRight size={14} /> 
             <span style={{ color: '#c9a227' }}>Hubungi Kami</span>
        </div>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: '900', marginBottom: '10px' }}>
          PUSAT <span style={{ color: '#c9a227' }}>INFORMASI</span>
        </h1>
        <p style={{ opacity: 0.7 }}>Silakan hubungi kami untuk pertanyaan seputar akademik dan pendaftaran.</p>
      </section>

      {/* MAIN CONTENT */}
      <div style={{ maxWidth: '1200px', margin: '-60px auto 0', padding: '0 5%', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
        
        {/* FORM WHATSAPP */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ background: 'white', padding: '40px', borderRadius: '40px', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}
        >
          <h2 style={{ color: '#0d4f3c', fontWeight: '900', marginBottom: '30px', fontSize: '1.5rem' }}>Kirim Pesan Langsung</h2>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '8px', fontSize: '13px', color: '#666' }}>NAMA LENGKAP</label>
              <input 
                type="text" required
                placeholder="Contoh: Ahmad Fauzi"
                style={{ width: '100%', padding: '15px', borderRadius: '12px', border: '1px solid #ddd', outline: 'none' }}
                onChange={(e) => setFormData({...formData, nama: e.target.value})}
              />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '8px', fontSize: '13px', color: '#666' }}>KEPERLUAN</label>
              <select 
                style={{ width: '100%', padding: '15px', borderRadius: '12px', border: '1px solid #ddd', outline: 'none', background: 'white' }}
                onChange={(e) => setFormData({...formData, subjek: e.target.value})}
              >
                <option>Informasi PPDB 2026/2027</option>
                <option>Layanan Administrasi</option>
                <option>Kritik & Saran</option>
              </select>
            </div>
            <div style={{ marginBottom: '30px' }}>
              <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '8px', fontSize: '13px', color: '#666' }}>PESAN</label>
              <textarea 
                rows={4} required
                placeholder="Tulis pertanyaan Anda..."
                style={{ width: '100%', padding: '15px', borderRadius: '12px', border: '1px solid #ddd', outline: 'none', resize: 'none' }}
                onChange={(e) => setFormData({...formData, pesan: e.target.value})}
              ></textarea>
            </div>
            <button type="submit" style={{ 
              width: '100%', background: '#0d4f3c', color: 'white', padding: '18px', 
              borderRadius: '12px', border: 'none', fontWeight: 'bold', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px'
            }}>
              KIRIM KE WHATSAPP <MessageCircle size={20} />
            </button>
          </form>
        </motion.div>

        {/* INFO & MAPS */}
        <div style={{ display: 'grid', gap: '25px' }}>
          
          {/* KARTU ALAMAT */}
          <div style={{ background: '#0d4f3c', padding: '30px', borderRadius: '35px', color: 'white' }}>
            <div style={{ display: 'flex', gap: '15px', marginBottom: '20px' }}>
              <MapPin color="#c9a227" />
              <div>
                <strong style={{ display: 'block', color: '#c9a227' }}>Alamat Sekolah:</strong>
                <span style={{ fontSize: '14px', opacity: 0.9 }}>Jl. Raya Rias, Desa Rias, Kec. Toboali, Bangka Selatan.</span>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '15px' }}>
              <Phone color="#c9a227" />
              <div>
                <strong style={{ display: 'block', color: '#c9a227' }}>Kontak Ustadz Azhar:</strong>
                <span style={{ fontSize: '14px', opacity: 0.9 }}>+62 831-7521-3223</span>
              </div>
            </div>
          </div>

          {/* GOOGLE MAPS - VERSI FIX */}
          <div style={{ 
            height: '350px', 
            borderRadius: '35px', 
            overflow: 'hidden', 
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
            border: '4px solid white',
            background: '#eee'
          }}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15941.743110034604!2d106.4445353!3d-3.0031853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e392576b971e411%3A0x6a096a603c4f74d0!2sSMAS%20NU%20Toboali!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
            ></iframe>
          </div>

        </div>
      </div>
    </div>
  );
}