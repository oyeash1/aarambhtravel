import React, { useState } from "react";
import { ITINERARY } from "../constants/tourData";

const getDayIconDetails = (dayNum) => {
  switch (dayNum) {
    case 1:
      return {
        bgClass: "bg-blue-500/10 border-blue-500/20 text-blue-500",
        icon: (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 13h15a3 3 0 013 3v2a3 3 0 01-3 3H3V9zm0 0v8" />
            <circle cx="6" cy="17" r="1.5" />
            <circle cx="12" cy="17" r="1.5" />
            <circle cx="18" cy="17" r="1.5" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 9V6m4 3V6" />
          </svg>
        ),
      };
    case 2:
      return {
        bgClass: "bg-indigo-500/10 border-indigo-500/20 text-indigo-500",
        icon: (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M2 4v16M22 11v9M2 11h20M6 7a2 2 0 100-4 2 2 0 000 4zm0 4h12a4 4 0 014 4v5" />
          </svg>
        ),
      };
    case 3:
      return {
        bgClass: "bg-amber-500/10 border-amber-500/20 text-amber-600",
        icon: (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M5 17h14M7 13h10" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l-4 11h8L12 2z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 2V1m0 0h3l-3 2" />
          </svg>
        ),
      };
    case 4:
      return {
        bgClass: "bg-teal-500/10 border-teal-500/20 text-teal-500",
        icon: (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a3 3 0 00-3-3H11a3 3 0 00-3 3v4m-4 0h16a2 2 0 012 2v3a2 2 0 01-2 2H4a2 2 0 01-2-2v-3a2 2 0 012-2z" />
            <circle cx="6" cy="16" r="1.5" />
            <circle cx="18" cy="16" r="1.5" />
          </svg>
        ),
      };
    case 5:
      return {
        bgClass: "bg-emerald-500/10 border-emerald-500/20 text-emerald-600",
        icon: (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 13l2 4h14l2-4H3z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 13V5l5 4-5 4z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M2 19c2 1 4-1 6 0s4 1 6 0 4-1 6 0" />
          </svg>
        ),
      };
    case 6:
      return {
        bgClass: "bg-rose-500/10 border-rose-500/20 text-rose-500",
        icon: (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 22V10m-6 12V14a3 3 0 016 0m0 0a3 3 0 016 0v8M4 22h16" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 10V3l4 2.5L12 8" />
          </svg>
        ),
      };
    case 7:
      return {
        bgClass: "bg-sky-500/10 border-sky-500/20 text-sky-500",
        icon: (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        ),
      };
    default:
      return { bgClass: "", icon: null };
  }
};

export default function Itinerary() {
  const [activeDay, setActiveDay] = useState(1); // Default to Day 1 expanded

  const handleToggle = (dayNum) => {
    setActiveDay(activeDay === dayNum ? 0 : dayNum);
  };

  return (
    <section id="itinerary" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Colorful background blobs for glass refraction */}
      <div className="absolute top-24 left-24 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-24 right-24 w-96 h-96 bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-orange-500 font-bold text-xs uppercase tracking-widest bg-orange-500/10 px-3 py-1 rounded-full">
            Day-by-Day Journey Planner
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight mt-4 mb-4">
            Detailed 7 Days / 6 Nights Itinerary
          </h2>
          <p className="text-slate-505 text-sm">
            Click on each day to review the comprehensive travel route details.
          </p>
        </div>

        {/* Timeline container */}
        <div className="relative space-y-0">
          {ITINERARY.map((dayItem, idx) => {
            const dayNum = dayItem.day;
            const isExpanded = activeDay === dayNum;
            const isHighlighted = activeDay > 0 && dayNum <= activeDay;
            const isActive = activeDay === dayNum;
            const isLast = idx === ITINERARY.length - 1;
            const isLineOrange = activeDay > dayNum;
            const iconDetails = getDayIconDetails(dayNum);

            return (
              <div key={dayNum} className="flex gap-3 sm:gap-6 items-stretch">
                {/* Left Column: Timeline circle and vertical line */}
                <div className="flex flex-col items-center flex-shrink-0 w-11 sm:w-20 relative">
                  {/* Vertical line segment */}
                  {!isLast && (
                    <div className="absolute top-12 bottom-0 w-1 bg-slate-200 left-1/2 -translate-x-1/2 z-0">
                      {/* Highlighted orange line overlay */}
                      <div
                        className={`absolute inset-0 bg-orange-500 transition-transform duration-500 origin-top transform ${
                          isLineOrange ? "scale-y-100" : "scale-y-0"
                        }`}
                      />
                    </div>
                  )}

                  {/* Day Badge Circle */}
                  <button
                    onClick={() => handleToggle(dayNum)}
                    className={`w-10 sm:w-16 h-10 sm:h-12 rounded-xl flex items-center justify-center font-bold text-[10px] sm:text-sm transition-all duration-300 cursor-pointer shadow-sm z-10 border ${
                      isActive
                        ? "bg-orange-500 border-orange-400 text-white shadow-orange-500/20 scale-105"
                        : isHighlighted
                        ? "bg-primary border-primary text-white shadow-primary/20"
                        : "bg-white border-slate-200 text-slate-500 hover:border-primary/50"
                    }`}
                  >
                    <span className="hidden sm:inline">Day {dayNum}</span>
                    <span className="inline sm:hidden">D{dayNum}</span>
                  </button>
                </div>

                {/* Right Column: Content Card */}
                <div className="flex-1 pb-8">
                  <div
                    className={`rounded-2xl overflow-hidden transition-all duration-350 liquid-glass-card border border-white/50 ${
                      isExpanded ? "ring-2 ring-orange-500/20 shadow-md" : ""
                    }`}
                  >
                    <button
                      onClick={() => handleToggle(dayNum)}
                      className="w-full flex items-center justify-between p-4 sm:p-5 text-left hover:bg-white/20 cursor-pointer transition-colors"
                    >
                      <div className="flex items-center gap-3.5 min-w-0">
                        {/* Day Specific Vector Icon */}
                        <div className={`flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center border shadow-sm ${iconDetails.bgClass}`}>
                          {iconDetails.icon}
                        </div>
                        <div className="min-w-0">
                          <h4 className="font-bold text-slate-850 text-sm sm:text-base leading-snug">
                            {dayItem.title}
                          </h4>
                          <p className="text-[9px] sm:text-[10px] text-slate-550 font-semibold uppercase tracking-wider mt-0.5">
                            Mumbai to Ayodhya Route
                          </p>
                        </div>
                      </div>
                      <span
                        className={`p-1.5 rounded-full border border-white/60 text-slate-500 flex-shrink-0 transition-transform duration-300 ${
                          isExpanded ? "rotate-180 bg-white/40 text-slate-800" : ""
                        }`}
                      >
                        <svg
                          className="w-3.5 h-3.5 sm:w-4 sm:h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </span>
                    </button>

                    {/* Accordion Content */}
                    <div
                      className={`transition-all duration-500 ease-in-out ${
                        isExpanded
                          ? "max-h-[300px] border-t border-white/40 p-4 sm:p-5"
                          : "max-h-0 overflow-hidden"
                      }`}
                    >
                      <p
                        className={`text-xs text-slate-700 leading-relaxed font-medium transition-all duration-500 ease-out ${
                          isExpanded
                            ? "opacity-100 translate-y-0 delay-200"
                            : "opacity-0 -translate-y-2 delay-0"
                        }`}
                      >
                        {dayItem.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
