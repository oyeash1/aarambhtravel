import React, { useState, useEffect } from "react";
import GlassPanel from "../../../components/ui/GlassPanel";
import GlassButton from "../../../components/ui/GlassButton";

const slides = [
  {
    image: "/assets/hero_kashi.png",
    position: "bg-[position:35%_50%] sm:bg-center",
    badge: "✨ Explore India's Holiest Cities",
    titlePart1: "Mumbai to ",
    titleHighlight: "Kashi",
    titlePart2: " • Prayagraj • Ayodhya",
    description: (
      <>
        Experience the divine journey with <strong className="text-white font-semibold">Aarambh Travel</strong>. That covers the sacred city of Kashi, the holy Triveni Sangam at Prayagraj and the birthplace of Lord Rama in Ayodhya.
      </>
    )
  },
  {
    image: "/assets/hero_prayagraj.png",
    position: "bg-[position:65%_50%] sm:bg-center",
    badge: "✨ Holy Triveni Sangam",
    titlePart1: "Mumbai to Kashi • ",
    titleHighlight: "Prayagraj",
    titlePart2: " • Ayodhya",
    description: (
      <>
        Experience the divine journey with <strong className="text-white font-semibold">Aarambh Travel</strong>. That covers the sacred city of Kashi, the holy Triveni Sangam at Prayagraj and the birthplace of Lord Rama in Ayodhya.
      </>
    )
  },
  {
    image: "/assets/hero_ayodhya.png",
    position: "bg-[position:center_top] sm:bg-center",
    badge: "✨ Shri Ram Janmabhoomi",
    titlePart1: "Mumbai to Kashi • Prayagraj • ",
    titleHighlight: "Ayodhya",
    titlePart2: "",
    description: (
      <>
        Experience the divine journey with <strong className="text-white font-semibold">Aarambh Travel</strong>. That covers the sacred city of Kashi, the holy Triveni Sangam at Prayagraj and the birthplace of Lord Rama in Ayodhya.
      </>
    )
  }
];

export default function Hero({ getWhatsAppLink }) {
  const [inquiryDate, setInquiryDate] = useState("");
  const [inquiryTourists, setInquiryTourists] = useState("2");
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
      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full lg:h-full flex flex-col justify-center pt-28 lg:pt-20 pb-12 lg:pb-0">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Text & Offer Column */}
          <div
            key={activeIndex}
            className="lg:col-span-7 text-left space-y-6 animate-fade-in-up"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 font-bold text-xs uppercase tracking-wider animate-pulse-slow">
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

            <div className="flex flex-wrap items-center gap-4 text-white text-lg">
              <span className="font-semibold text-orange-400">
                7 Days / 6 Nights Trip
              </span>
              <span className="text-slate-500">•</span>
              <span className="bg-primary/40 px-3 py-1 rounded-md border border-primary/40 text-sm">
                Train Sleeper Included
              </span>
            </div>

            <p className="text-slate-300 text-base sm:text-lg max-w-xl leading-relaxed">
              {slides[activeIndex].description}
            </p>

            {/* Dynamic Prices badges */}
            <div className="flex items-center gap-6 pt-2">
              <div className="text-white">
                <p className="text-xs text-slate-400 uppercase tracking-widest">
                  Monsoon Package Price
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-extrabold text-white">
                    ₹14,499
                  </span>
                  <span className="text-sm text-slate-400 line-through">
                    ₹17,500
                  </span>
                </div>
              </div>
              <div className="h-10 w-px bg-slate-800" />
              <div>
                <span className="bg-green-500/15 border border-green-500/30 text-green-400 px-3.5 py-2 rounded-xl text-sm font-bold block">
                  Save ₹3,001 Per Person!
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={() => scrollToSection("pricing")}
                className="px-8 py-3.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm tracking-wide transition-all duration-300 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5 cursor-pointer"
              >
                Book Tour Now
              </button>
              <button
                onClick={() => scrollToSection("destinations")}
                className="px-8 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/15 transition-all duration-300 cursor-pointer"
              >
                Explore 14+ Places
              </button>
            </div>
          </div>

          {/* Liquid Glass Search & Booking Box */}
          <div className="lg:col-span-5 w-full flex justify-center">
            <GlassPanel
              animated
              dark={true}
              className="w-full max-w-md p-6 sm:p-8 relative overflow-hidden"
            >
              {/* Glow ring decoration */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

              <h3 className="text-xl font-bold mb-1 tracking-tight text-white flex items-center gap-2">
                <span>🚩</span> Plan Your Spiritual Tour
              </h3>
              <p className="text-xs text-slate-300 mb-6 font-medium">
                Select preferences to check ticket availability instantly.
              </p>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Destination
                  </label>
                  <div className="w-full px-4 py-3 rounded-xl liquid-glass-input text-sm font-semibold flex items-center bg-white/5 border border-white/15">
                    Ayodhya Dham
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Tentative Travel Date
                  </label>
                  <input
                    type="date"
                    value={inquiryDate}
                    onChange={(e) => setInquiryDate(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl liquid-glass-input text-sm font-medium focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Number of Pilgrims
                  </label>
                  <select
                    value={inquiryTourists}
                    onChange={(e) => setInquiryTourists(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl liquid-glass-input text-sm font-medium focus:outline-none"
                  >
                    <option className="bg-slate-900" value="1">1 Person</option>
                    <option className="bg-slate-900" value="2">2 Persons</option>
                    <option className="bg-slate-900" value="3">3 Persons</option>
                    <option className="bg-slate-900" value="4">4 Persons</option>
                    <option className="bg-slate-900" value="5">5+ Persons</option>
                  </select>
                </div>

                <GlassButton
                  variant="primary"
                  as="a"
                  href={getWhatsAppLink({
                    isHeroForm: true,
                    date: inquiryDate,
                    count: inquiryTourists,
                  })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 mt-6"
                >
                  Check Seat Availability
                </GlassButton>

                <p className="text-[10px] text-center text-slate-400 mt-4 font-medium">
                  ⚡ Customization & AC upgrades will be configured in next step.
                </p>
              </div>
            </GlassPanel>
          </div>
        </div>

        {/* Carousel Dots */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3">
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
          className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-1 cursor-pointer opacity-70 hover:opacity-100 transition-opacity"
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
