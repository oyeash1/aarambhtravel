import React, { useRef, useState } from "react";
import Image from "next/image";
import { INCLUSIONS } from "../constants/tourData";

export default function Inclusions() {
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollSlider = (direction) => {
    if (sliderRef.current) {
      const card = sliderRef.current.children[0];
      if (!card) return;
      const cardWidth = card.offsetWidth + 24; // card width + gap (gap-6 is 24px)
      const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    if (sliderRef.current) {
      const card = sliderRef.current.children[0];
      if (!card) return;
      const cardWidth = card.offsetWidth + 24;
      const scrollLeft = sliderRef.current.scrollLeft;
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(index);
    }
  };

  const scrollToCard = (index) => {
    if (sliderRef.current) {
      const card = sliderRef.current.children[0];
      if (!card) return;
      const cardWidth = card.offsetWidth + 24;
      sliderRef.current.scrollTo({ left: index * cardWidth, behavior: "smooth" });
      setActiveIndex(index);
    }
  };

  return (
    <section
      id="inclusions"
      className="py-24 bg-slate-50 border-y border-slate-200/40 relative overflow-hidden"
    >
      {/* Colorful background blobs for glass refraction */}
      <div className="absolute top-12 right-12 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-12 left-12 w-96 h-96 bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header Section with Navigation Arrows */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div className="text-left max-w-2xl">
            <span className="text-primary font-bold text-xs uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-full">
              JK Tours Promise
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight mt-4 mb-4">
              All-Inclusive Premium Benefits
            </h2>
            <p className="text-slate-650 text-sm">
              We cover all your basic expenses so you can focus entirely on the
              spiritual bliss of Ayodhya.
            </p>
          </div>

          {/* Navigation Arrows (Top Right on Desktop) */}
          <div className="flex items-center gap-3 self-start md:self-end">
            <button
              onClick={() => scrollSlider("left")}
              className="w-11 h-11 rounded-full border border-slate-200 bg-white text-slate-850 flex items-center justify-center shadow-sm hover:bg-slate-55 hover:border-slate-350 transition-all active:scale-95 cursor-pointer"
              aria-label="Previous slide"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scrollSlider("right")}
              className="w-11 h-11 rounded-full border border-slate-200 bg-white text-slate-855 flex items-center justify-center shadow-sm hover:bg-slate-55 hover:border-slate-350 transition-all active:scale-95 cursor-pointer"
              aria-label="Next slide"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Horizontal Slider Container */}
        <div
          ref={sliderRef}
          onScroll={handleScroll}
          className="flex gap-6 overflow-x-auto scrollbar-none snap-x snap-mandatory pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {INCLUSIONS.map((inc) => (
            <div
              key={inc.id}
              className="relative h-[250px] min-w-[280px] sm:min-w-[300px] max-w-[320px] w-full snap-start inclusion-liquid-card flex flex-col justify-end group cursor-pointer p-4 flex-shrink-0"
            >
              {/* Full-bleed background image space */}
              <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
                {inc.image ? (
                  <Image
                    src={inc.image}
                    alt={inc.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                ) : (
                  /* Fallback gradient with visual instructions for the user */
                  <div className="w-full h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 flex flex-col items-center justify-center p-4 text-center">
                    <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white mb-2 shadow-inner">
                      {inc.icon}
                    </div>
                    <p className="text-[8px] text-slate-400 font-bold uppercase tracking-wider">Image Space</p>
                  </div>
                )}
                {/* Dark overlay gradient to ensure text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent z-10" />
              </div>

              {/* Floating Top Subtitle Pill */}
              <span className="absolute top-3.5 left-3.5 z-20 bg-white/15 backdrop-blur-md border border-white/20 text-white font-bold text-[8px] tracking-wider uppercase px-2.5 py-1 rounded-full shadow-sm">
                {inc.subtitle}
              </span>

              {/* Floating Top Right Icon Circle */}
              {inc.image && (
                <div className="absolute top-3.5 right-3.5 z-20 w-8 h-8 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white flex items-center justify-center shadow-md">
                  {inc.icon}
                </div>
              )}

              {/* Bottom text & action elements */}
              <div className="relative z-20 w-full flex flex-col gap-2.5">
                <div>
                  <div className="flex justify-between items-end mb-1">
                    <h3 className="text-base font-bold text-white tracking-tight leading-tight">
                      {inc.title}
                    </h3>
                    {/* Feature Badge styled like 4.5★ */}
                    <span className="flex items-center gap-0.5 text-orange-400 font-extrabold text-sm drop-shadow-sm select-none">
                      Free<span className="text-[9px] text-orange-500 font-medium">★</span>
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-300 leading-normal font-normal line-clamp-2">
                    {inc.desc}
                  </p>
                </div>

                {/* Action Buttons styled like 'Save' and 'Map Pin' */}
                <div className="flex items-center gap-2 mt-0.5">
                  <button className="flex-1 py-2 rounded-full bg-white text-slate-900 font-extrabold text-[10px] uppercase tracking-wider shadow-lg hover:bg-slate-100 transition-all transform active:scale-95 cursor-pointer">
                    Included
                  </button>
                  <button className="w-8 h-8 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-white/25 transition-all shadow-md active:scale-95 cursor-pointer">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Pagination Dots */}
        <div className="flex justify-center items-center gap-2 mt-10">
          {INCLUSIONS.map((_, idx) => {
            const isActive = activeIndex === idx;
            return (
              <button
                key={idx}
                onClick={() => scrollToCard(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${isActive
                  ? "bg-slate-900 w-6"
                  : "bg-slate-300 w-2.5 hover:bg-slate-400"
                  }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            );
          })}
        </div>

      </div>
    </section>
  );
}
