
import { Head, Link } from "@inertiajs/react";
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';


// ─── Singapore Data ────────────────────────────────────────────────────────────
const country = {
  flag: "🇸🇬",
  name: "Singapore",
  currency: "SGD",
  language: "Inggris, Mandarin, Melayu",
  timezone: "WIB +1",
  tagline: "Pusat Keuangan Asia Tenggara",
  heroDesc:
    "Singapore adalah salah satu negara dengan standar hidup tertinggi di dunia. Dengan sistem hukum yang kuat dan perlindungan tenaga kerja yang ketat, bekerja di Singapore adalah pilihan premium bagi tenaga kerja Indonesia.",

  highlights: [
    { icon: "💵", label: "Gaji Rata-rata", value: "SGD 800 – 1,800", sub: "per bulan" },
    { icon: "📅", label: "Durasi Kontrak", value: "1 – 2 Tahun", sub: "dapat diperpanjang" },
    { icon: "🛡️", label: "Perlindungan", value: "MOM Singapore", sub: "Ministry of Manpower" },
    { icon: "✈️", label: "Penerbangan", value: "~1.5 Jam", sub: "dari Jakarta" },
  ],

  sectors: [
    {
      icon: "🏗️",
      title: "Konstruksi",
      salary: "SGD 1,200 – 1,800",
      desc: "Proyek infrastruktur dan gedung bertingkat. Membutuhkan tenaga fisik dan keterampilan teknis dasar.",
      requirements: ["Pria, 21–40 tahun", "Fisik sehat & kuat", "Bersedia kerja shift"],
    },
    {
      icon: "🏥",
      title: "Perawatan (Caregiver)",
      salary: "SGD 800 – 1,100",
      desc: "Merawat lansia dan penyandang disabilitas di rumah atau panti jompo.",
      requirements: ["Wanita, 21–40 tahun", "Sabar & teliti", "Sertifikat caregiver"],
    },
    {
      icon: "🏨",
      title: "Hospitality",
      salary: "SGD 1,000 – 1,500",
      desc: "Hotel bintang 5, restoran, dan resort premium. Penampilan dan komunikasi menjadi nilai plus.",
      requirements: ["Pria/Wanita, 21–35 tahun", "Kemampuan bahasa Inggris", "Pengalaman diutamakan"],
    },
    
    {
      icon: "🏠",
      title: "Asisten Rumah Tangga",
      salary: "SGD 800 – 950",
      desc: "Mengelola rumah tangga majikan termasuk memasak, membersihkan, dan menjaga anak.",
      requirements: ["Wanita, 23–45 tahun", "Pengalaman ART", "Bersedia tinggal di majikan"],
    },
  ],

  process: [
    { step: "01", title: "Daftar & Seleksi", desc: "Isi formulir pendaftaran dan ikuti seleksi awal dokumen serta wawancara." },
    { step: "02", title: "Pelatihan", desc: "Ikuti program pelatihan 30–60 hari termasuk bahasa Inggris dan keterampilan kerja." },
    { step: "03", title: "Medical Check-up", desc: "Pemeriksaan kesehatan lengkap sesuai standar MOM Singapore." },
    { step: "04", title: "Pengurusan Dokumen", desc: "Proses paspor, visa kerja, dan perjanjian kerja secara resmi via BP2MI." },
    { step: "05", title: "Keberangkatan", desc: "Briefing akhir dan pemberangkatan ke Singapore dengan pendampingan." },
    { step: "06", title: "After-Care", desc: "Monitoring dan dukungan selama masa kontrak berlangsung." },
  ],

};

