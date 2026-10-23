import React, { useEffect, useState, useRef } from "react";

const CORE_BENEFITS = [
  {
    id: "travel",
    title: "Confirmed Travel Tickets",
    desc: "Round-trip confirmed train (Sleeper/AC) or luxury coach transfers from Mumbai with zero booking hassle.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
      </svg>
    ),
  },
  {
    id: "stay",
    title: "Handpicked Hotels & Resorts",
    desc: "Comfortable, clean, sanitized rooms in central prime locations with modern amenities and attached baths.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    id: "meals",
    title: "Daily Breakfast & Dinner",
    desc: "Fresh, hygienic, delicious meals prepared daily including authentic regional specialties and pure vegetarian options.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    id: "transfers",
    title: "Dedicated Sightseeing Vehicles",
    desc: "Private/semi-private sanitized vehicles with experienced drivers for seamless transfers between landmarks.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
  },
  {
    id: "guides",
    title: "Local Guide & Tour Escort",
    desc: "Friendly on-ground trip coordinators to guide you with history, VIP temple darshan, and hassle-free entry.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    id: "support",
    title: "24/7 Dedicated Support",
    desc: "Round-the-clock customer assistance on WhatsApp and call from departure until you return safely home.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
];

export default function Inclusions() {
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
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="inclusions"
      className="py-20 bg-[#FCF9F5] border-y border-[#EADBCE]/80 relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-12 right-12 w-96 h-96 bg-[#9B1124]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-12 left-12 w-96 h-96 bg-[#E11D48]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-[#E11D48] font-extrabold text-[11px] uppercase tracking-widest bg-[#FFF1F3] px-3.5 py-1 rounded-full border border-[#FECDD3]">
            Arambh Travel Standard
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#9B1124] tracking-tight">
            All-Inclusive Premium Benefits On Every Trip
          </h2>
          <p className="text-[#6B5B60] text-xs sm:text-sm leading-relaxed">
            We handle all logistics, stays, transfers, and sightseeing so you can immerse yourself in every journey worry-free.
          </p>
        </div>

        {/* 3-column Grid of benefit cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {CORE_BENEFITS.map((b, idx) => (
            <div
              key={b.id}
              style={{
                transitionDelay: `${idx * 100}ms`,
              }}
              className={`p-5 rounded-2xl bg-white border border-[#EADBCE] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 ease-out flex items-start gap-3.5 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <div className="text-[#E11D48] flex-shrink-0 w-11 h-11 rounded-xl bg-[#FFF1F3] flex items-center justify-center border border-[#FECDD3] shadow-xs">
                {b.icon}
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-extrabold text-[#29181B]">
                  {b.title}
                </h3>
                <p className="text-xs text-[#6B5B60] leading-relaxed font-medium">
                  {b.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
