"use client";
import React from 'react';
import { Shield, UserCheck, GraduationCap, Users, Star, School, BookOpen } from 'lucide-react';

const pimpinanInti = [
  { nama: "H. M. Karyawan, S.Ag.", jabatan: "Ketua Yayasan", icon: <Shield size={30} /> },
  { nama: "Azharudin, S.Pd., M.E.", jabatan: "Kepala Sekolah", icon: <GraduationCap size={30} /> },
  { nama: "Mahfudz Maladzi, S.Pd.", jabatan: "Wakil Kepala Sekolah", icon: <UserCheck size={30} /> },
  { nama: "Dapa Mutakkin, S.Pd.", jabatan: "Operator Sekolah", icon: <Users size={30} /> },
];

const daftarGuruLengkap = [
  { no: 1, nama: "Azharudin, S.Pd., M.E.", jabatan: "Kepala Sekolah", jk: "L", pend: "S-2" },
  { no: 2, nama: "Mahfudz Maladzi, S.Pd.", jabatan: "Guru Mapel / Waka", jk: "L", pend: "S-1" },
  { no: 3, nama: "Yuspita, S.Pd., M.Pd.", jabatan: "Guru / Kepala Perpustakaan", jk: "P", pend: "S-2" },
  { no: 4, nama: "Fadilah Hasan, S.Pd.I.", jabatan: "Pimpinan PP / Guru", jk: "L", pend: "S-1" },
  { no: 5, nama: "Faisal, S.Pd.", jabatan: "Guru / Kepala Lab Komputer", jk: "L", pend: "S-1" },
  { no: 6, nama: "Anisa Fitriyani, S.Pd.", jabatan: "Guru / Bendahara", jk: "P", pend: "S-1" },
  { no: 7, nama: "Dapa Mutakkin, S.Pd.", jabatan: "Kepala Tata Usaha", jk: "L", pend: "S-1" },
  { no: 8, nama: "Sari Dwi Puspita, S.Pd.", jabatan: "Guru / Kepala UKS", jk: "P", pend: "S-1" },
  { no: 9, nama: "Yuliyanti, S.Pd.", jabatan: "Guru / Koordinator P5", jk: "P", pend: "S-1" },
  { no: 10, nama: "H. Yanto, M.Pd.", jabatan: "Tenaga Pendidik", jk: "L", pend: "S-2" },
  { no: 11, nama: "Saeful Anwar, S.Pd.I.", jabatan: "Tenaga Pendidik", jk: "L", pend: "S-1" },
  { no: 12, nama: "Saefullah", jabatan: "Komite Sekolah", jk: "L", pend: "Ponpes", special: true },
  { no: 13, nama: "Ustadz Bakhrudin", jabatan: "Tenaga Pendidik", jk: "L", pend: "Ponpes", special: true },
  { no: 14, nama: "M. Chaidar Suwito", jabatan: "Tenaga Pendidik", jk: "L", pend: "Ponpes", special: true },
];

const sloganAkhlak = [
  { h: 'A', t: 'Aqidah' }, { h: 'K', t: 'Kepribadian' }, { h: 'H', t: 'Harmonis' },
  { h: 'L', t: 'Loyalitas' }, { h: 'A', t: 'Adaptif' }, { h: 'K', t: 'Kompeten' }
];

export default function StrukturalPage() {
  return (
    <div style={{ backgroundColor: '#fcfaf7', minHeight: '100vh', padding: '120px 5% 100px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        
        {/* JUDUL */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h1 style={{ color: '#0d4f3c', fontSize: '2.8rem', fontWeight: '900', margin: 0 }}>STRUKTUR <span style={{ color: '#c9a227' }}>ORGANISASI</span></h1>
          <p style={{ color: '#666', fontWeight: 'bold' }}>SMAS NU TOBOALI</p>
        </div>

        {/* PIMPINAN INTI */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '25px', marginBottom: '80px' }}>
          {pimpinanInti.map((item, index) => (
            <div key={index} style={{ background: 'white', padding: '30px', borderRadius: '30px', textAlign: 'center', boxShadow: '0 15px 35px rgba(0,0,0,0.05)', borderBottom: '5px solid #0d4f3c' }}>
              <div style={{ color: '#c9a227', marginBottom: '15px', display: 'flex', justifyContent: 'center' }}>{item.icon}</div>
              <h3 style={{ color: '#0d4f3c', margin: '0 0 5px 0', fontSize: '1.1rem' }}>{item.nama}</h3>
              <p style={{ color: '#888', fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase' }}>{item.jabatan}</p>
            </div>
          ))}
        </div>

        {/* DAFTAR GURU DENGAN KARAKTER SOPAN */}
        <div style={{ background: 'white', padding: '50px 30px', borderRadius: '40px', boxShadow: '0 5px 30px rgba(0,0,0,0.03)' }}>
          <h2 style={{ color: '#0d4f3c', textAlign: 'center', marginBottom: '40px', fontSize: '1.8rem' }}>Pendidik & Staf</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
            {daftarGuruLengkap.map((guru) => (
              <div key={guru.no} style={{ display: 'flex', alignItems: 'center', padding: '20px', borderRadius: '25px', backgroundColor: guru.special ? '#e8f0ed' : '#faf6ef', border: '1px solid #eee' }}>
                <div style={{ fontSize: '2.2rem', marginRight: '20px', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}>
                  {/* KARAKTER MENUTUP RAMBUT (PECI & JILBAB) */}
                  {guru.jk === "L" ? "👳‍♂️" : "🧕"}
                </div>
                <div>
                  <div style={{ color: '#0d4f3c', fontWeight: '900', fontSize: '1.05rem' }}>{guru.nama}</div>
                  <div style={{ color: '#c9a227', fontSize: '0.8rem', fontWeight: 'bold' }}>{guru.jabatan}</div>
                  <div style={{ fontSize: '0.65rem', color: '#888', marginTop: '3px' }}>Pendidikan: {guru.pend}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AKHLAK (DI BAGIAN BAWAH) */}
        <div style={{ marginTop: '100px', background: '#0d4f3c', padding: '60px 30px', borderRadius: '50px', boxShadow: '0 20px 40px rgba(13,79,60,0.2)' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
             <h2 style={{ color: 'white', margin: 0, fontSize: '2rem', fontWeight: '900' }}> <span style={{ color: '#c9a227' }}>AKHLAK</span></h2>
             <div style={{ width: '50px', height: '4px', background: '#c9a227', margin: '15px auto' }}></div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '15px' }}>
            {sloganAkhlak.map((item, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.05)', padding: '20px', borderRadius: '25px', textAlign: 'center', border: '1px solid rgba(201, 162, 39, 0.3)' }}>
                <div style={{ color: '#c9a227', fontSize: '2rem', fontWeight: '900' }}>{item.h}</div>
                <div style={{ color: 'white', fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase', marginTop: '5px' }}>{item.t}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}