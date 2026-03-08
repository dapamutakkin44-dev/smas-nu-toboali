"use client";

import React, { useState, CSSProperties } from 'react';
import Link from 'next/link';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isProfilOpen, setIsProfilOpen] = useState(false);
  const [isAkademikOpen, setIsAkademikOpen] = useState(false);

  return (
    <html lang="id">
      <head>
        <style>{`
          @keyframes runningText {
            from { transform: translateX(100%); }
            to { transform: translateX(-100%); }
          }
          body { margin: 0; padding: 0; background-color: #faf6ef; font-family: 'Inter', sans-serif; overflow-x: hidden; }
          .nav-item:hover { color: #c9a227 !important; transition: 0.3s; }
          .dropdown-item:hover { background-color: #f9f9f9 !important; color: #c9a227 !important; }
        `}</style>
      </head>
      <body>
        
        <header style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 9999 }}>
          
          {/* 1. RUNNING TEXT (PENGUMUMAN) */}
          <div style={{ 
            backgroundColor: '#c9a227', 
            overflow: 'hidden', 
            whiteSpace: 'nowrap', 
            padding: '10px 0',
            borderBottom: '1px solid rgba(0,0,0,0.1)',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
          }}>
            <div style={{ 
              display: 'inline-block', 
              animation: 'runningText 30s linear infinite', 
              color: '#0d4f3c', 
              fontSize: '12px', 
              fontWeight: '900',
              textTransform: 'uppercase',
              willChange: 'transform'
            }}>
              &nbsp;&nbsp;&nbsp;&nbsp; PENDAFTARAN PESERTA DIDIK BARU (PPDB) SMAS NU TOBOALI TAHUN PELAJARAN 2026/2027 TELAH DIBUKA! HUBUNGI ADMIN (+62 831-7521-3223) &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
              SMAS NU TOBOALI: MENCETAK GENERASI CERDAS, BERAKHLAKUL KARIMAH, DAN TERAMPIL! &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            </div>
          </div>

          {/* 2. NAVBAR UTAMA */}
          <nav style={{ 
            height: '85px', 
            backgroundColor: '#0d4f3c', 
            borderBottom: '5px solid #c9a227', 
            display: 'flex', 
            alignItems: 'center', 
            padding: '0 5%', 
            boxSizing: 'border-box',
            boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
          }}>
            
            {/* LOGO & BRANDING */}
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '18px', textDecoration: 'none' }}>
              <div style={{ 
                backgroundColor: 'white', 
                padding: '6px 14px', 
                borderRadius: '14px', 
                display: 'flex', 
                gap: '10px', 
                alignItems: 'center',
                boxShadow: 'inset 0 0 5px rgba(0,0,0,0.1)' 
              }}>
                <img src="/logo-pendidikan.png" style={{ height: '30px', width: 'auto' }} alt="Pendidikan" />
                <img src="/logo-yayasan.png" style={{ height: '30px', width: 'auto' }} alt="Yayasan" />
                <img src="/logo-sma.png" style={{ height: '34px', width: 'auto' }} alt="SMA" />
              </div>
              <div style={{ color: 'white' }}>
                <div style={{ fontWeight: '950', fontSize: '22px', fontStyle: 'italic', lineHeight: 0.9, letterSpacing: '-0.5px' }}>SMAS NU TOBOALI</div>
                <div style={{ fontSize: '9px', letterSpacing: '2.5px', color: '#c9a227', fontWeight: 'bold', marginTop: '4px' }}>MA'ARIF NU BANGKA SELATAN</div>
              </div>
            </Link>
            
            {/* MENU LINKS */}
            <div style={{ marginLeft: 'auto', display: 'flex', gap: '2px', alignItems: 'center', height: '100%' }}>
              
              <Link href="/" style={navItemStyle}>BERANDA</Link>
              
              {/* Dropdown Profil */}
              <div 
                onMouseEnter={() => setIsProfilOpen(true)} 
                onMouseLeave={() => setIsProfilOpen(false)} 
                style={menuWrapperStyle}
              >
                <span style={navLinkStyle}>PROFIL ▼</span>
                {isProfilOpen && (
                  <div style={dropdownStyle}>
                    <div style={dropdownBridge}></div> {/* Jembatan Penghubung */}
                    <Link href="/sejarah" className="dropdown-item" style={subMenuItemStyle}>Sejarah Sekolah</Link>
                    <Link href="/visi-misi" className="dropdown-item" style={subMenuItemStyle}>Visi & Misi</Link>
                    <Link href="/struktural" className="dropdown-item" style={subMenuItemStyle}>Struktural Guru</Link>
                  </div>
                )}
              </div>

              {/* Dropdown Akademik */}
              <div 
                onMouseEnter={() => setIsAkademikOpen(true)} 
                onMouseLeave={() => setIsAkademikOpen(false)} 
                style={menuWrapperStyle}
              >
                <span style={navLinkStyle}>AKADEMIK ▼</span>
                {isAkademikOpen && (
                  <div style={dropdownStyle}>
                    <div style={dropdownBridge}></div> {/* Jembatan Penghubung */}
                    <Link href="/akademik/kurikulum" className="dropdown-item" style={subMenuItemStyle}>Kurikulum</Link>
                    <Link href="/akademik/kesiswaan" className="dropdown-item" style={subMenuItemStyle}>Kesiswaan</Link>
                    <Link href="/akademik/ekstrakurikuler" className="dropdown-item" style={subMenuItemStyle}>Ekstrakurikuler</Link>
                  </div>
                )}
              </div>

              <Link href="/galeri" style={navItemStyle}>GALERI</Link>
              <Link href="/berita" style={navItemStyle}>BERITA</Link>
              <Link href="/kontak" style={navItemStyle}>KONTAK</Link>
              
              <div style={{ paddingLeft: '15px' }}>
                <Link href="/ppdb" style={{ 
                  background: '#c9a227', color: '#0d4f3c', padding: '12px 25px', 
                  borderRadius: '12px', fontWeight: '900', textDecoration: 'none', 
                  fontSize: '12px', boxShadow: '0 6px 15px rgba(201, 162, 39, 0.4)',
                  transition: '0.3s'
                }}>PPDB 2026</Link>
              </div>
            </div>
          </nav>
        </header>

        {/* MAIN CONTENT AREA */}
        <main style={{ paddingTop: '125px' }}>
          {children}
        </main>

      </body>
    </html>
  );
}

