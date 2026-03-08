"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, User, GraduationCap, Users, Phone, Mail, CheckCircle2 } from 'lucide-react';

export default function PPDBPage() {
  const [formData, setFormData] = useState({
    // Biodata Siswa
    namaLengkap: '',
    nik: '',
    tempatLahir: '',
    tanggalLahir: '',
    jenisKelamin: 'Laki-laki',
    asalSekolah: '',
    // Data Orang Tua
    namaWali: '',
    noWaOrtu: '',
    alamat: '',
    // Program Pilihan
    pilihanJurusan: 'Fase E (Umum)'
  });

  // EMAIL RESMI BARU
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
JURUSAN       : ${formData.pilihanJurusan}

DATA ORANG TUA / WALI
---------------------
NAMA WALI     : ${formData.namaWali}
NO. WHATSAPP  : ${formData.noWaOrtu}
ALAMAT        : ${formData.alamat}
    `;

    // 1. Kirim via Email (Buka Mail Client)
    const mailtoLink = `mailto:${emailSekolah}?subject=${encodeURIComponent(subjekEmail)}&body=${encodeURIComponent(isiPesan)}`;
    
    // 2. Kirim Notifikasi via WhatsApp Admin (Ustadz Azhar)
    const noWAAdmin = "6283175213223"; 
    const waLink = `https://wa.me/${noWAAdmin}?text=${encodeURIComponent("Assalamu'alaikum Admin, saya baru saja mendaftar PPDB Online:\n" + isiPesan)}`;

    // Eksekusi: Buka email dulu, lalu buka WA
    window.location.href = mailtoLink;
    setTimeout(() => {
      window.open(waLink, '_blank');
    }, 2000);
  };

  return (
    <div style={{ backgroundColor: '#fcfaf7', minHeight: '100vh', padding: '40px 5%' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{ color: '#0d4f3c', fontWeight: '900', fontSize: '2.5rem', letterSpacing: '-1px' }}>PPDB ONLINE 2026</h1>
          <p style={{ color: '#666' }}>Formulir Pendaftaran Siswa Baru SMAS NU Toboali</p>
          <div style={{ height: '4px', width: '60px', background: '#c9a227', margin: '15px auto', borderRadius: '2px' }}></div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ 
            background: 'white', 
            borderRadius: '40px', 
            padding: '45px', 
            boxShadow: '0 30px 60px rgba(13, 79, 60, 0.08)', 
            border: '1px solid rgba(0,0,0,0.03)' 
          }}
        >
          <form onSubmit={handleKirimData}>
            
            {/* BAGIAN 1: BIODATA SISWA */}
            <div style={{ marginBottom: '45px' }}>
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#0d4f3c', marginBottom: '25px', fontWeight: '800' }}>
                <div style={{ background: '#f0f7f4', padding: '8px', borderRadius: '10px' }}><User size={18} color="#0d4f3c" /></div> 
                IDENTITAS CALON SISWA
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
                <div style={{ gridColumn: 'span 2' }}>
                  <label style={labelStyle}>NAMA LENGKAP (SESUAI IJAZAH)</label>
                  <input type="text" required style={inputStyle} onChange={(e) => setFormData({...formData, namaLengkap: e.target.value})} />
                </div>
                <div>
                  <label style={labelStyle}>NIK (NOMOR INDUK KEPENDUDUKAN)</label>
                  <input type="number" required style={inputStyle} onChange={(e) => setFormData({...formData, nik: e.target.value})} />
                </div>
                <div>
                  <label style={labelStyle}>ASAL SEKOLAH (SMP/MTS)</label>
                  <input type="text" required style={inputStyle} onChange={(e) => setFormData({...formData, asalSekolah: e.target.value})} />
                </div>
                <div>
                  <label style={labelStyle}>TEMPAT LAHIR</label>
                  <input type="text" required style={inputStyle} onChange={(e) => setFormData({...formData, tempatLahir: e.target.value})} />
                </div>
                <div>
                  <label style={labelStyle}>TANGGAL LAHIR</label>
                  <input type="date" required style={inputStyle} onChange={(e) => setFormData({...formData, tanggalLahir: e.target.value})} />
                </div>
              </div>
            </div>

            {/* BAGIAN 2: DATA ORANG TUA */}
            <div style={{ marginBottom: '45px' }}>
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#0d4f3c', marginBottom: '25px', fontWeight: '800' }}>
                <div style={{ background: '#fdf8e9', padding: '8px', borderRadius: '10px' }}><Users size={18} color="#c9a227" /></div> 
                DATA ORANG TUA / WALI
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div>
                  <label style={labelStyle}>NAMA AYAH / IBU / WALI</label>
                  <input type="text" required style={inputStyle} onChange={(e) => setFormData({...formData, namaWali: e.target.value})} />
                </div>
                <div>
                  <label style={labelStyle}>NO. WHATSAPP AKTIF</label>
                  <input type="tel" required style={inputStyle} placeholder="08..." onChange={(e) => setFormData({...formData, noWaOrtu: e.target.value})} />
                </div>
                <div style={{ gridColumn: 'span 2' }}>
                  <label style={labelStyle}>ALAMAT LENGKAP</label>
                  <textarea rows={3} style={inputStyle} onChange={(e) => setFormData({...formData, alamat: e.target.value})}></textarea>
                </div>
              </div>
            </div>

            <button type="submit" style={{ 
              width: '100%', background: '#0d4f3c', color: 'white', padding: '22px', 
              borderRadius: '20px', border: 'none', fontWeight: '900', fontSize: '1rem',
              cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px',
              boxShadow: '0 15px 30px rgba(13, 79, 60, 0.2)'
            }}>
              KIRIM DATA PENDAFTARAN <Send size={20} />
            </button>
            
            <div style={{ marginTop: '25px', padding: '15px', background: '#f8f8f8', borderRadius: '15px', fontSize: '12px', color: '#777', textAlign: 'center' }}>
              Pesan akan dikirim ke <strong>{emailSekolah}</strong> dan WhatsApp Admin. <br/>
              Pastikan data yang Anda masukkan sudah benar.
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}

const labelStyle = { display: 'block', fontSize: '11px', fontWeight: '800', color: '#999', marginBottom: '10px', letterSpacing: '0.5px', textTransform: 'uppercase' };
const inputStyle = { width: '100%', padding: '18px', borderRadius: '15px', border: '2px solid #f0f0f0', background: '#fcfcfc', outline: 'none', fontSize: '15px', transition: 'all 0.3s' };