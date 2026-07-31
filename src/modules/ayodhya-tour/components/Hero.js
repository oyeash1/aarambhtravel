import React, { useState, useEffect } from "react";

const slides = [
  {
    image: "/assets/hero_kashi.png",
    position: "bg-[position:35%_50%] sm:bg-center",
    badge: "✨ Explore India's Holiest Cities",
    titlePart1: "Mumbai to ",
    titleHighlight: "Kashi",
    titlePart2: " • Prayagraj • Ayodhya",

  },
  {
    image: "/assets/hero_prayagraj.png",
    position: "bg-[position:65%_50%] sm:bg-center",
    badge: "✨ Holy Triveni Sangam",
    titlePart1: "Mumbai to Kashi • ",
    titleHighlight: "Prayagraj",
    titlePart2: " • Ayodhya",

  },
  {
    image: "/assets/hero_ayodhya.png",
    position: "bg-[position:center_top] sm:bg-center",
    badge: "✨ Shri Ram Janmabhoomi",
    titlePart1: "Mumbai to Kashi • Prayagraj • ",
    titleHighlight: "Ayodhya",
    titlePart2: "",

  }
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [activeIndex, isPaused]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative min-h-screen lg:h-screen w-full flex items-center justify-center overflow-hidden bg-slate-950"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Full screen Video Frame / Background fallback */}
      <div className="absolute top-0 left-0 w-full h-[110vh] lg:h-full pointer-events-none select-none overflow-hidden">
        {/* Loop gradient fallback overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#0F3D91]/40 via-slate-950/75 to-slate-950" />

        {/* Dynamic background images with smooth fade */}
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 w-full h-full bg-cover ${slide.position} transition-opacity duration-1000 ease-in-out scale-105 ${idx === activeIndex ? "opacity-100" : "opacity-0"
              }`}
            style={{ backgroundImage: `url('${slide.image}')` }}
          />
        ))}
      </div>

      {/* Hero Interactive Content Area */}
      <div className="relative z-20 max-w-4xl mx-auto px-6 w-full lg:h-full flex flex-col justify-center pt-28 lg:pt-24 pb-36 lg:pb-40">
        <div
          key={activeIndex}
          className="text-center space-y-6 animate-fade-in-up flex flex-col items-center justify-center"
        >
          <div className="inline-flex items-center gap-2 px-2 py-1.5 rounded-full bg-red-500 text-white font-black text-xs uppercase tracking-wider shadow-lg shadow-red-600/30 animate-pulse-slow">
            {slides[activeIndex].badge}
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white leading-none tracking-tight">
            {slides[activeIndex].titlePart1}
            {slides[activeIndex].titleHighlight && (
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500">
                {slides[activeIndex].titleHighlight}
              </span>
            )}
            {slides[activeIndex].titlePart2}
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-4 text-white text-lg">
            <span className="font-semibold text-orange-400">
              7 Days / 6 Nights Trip
            </span>
          </div>

          <p className="text-slate-300 text-base sm:text-lg max-w-xl leading-relaxed mx-auto">
            {slides[activeIndex].description}
          </p>

          {/* Dynamic Prices badges */}
          <div className="flex items-center justify-center gap-6 pt-2">
            <div className="text-white text-center">
              <p className="text-xs text-slate-400 uppercase tracking-widest">
                Couple Package Price
              </p>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-4xl font-extrabold text-white">
                  ₹14,800
                </span>
                <span className="text-sm text-slate-400 line-through">
                  ₹15,500
                </span>
              </div>
            </div>
            <div className="h-10 w-px bg-slate-800" />
            <div>
              <span className="bg-green-500/15 border border-green-500/30 text-green-400 px-3.5 py-2 rounded-xl text-sm font-bold block">
                Save ₹700 Per Couple!
              </span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <button
              onClick={() => scrollToSection("pricing")}
              className="px-6 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs sm:text-sm tracking-wide transition-all duration-300 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5 cursor-pointer"
            >
              Book Tour Now
            </button>
            <button
              onClick={() => scrollToSection("destinations")}
              className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm border border-white/15 transition-all duration-300 cursor-pointer"
            >
              Explore 15+ Places
            </button>
          </div>
        </div>

        {/* Carousel Dots */}
        <div className="absolute bottom-10 lg:bottom-28 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3">
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

        {/* Floating Arrow down */}
        <div
          className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-1 cursor-pointer opacity-70 hover:opacity-100 transition-opacity"
          onClick={() => scrollToSection("destinations")}
        >
          <span className="text-[10px] font-bold text-white uppercase tracking-widest">
            Scroll to explore
          </span>
          <div className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-orange-400 rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