// STYLES OBJEK
const menuWrapperStyle: CSSProperties = {
  position: 'relative',
  height: '85px',
  display: 'flex',
  alignItems: 'center',
  padding: '0 15px',
  cursor: 'pointer'
};

const navLinkStyle: CSSProperties = {
  color: 'white',
  textDecoration: 'none',
  fontSize: '12px',
  fontWeight: 'bold',
  letterSpacing: '1px'
};

const navItemStyle: CSSProperties = {
  ...navLinkStyle,
  height: '85px',
  display: 'flex',
  alignItems: 'center',
  padding: '0 15px'
};

const dropdownStyle: CSSProperties = {
  position: 'absolute',
  top: '85px', // Pas di bawah nav
  left: '0',
  backgroundColor: 'white',
  minWidth: '220px',
  borderRadius: '0 0 15px 15px',
  boxShadow: '0 15px 40px rgba(0,0,0,0.2)',
  padding: '10px 0',
  borderTop: '4px solid #c9a227',
  zIndex: 1000,
  animation: 'fadeIn 0.2s ease-out'
};

// TRIK JEMBATAN: Menutup gap antara Nav dan Dropdown
const dropdownBridge: CSSProperties = {
  position: 'absolute',
  top: '-15px',
  left: 0,
  right: 0,
  height: '15px',
  backgroundColor: 'transparent'
};

const subMenuItemStyle: CSSProperties = {
  display: 'block',
  padding: '14px 25px',
  color: '#0d4f3c',
  textDecoration: 'none',
  fontSize: '13px',
  fontWeight: 'bold',
  borderBottom: '1px solid #f0f0f0',
  transition: '0.2s'
};