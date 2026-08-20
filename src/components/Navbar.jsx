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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "py-2 bg-white/90 backdrop-blur-lg border-b border-slate-200/50 shadow-md"
        : "py-3 md:py-6 bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 md:gap-3 group">
          <div className="relative w-9 h-9 md:w-11 md:h-11 bg-white rounded-lg md:rounded-xl overflow-hidden shadow-md border border-slate-100 flex items-center justify-center p-1 group-hover:scale-105 transition-transform duration-300">
            <Image
              src="/logo.png"
              alt="Arambh Travel Logo"
              width={35}
              height={35}
              className="object-contain"
            />
          </div>
          <div>
            <span
              className={`font-extrabold text-base md:text-xl tracking-tight transition-colors duration-300 ${isScrolled ? "text-primary" : "text-white"
                }`}
            >
              Arambh Travel
            </span>
            <p
              className={`text-[8px] md:text-[9px] uppercase tracking-widest font-semibold transition-colors duration-300 ${isScrolled ? "text-slate-500" : "text-slate-300"
                }`}
            >
              Travel With Comfort
            </p>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-sm">
          <a
            href="/"
            className={`hover:text-accent transition-colors duration-300 cursor-pointer font-semibold ${
              currentPath === "/"
                ? "text-orange-500 font-bold"
                : isScrolled
                ? "text-slate-600"
                : "text-white"
            }`}
          >
            Home
          </a>
          <button
            onClick={() => scrollToSection("destinations")}
            className={`hover:text-accent transition-colors duration-300 cursor-pointer ${isScrolled ? "text-slate-600" : "text-white"
              }`}
          >
            Destinations
          </button>
          <button
            onClick={() => scrollToSection("itinerary")}
            className={`hover:text-accent transition-colors duration-300 cursor-pointer ${isScrolled ? "text-slate-600" : "text-white"
              }`}
          >
            Itinerary
          </button>
          <a
            href="/our-journeys"
            className={`hover:text-accent transition-colors duration-300 cursor-pointer font-semibold ${
              currentPath === "/our-journeys"
                ? "text-orange-500 font-bold"
                : isScrolled
                ? "text-slate-600"
                : "text-white"
            }`}
          >
            Our Journeys
          </a>
        </nav>

        {/* Call to Action Button */}
        <a
          href="tel:8369927351"
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-accent text-accent font-semibold text-xs hover:bg-accent hover:text-white transition-all duration-300"
        >
          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
          <span className="hidden sm:inline">Call / WhatsApp Support</span>
          <span className="sm:hidden">Call Now</span>
        </a>
      </div>
    </header>
  );
}
