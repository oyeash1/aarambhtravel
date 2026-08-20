import React from "react";
import Image from "next/image";

export default function Footer({ onTermsClick }) {
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
    <footer className="bg-slate-950 text-slate-400 pt-20 pb-10 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 mb-16">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-lg overflow-hidden flex items-center justify-center p-1 border border-slate-800">
              <Image
                src="/logo.png"
                alt="Arambh Travel Logo"
                width={36}
                height={36}
                className="object-contain"
              />
            </div>
            <span className="font-extrabold text-lg text-white tracking-tight">
              Arambh Travel
            </span>
          </div>
          <p className="text-xs leading-relaxed max-w-sm">
            We specialize in offering high-quality pilgrimage tours across India.
            Travel in maximum comfort, return with memories.
          </p>
          <p className="text-xs font-bold text-orange-400 uppercase tracking-widest pt-2">
            🚩 Travel with Comfort, Return with Memories
          </p>
          {/* Social Links */}
          <div className="flex items-center gap-3 pt-3">
            <a
              href="https://www.instagram.com/arambhtravel/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 hover:border-orange-500 hover:bg-orange-500 flex items-center justify-center transition-all duration-300 group"
              title="Instagram"
            >
              <svg className="w-4 h-4 fill-current text-slate-400 group-hover:text-white" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/arambh.travel"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 hover:border-orange-500 hover:bg-orange-500 flex items-center justify-center transition-all duration-300 group"
              title="Facebook"
            >
              <svg className="w-4 h-4 fill-current text-slate-400 group-hover:text-white" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>
            <a
              href="mailto:arambhtravel@gmail.com"
              className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 hover:border-orange-500 hover:bg-orange-500 flex items-center justify-center transition-all duration-300 group"
              title="Email Us"
            >
              <svg className="w-4.5 h-4.5 fill-current text-slate-400 group-hover:text-white" viewBox="0 0 24 24">
                <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-white font-bold text-sm uppercase tracking-wider">
            Ayodhya Packages
          </h4>
          <ul className="text-xs space-y-2">
            <li>
              <button
                onClick={() => scrollToSection("destinations")}
                className="hover:text-white transition-colors cursor-pointer text-left font-semibold text-slate-350"
              >
                Mumbai to Ayodhya Couple Special
              </button>
            </li>
            <li>7 Days / 6 Nights Complete Pilgrimage</li>
            <li>Sleeper Coach & 3AC Upgrades Available</li>
            <li>Saryu Boat Ride & LED Show ticket included</li>
            <li>
              <a
                href="/our-journeys"
                className="hover:text-white text-orange-400 font-bold transition-colors cursor-pointer text-left block mt-1"
              >
                Our Completed Journeys (Ayodhya) →
              </a>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="text-white font-bold text-sm uppercase tracking-wider">
            Contact & Bookings
          </h4>
          <p className="text-xs">
            For offline booking support, customizable tour details, or group/corporate
            reservations, speak to our lead coordinator.
          </p>
          <div className="pt-2">
            <a
              href="https://wa.me/918369927351"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-orange-500 text-white font-bold text-xs hover:bg-orange-600 transition-all shadow-md shadow-orange-500/10 cursor-pointer"
            >
              WhatsApp: 8369927351
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 border-t border-slate-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center">
        <p className="text-[11px]">
          &copy; 2026 Arambh Travel. All rights reserved. Tour itinerary, terms,
          and transport rates subject to railway guidelines.
        </p>
        <div className="flex gap-6 text-[11px]">
          <button
            onClick={(e) => {
              e.preventDefault();
              if (onTermsClick) onTermsClick();
            }}
            className="hover:text-white bg-transparent border-none p-0 cursor-pointer text-[11px] text-slate-400 font-medium"
          >
            Terms of Service
          </button>
          <a href="#" className="hover:text-white">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white">
            Railway Terms
          </a>
        </div>
      </div>
    </footer>
  );
}