function SectorCard({ sector }) {
  return (
    <div className="bg-navy-light border border-gold/15 rounded-2xl p-7 hover:border-gold/40 hover:-translate-y-1 transition-all duration-300 flex flex-col">
      <div className="flex items-start justify-between mb-4">
        <span className="text-4xl">{sector.icon}</span>
        <div className="text-right">
          <div className="text-[0.7rem] text-text-muted uppercase tracking-widest">Gaji</div>
          <div className="font-serif text-gold-light text-[0.95rem] font-semibold">{sector.salary}</div>
        </div>
      </div>
      <h3 className="font-serif text-xl text-cream font-semibold mb-2">{sector.title}</h3>
      <p className="text-text-muted text-[0.875rem] leading-relaxed mb-5 flex-1">{sector.desc}</p>
      <div className="border-t border-gold/10 pt-4">
        <div className="text-[0.7rem] text-gold uppercase tracking-widest mb-2">Persyaratan</div>
        <ul className="space-y-1">
          {sector.requirements.map((r) => (
            <li key={r} className="flex items-center gap-2 text-[0.82rem] text-text-light">
              <span className="w-1 h-1 rounded-full bg-gold shrink-0" />
              {r}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

SectorCard.propTypes = {
  sector: PropTypes.shape({
    icon: PropTypes.string.isRequired,
    salary: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    requirements: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

function ProcessStep({ item, isLast }) {
  return (
    <div className="flex gap-5">
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 rounded-full bg-gold/10 border-2 border-gold/30 flex items-center justify-center shrink-0">
          <span className="font-serif text-gold font-bold text-sm">{item.step}</span>
        </div>
        {!isLast && <div className="w-px flex-1 bg-gold/15 mt-2" />}
      </div>
      <div className={`${isLast ? "" : "pb-10"} pt-2`}>
        <h3 className="font-semibold text-cream mb-1">{item.title}</h3>
        <p className="text-text-muted text-[0.875rem] leading-relaxed">{item.desc}</p>
      </div>
    </div>
  );
}

ProcessStep.propTypes = {
  item: PropTypes.shape({
    step: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }).isRequired,
  isLast: PropTypes.bool.isRequired,
};

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function SyaratdanKetentuan({ country }) {
  return (
    <>
      <Head title={`Kerja di ${country.name} – PT. Bina Gala Mitra`} />
      <div className="bg-navy text-cream font-sans min-h-screen">
        <Navbar />

        {/* ── HERO ── */}
        <section className="relative min-h-[70vh] flex items-end overflow-hidden pt-24">
          {/* BG */}
          <div
            className="absolute inset-0"
            style={{ background: "radial-gradient(ellipse at 80% 20%, rgba(201,148,58,0.1) 0%, transparent 50%), linear-gradient(160deg, #0C1B2E 0%, #0F2035 60%, #0C1B2E 100%)" }}
          />
          {/* Subtle dot grid */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: "radial-gradient(#C9943A 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
          {/* Big flag watermark */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[20rem] opacity-[0.04] select-none pointer-events-none leading-none">
            {country.id}
          </div>

          <div className="relative px-6 md:px-16 pb-16 w-full max-w-275 mx-auto">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-[0.8rem] text-text-muted mb-8">
              <Link href="/" className="hover:text-gold-light transition-colors no-underline">Beranda</Link>
              <span className="text-gold/40">›</span>
              <span className="text-text-muted">Negara Tujuan</span>
              <span className="text-gold/40">›</span>
              <span className="text-gold-light">{country.name}</span>
            </div>

            <div className="flex items-start gap-5 mb-6">
              <span className="text-6xl leading-none">🇸🇬</span>
              <div>
                <div className="text-[0.75rem] tracking-[2px] uppercase text-gold mb-1">Negara Tujuan</div>
                <h1 className="font-serif text-5xl md:text-6xl text-cream font-bold leading-tight">
                  {country.name}
                </h1>
                <div className="text-gold-light font-serif italic text-xl mt-1">{country.tagline}</div>
              </div>
            </div>

            <p className="text-text-light text-[1.05rem] leading-relaxed max-w-2xl mb-10">
              {SG_DATA.heroDesc}
            </p>

            {/* Highlight chips */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {SG_DATA.highlights.map(({ icon, label, value, sub }) => (
                <div key={label} className="bg-white/5 border border-gold/20 rounded-xl px-4 py-4">
                  <div className="text-2xl mb-2">{icon}</div>
                  <div className="text-[0.7rem] text-text-muted uppercase tracking-widest mb-0.5">{label}</div>
                  <div className="font-serif text-gold-light font-semibold text-[1rem]">{value}</div>
                  <div className="text-[0.72rem] text-text-muted">{sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SEKTOR ── */}
        <section id="sektor" className="py-24 px-6 md:px-16">
          <div className="max-w-275 mx-auto">
            <div className="mb-12">
              <div className="text-[0.75rem] tracking-[2px] uppercase text-gold mb-3 pb-2 border-b border-gold/30 inline-block">
                Sektor Pekerjaan
              </div>
              <h2 className="font-serif text-3xl md:text-4xl text-cream font-semibold">
                Pilihan Karir di Singapore
              </h2>
              <p className="text-text-muted mt-3 text-[0.95rem] leading-relaxed max-w-xl">
                Kami menyediakan penempatan di 4 sektor utama dengan mitra kerja terpercaya yang telah terverifikasi MOM Singapore.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
              {SG_DATA.sectors.map((s) => (
                <SectorCard key={s.title} sector={s} />
              ))}
            </div>
          </div>
        </section>

        {/* ── PROSES + INFO ── */}
        <section id="proses" className="bg-section-bg py-24 px-6 md:px-16">
          <div className="max-w-275 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Process */}
            <div>
              <div className="text-[0.75rem] tracking-[2px] uppercase text-gold mb-3 pb-2 border-b border-gold/30 inline-block">
                Proses Penempatan
              </div>
              <h2 className="font-serif text-3xl text-cream font-semibold mb-8">
                Langkah Menuju Singapore
              </h2>
              <div>
                {SG_DATA.process.map((item, i) => (
                  <ProcessStep key={item.step} item={item} isLast={i === SG_DATA.process.length - 1} />
                ))}
              </div>
            </div>

            {/* Info Card */}
            <div className="space-y-5">
              {/* Living cost */}
              <div className="bg-navy-light border border-gold/20 rounded-2xl p-6">
                <h3 className="font-serif text-gold-light text-lg mb-4">Info Tambahan Singapore</h3>
                <div className="space-y-3">
                  {[
                    ["🌐", "Bahasa", "Inggris, Mandarin, Melayu, Tamil"],
                    ["🕐", "Zona Waktu", "GMT+8 (WIB+1)"],
                    ["💱", "Mata Uang", "SGD (1 SGD ≈ Rp 12.000)"],
                    ["🌡️", "Iklim", "Tropis, 25–33°C sepanjang tahun"],
                    ["🏥", "Fasilitas Medis", "Ditanggung majikan (sektor tertentu)"],
                    ["📱", "Komunikasi", "Bebas telpon ke Indonesia via WA/data"],
                  ].map(([icon, label, val]) => (
                    <div key={label} className="flex items-start gap-3">
                      <span className="text-lg shrink-0">{icon}</span>
                      <div className="flex-1 flex justify-between gap-4">
                        <span className="text-text-muted text-[0.85rem]">{label}</span>
                        <span className="text-cream text-[0.85rem] text-right">{val}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div
                className="rounded-2xl p-6 text-center"
                style={{ background: "linear-gradient(135deg, rgba(201,148,58,0.15) 0%, rgba(201,148,58,0.05) 100%)", border: "1px solid rgba(201,148,58,0.3)" }}
              >
                <div className="text-3xl mb-3">🚀</div>
                <h3 className="font-serif text-cream text-xl mb-2">Siap Bekerja di Singapore?</h3>
                <p className="text-text-muted text-[0.875rem] mb-5">Konsultasi gratis dengan tim kami, tanpa komitmen.</p>
                <a
                  href="https://wa.me/6281234567890?text=Halo%2C%20saya%20tertarik%20bekerja%20di%20Singapore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gold text-navy px-7 py-3 rounded-lg font-medium text-[0.9rem] no-underline hover:bg-gold-light transition-colors duration-200"
                >
                  Konsultasi Gratis →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── OTHER COUNTRIES ── */}
        <section className="bg-section-bg py-16 px-6 md:px-16">
          <div className="max-w-275 mx-auto">
            <div className="text-[0.75rem] tracking-[2px] uppercase text-gold mb-6 text-center">Negara Tujuan Lainnya</div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { flag: "🇹🇼", name: "Taiwan",   salary: "TWD 17,000+/bln",   slug: "/taiwan" },
                { flag: "🇲🇾", name: "Malaysia",  salary: "MYR 1,500+/bln",    slug: "/malaysia" },
                { flag: "🇭🇰", name: "Hongkong",  salary: "HKD 4,630+/bln",    slug: "/hongkong" },
              ].map((c) => (
                <Link
                  key={c.name}
                  href={c.slug}
                  className="bg-navy-light border border-gold/15 rounded-xl px-5 py-4 flex items-center gap-4 hover:border-gold/35 transition-colors duration-200 cursor-pointer no-underline"
                >
                  <span className="text-4xl">{c.flag}</span>
                  <div>
                    <div className="font-semibold text-cream">{c.name}</div>
                    <div className="text-[0.8rem] text-text-muted">{c.salary}</div>
                  </div>
                  <span className="ml-auto text-gold/40 text-lg">›</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <Footer />

        {/* WhatsApp Float */}
        <a
          href="https://wa.me/6281234567890"
          className="fixed bottom-8 right-8 z-999 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center no-underline hover:scale-110 transition-transform duration-300"
          style={{ boxShadow: "0 4px 20px rgba(37,211,102,0.4)" }}
          target="_blank" rel="noopener noreferrer" aria-label="Chat WhatsApp"
        >
          <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </a>
      </div>
    </>
  );
}
