"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentPath, setCurrentPath] = useState("");
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const servicesDropdownRef = useRef(null);

  const serviceOptions = [
    {
      id: "passport",
      title: "Passport Making",
      subtitle: "New, Renewal & Tatkal support",
      message:
        "Hello Arambh Travel! I want to inquire about Passport Making & assistance services.",
      badge: "Assistance",
      badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
      icon: (
        <svg
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
          <circle cx="12" cy="10" r="3" />
          <path d="M12 13v3" />
        </svg>
      ),
    },
    {
      id: "forex",
      title: "Forex",
      subtitle: "Best currency rates & cards",
      message:
        "Hello Arambh Travel! I want to inquire about Foreign Exchange (Forex) & currency services.",
      badge: "Best Rates",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
      icon: (
        <svg
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M14.8 9A2 2 0 0 0 13 8h-2a2 2 0 0 0 0 4h2a2 2 0 0 1 0 4h-2a2 2 0 0 1-1.8-1" />
          <path d="M12 6v2m0 8v2" />
        </svg>
      ),
    },
    {
      id: "hotel",
      title: "Hotel Booking",
      subtitle: "Luxury resorts & budget stays",
      message:
        "Hello Arambh Travel! I want to inquire about Hotel Booking & stay accommodations.",
      badge: "Top Stays",
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
      icon: (
        <svg
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 21h18" />
          <path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16" />
          <path d="M9 9h1m-1 4h1m-1 4h1m4-8h1m-1 4h1m-1 4h1" />
        </svg>
      ),
    },
    {
      id: "customize",
      title: "Customize Trip",
      subtitle: "Tailor-made tour itineraries",
      message:
        "Hello Arambh Travel! I want to inquire about planning a customized trip with you.",
      badge: "Tailor-Made",
      badgeColor: "bg-rose-50 text-rose-700 border-rose-200",
      icon: (
        <svg
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
        </svg>
      ),
    },
  ];

  const getWhatsAppUrl = (message) => {
    return `https://wa.me/918369927351?text=${encodeURIComponent(message)}`;
  };

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

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        servicesDropdownRef.current &&
        !servicesDropdownRef.current.contains(event.target)
      ) {
        setIsServicesOpen(false);
      }
    }
    function handleEscape(event) {
      if (event.key === "Escape") {
        setIsServicesOpen(false);
      }
    }
    if (isServicesOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
      document.addEventListener("keydown", handleEscape);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isServicesOpen]);

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
        <a href="/" className="flex items-center gap-2.5 sm:gap-3 shrink-0 group">
          <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white overflow-hidden shadow-xs border border-[#EADBCE] flex items-center justify-center p-1.5 shrink-0 aspect-square group-hover:scale-105 transition-transform duration-300">
            <Image
              src="/logo.png"
              alt="Arambh Travel Logo"
              width={32}
              height={32}
              className="object-contain w-full h-full"
            />
          </div>
          <div className="flex flex-col">
            <span
              className={`font-black text-sm sm:text-base md:text-lg tracking-tight whitespace-nowrap transition-colors duration-300 ${
                isScrolled ? "text-[#9B1124]" : "text-white"
              }`}
            >
              Arambh Travel
            </span>
            <p
              className={`hidden sm:block text-[8px] md:text-[9px] uppercase tracking-widest font-bold whitespace-nowrap transition-colors duration-300 ${
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

        {/* Action Buttons: WhatsApp Enquiry & Service Inquiry Dropdown */}
        <div className="flex items-center gap-1.5 sm:gap-2 relative" ref={servicesDropdownRef}>
          {/* Subtle Compact Service Inquiry Button */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsServicesOpen((prev) => !prev)}
              aria-expanded={isServicesOpen}
              aria-haspopup="true"
              className={`flex items-center gap-1 px-2 sm:px-2.5 py-1 rounded-full text-[11px] font-medium transition-all duration-200 cursor-pointer border ${
                isServicesOpen
                  ? "bg-stone-200 text-stone-900 border-stone-300"
                  : isScrolled
                  ? "bg-stone-100 hover:bg-stone-200 text-stone-700 border-stone-200"
                  : "bg-white/10 hover:bg-white/20 text-white/90 border-white/20 backdrop-blur-xs"
              }`}
            >
              <svg
                className="w-3 h-3 shrink-0 opacity-70"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="3" width="7" height="7" rx="1.5" />
                <rect x="14" y="3" width="7" height="7" rx="1.5" />
                <rect x="14" y="14" width="7" height="7" rx="1.5" />
                <rect x="3" y="14" width="7" height="7" rx="1.5" />
              </svg>
              <span>Services</span>
              <svg
                className={`w-2.5 h-2.5 transition-transform duration-200 opacity-60 ${
                  isServicesOpen ? "rotate-180" : ""
                }`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          {/* Compact WhatsApp Action Button */}
          <a
            href="https://wa.me/918369927351?text=Hello%20Arambh%20Travel!%20I%20want%20to%20inquire%20about%20your%20tours."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#E11D48]/90 hover:bg-[#BE123C] text-white font-medium text-[11px] transition-all duration-200 shrink-0"
          >
            <svg className="w-3 h-3 fill-current shrink-0" viewBox="0 0 24 24">
              <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 001.335 4.978L2 22l5.133-1.347a9.917 9.917 0 004.877 1.28h.005c5.505 0 9.989-4.478 9.99-9.985A9.99 9.99 0 0012.012 2zm4.957 14.22c-.274.774-1.585 1.5-2.194 1.56-.554.055-1.282.102-2.073-.153a10.02 10.02 0 01-4.086-2.58 10.3 10.3 0 01-2.222-3.8c-.463-.794-.741-1.72-.258-2.336.21-.266.463-.56.694-.836.223-.266.297-.456.444-.76.148-.304.074-.57-.037-.798-.111-.228-.99-2.39-1.357-3.274-.356-.862-.722-.746-.99-.76h-.846c-.297 0-.773.111-1.18.56-.407.447-1.554 1.517-1.554 3.702s1.59 4.294 1.815 4.598c.224.304 3.13 4.78 7.58 6.697 1.058.456 1.884.73 2.53 1 .918.28 1.75.24 2.41.143.738-.11 2.274-.93 2.59-1.83.317-.9 3.17-9.066.02-9.066z" />
            </svg>
            <span className="hidden sm:inline">WhatsApp</span>
            <span className="sm:hidden">Enquire</span>
          </a>

          {/* Service Inquiry Dropdown Menu Panel */}
          {isServicesOpen && (
            <div className="absolute right-0 top-full mt-2 w-[calc(100vw-32px)] max-w-xs sm:w-80 rounded-2xl bg-white/98 backdrop-blur-xl border border-stone-200/90 shadow-[0_20px_50px_rgba(15,23,42,0.18)] p-2 z-50 animate-in fade-in zoom-in-95 duration-150">
              {/* Header inside dropdown */}
              <div className="px-3 py-2 border-b border-stone-100 flex items-center justify-between mb-1">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#E11D48]"></span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-stone-600">
                    Select Service
                  </span>
                </div>
                <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  WhatsApp Inquiry
                </span>
              </div>

              {/* Service Options List */}
              <div className="space-y-1">
                {serviceOptions.map((service) => (
                  <a
                    key={service.id}
                    href={getWhatsAppUrl(service.message)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsServicesOpen(false)}
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-rose-50/70 text-left transition-all duration-150 group cursor-pointer border border-transparent hover:border-rose-100"
                  >
                    <div className="w-9 h-9 rounded-xl bg-rose-50 text-[#E11D48] flex items-center justify-center shrink-0 group-hover:bg-[#E11D48] group-hover:text-white transition-all duration-200 group-hover:scale-105 shadow-xs">
                      {service.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1">
                        <span className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-[#BE123C] transition-colors truncate">
                          {service.title}
                        </span>
                        <span
                          className={`text-[9px] font-bold px-1.5 py-0.5 rounded-md border shrink-0 ${service.badgeColor}`}
                        >
                          {service.badge}
                        </span>
                      </div>
                      <p className="text-[11px] text-stone-500 truncate group-hover:text-stone-700">
                        {service.subtitle}
                      </p>
                    </div>
                    <svg
                      className="w-3.5 h-3.5 text-stone-400 group-hover:text-[#BE123C] group-hover:translate-x-0.5 transition-all shrink-0"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                ))}
              </div>

              {/* Footer inside dropdown */}
              <div className="mt-1 pt-2 border-t border-stone-100 px-3 py-1 flex items-center justify-between text-[11px] text-stone-500">
                <span className="flex items-center gap-1">
                  <svg className="w-3 h-3 text-emerald-600 fill-current" viewBox="0 0 24 24">
                    <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 001.335 4.978L2 22l5.133-1.347a9.917 9.917 0 004.877 1.28h.005c5.505 0 9.989-4.478 9.99-9.985A9.99 9.99 0 0012.012 2zm4.957 14.22c-.274.774-1.585 1.5-2.194 1.56-.554.055-1.282.102-2.073-.153a10.02 10.02 0 01-4.086-2.58 10.3 10.3 0 01-2.222-3.8c-.463-.794-.741-1.72-.258-2.336.21-.266.463-.56.694-.836.223-.266.297-.456.444-.76.148-.304.074-.57-.037-.798-.111-.228-.99-2.39-1.357-3.274-.356-.862-.722-.746-.99-.76h-.846c-.297 0-.773.111-1.18.56-.407.447-1.554 1.517-1.554 3.702s1.59 4.294 1.815 4.598c.224.304 3.13 4.78 7.58 6.697 1.058.456 1.884.73 2.53 1 .918.28 1.75.24 2.41.143.738-.11 2.274-.93 2.59-1.83.317-.9 3.17-9.066.02-9.066z" />
                  </svg>
                  Direct WhatsApp Chat
                </span>
                <span className="font-semibold text-rose-600">+91 8369927351</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
