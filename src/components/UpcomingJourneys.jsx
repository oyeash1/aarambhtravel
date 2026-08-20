import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function UpcomingJourneys() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.05 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const upcomingTours = [
    {
      id: 1,
      title: "Maharashtra 3 Jyotirling Yatra",
      emoji: "🛕",
      image: "/assets/jyotirling.png",
      tag: "Pilgrimage special",
      desc: "Explore the sacred shrines of Lord Shiva in Bhimashankar, Trimbakeshwar, and Grishneshwar. A fully managed spiritual experience.",
      actionLabel: "Request Callback",
    },
    {
      id: 2,
      title: "Manali Adventure Trip",
      emoji: "🏔️",
      image: "/assets/manali.png",
      tag: "Nature & adventure",
      desc: "Discover snowy mountain peaks, rapid river rafting, and cozy campfire evenings under the stars. Perfect for thrill-seekers.",
      actionLabel: "Get Notified",
    },
  ];

  const handleSwap = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveIdx((prev) => (prev === 0 ? 1 : 0));
      setIsTransitioning(false);
    }, 250);
  };

  const tour = upcomingTours[activeIdx];

  return (
    <section ref={sectionRef} id="upcoming" className="py-24 bg-slate-50 border-t border-slate-200/50 relative overflow-hidden">
      {/* Background glowing blobs matching the theme */}
      <div className="absolute top-12 left-12 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-12 right-12 w-96 h-96 bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-orange-500 font-bold text-xs uppercase tracking-widest bg-orange-500/10 px-3.5 py-1.5 rounded-full">
            Coming Soon
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight">
            Explore Our Upcoming Journeys
          </h2>
          <p className="text-slate-650 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            More unforgettable experiences are on the way. Stay tuned for our upcoming tour packages.
          </p>
        </div>

        {/* Overlapping Scattered Cards Deck */}
        <div className={`flex flex-row items-center justify-center max-w-5xl mx-auto min-h-[420px] overflow-visible transition-all duration-1000 ease-out transform ${isVisible ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-8"
          }`}>

          {/* Card 1 (Left Info Card) */}
          <div
            className={`w-[130px] sm:w-[180px] md:w-[280px] h-[230px] sm:h-[280px] md:h-[320px] rounded-3xl p-3 sm:p-6 md:p-8 liquid-glass-card border border-white/60 shadow-lg hover:shadow-xl transition-all duration-500 ease-out transform rotate-[-3deg] md:rotate-[-6deg] hover:rotate-0 hover:-translate-y-2 z-10 hover:z-30 flex flex-col justify-between -mr-14 sm:-mr-10 md:mr-0 ${isTransitioning ? "opacity-0 scale-95" : "opacity-100 scale-100"
              }`}
          >
            <div className="space-y-2 sm:space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <span className="px-1.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-white/20 text-white text-[7px] sm:text-[9px] font-bold uppercase tracking-wider backdrop-blur-md border border-white/10 self-start">
                  {tour.tag}
                </span>
                <span className="text-base sm:text-2xl md:text-3xl">{tour.emoji}</span>
              </div>
              <h3 className="text-[10px] sm:text-lg md:text-2xl font-black text-slate-800 tracking-tight leading-tight">
                {tour.title}
              </h3>
            </div>

            <div className="space-y-1 sm:space-y-2">
              <span className="inline-block px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded bg-orange-500/10 text-orange-600 text-[7px] sm:text-[10px] font-extrabold uppercase tracking-wider">
                Launching Soon
              </span>
              <p className="text-[7px] sm:text-[10px] text-slate-500 font-semibold uppercase tracking-widest mt-0.5">
                Arambh Travel Exclusive
              </p>
            </div>
          </div>

          {/* Card 2 (Center Image Card - Interactive Container) */}
          <div className="flex flex-col items-center z-20 w-auto">
            <div
              onClick={handleSwap}
              className={`group w-[180px] sm:w-[240px] md:w-[340px] h-[250px] sm:h-[300px] md:h-[340px] rounded-3xl overflow-hidden liquid-glass-card border-2 border-white shadow-2xl transition-all duration-500 ease-out transform scale-100 md:scale-105 rotate-[1deg] md:rotate-[-1deg] hover:scale-105 md:hover:scale-110 hover:rotate-0 cursor-pointer relative flex flex-col justify-end ${isTransitioning ? "opacity-0 scale-95" : "opacity-100 scale-100"
                }`}
            >
              {/* Image background */}
              <Image
                src={tour.image}
                alt={tour.title}
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out z-0"
              />
              {/* Vignette/Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent z-10" />
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500 z-10" />

              {/* Inline floating helper badge (Bottom-center) */}
              <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 px-3 py-1 sm:px-4 sm:py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[8px] sm:text-[10px] font-bold uppercase tracking-wider z-20 flex items-center justify-center group-hover:opacity-0 transition-opacity duration-300">
                <span>Tap to Change</span>
              </div>
            </div>

            {/* Label below the image card */}
            <div
              className={`mt-3 sm:mt-4 flex items-center gap-1 sm:gap-1.5 text-[9px] sm:text-[11px] font-bold text-slate-500 uppercase tracking-widest transition-all duration-500 ${isTransitioning ? "opacity-0 translate-y-1" : "opacity-100 translate-y-0"
                }`}
            >
              <svg className="w-3.5 h-3.5 text-orange-500 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18" />
              </svg>
              <span>Tap to switch</span>
            </div>
          </div>

          {/* Card 3 (Right Info Card) */}
          <div
            className={`w-[130px] sm:w-[180px] md:w-[280px] h-[230px] sm:h-[280px] md:h-[320px] rounded-3xl p-3 sm:p-6 md:p-8 liquid-glass-card border border-white/60 shadow-lg hover:shadow-xl transition-all duration-500 ease-out transform rotate-[3deg] md:rotate-[6deg] hover:rotate-0 hover:-translate-y-2 z-10 hover:z-30 flex flex-col justify-between -ml-14 sm:-ml-10 md:ml-0 ${isTransitioning ? "opacity-0 scale-95" : "opacity-100 scale-100"
              }`}
          >
            <div className="space-y-1 sm:space-y-4">
              <h4 className="text-[7px] sm:text-[10px] md:text-xs font-bold text-orange-500 uppercase tracking-widest">
                Journey Preview
              </h4>
              <p className="text-slate-650 text-[7.5px] sm:text-[11px] md:text-xs font-medium leading-normal line-clamp-[6] sm:line-clamp-none">
                {tour.desc}
              </p>
            </div>

            <div className="pt-1.5 sm:pt-4 border-t border-slate-200/50 space-y-1.5 sm:space-y-3">
              <div className="flex items-center gap-1 sm:gap-2 text-[7px] sm:text-[10px] font-bold text-slate-500">
                <svg className="w-2.5 h-2.5 sm:w-4 sm:h-4 text-orange-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                <span className="truncate">Updates active</span>
              </div>
              <button
                onClick={handleSwap}
                className="w-full py-1 sm:py-2.5 rounded-md sm:rounded-xl bg-primary text-white text-[7px] sm:text-xs font-bold hover:bg-primary/95 transition-colors cursor-pointer text-center shadow-sm hover:shadow-md"
              >
                {tour.actionLabel}
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
