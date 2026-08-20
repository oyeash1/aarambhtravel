"use client";

import { useEffect } from "react";
import Image from "next/image";

export default function Lightbox({ images, activeIndex, onClose, onPrev, onNext }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, onPrev, onNext]);

  if (activeIndex === null || !images[activeIndex]) return null;
  const image = images[activeIndex];

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-slate-950/95 backdrop-blur-xl p-4 transition-all duration-300">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white flex items-center justify-center transition-all cursor-pointer z-10"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Navigation - Left */}
      <button
        onClick={onPrev}
        className="absolute left-4 sm:left-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white flex items-center justify-center transition-all cursor-pointer z-10"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Image container */}
      <div className="relative w-full max-w-4xl h-[65vh] flex items-center justify-center">
        <Image
          src={image.src}
          alt={image.title}
          fill
          sizes="100vw"
          className="object-contain transition-all duration-500"
          priority
        />
      </div>

      {/* Captions and details */}
      <div className="mt-6 text-center max-w-xl px-4 space-y-2">
        {image.tag && (
          <span className="text-[10px] font-bold text-orange-400 uppercase tracking-widest bg-orange-400/10 px-3 py-1 rounded-full">
            {image.tag}
          </span>
        )}
        {image.title && <h3 className="text-xl sm:text-2xl font-black text-white">{image.title}</h3>}
        {image.desc && (
          <p className="text-xs sm:text-sm text-slate-350 leading-relaxed font-medium">
            {image.desc}
          </p>
        )}
        <span className="text-[11px] text-slate-500 font-semibold block mt-1">
          Moment {activeIndex + 1} of {images.length}
        </span>
      </div>

      {/* Navigation - Right */}
      <button
        onClick={onNext}
        className="absolute right-4 sm:right-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white flex items-center justify-center transition-all cursor-pointer z-10"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}
