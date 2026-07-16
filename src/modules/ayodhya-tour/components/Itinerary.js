import React, { useState } from "react";
import { ITINERARY } from "../constants/tourData";

function ItineraryDay({ dayItem, defaultOpen }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="rounded-2xl overflow-hidden transition-all duration-300 liquid-glass-card">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 sm:p-6 text-left hover:bg-white/20 cursor-pointer transition-colors"
      >
        <div className="flex items-center gap-3 sm:gap-4 min-w-0">
          <div
            className={`flex-shrink-0 px-3 h-10 sm:h-12 rounded-xl flex items-center justify-center font-bold text-xs sm:text-sm transition-colors whitespace-nowrap ${
              isOpen ? "bg-orange-500 text-white" : "bg-primary/10 text-primary"
            }`}
          >
            Day {dayItem.day}
          </div>
          <div className="min-w-0">
            <h4 className="font-bold text-slate-800 text-sm sm:text-base leading-snug">
              {dayItem.title}
            </h4>
            <p className="text-[9px] sm:text-[10px] text-slate-500 font-semibold uppercase tracking-wider mt-0.5">
              Mumbai to Ayodhya Route
            </p>
          </div>
        </div>
        <span
          className={`p-1.5 rounded-full border border-white/60 text-slate-500 flex-shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180 bg-white/40 text-slate-800" : ""
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
        className={`transition-all duration-550 ease-in-out ${
          isOpen
            ? "max-h-[300px] border-t border-white/40 opacity-100 p-4 sm:p-6"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <p className="text-xs text-slate-700 leading-relaxed font-medium">
          {dayItem.desc}
        </p>
      </div>
    </div>
  );
}

export default function Itinerary() {
  return (
    <section id="itinerary" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Colorful background blobs for glass refraction */}
      <div className="absolute top-24 left-24 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-24 right-24 w-96 h-96 bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-orange-500 font-bold text-xs uppercase tracking-widest bg-orange-500/10 px-3 py-1 rounded-full">
            Day-by-Day Journey Planner
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight mt-4 mb-4">
            Detailed 7 Days / 6 Nights Itinerary
          </h2>
          <p className="text-slate-500 text-sm">
            Click on each day to review the comprehensive travel route details.
          </p>
        </div>

        {/* Vertical Timeline / Accordion */}
        <div className="space-y-4">
          {ITINERARY.map((dayItem, idx) => (
            <ItineraryDay
              key={dayItem.day}
              dayItem={dayItem}
              defaultOpen={idx === 0 || idx === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
