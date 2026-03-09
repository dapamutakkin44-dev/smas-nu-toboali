"use client";

import React, { useState, CSSProperties } from 'react';
import { motion } from 'framer-motion';
import { Send, User, Users, CheckCircle2, FileText, Info, GraduationCap } from 'lucide-react';

export default function PPDBPage() {
  const [formData, setFormData] = useState({
    namaLengkap: '',
    nik: '',
    tempatLahir: '',
    tanggalLahir: '',
    jenisKelamin: 'Laki-laki',
    asalSekolah: '',
    namaWali: '',
    noWaOrtu: '',
    alamat: '',
    pilihanJurusan: 'Fase E (Umum)'
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
JENIS KELAMIN : ${formData.jenisKelamin}
ASAL SEKOLAH  : ${formData.asalSekolah}

DATA ORANG TUA / WALI
---------------------
NAMA WALI     : ${formData.namaWali}
NO. WHATSAPP  : ${formData.noWaOrtu}
ALAMAT        : ${formData.alamat}
    `;

    const mailtoLink = `mailto:${emailSekolah}?subject=${encodeURIComponent(subjekEmail)}&body=${encodeURIComponent(isiPesan)}`;
    const noWAAdmin = "6283175213223"; 
    const waLink = `https://wa.me/${noWAAdmin}?text=${encodeURIComponent("Assalamu'alaikum Admin, saya baru saja mendaftar PPDB Online:\n" + isiPesan)}`;

    window.location.href = mailtoLink;
    setTimeout(() => {
      window.open(waLink, '_blank');
    }, 2000);
  };

  return (
    <div style={{ backgroundColor: '#fcfaf7', minHeight: '100vh', padding: '40px 5%' }}>
      <div style={{ maxWidth: '850px', margin: '0 auto' }}>
        
        {/* HEADER SECTION */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{ display: 'inline-block', background: '#0d4f3c', color: 'white', padding: '8px 20px', borderRadius: '50px', fontSize: '12px', fontWeight: 'bold', marginBottom: '15px' }}>
            TAHUN PELAJARAN 2026/2027
          </div>
          <h1 style={{ color: '#0d4f3c', fontWeight: '900', fontSize: '2.5rem', letterSpacing: '-1.5px', marginBottom: '10px' }}>PPDB ONLINE</h1>
          <p style={{ color: '#666', fontSize: '1rem' }}>Sistem Pendaftaran Peserta Didik Baru SMAS NU Toboali</p>
          <div style={{ height: '5px', width: '60px', background: '#c9a227', margin: '15px auto', borderRadius: '10px' }}></div>
        </div>

        {/* PERSYARATAN SECTION - BIAR GAK DITANYA TERUS SAMA WALI MURID */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          style={persyaratanCardStyle}
        >
          <h3 style={{ color: '#0d4f3c', display: 'flex', alignItems: 'center', gap: '10px', marginTop: 0, fontWeight: '900', fontSize: '1.2rem' }}>
            <FileText size={22} color="#c9a227" /> PERSYARATAN PENDAFTARAN
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '10px', marginTop: '15px' }}>
            <div style={listWrapStyle}>
              <CheckCircle2 size={16} color="#0d4f3c" /> <span>Fotocopy Ijazah SMP/MTs (2 Lbr)</span>
            </div>
            <div style={listWrapStyle}>
              <CheckCircle2 size={16} color="#0d4f3c" /> <span>Fotocopy Akta & KK (2 Lbr)</span>
            </div>
            <div style={listWrapStyle}>
              <CheckCircle2 size={16} color="#0d4f3c" /> <span>Pas Foto 3x4 Merah (4 Lbr)</span>
            </div>
            <div style={listWrapStyle}>
              <CheckCircle2 size={16} color="#0d4f3c" /> <span>Fotocopy KTP Orang Tua/Wali</span>
            </div>
          </div>
          <div style={infoBoxStyle}>
            <Info size={18} color="#c9a227" />
            <span>Berkas fisik diserahkan ke Panitia di Sekolah (Jam Kerja: 07.30 - 13.00 WIB).</span>
          </div>
        </motion.div>

        {/* FORMULIR PENDAFTARAN */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={formContainerStyle}
        >
          <form onSubmit={handleKirimData}>
            {/* IDENTITAS */}
            <div style={{ marginBottom: '40px' }}>
              <h3 style={sectionTitleStyle}>
                <div style={iconCircleStyle}><User size={18} color="#0d4f3c" /></div> 
                IDENTITAS CALON SISWA
              </h3>
              <div style={gridStyle}>
                <div style={{ gridColumn: 'span 2' }}>
                  <label style={labelStyle}>Nama Lengkap (Sesuai Ijazah)</label>
                  <input type="text" required style={inputStyle} placeholder="Masukkan nama lengkap..." onChange={(e) => setFormData({...formData, namaLengkap: e.target.value})} />
                </div>
                <div>
                  <label style={labelStyle}>NIK (Nomor Induk Kependudukan)</label>
                  <input type="number" required style={inputStyle} placeholder="16 Digit NIK" onChange={(e) => setFormData({...formData, nik: e.target.value})} />
                </div>
                <div>
                  <label style={labelStyle}>Asal Sekolah (SMP/MTs)</label>
                  <input type="text" required style={inputStyle} placeholder="Nama sekolah asal..." onChange={(e) => setFormData({...formData, asalSekolah: e.target.value})} />
                </div>
                <div>
                  <label style={labelStyle}>Tempat Lahir</label>
                  <input type="text" required style={inputStyle} onChange={(e) => setFormData({...formData, tempatLahir: e.target.value})} />
                </div>
                <div>
                  <label style={labelStyle}>Tanggal Lahir</label>
                  <input type="date" required style={inputStyle} onChange={(e) => setFormData({...formData, tanggalLahir: e.target.value})} />
                </div>
              </div>
            </div>

            {/* ORANG TUA */}
            <div style={{ marginBottom: '40px' }}>
              <h3 style={sectionTitleStyle}>
                <div style={{ ...iconCircleStyle, background: '#fdf8e9' }}><Users size={18} color="#c9a227" /></div> 
                DATA ORANG TUA / WALI
              </h3>
              <div style={gridStyle}>
                <div style={{ gridColumn: 'span 2' }}>
                  <label style={labelStyle}>Nama Ayah / Ibu / Wali</label>
                  <input type="text" required style={inputStyle} onChange={(e) => setFormData({...formData, namaWali: e.target.value})} />
                </div>
                <div style={{ gridColumn: 'span 2' }}>
                  <label style={labelStyle}>No. WhatsApp Orang Tua (Aktif)</label>
                  <input type="tel" required style={inputStyle} placeholder="08..." onChange={(e) => setFormData({...formData, noWaOrtu: e.target.value})} />
                </div>
                <div style={{ gridColumn: 'span 2' }}>
                  <label style={labelStyle}>Alamat Lengkap</label>
                  <textarea rows={3} style={inputStyle} placeholder="Dusun, Desa, Kecamatan..." onChange={(e) => setFormData({...formData, alamat: e.target.value})}></textarea>
                </div>
              </div>
            </div>

            <button type="submit" style={submitButtonStyle}>
              KIRIM DATA PENDAFTARAN <Send size={20} />
            </button>
            
            <div style={footerNoteStyle}>
              Data akan terkirim ke email <strong>{emailSekolah}</strong> dan dikonfirmasi via WhatsApp Admin.
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}

// STYLES (DENGAN PERBAIKAN TYPESCRIPT CSSPROPERTIES)
const persyaratanCardStyle: CSSProperties = {
  background: '#fff9e6',
  borderRadius: '25px',
  padding: '25px',
  marginBottom: '35px',
  border: '2px dashed #c9a227',
  boxShadow: '0 10px 30px rgba(201, 162, 39, 0.05)'
};

const listWrapStyle: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  fontSize: '14px',
  color: '#444',
  fontWeight: '500'
};

const infoBoxStyle: CSSProperties = {
  marginTop: '20px',
  background: '#0d4f3c',
  color: 'white',
  padding: '12px 18px',
  borderRadius: '15px',
  fontSize: '12px',
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  lineHeight: '1.4'
};

const formContainerStyle: CSSProperties = {
  background: 'white',
  borderRadius: '35px',
  padding: '40px',
  boxShadow: '0 25px 50px rgba(13, 79, 60, 0.06)',
  border: '1px solid rgba(0,0,0,0.02)'
};

const sectionTitleStyle: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  color: '#0d4f3c',
  marginBottom: '25px',
  fontWeight: '900',
  fontSize: '1.1rem'
};

