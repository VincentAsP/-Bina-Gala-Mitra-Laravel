import React, {useState, useEffect} from 'react';
import { Link } from "@inertiajs/react";


export default function Navbar(){
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        // Logika khusus untuk mendeteksi scroll Navbar
        const handleScroll = () => {
        setIsScrolled(window.scrollY > 60);
        };
        window.addEventListener('scroll', handleScroll);

        // Cleanup
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return(<nav
        className={`fixed top-0 left-0 right-0 z-100 flex items-center justify-between py-3 transition-all duration-300 md:px-16 px-6 ${
          isScrolled
            ? 'bg-navy/95 backdrop-blur-md border-b border-gold/20'
            : 'bg-transparent backdrop-blur-none border-none'
        }`}
      >

        {/* KIRI - Logo Video */}
        <div className="flex-1 flex justify-start items-center">
          <video
            className="w-16 h-16 md:w-20 md:h-20 object-contain pointer-events-none transform scale-[2] origin-left ml-0.5"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/0001-0079.webm" type="video/webm"/>
          </video>
        </div>

        {/* TENGAH - Menu Navigasi */}
        <ul className="hidden md:flex gap-10 list-none justify-center">
          <li><a href="/" className="text-text-light text-[0.9rem] tracking-wide hover:text-gold-light transition-colors duration-200 no-underline">Home</a></li>
          <li><Link href="/tujuan-negara" className="text-text-light text-[0.9rem] tracking-wide hover:text-gold-light transition-colors duration-200 no-underline">Tujuan Negara</Link></li>
          <li><Link href="/belajar" className="text-text-light text-[0.9rem] tracking-wide hover:text-gold-light transition-colors duration-200 no-underline">Belajar</Link></li>
          <li><a href="#kontak" className="text-text-light text-[0.9rem] tracking-wide hover:text-gold-light transition-colors duration-200 no-underline">Kontak</a></li>
        </ul>

        {/* KANAN - Tombol Daftar */}
        <div className="flex-1 flex justify-end">
          <a href="#kontak" className="bg-gold text-navy px-6 py-2.5 rounded text-[0.85rem] font-semibold no-underline hover:bg-gold-light transition-colors duration-200 hidden md:block">
            Daftar Sekarang
          </a>

          {/* Tombol Hamburger untuk Mobile bisa ditaruh di sini nantinya */}
        </div>
      </nav>);
}
