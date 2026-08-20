"use client";

import { useState, useEffect } from "react";

export default function TestimonialCarousel() {
  const testimonials = [
    {
      name: "Ramesh & Savita Joshi",
      location: "Thane, Maharashtra",
      rating: 5,
      avatar: "RJ",
      gradient: "from-blue-600 to-indigo-600",
      text: "Traveling with Aarambh Travel was a blessing. At our age, we were worried about the walking and train transfers, but the organizers took care of everything. The hotel in Ayodhya was clean, and the guide made sure we had a hassle-free darshan."
    },
    {
      name: "Karan Sharma",
      location: "Mumbai",
      rating: 5,
      avatar: "KS",
      gradient: "from-orange-500 to-red-500",
      text: "I booked this trip for my parents and went along with them. The itinerary was perfectly paced, and the food prepared was fresh and satvik. The Ganga Aarti in Kashi was a magical experience that we will never forget."
    },
    {
      name: "Meera Deshmukh",
      location: "Dadar, Mumbai",
      rating: 5,
      avatar: "MD",
      gradient: "from-teal-500 to-emerald-500",
      text: "The Mumbai to Ayodhya tour was extremely well organized. Saryu river boat ride under the sunset and the LED light show ticket inclusion was a beautiful surprise. Highly recommended for families."
    },
    {
      name: "Sunil & Asha Patil",
      location: "Pune",
      rating: 5,
      avatar: "SP",
      gradient: "from-purple-600 to-pink-600",
      text: "Amazing experience! The tour managers were polite and always ready to help. Our 3AC train upgrade was handled smoothly. Triveni Sangam bathing arrangements were very clean and well-coordinated."
    }
  ];

  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handlePrev = () => {
    setActiveIdx((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % testimonials.length);
  };

  const active = testimonials[activeIdx];

  return (
    <div className="relative w-full max-w-4xl mx-auto p-8 sm:p-12 rounded-3xl liquid-glass-card border border-white/60 shadow-xl overflow-hidden min-h-[300px] flex flex-col justify-between">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      {/* Quote Mark */}
      <span className="absolute top-4 left-6 text-8xl font-serif text-slate-200/40 leading-none select-none">“</span>

      <div className="relative z-10 space-y-6">
        {/* Star Rating */}
        <div className="flex items-center gap-1">
          {Array.from({ length: active.rating }).map((_, i) => (
            <svg key={i} className="w-5 h-5 text-amber-500 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>

        {/* Testimonial text */}
        <p className="text-base sm:text-lg text-slate-700 italic font-medium leading-relaxed">
          "{active.text}"
        </p>

        {/* User Info */}
        <div className="flex items-center gap-4 pt-4 border-t border-slate-200/50">
          <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${active.gradient} flex items-center justify-center text-white text-base font-extrabold shadow-md`}>
            {active.avatar}
          </div>
          <div>
            <h4 className="font-extrabold text-slate-900 text-sm sm:text-base leading-tight">{active.name}</h4>
            <p className="text-xs text-slate-550 font-semibold uppercase tracking-wider mt-0.5">{active.location}</p>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-between mt-8 border-t border-slate-100 pt-4">
        {/* Indicator dots */}
        <div className="flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIdx(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                i === activeIdx ? "bg-orange-500 w-6" : "bg-slate-350"
              }`}
            />
          ))}
        </div>

        {/* Navigation buttons */}
        <div className="flex items-center gap-3 relative z-10">
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-full border border-slate-200 hover:border-orange-500 bg-white text-slate-600 hover:text-orange-500 flex items-center justify-center transition-all cursor-pointer"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full border border-slate-200 hover:border-orange-500 bg-white text-slate-600 hover:text-orange-500 flex items-center justify-center transition-all cursor-pointer"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
