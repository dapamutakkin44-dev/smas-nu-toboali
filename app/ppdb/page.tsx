"use client";

import React, { useState, CSSProperties } from 'react';
import { motion } from 'framer-motion';
import { Send, User, Users, CheckCircle2, FileText, Info, Calendar, Home } from 'lucide-react';

export default function PPDBPage() {
  const [formData, setFormData] = useState({
    namaLengkap: '',
    nik: '',
    tempatLahir: '',
    tanggalLahir: '',
    asalSekolah: '',
    namaWali: '',
    noWaOrtu: '',
    alamat: '',
  });

  const emailSekolah = "smanutoboali@gmail.com";

  const handleKirimData = (e: React.FormEvent) => {
    e.preventDefault();
    const subjekEmail = `PPDB 2026 - ${formData.namaLengkap} (${formData.asalSekolah})`;
    const isiPesan = `
DATA PENDAFTAR BARU SMAS NU TOBOALI
-----------------------------------
NAMA LENGKAP  : ${formData.namaLengkap}
NIK           : ${formData.nik}
TTL           : ${formData.tempatLahir}, ${formData.tanggalLahir}
ASAL SEKOLAH  : ${formData.asalSekolah}

DATA ORANG TUA / WALI
---------------------
NAMA WALI     : ${formData.namaWali}
NO. WHATSAPP  : ${formData.noWaOrtu}
ALAMAT        : ${formData.alamat}
    `;

    const mailtoLink = `mailto:${emailSekolah}?subject=${encodeURIComponent(subjekEmail)}&body=${encodeURIComponent(isiPesan)}`;
    const noWAAdmin = "6283175213223"; 
    const waLink = `https://wa.me/${noWAAdmin}?text=${encodeURIComponent("Assalamu'alaikum Admin, saya pendaftar baru SMAS NU Toboali:\n" + isiPesan)}`;

    window.location.href = mailtoLink;
    setTimeout(() => {
      window.open(waLink, '_blank');
    }, 2000);
  };

  return (
    <div style={{ backgroundColor: '#fcfaf7', minHeight: '100vh', padding: '40px 5%' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        
        {/* HEADER */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{ display: 'inline-block', background: '#0d4f3c', color: 'white', padding: '8px 20px', borderRadius: '50px', fontSize: '12px', fontWeight: 'bold', marginBottom: '15px' }}>
            SPMB TAHUN PELAJARAN 2026/2027
          </div>
          <h1 style={{ color: '#0d4f3c', fontWeight: '900', fontSize: '2.5rem', letterSpacing: '-1.5px' }}>PENERIMAAN MURID BARU</h1>
          <div style={{ height: '5px', width: '60px', background: '#c9a227', margin: '15px auto', borderRadius: '10px' }}></div>
        </div>

        {/* ALUR & SYARAT */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginBottom: '40px' }}>
          
          {/* ALUR PENDAFTARAN */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} style={infoCardStyle}>
            <h3 style={cardTitleStyle}><Calendar size={20} color="#c9a227" /> ALUR PENDAFTARAN</h3>
            <div style={itemStyle}><strong>Gelombang 1:</strong> 1 Januari - 31 Maret</div>
            <div style={itemStyle}><strong>Gelombang 2:</strong> 1 April - 30 Juni</div>
            <div style={{...itemStyle, color: '#d32f2f', fontWeight: 'bold', marginTop: '12px', borderTop: '1px solid #eee', paddingTop: '10px'}}>
              <Home size={16} /> WAJIB TINGGAL DI ASRAMA
            </div>
          </motion.div>

          {/* SYARAT PENDAFTARAN */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} style={infoCardStyle}>
            <h3 style={cardTitleStyle}><FileText size={20} color="#c9a227" /> SYARAT PENDAFTARAN</h3>
            <ul style={listStyle}>
              <li>Mengisi Formulir Pendaftaran Online</li>
              <li>Fotokopi Akta Kelahiran & KK</li>
              <li>Fotokopi KTP Orang Tua/Wali</li>
              <li>Pas Foto Berwarna 3x4 (4 Lembar)</li>
              <li>Fotokopi Rapor Semester Terakhir</li>
              <li>Surat Keterangan Lulus (SKL)</li>
            </ul>
          </motion.div>
        </div>

        {/* FORMULIR */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} style={formContainerStyle}>
          <form onSubmit={handleKirimData}>
            <h3 style={sectionTitleStyle}>
              <div style={iconCircleStyle}><User size={18} color="#0d4f3c" /></div> 
              FORMULIR PENDAFTARAN ONLINE
            </h3>
            
            <div style={gridStyle}>
              <div style={{ gridColumn: 'span 2' }}>
                <label style={labelStyle}>Nama Lengkap (Sesuai Ijazah)</label>
                <input type="text" required style={inputStyle} placeholder="Nama calon siswa..." onChange={(e) => setFormData({...formData, namaLengkap: e.target.value})} />
              </div>
              <div>
                <label style={labelStyle}>NIK Siswa</label>
                <input type="number" required style={inputStyle} placeholder="16 Digit NIK" onChange={(e) => setFormData({...formData, nik: e.target.value})} />
              </div>
              <div>
                <label style={labelStyle}>Asal Sekolah (SMP/MTs)</label>
                <input type="text" required style={inputStyle} placeholder="Sekolah asal..." onChange={(e) => setFormData({...formData, asalSekolah: e.target.value})} />
              </div>
              <div>
                <label style={labelStyle}>Tempat Lahir</label>
                <input type="text" required style={inputStyle} onChange={(e) => setFormData({...formData, tempatLahir: e.target.value})} />
              </div>
              <div>
                <label style={labelStyle}>Tanggal Lahir</label>
                <input type="date" required style={inputStyle} onChange={(e) => setFormData({...formData, tanggalLahir: e.target.value})} />
              </div>
              <div style={{ gridColumn: 'span 2' }}>
                <label style={labelStyle}>Nama Orang Tua/Wali</label>
                <input type="text" required style={inputStyle} onChange={(e) => setFormData({...formData, namaWali: e.target.value})} />
              </div>
              <div style={{ gridColumn: 'span 2' }}>
                <label style={labelStyle}>Nomor WhatsApp Aktif</label>
                <input type="tel" required style={inputStyle} placeholder="08..." onChange={(e) => setFormData({...formData, noWaOrtu: e.target.value})} />
              </div>
              <div style={{ gridColumn: 'span 2' }}>
                <label style={labelStyle}>Alamat Lengkap</label>
                <textarea rows={3} style={inputStyle} placeholder="Dusun, Desa, Kecamatan..." onChange={(e) => setFormData({...formData, alamat: e.target.value})}></textarea>
              </div>
            </div>

            <button type="submit" style={submitButtonStyle}>
              DAFTAR SEKARANG <Send size={20} />
            </button>

            <div style={{ textAlign: 'center', marginTop: '20px' }}>
              <span style={{ fontSize: '12px', color: '#888', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px' }}>
                <Info size={14} /> Berkas fisik & info biaya hubungi sekretariat pendaftaran.
              </span>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}

// STYLES (DENGAN FIX TYPESCRIPT)
const infoCardStyle: CSSProperties = {
  background: 'white', borderRadius: '20px', padding: '25px', 
  boxShadow: '0 10px 30px rgba(0,0,0,0.05)', border: '1px solid #eee'
};

const cardTitleStyle: CSSProperties = {
  display: 'flex', alignItems: 'center', gap: '10px', 
  color: '#0d4f3c', marginTop: 0, marginBottom: '20px', fontSize: '1.1rem', fontWeight: '800'
};

const itemStyle: CSSProperties = { fontSize: '14px', marginBottom: '8px', color: '#444', display: 'flex', alignItems: 'center', gap: '8px' };

const listStyle: CSSProperties = { 
  margin: 0, paddingLeft: '20px', fontSize: '13px', color: '#555', lineHeight: '1.8' 
};

const formContainerStyle: CSSProperties = {
  background: 'white', borderRadius: '30px', padding: '40px', 
  boxShadow: '0 30px 60px rgba(13, 79, 60, 0.1)', border: '1px solid #f0f0f0'
};

const sectionTitleStyle: CSSProperties = {
  display: 'flex', alignItems: 'center', gap: '12px', color: '#0d4f3c', marginBottom: '30px', fontWeight: '900'
};

const iconCircleStyle: CSSProperties = {
  background: '#f0f7f4', padding: '10px', borderRadius: '12px', display: 'flex', alignItems: 'center'
};

const gridStyle: CSSProperties = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' };

const labelStyle: CSSProperties = { display: 'block', fontSize: '11px', fontWeight: '800', color: '#999', marginBottom: '8px', textTransform: 'uppercase' };

const inputStyle: CSSProperties = {
  width: '100%', padding: '15px', borderRadius: '12px', border: '2px solid #f5f5f5', 
  background: '#fafafa', outline: 'none', fontSize: '14px', boxSizing: 'border-box'
};

const submitButtonStyle: CSSProperties = {
  width: '100%', background: '#0d4f3c', color: 'white', padding: '20px', borderRadius: '15px', 
  border: 'none', fontWeight: '900', fontSize: '1rem', cursor: 'pointer', marginTop: '30px',
  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', boxShadow: '0 10px 20px rgba(13, 79, 60, 0.2)'
};