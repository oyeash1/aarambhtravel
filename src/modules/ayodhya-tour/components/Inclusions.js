import React, { useEffect, useState, useRef } from "react";
import { INCLUSIONS } from "../constants/tourData";

export default function Inclusions() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // trigger animation only once
        }
      },
      { threshold: 0.1 } // trigger when 10% of the section is visible
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
      className="py-20 bg-slate-50 border-y border-slate-200/40 relative overflow-hidden"
    >
      {/* Colorful background blobs for glass refraction */}
      <div className="absolute top-12 right-12 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-12 left-12 w-96 h-96 bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-left mb-16">
          <span className="text-primary font-bold text-xs uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-full">
            Arambh Travel Promise
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight mt-4 mb-4">
            All-Inclusive Premium Benefits
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl">
            We cover all your basic expenses so you can focus entirely on the
            spiritual bliss of Ayodhya.
          </p>
        </div>

        {/* 2-column Grid of floating icons and names */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-8 md:gap-x-8 md:gap-y-10 justify-items-center">
          {INCLUSIONS.map((inc, idx) => (
            <div
              key={inc.id}
              style={{
                transitionDelay: `${idx * 80}ms`,
                animationDelay: `${idx * 0.3}s`,
              }}
              className={`flex items-center gap-2.5 transition-all duration-500 ease-out transform ${
                isVisible
                  ? "opacity-100 translate-x-0 animate-float"
                  : "opacity-0 -translate-x-6"
              }`}
            >
              <div className="text-orange-600 flex-shrink-0 w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center shadow-sm">
                {inc.icon}
              </div>
              <span className="text-slate-900 text-xs sm:text-sm font-bold tracking-tight leading-tight">
                {inc.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
