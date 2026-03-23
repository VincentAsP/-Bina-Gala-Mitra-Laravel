import React, { useState } from 'react';
import Navbar from '@/Components/Navbar';

export default function Belajar() {
  // --- STATE UNTUK SIMULASI BACKEND ---
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [accessCode, setAccessCode] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  // Dummy data video modul pembelajaran (bisa diganti data dari database nanti)
  const videoModules = [
    { id: 1, title: 'Bahasa Mandarin: Percakapan Dasar Sehari-hari', category: 'Taiwan / Hongkong', duration: '15:20', icon: '🗣️' },
    { id: 2, title: 'Bahasa Inggris: Hospitality & Etika Kerja', category: 'Singapore / Umum', duration: '22:10', icon: '🏨' },
    { id: 3, title: 'Standar Operasional Prosedur (SOP) Caregiver', category: 'Keperawatan', duration: '18:45', icon: '🏥' },
    { id: 4, title: 'Pengenalan Budaya & Hukum di Negara Tujuan', category: 'Persiapan Keberangkatan', duration: '30:00', icon: '⚖️' },
    { id: 5, title: 'Bahasa Kantonis: Kosakata Dapur & Belanja', category: 'Hongkong', duration: '12:30', icon: '🛒' },
    { id: 6, title: 'Manajemen Keuangan Dasar untuk Pekerja Migran', category: 'Pengembangan Diri', duration: '25:15', icon: '💰' },
  ];

  // Fungsi untuk mengecek kode (Simulasi Backend)
  const handleUnlock = (e) => {
    e.preventDefault();
    // Anggap saja kode akses dari admin adalah "BGM2026"
    if (accessCode === 'BGM2026') {
      setIsUnlocked(true);
      setErrorMsg('');
    } else {
      setErrorMsg('Kode akses tidak valid atau sudah kadaluarsa.');
    }
  };

  return (
    <div className="bg-navy min-h-screen text-cream font-sans pb-24">
      <Navbar />

      <div className="pt-32 px-6 md:px-16 max-w-7xl mx-auto relative z-10">

        {/* =========================================
            TAMPILAN 1: GATE KODE AKSES (TERKUNCI)
            ========================================= */}
        {isUnlocked ? (

        /* =========================================
           TAMPILAN 2: DASHBOARD VIDEO (TERBUKA)
           ========================================= */
          <div className="animate-fadeInUp">
            <div className="flex flex-col md:flex-row justify-between items-end mb-10 border-b border-gold/20 pb-6 gap-4">
              <div>
                <div className="inline-block text-[0.75rem] tracking-[2px] uppercase text-gold mb-2">E-Learning</div>
                <h1 className="font-serif text-3xl md:text-4xl font-bold text-cream">Modul Pelatihan</h1>
              </div>
              <button
                onClick={() => setIsUnlocked(false)}
                className="text-[0.85rem] text-text-muted hover:text-red-400 transition-colors border border-gold/20 px-4 py-2 rounded-lg"
              >
                Keluar / Kunci Layar
              </button>
            </div>

            {/* Grid Video */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videoModules.map((video) => (
                <div key={video.id} className="bg-navy-light border border-gold/15 rounded-xl overflow-hidden hover:border-gold/50 transition-all duration-300 group cursor-pointer hover:-translate-y-1">

                  {/* Thumbnail Video Placeholder */}
                  <div className="h-48 bg-navy relative flex items-center justify-center border-b border-gold/10 overflow-hidden">
                    <div className="absolute inset-0 bg-linear-to-tr from-navy to-navy-light opacity-50"></div>
                    <span className="text-6xl relative z-10 group-hover:scale-110 transition-transform duration-300">{video.icon}</span>

                    {/* Tombol Play Overlay */}
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm z-20">
                      <div className="w-16 h-16 rounded-full bg-gold/90 flex items-center justify-center text-navy pl-1">
                        ▶
                      </div>
                    </div>

                    {/* Durasi */}
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white text-[0.7rem] px-2 py-1 rounded z-10 font-mono">
                      {video.duration}
                    </div>
                  </div>

                  {/* Info Video */}
                  <div className="p-5">
                    <div className="text-[0.75rem] text-gold uppercase tracking-wider mb-2 font-medium">
                      {video.category}
                    </div>
                    <h3 className="font-serif text-[1.1rem] text-cream leading-snug group-hover:text-gold-light transition-colors">
                      {video.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

        ) : (
          <div className="max-w-md mx-auto mt-10 bg-navy-light border border-gold/20 rounded-2xl p-8 shadow-2xl animate-fadeInUp">
            <div className="text-center mb-8">
              <span className="text-4xl block mb-4">🔐</span>
              <h1 className="font-serif text-2xl text-cream font-bold mb-2">Akses Ruang Belajar</h1>
              <p className="text-[0.9rem] text-text-muted">
                Silakan masukkan kode akses yang Anda dapatkan dari admin untuk membuka modul pelatihan.
              </p>
            </div>

            <form onSubmit={handleUnlock} className="space-y-5">
              <div>
                <input
                  type="text"
                  placeholder="Masukkan Kode (Contoh: BGM2026)"
                  value={accessCode}
                  onChange={(e) => setAccessCode(e.target.value.toUpperCase())}
                  className="w-full bg-navy border border-gold/30 rounded-lg px-4 py-3 text-cream focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors text-center font-bold tracking-widest placeholder:font-normal placeholder:tracking-normal placeholder:text-slate-500"
                />
                {errorMsg && (
                  <p className="text-red-400 text-[0.8rem] text-center mt-2 animate-bounce2">{errorMsg}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-gold text-navy font-bold py-3 rounded-lg hover:bg-gold-light transition-colors duration-200"
              >
                Buka Materi
              </button>
            </form>

            <div className="mt-6 text-center text-[0.8rem] text-text-muted border-t border-gold/10 pt-4">
              Belum punya kode? <a href="#kontak" className="text-gold hover:underline">Hubungi Admin</a>
            </div>
          </div>
        )}

      </div>
    </div>

  );
}
