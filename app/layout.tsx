"use client";

import React, { useState, CSSProperties } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, Facebook, Instagram, MessageCircle, Mail, Music2 } from 'lucide-react';

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
          @media (max-width: 1100px) {
            .nav-desktop { display: none !important; }
            .mobile-toggle { display: block !important; }
          }
          .footer-icon:hover { color: #c9a227 !important; transform: scale(1.2); transition: 0.3s; }
        `}</style>
      </head>
      <body>
        
        <header style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 9999 }}>
          {/* 1. RUNNING TEXT */}
          <div style={{ backgroundColor: '#c9a227', overflow: 'hidden', whiteSpace: 'nowrap', padding: '8px 0' }}>
            <div style={{ display: 'inline-block', animation: 'runningText 30s linear infinite', color: '#0d4f3c', fontSize: '11px', fontWeight: '900' }}>
              &nbsp;&nbsp; PPDB SMAS NU TOBOALI 2026/2027 TELAH DIBUKA! DAFTARKAN DIRI ANDA SEGERA. HUBUNGI ADMIN (+62 831-7521-3223) &nbsp;&nbsp;
            </div>
          </div>

          {/* 2. NAVBAR */}
          <nav style={{ height: '75px', backgroundColor: '#0d4f3c', borderBottom: '4px solid #c9a227', display: 'flex', alignItems: 'center', padding: '0 5%', justifyContent: 'space-between' }}>
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
              <div style={{ backgroundColor: 'white', padding: '5px 12px', borderRadius: '10px', display: 'flex', gap: '8px', alignItems: 'center' }}>
                {/* FIX: Tambah "/" di depan agar logo tidak hilang saat pindah halaman */}
                <img src="/logo-pendidikan.png" style={{ height: '28px' }} alt="Pendidikan" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                <img src="/logo-yayasan.png" style={{ height: '28px' }} alt="Yayasan" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                <img src="/logo-sma.png" style={{ height: '32px' }} alt="SMA" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
              </div>
              <div style={{ color: 'white' }}>
                <div style={{ fontWeight: '900', fontSize: '18px', fontStyle: 'italic', lineHeight: 1 }}>SMAS NU TOBOALI</div>
                <div style={{ fontSize: '8px', letterSpacing: '2px', color: '#c9a227', fontWeight: 'bold' }}>MA'ARIF NU BANGKA SELATAN</div>
              </div>
            </Link>

            <div className="nav-desktop" style={{ display: 'flex', gap: '2px', alignItems: 'center', height: '100%' }}>
              <Link href="/" style={navItemStyle}>BERANDA</Link>
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
              <div onMouseEnter={() => setIsAkademikOpen(true)} onMouseLeave={() => setIsAkademikOpen(false)} style={dropdownWrapper}>
                <span style={navItemStyle}>AKADEMIK <ChevronDown size={12} /></span>
                {isAkademikOpen && (
                  <div style={dropdownBox}>
                    <div style={bridgeStyle}></div>
                    <Link href="/akademik/kurikulum" style={subItemStyle}>Kurikulum</Link>
                    <Link href="/akademik/kesiswaan" style={subItemStyle}>Kesiswaan</Link>
                    <Link href="/akademik/ekstrakurikuler" style={subItemStyle}>Ekstrakurikuler</Link>
                  </div>
                )}
              </div>
              <Link href="/galeri" style={navItemStyle}>GALERI</Link>
              <Link href="/berita" style={navItemStyle}>BERITA</Link>
              <Link href="/kontak" style={navItemStyle}>KONTAK</Link>
              <Link href="/ppdb" style={ppdbButtonStyle}>PPDB 2026</Link>
            </div>

            <button className="mobile-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} style={{ display: 'none', background: 'none', border: 'none', color: 'white' }}>
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </nav>

          {isMobileMenuOpen && (
            <div style={{ position: 'absolute', top: '110px', left: 0, right: 0, backgroundColor: '#0d4f3c', padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px', borderBottom: '5px solid #c9a227' }}>
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)} style={mobileLinkStyle}>BERANDA</Link>
              <Link href="/visi-misi" onClick={() => setIsMobileMenuOpen(false)} style={mobileSubLinkStyle}>• Visi & Misi</Link>
              <Link href="/berita" onClick={() => setIsMobileMenuOpen(false)} style={mobileLinkStyle}>BERITA</Link>
              <Link href="/kontak" onClick={() => setIsMobileMenuOpen(false)} style={mobileLinkStyle}>KONTAK</Link>
              <Link href="/ppdb" onClick={() => setIsMobileMenuOpen(false)} style={{ ...mobileLinkStyle, color: '#c9a227', border: 'none' }}>PPDB 2026</Link>
            </div>
          )}
        </header>

        <main style={{ paddingTop: '110px', minHeight: '70vh' }}>{children}</main>

        {/* FOOTER DATA RESMI */}
        <footer style={{ backgroundColor: '#062b21', color: 'white', padding: '50px 5% 20px 5%', borderTop: '5px solid #c9a227' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px' }}>
            <div>
              <h3 style={{ color: '#c9a227', marginBottom: '15px' }}>SMAS NU TOBOALI</h3>
              <p style={{ fontSize: '13px', opacity: 0.7, lineHeight: '1.6' }}>Mencetak generasi berakhlakul karimah, cerdas, dan terampil sesuai ajaran Aswaja An-Nahdliyah.</p>
              <div style={{ marginTop: '20px', display: 'flex', gap: '15px' }}>
                <a href="https://www.facebook.com/groups/248354718536102" target="_blank" className="footer-icon" style={{ color: 'white' }}><Facebook size={20}/></a>
                <a href="https://www.instagram.com/offcial.smasnutoboali" target="_blank" className="footer-icon" style={{ color: 'white' }}><Instagram size={20}/></a>
                <a href="https://www.tiktok.com/@offcial.smasnu.toboali" target="_blank" className="footer-icon" style={{ color: 'white' }}><Music2 size={20}/></a>
                <a href="https://wa.me/6283175213223" target="_blank" className="footer-icon" style={{ color: 'white' }}><MessageCircle size={20}/></a>
              </div>
            </div>
            <div>
              <h4 style={{ color: '#c9a227', marginBottom: '15px' }}>KONTAK</h4>
              <div style={{ fontSize: '13px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Mail size={14} color="#c9a227"/> smanutoboali@gmail.com</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><MessageCircle size={14} color="#c9a227"/> +62 831-7521-3223</span>
              </div>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '50px', fontSize: '11px', opacity: 0.4 }}>© 2026 SMAS NU TOBOALI. All Rights Reserved.</div>
        </footer>
      </body>
    </html>
  );
}

const navItemStyle: CSSProperties = { color: 'white', textDecoration: 'none', fontSize: '11px', fontWeight: 'bold', padding: '0 10px', height: '100%', display: 'flex', alignItems: 'center', gap: '4px' };
const ppdbButtonStyle: CSSProperties = { background: '#c9a227', color: '#0d4f3c', padding: '8px 15px', borderRadius: '8px', fontWeight: '900', textDecoration: 'none', fontSize: '11px', marginLeft: '5px' };
const dropdownWrapper: CSSProperties = { position: 'relative', height: '100%', display: 'flex', alignItems: 'center' };
const dropdownBox: CSSProperties = { position: 'absolute', top: '75px', left: 0, backgroundColor: 'white', minWidth: '180px', borderRadius: '0 0 10px 10px', boxShadow: '0 10px 30px rgba(0,0,0,0.2)', padding: '10px 0', borderTop: '3px solid #c9a227' };
const bridgeStyle: CSSProperties = { position: 'absolute', top: '-15px', left: 0, right: 0, height: '15px' };
const subItemStyle: CSSProperties = { display: 'block', padding: '10px 20px', color: '#0d4f3c', textDecoration: 'none', fontSize: '11px', fontWeight: 'bold', borderBottom: '1px solid #f5f5f5' };
const mobileLinkStyle: CSSProperties = { color: 'white', textDecoration: 'none', fontSize: '15px', fontWeight: 'bold', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '5px' };
const mobileSubLinkStyle: CSSProperties = { color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '13px', paddingLeft: '10px' };