const iconCircleStyle: CSSProperties = {
  background: '#f0f7f4',
  padding: '10px',
  borderRadius: '12px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

const gridStyle: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
  gap: '20px'
};

const labelStyle: CSSProperties = {
  display: 'block',
  fontSize: '11px',
  fontWeight: '800',
  color: '#999',
  marginBottom: '8px',
  letterSpacing: '0.5px',
  textTransform: 'uppercase'
};

const inputStyle: CSSProperties = {
  width: '100%',
  padding: '16px',
  borderRadius: '15px',
  border: '2px solid #f2f2f2',
  background: '#fcfcfc',
  outline: 'none',
  fontSize: '15px',
  boxSizing: 'border-box'
};

const submitButtonStyle: CSSProperties = {
  width: '100%',
  background: '#0d4f3c',
  color: 'white',
  padding: '20px',
  borderRadius: '20px',
  border: 'none',
  fontWeight: '900',
  fontSize: '1rem',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '12px',
  boxShadow: '0 15px 30px rgba(13, 79, 60, 0.2)'
};

const footerNoteStyle: CSSProperties = {
  marginTop: '25px',
  padding: '15px',
  background: '#f9f9f9',
  borderRadius: '15px',
  fontSize: '11px',
  color: '#888',
  textAlign: 'center',
  lineHeight: '1.5'
};