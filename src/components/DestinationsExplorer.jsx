import React, { useState } from "react";
import Image from "next/image";
import { PACKAGES, CATEGORIES } from "../constants/tourData";

export default function DestinationsExplorer({ selectedPackageId, setSelectedPackageId }) {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredPackages = PACKAGES.filter((pkg) => {
    if (activeCategory === "all") return true;
    return pkg.category === activeCategory;
  });

  const handleSelectPackage = (pkgId, targetSection) => {
    if (setSelectedPackageId) {
      setSelectedPackageId(pkgId);
    }
    const el = document.getElementById(targetSection);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const getCustomWhatsAppLink = () => {
    const msg = `👋 *Hello Arambh Travel!* \n\nI want to plan a *Custom Holiday Trip* ("We take you where you want to go"). \n\n*Destination*: \n*Travelers Count*: \n*Expected Dates*: \n\nPlease help me plan this itinerary!`;
    return `https://wa.me/918369927351?text=${encodeURIComponent(msg)}`;
  };

  return (
    <section id="all-trips" className="py-20 bg-[#FCF9F5] relative overflow-hidden">
      {/* Background radial glow with light cherry tint */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#9B1124]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#E11D48]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3.5">
          <span className="text-[#E11D48] font-extrabold text-[11px] uppercase tracking-widest bg-[#FFF1F3] px-3.5 py-1 rounded-full border border-[#FECDD3]">
            We Take You Where You Want To Go
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#9B1124] tracking-tight">
            Explore Curated Tour Packages
          </h2>
          <p className="text-[#6B5B60] text-xs sm:text-sm leading-relaxed">
            From the golden beaches of <span className="font-bold text-[#29181B]">Goa</span> and the coastal heritage of <span className="font-bold text-[#29181B]">Odisha</span>, to snow peaks in <span className="font-bold text-[#29181B]">Sikkim</span> and sacred yatras of <span className="font-bold text-[#29181B]">Kashi, Ayodhya & Mathura</span> — we craft comfortable, end-to-end travel experiences.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-3">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer border ${
                    isActive
                      ? "bg-[#9B1124] text-white border-[#9B1124] shadow-sm shadow-[#9B1124]/30 scale-105"
                      : "bg-[#F5EFEB] text-[#4A383D] border-[#EADBCE] hover:bg-white"
                  }`}
                >
                  <span>{cat.icon}</span>
                  <span>{cat.name}</span>
                  {cat.id !== "all" && (
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded-full font-extrabold ${
                        isActive ? "bg-white/20 text-white" : "bg-[#EADBCE] text-[#6B5B60]"
                      }`}
                    >
                      {PACKAGES.filter((p) => p.category === cat.id).length}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tour Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredPackages.map((pkg) => {
            const isSelected = selectedPackageId === pkg.id;
            return (
              <div
                key={pkg.id}
                className={`group rounded-3xl bg-white border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between overflow-hidden relative ${
                  isSelected
                    ? "border-[#E11D48] shadow-md shadow-rose-950/10 ring-2 ring-[#E11D48]/30"
                    : "border-[#EADBCE]/80 shadow-sm hover:border-[#E11D48]/40"
                }`}
              >
                {/* Image Banner */}
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={pkg.bannerImage}
                    alt={pkg.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                  {/* Badge */}
                  <span className="absolute top-3.5 left-3.5 bg-[#E11D48] text-white font-extrabold text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-sm">
                    {pkg.badge}
                  </span>

                  {/* Duration Pill */}
                  <span className="absolute top-3.5 right-3.5 bg-slate-950/70 backdrop-blur-md text-white font-bold text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full border border-white/20">
                    ⏱️ {pkg.duration}
                  </span>

                  {/* Route Bottom on Image */}
                  <div className="absolute bottom-2.5 left-3.5 right-3.5">
                    <p className="text-[11px] font-semibold text-slate-200 line-clamp-1">
                      📍 {pkg.route}
                    </p>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3.5">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#9B1124] bg-[#FFF1F3] border border-[#FECDD3] px-2.5 py-0.5 rounded-full">
                      {pkg.categoryLabel || "Curated Tour"}
                    </span>
                    <h3 className="text-lg font-black text-[#29181B] mt-2 leading-snug group-hover:text-[#9B1124] transition-colors">
                      {pkg.title}
                    </h3>
                    <p className="text-xs text-[#6B5B60] mt-1.5 line-clamp-2 leading-relaxed font-medium">
                      {pkg.tagline}
                    </p>
                  </div>

                  {/* Top Highlights Preview */}
                  <div className="space-y-1 pt-2 border-t border-[#EADBCE]/60">
                    <p className="text-[10px] uppercase font-bold tracking-wider text-[#8C787D]">
                      Top Places Included:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {pkg.places.slice(0, 3).map((pl) => (
                        <span
                          key={pl.id}
                          className="text-[11px] bg-[#FAF4ED] text-[#4A383D] border border-[#EADBCE]/60 px-2 py-0.5 rounded-md font-medium"
                        >
                          {pl.name.split("(")[0].trim()}
                        </span>
                      ))}
                      {pkg.places.length > 3 && (
                        <span className="text-[11px] bg-[#FAF4ED] text-[#8C787D] border border-[#EADBCE]/60 px-2 py-0.5 rounded-md font-bold">
                          +{pkg.places.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Pricing and Action Footer */}
                  <div className="pt-3 border-t border-[#EADBCE]/60 flex items-center justify-between">
                    <div>
                      <p className="text-[10px] uppercase tracking-wider font-bold text-[#8C787D]">
                        Starting From
                      </p>
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-xl font-black text-[#9B1124]">
                          ₹{pkg.basePrice.toLocaleString("en-IN")}
                        </span>
                        <span className="text-xs text-slate-400 line-through">
                          ₹{pkg.originalPrice.toLocaleString("en-IN")}
                        </span>
                      </div>
                      <p className="text-[10px] text-green-700 font-bold">
                        Save ₹{(pkg.originalPrice - pkg.basePrice).toLocaleString("en-IN")}
                      </p>
                    </div>

                    <button
                      onClick={() => handleSelectPackage(pkg.id, "pricing")}
                      className="px-3.5 py-2 rounded-xl bg-[#E11D48] hover:bg-[#BE123C] text-white font-bold text-xs transition-all shadow-sm hover:shadow-[#E11D48]/30 cursor-pointer active:scale-95"
                    >
                      Book / Price →
                    </button>
                  </div>

                  {/* Sub Action Buttons */}
                  <div className="grid grid-cols-2 gap-2 pt-0.5">
                    <button
                      onClick={() => handleSelectPackage(pkg.id, "destinations")}
                      className="w-full py-1.5 rounded-lg bg-[#FAF4ED] hover:bg-[#F0E6DC] text-[#4A383D] font-semibold text-[11px] transition-colors cursor-pointer text-center border border-[#EADBCE]/60"
                    >
                      View Places
                    </button>
                    <button
                      onClick={() => handleSelectPackage(pkg.id, "itinerary")}
                      className="w-full py-1.5 rounded-lg bg-[#FAF4ED] hover:bg-[#F0E6DC] text-[#4A383D] font-semibold text-[11px] transition-colors cursor-pointer text-center border border-[#EADBCE]/60"
                    >
                      Day-by-Day Plan
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* "We Take You Where You Want To Go" - Custom Trip Inquiry Banner with Rich Cherry Gradient */}
        <div className="mt-14 bg-gradient-to-r from-[#730D1B] via-[#9B1124] to-[#540813] rounded-3xl p-7 sm:p-10 text-white relative overflow-hidden shadow-xl border border-rose-900/40">
          <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-[radial-gradient(#E11D48_1px,transparent_1px)] [background-size:20px_20px] opacity-15 pointer-events-none" />

          <div className="relative z-10 max-w-2xl space-y-3.5">
            <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-rose-200 font-extrabold text-[10px] uppercase tracking-widest border border-white/20">
              ✈️ Tailor-Made Customized Travel
            </span>
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight leading-tight">
              Have Another Destination in Mind? <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-300 via-pink-200 to-amber-200">
                We Take You Where You Want To Go!
              </span>
            </h3>
            <p className="text-rose-100 text-xs sm:text-sm leading-relaxed">
              Whether you want to explore the snows of Kashmir, heritage forts of Rajasthan, backwaters of Kerala, or any personalized family tour — tell us your dream destination, dates, and budget. We tailor-make the entire trip for you.
            </p>
            <div className="pt-1.5 flex flex-wrap gap-3">
              <a
                href={getCustomWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-[#E11D48] hover:bg-[#BE123C] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-rose-950/40 flex items-center gap-2 cursor-pointer active:scale-95"
              >
                <span>💬 Plan My Custom Trip On WhatsApp</span>
              </a>
              <a
                href="tel:8369927351"
                className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider border border-white/20 transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>📞 Call +91 8369927351</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
