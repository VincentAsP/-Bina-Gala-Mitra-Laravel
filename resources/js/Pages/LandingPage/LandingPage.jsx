import React, { useEffect } from 'react';
import { Link } from "@inertiajs/react";
import Footer from '@/Components/Footer';
import Navbar from '@/Components/Navbar';
import '../../../css/landing.css';

export default function LandingPage() {
  useEffect(() => {
    // Scroll reveal logic (Intersection Observer)
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
      }),
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-observe]').forEach(el => observer.observe(el));

    // Cleanup listeners on unmount
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="bg-navy text-cream font-sans scroll-smooth">
      <Navbar />
      {/* HERO */}
      <section id="pendahuluan" className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 pt-32 pb-16 md:px-16">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 70% 50%, rgba(201,148,58,0.08) 0%, transparent 60%), radial-gradient(ellipse at 20% 80%, rgba(20,60,100,0.4) 0%, transparent 50%), linear-gradient(160deg, #0C1B2E 0%, #0F2035 50%, #0C1B2E 100%)' }}></div>
        <div className="batik-pattern"></div>

        <div className="relative max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 bg-gold/15 border border-gold/30 px-5 py-2 rounded-full mb-8 text-[0.8rem] text-gold-light tracking-widest uppercase animate-fadeInDown">
            ⭐ Resmi &amp; Terpercaya · PJ.TKI Berlisensi BNSP
          </div>

          <h1 className="font-serif font-bold text-cream leading-tight mb-1 text-5xl md:text-[clamp(3rem,7vw,5.5rem)] animate-fadeInUp [animation-delay:200ms]">
            BINA GALA MITRA
          </h1>

          <div className="font-sans italic font-light text-gold mb-6 tracking-[2px] text-2xl md:text-[clamp(1.2rem,3vw,2rem)] animate-fadeInUp [animation-delay:350ms]">
            SUKSES DEMI MASA DEPAN YANG LEBIH BAIK
          </div>

          <p className="text-[1.1rem] leading-relaxed text-text-light max-w-2xl mx-auto mb-12 animate-fadeInUp [animation-delay:500ms]">
            Lembaga pelatihan dan penempatan tenaga kerja Indonesia terpercaya untuk pasar
            kerja internasional di Singapore, Taiwan, Malaysia, dan Hongkong. Kami membangun
            karir impian Anda dengan standar pelatihan berkelas dunia.
          </p>

          {/* Flags */}
          <div className="flex justify-center gap-4 flex-wrap mb-12 animate-fadeInUp [animation-delay:650ms]">
            <div className="flex items-center gap-3 bg-white/5 border border-gold/20 px-5 py-3 rounded-lg">
              <span className="text-3xl">🇸🇬</span>
              <Link href="/syarat-ketentuan" className="text-left"><div className="text-[0.9rem] font-medium text-cream">Singapore</div><div className="text-[0.7rem] text-text-muted">Konstruksi · Hospitality</div></Link>
            </div>
            <div className="flex items-center gap-3 bg-white/5 border border-gold/20 px-5 py-3 rounded-lg">
              <span className="text-3xl">🇹🇼</span>
              <div className="text-left"><div className="text-[0.9rem] font-medium text-cream">Taiwan</div><div className="text-[0.7rem] text-text-muted">Manufaktur · Perawatan</div></div>
            </div>
            <div className="flex items-center gap-3 bg-white/5 border border-gold/20 px-5 py-3 rounded-lg">
              <span className="text-3xl">🇲🇾</span>
              <div className="text-left"><div className="text-[0.9rem] font-medium text-cream">Malaysia</div><div className="text-[0.7rem] text-text-muted">Industri · Rumah Tangga</div></div>
            </div>
            <div className="flex items-center gap-3 bg-white/5 border border-gold/20 px-5 py-3 rounded-lg">
              <span className="text-3xl">🇭🇰</span>
              <div className="text-left"><div className="text-[0.9rem] font-medium text-cream">Hongkong</div><div className="text-[0.7rem] text-text-muted">Rumah Tangga · Hospitality</div></div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 justify-center flex-wrap animate-fadeInUp [animation-delay:800ms]">
            <a href="#pendahuluan-detail" className="bg-gold text-navy px-10 py-3.5 rounded-md font-medium text-[0.95rem] no-underline hover:bg-gold-light hover:-translate-y-0.5 transition-all duration-200">
              Hubungi Kami
            </a>
            <a href="#sejarah" className="bg-transparent text-cream border border-gold/40 px-10 py-3.5 rounded-md text-[0.95rem] no-underline hover:border-gold hover:text-gold-light transition-all duration-200">
              Tentang Kami
            </a>
          </div>
        </div>

        {/* Scroll line */}
        <div className="absolute bottom-10 left-1/2 animate-bounce2">
          <span className="block w-px h-12" style={{ background: 'linear-gradient(to bottom, transparent, #C9943A)', margin: '0 auto' }}></span>
        </div>
      </section>

      {/* STATS BAR */}
      <div className="bg-navy-light border-t border-b border-gold/15 py-8 px-6 md:px-16 grid grid-cols-2 md:grid-cols-4 text-center">
        <div className="py-2 border-r border-gold/10"><div className="font-serif text-[2.2rem] text-gold-light font-bold">5.000+</div><div className="text-[0.8rem] text-text-muted tracking-wide mt-1">Alumni Berhasil</div></div>
        <div className="py-2 md:border-r border-gold/10"><div className="font-serif text-[2.2rem] text-gold-light font-bold">18+</div><div className="text-[0.8rem] text-text-muted tracking-wide mt-1">Tahun Pengalaman</div></div>
        <div className="py-2 border-r border-gold/10"><div className="font-serif text-[2.2rem] text-gold-light font-bold">4</div><div className="text-[0.8rem] text-text-muted tracking-wide mt-1">Negara Tujuan</div></div>
        <div className="py-2"><div className="font-serif text-[2.2rem] text-gold-light font-bold">95%</div><div className="text-[0.8rem] text-text-muted tracking-wide mt-1">Tingkat Keberhasilan</div></div>
      </div>

      {/* PENDAHULUAN */}
      <section id="pendahuluan-detail" className="py-24 px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center max-w-275 mx-auto">
          <div id="intro-text" data-observe>
            <div className="inline-block text-[0.75rem] tracking-[2px] uppercase text-gold mb-4 pb-2 border-b border-gold/30">Pendahuluan</div>
            <h2 className="font-serif text-3xl md:text-[clamp(2rem,4vw,3rem)] text-cream font-semibold leading-snug mb-6">
              Jembatan Menuju<br />Karir Internasional
            </h2>
            <p className="text-text-light leading-relaxed text-[1.05rem] mb-5">
              PT. Bina Gala Mitra adalah perusahaan Pengerah Jasa Tenaga Kerja Indonesia (PJ.TKI) yang berdedikasi penuh dalam mempersiapkan sumber daya manusia Indonesia yang kompeten dan siap bersaing di pasar kerja global.
            </p>
            <p className="text-text-light leading-relaxed text-[1.05rem] mb-5">
              Kami percaya bahwa setiap tenaga kerja Indonesia berhak mendapatkan kesempatan yang setara. Dengan pendekatan pelatihan holistik, kami tidak hanya mempersiapkan keterampilan teknis, tetapi juga mental dan karakter.
            </p>
            <div className="bg-gold/8 border-l-[3px] border-gold pl-6 py-5 pr-5 rounded-r-lg italic text-gold-pale text-[1rem] leading-relaxed my-8">
              Kami bukan hanya menempatkan tenaga kerja — kami membangun generasi pekerja Indonesia yang bangga, profesional, dan berkarakter di mata dunia.
            </div>
            <p className="text-text-light leading-relaxed text-[1.05rem]">
              Berizin resmi dari BNSP dan berada di bawah pengawasan BP2MI, seluruh proses penempatan kami dilakukan secara transparan, legal, dan bertanggung jawab.
            </p>
          </div>

          <div>
            <div className="bg-navy-light border border-gold/20 rounded-2xl p-10 text-center">
              <h3 className="font-serif text-gold-light text-[1.4rem] mb-3">Tujuan Penempatan</h3>
              <p className="text-text-muted text-[0.9rem] leading-relaxed">Bekerja sama dengan mitra terpercaya di empat negara dengan standar kerja tinggi dan gaji kompetitif.</p>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-gold/6 border border-gold/15 p-4 rounded-xl text-center"><div className="text-3xl">🇸🇬</div><div className="text-[0.85rem] font-medium text-cream mt-1">Singapore</div><div className="text-[0.75rem] text-text-muted mt-0.5">SGD 800 – 1,800/bln</div></div>
                <div className="bg-gold/6 border border-gold/15 p-4 rounded-xl text-center"><div className="text-3xl">🇹🇼</div><div className="text-[0.85rem] font-medium text-cream mt-1">Taiwan</div><div className="text-[0.75rem] text-text-muted mt-0.5">TWD 17,000+/bln</div></div>
                <div className="bg-gold/6 border border-gold/15 p-4 rounded-xl text-center"><div className="text-3xl">🇲🇾</div><div className="text-[0.85rem] font-medium text-cream mt-1">Malaysia</div><div className="text-[0.75rem] text-text-muted mt-0.5">MYR 1,500+/bln</div></div>
                <div className="bg-gold/6 border border-gold/15 p-4 rounded-xl text-center"><div className="text-3xl">🇭🇰</div><div className="text-[0.85rem] font-medium text-cream mt-1">Hongkong</div><div className="text-[0.75rem] text-text-muted mt-0.5">HKD 4,630+/bln</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEJARAH */}
      <section id="sejarah" className="bg-section-bg py-24 px-6 md:px-16">
        <div className="text-center mb-16">
          <div className="inline-block text-[0.75rem] tracking-[2px] uppercase text-gold mb-4 pb-2 border-b border-gold/30">Sejarah Singkat</div>
          <h2 className="font-serif text-3xl md:text-[clamp(2rem,4vw,3rem)] text-cream font-semibold leading-snug">Perjalanan Kami<br />Selama Dua Dekade</h2>
          <p className="text-[1rem] text-text-muted max-w-135 mx-auto mt-4 leading-relaxed">Dari lembaga kecil di Jakarta hingga menjadi salah satu PJ.TKI terpercaya di Indonesia.</p>
        </div>

        <div className="timeline max-w-200 mx-auto">
          <div className="timeline-item grid grid-cols-[1fr_60px_1fr] mb-12" id="tl-0" data-observe>
            <div className="t-content col-start-1 text-right pr-10"><div className="font-serif text-2xl text-gold font-bold mb-1">2005</div><div className="font-medium text-cream mb-1">Berdiri</div><div className="text-[0.85rem] text-text-muted leading-relaxed">PT. Bina Gala Mitra resmi didirikan di Jakarta sebagai lembaga pelatihan tenaga kerja.</div></div>
            <div className="t-dot col-start-2 flex items-center justify-center"></div>
            <div className="t-empty col-start-3"></div>
          </div>
          <div className="timeline-item grid grid-cols-[1fr_60px_1fr] mb-12 delay-100" id="tl-1" data-observe>
            <div className="t-empty col-start-1"></div>
            <div className="t-dot col-start-2 flex items-center justify-center"></div>
            <div className="t-content col-start-3 text-left pl-10"><div className="font-serif text-2xl text-gold font-bold mb-1">2008</div><div className="font-medium text-cream mb-1">Ekspansi ke Taiwan</div><div className="text-[0.85rem] text-text-muted leading-relaxed">Membuka jalur penempatan perdana ke Taiwan, melayani sektor manufaktur dan perawatan.</div></div>
          </div>
          <div className="timeline-item grid grid-cols-[1fr_60px_1fr] mb-12 delay-200" id="tl-2" data-observe>
            <div className="t-content col-start-1 text-right pr-10"><div className="font-serif text-2xl text-gold font-bold mb-1">2012</div><div className="font-medium text-cream mb-1">Jalur Singapore</div><div className="text-[0.85rem] text-text-muted leading-relaxed">Memulai program penempatan ke Singapore untuk sektor konstruksi dan layanan profesional.</div></div>
            <div className="t-dot col-start-2 flex items-center justify-center"></div>
            <div className="t-empty col-start-3"></div>
          </div>
          <div className="timeline-item grid grid-cols-[1fr_60px_1fr] mb-12 delay-300" id="tl-3" data-observe>
            <div className="t-empty col-start-1"></div>
            <div className="t-dot col-start-2 flex items-center justify-center"></div>
            <div className="t-content col-start-3 text-left pl-10"><div className="font-serif text-2xl text-gold font-bold mb-1">2017</div><div className="font-medium text-cream mb-1">Ekspansi Malaysia &amp; HK</div><div className="text-[0.85rem] text-text-muted leading-relaxed">Membuka jalur ke Malaysia dan Hongkong, memperluas peluang karir tenaga kerja Indonesia.</div></div>
          </div>
          <div className="timeline-item grid grid-cols-[1fr_60px_1fr] mb-12 delay-400" id="tl-4" data-observe>
            <div className="t-content col-start-1 text-right pr-10"><div className="font-serif text-2xl text-gold font-bold mb-1">2018</div><div className="font-medium text-cream mb-1">Sertifikasi Nasional</div><div className="text-[0.85rem] text-text-muted leading-relaxed">Memperoleh sertifikasi resmi dari BNSP dan BP2MI sebagai PPTKIS terpercaya.</div></div>
            <div className="t-dot col-start-2 flex items-center justify-center"></div>
            <div className="t-empty col-start-3"></div>
          </div>
          <div className="timeline-item grid grid-cols-[1fr_60px_1fr] mb-12 delay-500" id="tl-5" data-observe>
            <div className="t-empty col-start-1"></div>
            <div className="t-dot col-start-2 flex items-center justify-center"></div>
            <div className="t-content col-start-3 text-left pl-10"><div className="font-serif text-2xl text-gold font-bold mb-1">2024</div><div className="font-medium text-cream mb-1">Ribuan Alumni</div><div className="text-[0.85rem] text-text-muted leading-relaxed">Lebih dari 5.000 tenaga kerja berhasil ditempatkan dengan tingkat kepuasan tinggi.</div></div>
          </div>
        </div>
      </section>

      {/* FASILITAS */}
      <section id="fasilitas" className="py-24 px-6 md:px-16">
        <div className="text-center mb-16">
          <div className="inline-block text-[0.75rem] tracking-[2px] uppercase text-gold mb-4 pb-2 border-b border-gold/30">Fasilitas</div>
          <h2 className="font-serif text-3xl md:text-[clamp(2rem,4vw,3rem)] text-cream font-semibold leading-snug">Fasilitas Lengkap<br />Standar Internasional</h2>
          <p className="text-[1rem] text-text-muted max-w-135 mx-auto mt-4 leading-relaxed">Kami menyediakan fasilitas terbaik untuk memastikan setiap peserta siap menghadapi dunia kerja global.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-275 mx-auto">
          <div className="bg-navy-light border border-gold/10 rounded-2xl p-8 hover:border-gold/40 hover:-translate-y-1 transition-all duration-300" id="fac-0" data-observe>
            <span className="text-4xl mb-4 block">🏫</span>
            <div className="font-serif text-[1.15rem] text-gold-light mb-2">Pelatihan Bahasa</div>
            <div className="text-[0.875rem] text-text-muted leading-relaxed">Program intensif bahasa Mandarin, Inggris, dan Kantonis untuk komunikasi profesional di Singapore, Taiwan, Hongkong, dan Malaysia.</div>
          </div>
          <div className="bg-navy-light border border-gold/10 rounded-2xl p-8 hover:border-gold/40 hover:-translate-y-1 transition-all duration-300 delay-100" id="fac-1" data-observe>
            <span className="text-4xl mb-4 block">📚</span>
            <div className="font-serif text-[1.15rem] text-gold-light mb-2">Kelas Keterampilan</div>
            <div className="text-[0.875rem] text-text-muted leading-relaxed">Pelatihan keahlian kerja rumah tangga dan keterampilan profesional sesuai standar internasional.</div>
          </div>
          <div className="bg-navy-light border border-gold/10 rounded-2xl p-8 hover:border-gold/40 hover:-translate-y-1 transition-all duration-300 delay-200" id="fac-2" data-observe>
            <span className="text-4xl mb-4 block">🛏️</span>
            <div className="font-serif text-[1.15rem] text-gold-light mb-2">Asrama Nyaman</div>
            <div className="text-[0.875rem] text-text-muted leading-relaxed">Tempat tinggal bersih dan aman selama masa pelatihan dengan fasilitas lengkap.</div>
          </div>
          <div className="bg-navy-light border border-gold/10 rounded-2xl p-8 hover:border-gold/40 hover:-translate-y-1 transition-all duration-300" id="fac-3" data-observe>
            <span className="text-4xl mb-4 block">🍽️</span>
            <div className="font-serif text-[1.15rem] text-gold-light mb-2">Dapur &amp; Katering</div>
            <div className="text-[0.875rem] text-text-muted leading-relaxed">Makan 3 kali sehari dengan menu bergizi seimbang untuk mendukung program pelatihan.</div>
          </div>
          <div className="bg-navy-light border border-gold/10 rounded-2xl p-8 hover:border-gold/40 hover:-translate-y-1 transition-all duration-300 delay-100" id="fac-4" data-observe>
            <span className="text-4xl mb-4 block">🏥</span>
            <div className="font-serif text-[1.15rem] text-gold-light mb-2">Klinik Kesehatan</div>
            <div className="text-[0.875rem] text-text-muted leading-relaxed">Pemeriksaan kesehatan rutin dan layanan medis selama masa pendidikan berlangsung.</div>
          </div>
        </div>
      </section>

      <Footer />

      {/* WHATSAPP FLOAT */}
      <a href="https://wa.me/6281234567890?text=Halo%2C%20saya%20ingin%20mengetahui%20lebih%20lanjut%20tentang%20program%20penempatan%20kerja."
         className="fixed bottom-8 right-8 z-999 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center no-underline hover:scale-110 transition-transform duration-300 animate-waPulse"
         target="_blank" rel="noopener noreferrer" aria-label="Chat WhatsApp">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 fill-white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </div>
  );
}
