"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    setCurrentPath(window.location.pathname);
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    if (typeof window !== "undefined" && window.location.pathname !== "/") {
      window.location.href = `/#${id}`;
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-2 bg-[#FCF9F5]/95 backdrop-blur-lg border-b border-[#EADBCE]/80 shadow-sm"
          : "py-3 md:py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 md:gap-3 group">
          <div className="relative w-9 h-9 md:w-10 md:h-10 bg-white rounded-lg md:rounded-xl overflow-hidden shadow-sm border border-[#EADBCE] flex items-center justify-center p-1 group-hover:scale-105 transition-transform duration-300">
            <Image
              src="/logo.png"
              alt="Arambh Travel Logo"
              width={34}
              height={34}
              className="object-contain"
            />
          </div>
          <div>
            <span
              className={`font-extrabold text-base md:text-lg tracking-tight transition-colors duration-300 ${
                isScrolled ? "text-[#9B1124]" : "text-white"
              }`}
            >
              Arambh Travel
            </span>
            <p
              className={`text-[8px] md:text-[9px] uppercase tracking-widest font-bold transition-colors duration-300 ${
                isScrolled ? "text-[#E11D48]" : "text-rose-300"
              }`}
            >
              We Take You Where You Want To Go
            </p>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-6 font-medium text-xs sm:text-sm">
          <a
            href="/"
            className={`hover:text-[#E11D48] transition-colors duration-200 cursor-pointer font-semibold ${
              currentPath === "/"
                ? "text-[#E11D48] font-bold"
                : isScrolled
                ? "text-slate-700"
                : "text-white"
            }`}
          >
            Home
          </a>
          <button
            onClick={() => scrollToSection("all-trips")}
            className={`hover:text-[#E11D48] transition-colors duration-200 cursor-pointer font-medium ${
              isScrolled ? "text-slate-700" : "text-white"
            }`}
          >
            All Packages
          </button>
          <button
            onClick={() => scrollToSection("destinations")}
            className={`hover:text-[#E11D48] transition-colors duration-200 cursor-pointer font-medium ${
              isScrolled ? "text-slate-700" : "text-white"
            }`}
          >
            Highlights
          </button>
          <button
            onClick={() => scrollToSection("itinerary")}
            className={`hover:text-[#E11D48] transition-colors duration-200 cursor-pointer font-medium ${
              isScrolled ? "text-slate-700" : "text-white"
            }`}
          >
            Itinerary
          </button>
          <button
            onClick={() => scrollToSection("pricing")}
            className={`hover:text-[#E11D48] transition-colors duration-200 cursor-pointer font-medium ${
              isScrolled ? "text-slate-700" : "text-white"
            }`}
          >
            Pricing
          </button>
          <a
            href="/our-journeys"
            className={`hover:text-[#E11D48] transition-colors duration-200 cursor-pointer font-semibold ${
              currentPath === "/our-journeys"
                ? "text-[#E11D48] font-bold"
                : isScrolled
                ? "text-slate-700"
                : "text-white"
            }`}
          >
            Stories
          </a>
        </nav>

        {/* Smaller, Refined WhatsApp Action Button */}
        <a
          href="https://wa.me/918369927351?text=Hello%20Arambh%20Travel!%20I%20want%20to%20inquire%20about%20your%20tours."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#E11D48] hover:bg-[#BE123C] text-white font-bold text-xs shadow-sm shadow-rose-900/20 transition-all duration-200 hover:scale-105 active:scale-95"
        >
          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
            <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 001.335 4.978L2 22l5.133-1.347a9.917 9.917 0 004.877 1.28h.005c5.505 0 9.989-4.478 9.99-9.985A9.99 9.99 0 0012.012 2zm4.957 14.22c-.274.774-1.585 1.5-2.194 1.56-.554.055-1.282.102-2.073-.153a10.02 10.02 0 01-4.086-2.58 10.3 10.3 0 01-2.222-3.8c-.463-.794-.741-1.72-.258-2.336.21-.266.463-.56.694-.836.223-.266.297-.456.444-.76.148-.304.074-.57-.037-.798-.111-.228-.99-2.39-1.357-3.274-.356-.862-.722-.746-.99-.76h-.846c-.297 0-.773.111-1.18.56-.407.447-1.554 1.517-1.554 3.702s1.59 4.294 1.815 4.598c.224.304 3.13 4.78 7.58 6.697 1.058.456 1.884.73 2.53 1 .918.28 1.75.24 2.41.143.738-.11 2.274-.93 2.59-1.83.317-.9 3.17-9.066.02-9.066z" />
          </svg>
          <span className="hidden sm:inline">WhatsApp Enquiry</span>
          <span className="sm:hidden">Enquire</span>
        </a>
      </div>
    </header>
  );
}
