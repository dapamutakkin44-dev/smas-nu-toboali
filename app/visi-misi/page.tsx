"use client";
import React from 'react';
import { 
  Target, Compass, CheckCircle2, Star, ShieldCheck, 
  Zap, Globe, Users, Rocket,
  Instagram, Facebook, Mail, MapPin
} from 'lucide-react';

export default function VisiMisiPage() {
  const misis = [
    { text: "Menyelenggarakan pendidikan menengah yang berkualitas dan relevan dengan tuntutan zaman.", icon: <Rocket className="animate-bounce" /> },
    { text: "Mengembangkan potensi peserta didik secara optimal melalui kegiatan intrakurikuler dan ekstrakurikuler.", icon: <Zap /> },
    { text: "Menanamkan nilai-nilai religius dan akhlak mulia dalam setiap aspek kehidupan sekolah.", icon: <ShieldCheck /> },
    { text: "Membangun budaya sekolah yang disiplin, jujur, dan bertanggung jawab.", icon: <Star /> },
    { text: "Meningkatkan kompetensi pendidik dan tenaga kependidikan secara berkelanjutan.", icon: <Users /> },
    { text: "Menjalin kerjasama yang sinergis dengan orang tua, masyarakat, dan instansi terkait.", icon: <Globe /> }
  ];

  const sloganAkhlak = [
    { h: 'A', t: 'Aqidah' }, { h: 'K', t: 'Kepribadian' }, { h: 'H', t: 'Harmonis' },
    { h: 'L', t: 'Loyalitas' }, { h: 'A', t: 'Adaptif' }, { h: 'K', t: 'Kompeten' }
  ];

  return (
    <div style={{ backgroundColor: '#fcfaf7', minHeight: '100vh', display: 'flex', flexDirection: 'column', overflowX: 'hidden' }}>
      
      {/* CSS ANIMATION & HOVER EFFECTS */}
      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
        @keyframes pulse-gold {
          0% { box-shadow: 0 0 0 0 rgba(201, 162, 39, 0.4); }
          70% { box-shadow: 0 0 0 20px rgba(201, 162, 39, 0); }
          100% { box-shadow: 0 0 0 0 rgba(201, 162, 39, 0); }
        }
        .animate-float { animation: float 4s ease-in-out infinite; }
        .pulse-gold { animation: pulse-gold 2s infinite; }
        .misi-card { transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
        .misi-card:hover { transform: scale(1.03) translateX(10px); background: #f0f7f4 !important; }
        .motto-card { transition: all 0.3s ease; }
        .motto-card:hover { transform: translateY(-10px); box-shadow: 0 20px 40px rgba(0,0,0,0.3) !important; }
      `}</style>

      {/* --- KONTEN UTAMA --- */}
      <div style={{ flex: 1, padding: '120px 5% 80px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          
          {/* HEADER */}
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h1 style={{ fontSize: '4rem', fontWeight: '950', color: '#0d4f3c', margin: 0, letterSpacing: '-3px' }}>
              VISI & <span style={{ color: '#c9a227' }}>MISI</span>
            </h1>
            <div style={{ width: '120px', height: '10px', background: 'linear-gradient(90deg, #0d4f3c, #c9a227)', margin: '20px auto', borderRadius: '20px' }}></div>
          </div>

          {/* VISI CARD (GAHAR & FLOATING) */}
          <div className="animate-float" style={{ marginBottom: '120px' }}>
            <div style={{ 
              background: 'linear-gradient(135deg, #0d4f3c 0%, #062b21 100%)', 
              padding: '100px 60px', 
              borderRadius: '100px 20px 100px 20px', 
              color: 'white',
              boxShadow: '0 50px 100px rgba(0,0,0,0.2)',
              textAlign: 'center',
              position: 'relative',
              border: '2px solid #c9a227'
            }}>
              <div style={{ position: 'absolute', top: '20px', left: '20px', opacity: 0.1 }}><Target size={120} /></div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '800', color: '#c9a227', marginBottom: '30px', letterSpacing: '10px' }}>VISI UTAMA</h2>
              <p style={{ fontSize: '2.8rem', fontWeight: '900', lineHeight: 1.1, maxWidth: '900px', margin: '0 auto' }}>
                "Terwujudnya Peserta Didik yang Berprestasi, Berwawasan Luas, Berdasarkan Nilai-Nilai Religius."
              </p>
            </div>
          </div>

          {/* MISI SECTION (IKON DINAMIS TANPA KARAKTER) */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '80px', alignItems: 'start' }}>
            <div style={{ position: 'sticky', top: '150px' }}>
              <div className="pulse-gold" style={{ background: '#c9a227', width: '80px', height: '80px', borderRadius: '25px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '30px' }}>
                <Compass color="white" size={45} />
              </div>
              <h2 style={{ fontSize: '3.5rem', fontWeight: '900', color: '#0d4f3c', lineHeight: 1, marginBottom: '25px' }}>MISI<br/><span style={{ color: '#c9a227' }}>STRATEGIS</span></h2>
              <p style={{ fontSize: '1.2rem', color: '#555', lineHeight: 1.8 }}>
                Komitmen kolektif SMAS NU Toboali dalam mencetak generasi emas Ahlussunnah wal Jama'ah yang adaptif terhadap revolusi industri.
              </p>
            </div>

            <div style={{ display: 'grid', gap: '20px' }}>
              {misis.map((misi, index) => (
                <div key={index} className="misi-card" style={{ 
                  background: 'white', padding: '35px', borderRadius: '35px', 
                  display: 'flex', alignItems: 'center', gap: '25px',
                  boxShadow: '0 15px 35px rgba(0,0,0,0.04)', border: '1px solid #eee',
                  cursor: 'pointer'
                }}>
                  <div style={{ color: '#c9a227', transform: 'scale(1.4)' }}>
                    {misi.icon}
                  </div>
                  <p style={{ margin: 0, fontWeight: '800', fontSize: '1.1rem', color: '#0d4f3c', lineHeight: 1.4 }}>{misi.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* --- FOOTER IDENTITAS (JARGON, MOTTO, & ALAMAT) --- */}
      <footer style={{ background: '#0d4f3c', paddingTop: '100px', borderRadius: '120px 120px 0 0', color: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 5% 60px' }}>
          
          {/* JARGON (HIMAYATUDDIN) */}
          <div style={{ textAlign: 'center', marginBottom: '100px' }}>
            <div style={{ padding: '50px', borderRadius: '60px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(201, 162, 39, 0.4)' }}>
              <div style={{ fontSize: '4rem', fontWeight: 'bold', color: '#c9a227', marginBottom: '15px', fontFamily: 'serif' }}>
                حِمَايَةُ الدِّيْنِ وَالدَّوْلَةِ
              </div>
              <h3 style={{ fontSize: '2rem', fontWeight: '950', letterSpacing: '5px' }}>HIMAYATUDDIN WAD DAULAH</h3>
              <div style={{ height: '3px', width: '80px', background: '#c9a227', margin: '20px auto' }}></div>
              <p style={{ color: 'white', fontWeight: '700', fontSize: '1.4rem', fontStyle: 'italic', opacity: 0.9 }}>
                "Berguna Bagi Agama dan Negara"
              </p>
            </div>
          </div>

          {/* MOTTO AKHLAK (PALING BAWAH) */}
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '900', marginBottom: '50px' }}>
              MOTTO <span style={{ color: '#c9a227' }}>AKHLAK</span>
            </h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '20px' }}>
              {sloganAkhlak.map((item, i) => (
                <div key={i} className="motto-card" style={{ 
                  background: 'white', padding: '40px 10px', borderRadius: '40px',
                  boxShadow: '0 15px 30px rgba(0,0,0,0.2)'
                }}>
                  <div style={{ fontSize: '3.5rem', fontWeight: '950', color: '#0d4f3c', lineHeight: 1 }}>{item.h}</div>
                  <div style={{ fontSize: '0.9rem', fontWeight: '900', color: '#c9a227', marginTop: '15px', textTransform: 'uppercase' }}>{item.t}</div>
                </div>
              ))}
            </div>
          </div>

          {/* INFO SEKOLAH & ALAMAT SESUAI REQUEST */}
          <div style={{ marginTop: '120px', paddingTop: '50px', borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '30px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <div style={{ background: '#c9a227', padding: '12px', borderRadius: '15px' }}>
                <MapPin size={28} color="white" />
              </div>
              <div>
                <h4 style={{ color: '#c9a227', margin: 0, fontSize: '1.2rem', fontWeight: '800' }}>SMAS NU TOBOALI</h4>
                <p style={{ opacity: 0.8, fontSize: '0.95rem', margin: 0, maxWidth: '400px' }}>
                  Jl. Raya Rias, Desa Rias, Kecamatan Toboali, Kabupaten Bangka Selatan
                </p>
              </div>
            </div>
            
            <div style={{ display: 'flex', gap: '25px' }}>
              <Instagram className="cursor-pointer hover:text-yellow-500 transition-all" size={24} />
              <Facebook className="cursor-pointer hover:text-yellow-500 transition-all" size={24} />
              <Mail className="cursor-pointer hover:text-yellow-500 transition-all" size={24} />
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '40px', opacity: 0.5, fontSize: '0.8rem' }}>
            © 2024 SMAS NU TOBOALI - Lembaga Pendidikan Ma'arif NU
          </div>
        </div>
      </footer>
    </div>
  );
}