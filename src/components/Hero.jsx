import React, { useState, useEffect } from "react";

// Subtle ambient background rotation (cinematic scenic backgrounds)
const backgroundImages = [
  "/assets/goa_hero.jpg",
  "/assets/sikkim_hero.jpg",
  "/assets/odisha_hero.jpg",
  "/assets/gangaarti.jpg",
];

export default function Hero() {
  const [activeBgIndex, setActiveBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBgIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen lg:h-screen w-full flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Full screen Ambient Background Slider with Cinematic Gradient Overlay */}
      <div className="absolute top-0 left-0 w-full h-[110vh] lg:h-full pointer-events-none select-none overflow-hidden">
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/75 via-black/55 to-black/85" />

        {backgroundImages.map((img, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out ${idx === activeBgIndex ? "opacity-100 scale-100" : "opacity-0 scale-105"
              }`}
            style={{
              backgroundImage: `url('${img}')`,
              transition: "opacity 1200ms ease-in-out, transform 9000ms ease-out",
            }}
          />
        ))}
      </div>

      {/* Hero Minimal Centered Content Area */}
      <div className="relative z-20 max-w-4xl mx-auto px-6 w-full flex flex-col items-center justify-center text-center pt-24 pb-20 space-y-5 sm:space-y-6 animate-fade-in-up">
        {/* Subtle, elegant branding pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-rose-300 font-extrabold text-[10px] sm:text-[11px] uppercase tracking-widest backdrop-blur-md border border-white/15 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
          Arambh Travel • Customized Holidays & Group Tours
        </div>

        {/* Minimal Hero Headline: Solely focused on "We Take You Where You Want To Go" */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white leading-[1.12] tracking-tight drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)]">
          We Take You{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-rose-300 to-red-500">
            Where You Want To Go
          </span>
        </h1>

        {/* Minimal Inspiring Subtitle */}
        <p className="text-slate-200 text-xs sm:text-base max-w-2xl mx-auto leading-relaxed font-medium drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
          Tell us your dream journey — from sunny beaches and snow-clad Himalayan valleys to sacred heritage trails and custom family getaways.
        </p>

        {/* Smaller, Sleek Action Buttons */}
        <div className="flex flex-row items-center justify-center gap-3 pt-2">
          <button
            onClick={() => scrollToSection("all-trips")}
            className="px-5 py-2.5 sm:px-6 sm:py-2.5 rounded-xl bg-[#E11D48] hover:bg-[#BE123C] text-white font-bold text-xs tracking-wide transition-all duration-300 shadow-md shadow-rose-900/30 hover:shadow-rose-900/50 hover:-translate-y-0.5 cursor-pointer active:scale-95 flex items-center justify-center gap-2"
          >
            <span>Explore Packages</span>
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <a
            href="https://wa.me/918369927351?text=Hello%20Arambh%20Travel!%20I%20want%20to%20plan%20a%20custom%20trip.%20We%20take%20you%20where%20you%20want%20to%20go!"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 sm:px-6 sm:py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs tracking-wide border border-white/25 transition-all duration-300 backdrop-blur-md hover:-translate-y-0.5 active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Plan Custom Trip</span>
            <svg className="w-3.5 h-3.5 text-[#E11D48]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 001.335 4.978L2 22l5.133-1.347a9.917 9.917 0 004.877 1.28h.005c5.505 0 9.989-4.478 9.99-9.985A9.99 9.99 0 0012.012 2zm4.957 14.22c-.274.774-1.585 1.5-2.194 1.56-.554.055-1.282.102-2.073-.153a10.02 10.02 0 01-4.086-2.58 10.3 10.3 0 01-2.222-3.8c-.463-.794-.741-1.72-.258-2.336.21-.266.463-.56.694-.836.223-.266.297-.456.444-.76.148-.304.074-.57-.037-.798-.111-.228-.99-2.39-1.357-3.274-.356-.862-.722-.746-.99-.76h-.846c-.297 0-.773.111-1.18.56-.407.447-1.554 1.517-1.554 3.702s1.59 4.294 1.815 4.598c.224.304 3.13 4.78 7.58 6.697 1.058.456 1.884.73 2.53 1 .918.28 1.75.24 2.41.143.738-.11 2.274-.93 2.59-1.83.317-.9 3.17-9.066.02-9.066z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Clean Scroll Down Indicator at bottom */}
      <button
        onClick={() => scrollToSection("all-trips")}
        className="absolute bottom-5 sm:bottom-6 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-1 text-white/60 hover:text-white transition-colors cursor-pointer group"
        aria-label="Scroll to tour packages"
      >
        <span className="text-[10px] uppercase font-bold tracking-widest text-slate-300 group-hover:text-rose-400 transition-colors">
          View Destinations Below
        </span>
        <div className="w-4 h-7 rounded-full border-2 border-white/30 flex items-start justify-center p-1 group-hover:border-rose-400 transition-colors">
          <div className="w-1 h-1.5 rounded-full bg-[#E11D48] animate-bounce" />
        </div>
      </button>
    </section>
  );
}
