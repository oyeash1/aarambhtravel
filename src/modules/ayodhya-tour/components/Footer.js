import React from "react";
import Image from "next/image";

export default function Footer() {
  const scrollToSection = (id) => {
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
                alt="JK Adventure Logo"
                width={36}
                height={36}
                className="object-contain"
              />
            </div>
            <span className="font-extrabold text-lg text-white tracking-tight">
              JK ADVENTURE
            </span>
          </div>
          <p className="text-xs leading-relaxed max-w-sm">
            We specialize in offering high-quality pilgrimage tours across India.
            Travel in maximum comfort, return with memories.
          </p>
          <p className="text-xs font-bold text-orange-400 uppercase tracking-widest pt-2">
            🚩 Travel with Comfort, Return with Memories
          </p>
        </div>

        <div className="space-y-4">
          <h4 className="text-white font-bold text-sm uppercase tracking-wider">
            Ayodhya Packages
          </h4>
          <ul className="text-xs space-y-2">
            <li>
              <button
                onClick={() => scrollToSection("destinations")}
                className="hover:text-white transition-colors cursor-pointer text-left"
              >
                Mumbai to Ayodhya Monsoon Special
              </button>
            </li>
            <li>7 Days / 6 Nights Complete Pilgrimage</li>
            <li>Sleeper Coach & 3AC Upgrades Available</li>
            <li>Saryu Boat Ride & LED Show ticket included</li>
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
              href="https://wa.me/916307443201"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-orange-500 text-white font-bold text-xs hover:bg-orange-600 transition-all shadow-md shadow-orange-500/10 cursor-pointer"
            >
              WhatsApp: 6307443201
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 border-t border-slate-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center">
        <p className="text-[11px]">
          &copy; 2026 JK Adventure. All rights reserved. Tour itinerary, terms,
          and transport rates subject to railway guidelines.
        </p>
        <div className="flex gap-6 text-[11px]">
          <a href="#" className="hover:text-white">
            Terms of Service
          </a>
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
