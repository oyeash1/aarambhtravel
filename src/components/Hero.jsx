import React, { useState, useEffect } from "react";
import { PACKAGES } from "../constants/tourData";

const slides = [
  {
    packageId: "ayodhya-kashi-mathura",
    image: "/assets/mathurahd.jpg",
    position: "bg-center",
    badge: "✨ NEW TOUR: AYODHYA • KASHI • MATHURA",
    titlePart1: "Mumbai to ",
    titleHighlight: "Ayodhya • Kashi • Mathura",
    titlePart2: "",
    description: "Spiritual Journeys. Divine Experiences. Visit Shri Ram Janmabhoomi, Kashi Vishwanath & Shri Krishna Janmabhoomi Mathura.",
  },
  {
    packageId: "kashi-ayodhya",
    image: "/assets/gangaarti.jpg",
    position: "bg-[position:35%_50%] sm:bg-center",
    badge: "✨ FLAGSHIP TOUR: KASHI • PRAYAGRAJ • AYODHYA",
    titlePart1: "Mumbai to ",
    titleHighlight: "Kashi • Prayagraj • Ayodhya",
    titlePart2: "",
    description: "7 Days / 6 Nights Pilgrimage covering Banaras Ghats, Triveni Sangam Prayagraj, and Ram Janmabhoomi Ayodhya.",
  },
  {
    packageId: "ayodhya-kashi-mathura",
    image: "/assets/hero_ayodhya.png",
    position: "bg-[position:center_20%]",
    badge: "✨ SHRI RAM & SHRI KRISHNA DARSHAN",
    titlePart1: "Divine Yatra with ",
    titleHighlight: "Arambh Travel",
    titlePart2: "",
    description: "All-inclusive tour packages with Train Tickets, Hotel Stay, Pure Veg Meals, Sightseeing & Expert Local Tour Guides.",
  },
];

export default function Hero({ setSelectedPackageId }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [activeIndex, isPaused]);

  const scrollToSection = (id, pkgId) => {
    if (pkgId && setSelectedPackageId) {
      setSelectedPackageId(pkgId);
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const currentSlide = slides[activeIndex];

  return (
    <section
      className="relative min-h-screen lg:h-screen w-full flex items-center justify-center overflow-hidden bg-slate-950"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Full screen Video Frame / Background fallback */}
      <div className="absolute top-0 left-0 w-full h-[110vh] lg:h-full pointer-events-none select-none overflow-hidden">
        <div className="absolute inset-0 z-10 bg-black/50" />

        {/* Dynamic background images with smooth fade */}
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 w-full h-full bg-cover ${slide.position} transition-opacity duration-1000 ease-in-out ${idx === activeIndex ? "opacity-100" : "opacity-0"
              }`}
            style={{ backgroundImage: `url('${slide.image}')` }}
          />
        ))}
      </div>

      {/* Hero Interactive Content Area */}
      <div className="relative z-20 max-w-4xl mx-auto px-6 w-full lg:h-full flex flex-col justify-center pt-36 lg:pt-36 pb-36 lg:pb-36">
        <div
          key={activeIndex}
          className="text-center space-y-6 animate-fade-in-up flex flex-col items-center justify-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500 text-white font-black text-xs uppercase tracking-wider shadow-lg shadow-orange-600/30 animate-pulse-slow">
            {currentSlide.badge}
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white leading-tight tracking-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
            {currentSlide.titlePart1}
            {currentSlide.titleHighlight && (
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500">
                {currentSlide.titleHighlight}
              </span>
            )}
            {currentSlide.titlePart2}
          </h1>

          <p className="text-slate-100 text-base sm:text-lg max-w-2xl leading-relaxed mx-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] font-semibold">
            {currentSlide.description}
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <button
              onClick={() => scrollToSection("pricing", currentSlide.packageId)}
              className="px-7 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs sm:text-sm tracking-wide transition-all duration-300 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5 cursor-pointer"
            >
              Book {currentSlide.packageId === "ayodhya-kashi-mathura" ? "Ayodhya-Kashi-Mathura" : "Kashi-Prayagraj-Ayodhya"}
            </button>
            <button
              onClick={() => scrollToSection("destinations", currentSlide.packageId)}
              className="px-7 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm border border-white/20 transition-all duration-300 cursor-pointer backdrop-blur-md"
            >
              Explore Destinations
            </button>
          </div>
        </div>

        {/* Carousel Dots */}
        <div className="absolute bottom-10 lg:bottom-24 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 border-2 cursor-pointer ${idx === activeIndex
                  ? "bg-orange-500 border-orange-500 scale-125 shadow-md shadow-orange-500/50"
                  : "bg-transparent border-white/60 hover:border-white hover:bg-white/20"
                }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
