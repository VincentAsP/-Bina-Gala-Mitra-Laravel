import React from 'react';
import { Link } from "@inertiajs/react";

export default function Footer() { // <--- 'F' harus kapital
  return (
    <footer id="kontak" className="bg-navy-deep border-t border-gold/15 px-6 md:px-16 pt-16 pb-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10 mb-12">

        {/* Kolom 1: Info Perusahaan */}
        <div>
          <h3 className="font-serif text-[1.5rem] text-gold-light mb-2">Bina Gala Mitra</h3>
          <div className="text-[0.8rem] text-gold tracking-widest uppercase mb-4">PJ.TKI · Pelatihan &amp; Penempatan Kerja</div>
          <p className="text-[0.85rem] text-text-muted leading-relaxed max-w-70">
            Mitra terpercaya untuk perjalanan karir Anda ke Singapore, Taiwan, Malaysia, dan Hongkong.
          </p>
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 px-3 py-1.5 rounded text-[0.75rem] text-gold mt-5">
            🏛️ Izin BNSP · Terdaftar BP2MI
          </div>
        </div>

        {/* Kolom 2: Navigasi */}
        <div>
          <h4 className="text-[0.75rem] uppercase tracking-widest text-gold mb-5">Navigasi</h4>
          <ul className="list-none space-y-3">
            <li><Link href="/" className="text-text-muted text-[0.85rem] no-underline hover:text-cream transition-colors duration-200">Pendahuluan</Link></li>
            <li><Link href="/#sejarah" className="text-text-muted text-[0.85rem] no-underline hover:text-cream transition-colors duration-200">Sejarah Kami</Link></li>
            <li><Link href="/#fasilitas" className="text-text-muted text-[0.85rem] no-underline hover:text-cream transition-colors duration-200">Fasilitas</Link></li>
            <li><Link href="/tujuan-negara" className="text-text-muted text-[0.85rem] no-underline hover:text-cream transition-colors duration-200">Program Kerja</Link></li>
            <li><Link href="/syarat-ketentuan" className="text-text-muted text-[0.85rem] no-underline hover:text-cream transition-colors duration-200">Syarat & Ketentuan</Link></li>
          </ul>
        </div>

        {/* Kolom 3: Tujuan */}
        <div>
          <h4 className="text-[0.75rem] uppercase tracking-widest text-gold mb-5">Tujuan</h4>
          <ul className="list-none space-y-3">
            <li><Link href="/tujuan-negara" className="text-text-muted text-[0.85rem] no-underline hover:text-cream transition-colors duration-200">🇸🇬 Singapore</Link></li>
            <li><Link href="/tujuan-negara" className="text-text-muted text-[0.85rem] no-underline hover:text-cream transition-colors duration-200">🇹🇼 Taiwan</Link></li>
            <li><Link href="/tujuan-negara" className="text-text-muted text-[0.85rem] no-underline hover:text-cream transition-colors duration-200">🇲🇾 Malaysia</Link></li>
            <li><Link href="/tujuan-negara" className="text-text-muted text-[0.85rem] no-underline hover:text-cream transition-colors duration-200">🇭🇰 Hongkong</Link></li>
          </ul>
        </div>

        {/* Kolom 4: Kontak */}
        <div>
          <h4 className="text-[0.75rem] uppercase tracking-widest text-gold mb-5">Kontak</h4>
          <div className="flex gap-3 mb-3"><span className="mt-0.5">📍</span><span className="text-[0.82rem] text-text-muted leading-relaxed">Jl. Raya Kebon Jeruk No. 12, Jakarta Barat 11530</span></div>
          <div className="flex gap-3 mb-3"><span className="mt-0.5">📞</span><span className="text-[0.82rem] text-text-muted leading-relaxed">(021) 5550-1234<br />+62 812-3456-7890</span></div>
          <div className="flex gap-3 mb-3"><span className="mt-0.5">✉️</span><span className="text-[0.82rem] text-text-muted leading-relaxed">info@binagalamitra.co.id</span></div>
          <div className="flex gap-3"><span className="mt-0.5">🕐</span><span className="text-[0.82rem] text-text-muted leading-relaxed">Senin – Jumat: 08.00 – 17.00 WIB</span></div>
        </div>
      </div>

      {/* Bagian Bawah Footer (Copyright & Socials) */}
      <div className="border-t border-gold/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-[0.8rem] text-text-muted">© 2026 PT. Bina Gala Mitra. Semua hak dilindungi undang-undang.</p>
        <div className="flex gap-3">
          <a href="#" className="w-9 h-9 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center text-gold text-[0.9rem] no-underline hover:bg-gold hover:text-navy transition-all duration-200">f</a>
          <a href="#" className="w-9 h-9 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center text-gold text-[0.9rem] no-underline hover:bg-gold hover:text-navy transition-all duration-200">in</a>
          <a href="#" className="w-9 h-9 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center text-gold text-[0.9rem] no-underline hover:bg-gold hover:text-navy transition-all duration-200">ig</a>
          <a href="#" className="w-9 h-9 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center text-gold text-[0.9rem] no-underline hover:bg-gold hover:text-navy transition-all duration-200">yt</a>
        </div>
      </div>
    </footer>
  );
}
