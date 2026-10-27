import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { PACKAGES, CATEGORIES } from "../constants/tourData";

export default function DestinationsExplorer({ selectedPackageId, setSelectedPackageId }) {
  const [activeCategory, setActiveCategory] = useState("all");
  const sliderRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const filteredPackages = PACKAGES.filter((pkg) => {
    if (activeCategory === "all") return true;
    return pkg.category === activeCategory;
  });

  const checkScroll = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      setCanScrollLeft(scrollLeft > 15);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 15);

      const card = sliderRef.current.querySelector(".tour-card-slide");
      if (card) {
        const cardWidth = card.offsetWidth + 24;
        const index = Math.round(scrollLeft / cardWidth);
        setActiveIndex(Math.min(Math.max(index, 0), filteredPackages.length - 1));
      }
    }
  };

  useEffect(() => {
    const el = sliderRef.current;
    if (el) {
      el.addEventListener("scroll", checkScroll, { passive: true });
      checkScroll();
      window.addEventListener("resize", checkScroll);
    }
    return () => {
      if (el) el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [filteredPackages]);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  }, [activeCategory]);

  const scrollSlider = (direction) => {
    if (sliderRef.current) {
      const card = sliderRef.current.querySelector(".tour-card-slide");
      const cardWidth = card ? card.offsetWidth + 24 : 380;
      sliderRef.current.scrollBy({
        left: direction === "left" ? -cardWidth : cardWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollToCard = (index) => {
    if (sliderRef.current) {
      const card = sliderRef.current.querySelector(".tour-card-slide");
      const cardWidth = card ? card.offsetWidth + 24 : 380;
      sliderRef.current.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });
    }
  };

  const handleSelectPackage = (pkgId, targetSection) => {
    if (setSelectedPackageId) {
      setSelectedPackageId(pkgId);
    }
    const el = document.getElementById(targetSection);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const getCustomWhatsAppLink = () => {
    const msg = `👋 *Hello Arambh Travel!* \n\nI want to plan a *Custom Holiday Trip* ("We take you where you want to go"). \n\n*Destination*: \n*Travelers Count*: \n*Expected Dates*: \n\nPlease help me plan this itinerary!`;
    return `https://wa.me/918369927351?text=${encodeURIComponent(msg)}`;
  };

  return (
    <section id="all-trips" className="py-20 bg-[#FCF9F5] relative overflow-hidden">
      {/* Background radial glow with light cherry tint */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#9B1124]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#E11D48]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3.5">
          <span className="text-[#E11D48] font-extrabold text-[11px] uppercase tracking-widest bg-[#FFF1F3] px-3.5 py-1 rounded-full border border-[#FECDD3]">
            We Take You Where You Want To Go
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#9B1124] tracking-tight">
            Explore Curated Tour Packages
          </h2>
          <p className="text-[#6B5B60] text-xs sm:text-sm leading-relaxed">
            From the golden beaches of <span className="font-bold text-[#29181B]">Goa</span> and the coastal heritage of <span className="font-bold text-[#29181B]">Odisha</span>, to snow peaks in <span className="font-bold text-[#29181B]">Sikkim</span> and sacred yatras of <span className="font-bold text-[#29181B]">Kashi, Ayodhya & Mathura</span> — we craft comfortable, end-to-end travel experiences.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-3">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer border ${
                    isActive
                      ? "bg-[#9B1124] text-white border-[#9B1124] shadow-sm shadow-[#9B1124]/30 scale-105"
                      : "bg-[#F5EFEB] text-[#4A383D] border-[#EADBCE] hover:bg-white"
                  }`}
                >
                  <span>{cat.icon}</span>
                  <span>{cat.name}</span>
                  {cat.id !== "all" && (
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded-full font-extrabold ${
                        isActive ? "bg-white/20 text-white" : "bg-[#EADBCE] text-[#6B5B60]"
                      }`}
                    >
                      {PACKAGES.filter((p) => p.category === cat.id).length}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Slider Controls Header */}
        <div className="flex items-center justify-between mb-4 px-1">
          <div className="flex items-center gap-2">
            <span className="text-xs font-black uppercase tracking-wider text-[#9B1124] flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#E11D48] animate-pulse"></span>
              All Tour Packages ({filteredPackages.length})
            </span>
            <span className="hidden sm:inline-block text-[11px] text-[#8C787D] font-medium">
              • Swipe or use arrows to explore in one line
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => scrollSlider("left")}
              disabled={!canScrollLeft}
              aria-label="Previous tour package"
              className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 border cursor-pointer ${
                canScrollLeft
                  ? "bg-white text-[#9B1124] border-[#EADBCE] hover:bg-[#E11D48] hover:text-white hover:border-[#E11D48] shadow-sm active:scale-95"
                  : "bg-white/40 text-stone-300 border-stone-200 cursor-not-allowed opacity-40"
              }`}
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => scrollSlider("right")}
              disabled={!canScrollRight}
              aria-label="Next tour package"
              className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 border cursor-pointer ${
                canScrollRight
                  ? "bg-[#9B1124] text-white border-[#9B1124] hover:bg-[#BE123C] shadow-sm active:scale-95"
                  : "bg-white/40 text-stone-300 border-stone-200 cursor-not-allowed opacity-40"
              }`}
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Single-Line Tour Cards Slider Track */}
        <div className="relative group/slider">
          {/* Floating side arrows on large screens */}
          {canScrollLeft && (
            <button
              type="button"
              onClick={() => scrollSlider("left")}
              aria-label="Previous tour"
              className="hidden xl:flex absolute -left-5 top-[40%] -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/95 backdrop-blur-md text-[#9B1124] hover:bg-[#E11D48] hover:text-white border border-[#EADBCE] shadow-xl items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {canScrollRight && (
            <button
              type="button"
              onClick={() => scrollSlider("right")}
              aria-label="Next tour"
              className="hidden xl:flex absolute -right-5 top-[40%] -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/95 backdrop-blur-md text-[#9B1124] hover:bg-[#E11D48] hover:text-white border border-[#EADBCE] shadow-xl items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}

          <div
            ref={sliderRef}
            className="flex items-stretch gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory py-4 px-1 no-scrollbar"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {filteredPackages.map((pkg) => {
              const isSelected = selectedPackageId === pkg.id;
              return (
                <div
                  key={pkg.id}
                  className={`tour-card-slide group rounded-3xl bg-white border transition-all duration-300 hover:shadow-xl flex flex-col justify-between overflow-hidden relative shrink-0 snap-start w-[82vw] max-w-[310px] sm:w-[330px] md:w-[350px] ${
                    isSelected
                      ? "border-[#E11D48] shadow-md shadow-rose-950/10 ring-2 ring-[#E11D48]/30"
                      : "border-[#EADBCE]/80 shadow-sm hover:border-[#E11D48]/40"
                  }`}
                >
                  {/* Photo Banner */}
                  <div className="relative h-52 sm:h-56 w-full overflow-hidden shrink-0">
                    <Image
                      src={pkg.bannerImage}
                      alt={pkg.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                  </div>

                  {/* Card Body: Only Trip Name & WhatsApp Enquiry Button */}
                  <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between gap-4">
                    <h3 className="text-base sm:text-lg font-bold text-[#29181B] group-hover:text-[#9B1124] transition-colors leading-snug line-clamp-2">
                      {pkg.title}
                    </h3>

                    <a
                      href={`https://wa.me/918369927351?text=${encodeURIComponent(
                        `Hello Arambh Travel! I want to inquire about "${pkg.title}". Please share details and pricing.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#E11D48] hover:bg-[#BE123C] text-white font-bold text-xs sm:text-sm shadow-sm transition-all duration-200 active:scale-95 cursor-pointer"
                    >
                      <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                        <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 001.335 4.978L2 22l5.133-1.347a9.917 9.917 0 004.877 1.28h.005c5.505 0 9.989-4.478 9.99-9.985A9.99 9.99 0 0012.012 2zm4.957 14.22c-.274.774-1.585 1.5-2.194 1.56-.554.055-1.282.102-2.073-.153a10.02 10.02 0 01-4.086-2.58 10.3 10.3 0 01-2.222-3.8c-.463-.794-.741-1.72-.258-2.336.21-.266.463-.56.694-.836.223-.266.297-.456.444-.76.148-.304.074-.57-.037-.798-.111-.228-.99-2.39-1.357-3.274-.356-.862-.722-.746-.99-.76h-.846c-.297 0-.773.111-1.18.56-.407.447-1.554 1.517-1.554 3.702s1.59 4.294 1.815 4.598c.224.304 3.13 4.78 7.58 6.697 1.058.456 1.884.73 2.53 1 .918.28 1.75.24 2.41.143.738-.11 2.274-.93 2.59-1.83.317-.9 3.17-9.066.02-9.066z" />
                      </svg>
                      <span>Enquire on WhatsApp</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Pagination Dots */}
          <div className="flex items-center justify-center gap-2 mt-5">
            {filteredPackages.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => scrollToCard(idx)}
                aria-label={`Go to tour package ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  activeIndex === idx
                    ? "w-8 bg-[#E11D48]"
                    : "w-2.5 bg-[#EADBCE] hover:bg-rose-300"
                }`}
              />
            ))}
          </div>

          {/* Mobile Swipe Hint */}
          <p className="text-center text-[11px] text-[#8C787D] font-medium mt-2 flex items-center justify-center gap-1.5 sm:hidden">
            <span>←</span> Swipe horizontally to explore packages <span>→</span>
          </p>
        </div>

        {/* "We Take You Where You Want To Go" - Custom Trip Inquiry Banner with Rich Cherry Gradient */}
        <div className="mt-14 bg-gradient-to-r from-[#730D1B] via-[#9B1124] to-[#540813] rounded-3xl p-7 sm:p-10 text-white relative overflow-hidden shadow-xl border border-rose-900/40">
          <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-[radial-gradient(#E11D48_1px,transparent_1px)] [background-size:20px_20px] opacity-15 pointer-events-none" />

          <div className="relative z-10 max-w-2xl space-y-3.5">
            <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-rose-200 font-extrabold text-[10px] uppercase tracking-widest border border-white/20">
              ✈️ Tailor-Made Customized Travel
            </span>
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight leading-tight">
              Have Another Destination in Mind? <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-300 via-pink-200 to-amber-200">
                We Take You Where You Want To Go!
              </span>
            </h3>
            <p className="text-rose-100 text-xs sm:text-sm leading-relaxed">
              Whether you want to explore the snows of Kashmir, heritage forts of Rajasthan, backwaters of Kerala, or any personalized family tour — tell us your dream destination, dates, and budget. We tailor-make the entire trip for you.
            </p>
            <div className="pt-1.5 flex flex-wrap gap-3">
              <a
                href={getCustomWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-[#E11D48] hover:bg-[#BE123C] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-rose-950/40 flex items-center gap-2 cursor-pointer active:scale-95"
              >
                <span>💬 Plan My Custom Trip On WhatsApp</span>
              </a>
              <a
                href="tel:8369927351"
                className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider border border-white/20 transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>📞 Call +91 8369927351</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
