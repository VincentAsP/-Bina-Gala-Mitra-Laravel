import React from 'react';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';

export default function TujuanNegara() {

  const destinations = [
    {
      id: 'sg',
      name: 'Singapore',
      flag: '🇸🇬',
      salary: 'SGD 800 – 1,800/bln',
      sectors: ['Konstruksi', 'Hospitality', 'Perawatan'],
      desc: 'Negara maju dengan jarak dekat dan standar kerja profesional yang tinggi. Cocok untuk Anda yang mencari lingkungan kerja modern dan terstruktur.',
    },
    {
      id: 'tw',
      name: 'Taiwan',
      flag: '🇹🇼',
      salary: 'TWD 17,000+/bln',
      sectors: ['Manufaktur', 'Perawatan Lansia', 'Rumah Tangga'],
      desc: 'Pusat teknologi dan industri dengan permintaan tenaga kerja yang sangat besar. Menawarkan gaji kompetitif dan perlindungan pekerja yang baik.',
    },
    {
      id: 'my',
      name: 'Malaysia',
      flag: '🇲🇾',
      salary: 'MYR 1,500+/bln',
      sectors: ['Industri', 'Perkebunan', 'Rumah Tangga'],
      desc: 'Budaya dan bahasa yang serumpun membuat proses adaptasi menjadi jauh lebih cepat dan mudah bagi tenaga kerja Indonesia.',
    },
    {
      id: 'hk',
      name: 'Hongkong',
      flag: '🇭🇰',
      salary: 'HKD 4,630+/bln',
      sectors: ['Rumah Tangga', 'Hospitality', 'Caregiver'],
      desc: 'Menawarkan salah satu standar gaji tertinggi di Asia untuk sektor domestik dengan regulasi hari libur yang jelas dan terjamin.',
    }
  ];

  return (
    <div className="bg-navy min-h-screen text-cream font-sans">

      <Navbar />

      {/* Header Section */}
      <div className="pt-32 pb-16 px-6 md:px-16 text-center relative overflow-hidden">
        {/* Dekorasi Background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-3xl opacity-20" style={{ background: 'radial-gradient(circle, rgba(201,148,58,0.15) 0%, transparent 70%)' }}></div>

        <div className="relative z-10">
          <div className="inline-block text-[0.75rem] tracking-[2px] uppercase text-gold mb-4 pb-2 border-b border-gold/30">
            Program Penempatan
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-cream mb-6">
            Pilih Negara <span className="text-gold-light">Tujuan Anda</span>
          </h1>
          <p className="text-text-muted max-w-2xl mx-auto text-[1.05rem] leading-relaxed">
            Temukan peluang karir internasional yang sesuai dengan keahlian dan minat Anda. Kami bermitra dengan agensi terpercaya di berbagai negara.
          </p>
        </div>
      </div>

      {/* Grid Cards Section */}
      <div className="max-w-6xl mx-auto px-6 md:px-16 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {destinations.map((dest) => (
            <div
              key={dest.id}
              className="bg-navy-light border border-gold/15 rounded-2xl p-8 hover:border-gold/40 hover:-translate-y-1 transition-all duration-300 group flex flex-col"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="text-5xl">{dest.flag}</div>
                <div className="text-right">
                  <div className="text-[0.75rem] text-text-muted uppercase tracking-wider mb-1">Estimasi Gaji</div>
                  <div className="font-serif text-xl text-gold-light font-semibold">{dest.salary}</div>
                </div>
              </div>

              <h2 className="font-serif text-3xl text-cream mb-3">{dest.name}</h2>

              <div className="flex flex-wrap gap-2 mb-5">
                {dest.sectors.map((sector) => (
                  <span key={sector} className="bg-gold/10 border border-gold/20 text-gold-light text-[0.8rem] px-3 py-1 rounded-full">
                    {sector}
                  </span>
                ))}
              </div>

              <p className="text-text-muted text-[0.95rem] leading-relaxed mb-8 grow">
                {dest.desc}
              </p>

              <a
                href={`/tujuan/${dest.id}`} // Nanti bisa disesuaikan link-nya
                className="block w-full text-center bg-transparent border border-gold/30 text-gold-light py-3 rounded-lg font-medium hover:bg-gold hover:text-navy transition-colors duration-200"
              >
                Lihat Detail & Persyaratan
              </a>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
