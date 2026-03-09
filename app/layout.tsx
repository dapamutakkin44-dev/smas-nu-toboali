"use client";

import React, { useState, CSSProperties } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfilOpen, setIsProfilOpen] = useState(false);
  const [isAkademikOpen, setIsAkademikOpen] = useState(false);

  return (
    <html lang="id">
      <head>
        <style>{`
          @keyframes runningText { from { transform: translateX(100%); } to { transform: translateX(-100%); } }
          body { margin: 0; padding: 0; background-color: #faf6ef; font-family: sans-serif; overflow-x: hidden; }
          
          /* Sembunyikan menu desktop di layar kecil */
          @media (max-width: 1024px) {
            .nav-desktop { display: none !important; }
            .mobile-toggle { display: block !important; }
            .brand-text { fontSize: 16px !important; }
            .sub-brand-text { fontSize: 7px !important; }
            .logo-container { padding: 4px 8px !important; }
            .logo-img { height: 25px !important; }
          }
        `}</style>
      </head>
      <body>
        
        <header style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 9999 }}>
          {/* 1. RUNNING TEXT (PENGUMUMAN) */}
          <div style={{ backgroundColor: '#c9a227', overflow: 'hidden', whiteSpace: 'nowrap', padding: '8px 0', borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
            <div style={{ display: 'inline-block', animation: 'runningText 30s linear infinite', color: '#0d4f3c', fontSize: '11px', fontWeight: '900' }}>
              &nbsp;&nbsp; PENDAFTARAN PESERTA DIDIK BARU (PPDB) SMAS NU TOBOALI TAHUN PELAJARAN 2026/2027 TELAH DIBUKA! HUBUNGI ADMIN (+62 831-7521-3223) &nbsp;&nbsp;
            </div>
          </div>

          {/* 2. NAVBAR UTAMA */}
          <nav style={{ height: '75px', backgroundColor: '#0d4f3c', borderBottom: '4px solid #c9a227', display: 'flex', alignItems: 'center', padding: '0 5%', justifyContent: 'space-between' }}>
            
            {/* LOGO & NAMA SEKOLAH */}
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
              <div className="logo-container" style={{ backgroundColor: 'white', padding: '5px 12px', borderRadius: '10px', display: 'flex', gap: '8px', alignItems: 'center' }}>
                <img className="logo-img" src="/logo-sma.png" style={{ height: '32px' }} alt="SMA" />
              </div>
              <div style={{ color: 'white' }}>
                <div className="brand-text" style={{ fontWeight: '900', fontSize: '20px', fontStyle: 'italic', lineHeight: 1 }}>SMAS NU TOBOALI</div>
                <div className="sub-brand-text" style={{ fontSize: '8px', letterSpacing: '2px', color: '#c9a227', fontWeight: 'bold' }}>MA'ARIF NU BANGKA SELATAN</div>
              </div>
            </Link>

            {/* DESKTOP MENU (Hanya muncul di Layar Besar) */}
            <div className="nav-desktop" style={{ display: 'flex', gap: '5px', alignItems: 'center', height: '100%' }}>
              <Link href="/" style={navItemStyle}>BERANDA</Link>
              
              {/* Dropdown Profil */}
              <div onMouseEnter={() => setIsProfilOpen(true)} onMouseLeave={() => setIsProfilOpen(false)} style={dropdownWrapper}>
                <span style={navItemStyle}>PROFIL <ChevronDown size={12} /></span>
                {isProfilOpen && (
                  <div style={dropdownBox}>
                    <div style={bridgeStyle}></div>
                    <Link href="/sejarah" style={subItemStyle}>Sejarah</Link>
                    <Link href="/visi-misi" style={subItemStyle}>Visi & Misi</Link>
                    <Link href="/struktural" style={subItemStyle}>Struktural Guru</Link>
                  </div>
                )}
              </div>

              <Link href="/galeri" style={navItemStyle}>GALERI</Link>
              <Link href="/kontak" style={navItemStyle}>KONTAK</Link>
              <Link href="/ppdb" style={ppdbButtonStyle}>PPDB 2026</Link>
            </div>

            {/* TOMBOL MENU MOBILE (Garis Tiga) */}
            <button 
              className="mobile-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              style={{ display: 'none', background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </nav>

          {/* MENU DROPDOWN MOBILE (Muncul saat Klik Hamburger) */}
          {isMobileMenuOpen && (
            <div style={{ position: 'absolute', top: '110px', left: 0, right: 0, backgroundColor: '#0d4f3c', padding: '20px', display: 'flex', flexDirection: 'column', gap: '15px', borderBottom: '5px solid #c9a227', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}>
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)} style={mobileLinkStyle}>BERANDA</Link>
              <Link href="/sejarah" onClick={() => setIsMobileMenuOpen(false)} style={mobileLinkStyle}>SEJARAH</Link>
              <Link href="/visi-misi" onClick={() => setIsMobileMenuOpen(false)} style={mobileLinkStyle}>VISI & MISI</Link>
              <Link href="/kontak" onClick={() => setIsMobileMenuOpen(false)} style={mobileLinkStyle}>KONTAK</Link>
              <Link href="/ppdb" onClick={() => setIsMobileMenuOpen(false)} style={{ ...mobileLinkStyle, color: '#c9a227', border: 'none' }}>PPDB 2026</Link>
            </div>
          )}
        </header>

        {/* AREA KONTEN UTAMA */}
        <main style={{ paddingTop: '110px' }}>
          {children}
        </main>
      </body>
    </html>
  );
}

// STYLES
const navItemStyle: CSSProperties = {
  color: 'white', textDecoration: 'none', fontSize: '11px', fontWeight: 'bold', padding: '0 15px', height: '100%', display: 'flex', alignItems: 'center', gap: '4px'
};

const ppdbButtonStyle: CSSProperties = {
  background: '#c9a227', color: '#0d4f3c', padding: '8px 18px', borderRadius: '8px', fontWeight: '900', textDecoration: 'none', fontSize: '11px', marginLeft: '10px'
};

const dropdownWrapper: CSSProperties = { position: 'relative', height: '100%', display: 'flex', alignItems: 'center' };

const dropdownBox: CSSProperties = {
  position: 'absolute', top: '75px', left: 0, backgroundColor: 'white', minWidth: '180px', borderRadius: '0 0 10px 10px', boxShadow: '0 10px 30px rgba(0,0,0,0.2)', padding: '10px 0', borderTop: '3px solid #c9a227'
};

const bridgeStyle: CSSProperties = { position: 'absolute', top: '-15px', left: 0, right: 0, height: '15px' };

const subItemStyle: CSSProperties = { display: 'block', padding: '12px 20px', color: '#0d4f3c', textDecoration: 'none', fontSize: '12px', fontWeight: 'bold', borderBottom: '1px solid #f5f5f5' };

const mobileLinkStyle: CSSProperties = { color: 'white', textDecoration: 'none', fontSize: '16px', fontWeight: 'bold', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '10px' };