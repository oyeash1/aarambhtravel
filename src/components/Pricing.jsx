import React, { useState, useEffect, useRef } from "react";
import { PACKAGES } from "../constants/tourData";

export default function Pricing({
  selectedPackageId,
  setSelectedPackageId,
  activePackage: propActivePackage,
  packageType,
  handlePackageTypeChange,
  tourists,
  acTrain,
  setAcTrain,
  perPersonCost,
  totalCost,
  totalOriginal,
  savings,
  incrementTourists,
  decrementTourists,
  getWhatsAppLink,
  onBookClick,
}) {
  const activePackage = propActivePackage || PACKAGES.find((p) => p.id === selectedPackageId) || PACKAGES[0];
  const [selectedDate, setSelectedDate] = useState(activePackage.departureDate || "12 Nov 2026");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    setSelectedDate(activePackage.departureDate || "");
  }, [activePackage.departureDate]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const xc = rect.width / 2;
    const yc = rect.height / 2;
    const angleX = ((yc - y) / yc) * 6;
    const angleY = ((x - xc) / xc) * 6;
    card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) translateY(-4px)`;
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)`;
    card.style.transition = "transform 0.5s ease-out";
  };

  return (
    <section
      ref={sectionRef}
      id="pricing"
      className="py-20 bg-[#FCF9F5] border-t border-[#EADBCE]/80 relative overflow-hidden"
    >
      {/* Background glow blobs */}
      <div className="absolute top-12 right-12 w-96 h-96 bg-[#9B1124]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-12 left-12 w-96 h-96 bg-[#E11D48]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Top Package Switcher Banner */}
        <div className="mb-12 text-center space-y-3.5">
          <span className="text-[#E11D48] font-extrabold text-[11px] uppercase tracking-widest bg-[#FFF1F3] px-3.5 py-1 rounded-full border border-[#FECDD3]">
            Select Your Destination Package
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#9B1124] tracking-tight">
            Explore Packages & Calculate Trip Price
          </h2>
          <p className="text-[#6B5B60] text-xs sm:text-sm max-w-2xl mx-auto">
            Choose any package below to calculate instant pricing, configure travelers, and customize your journey.
          </p>

          {/* Responsive Package Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 pt-2 max-w-5xl mx-auto">
            {PACKAGES.map((pkg) => {
              const isSelected = activePackage.id === pkg.id;
              return (
                <button
                  key={pkg.id}
                  onClick={() => setSelectedPackageId && setSelectedPackageId(pkg.id)}
                  className={`w-full p-3.5 rounded-2xl border text-left transition-all duration-300 cursor-pointer relative overflow-hidden flex flex-col justify-between ${
                    isSelected
                      ? "bg-[#9B1124] text-white border-[#9B1124] shadow-md ring-2 ring-[#E11D48] scale-[1.02]"
                      : "bg-white text-[#29181B] border-[#EADBCE] hover:border-[#E11D48]/40 hover:bg-[#FAF4ED]"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className={`text-[9px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                          isSelected
                            ? "bg-[#E11D48] text-white"
                            : "bg-[#FFF1F3] text-[#E11D48] border border-[#FECDD3]"
                        }`}
                      >
                        {pkg.badge}
                      </span>
                      <span
                        className={`text-xs font-bold ${
                          isSelected ? "text-rose-200" : "text-[#9B1124]"
                        }`}
                      >
                        ₹{pkg.basePrice.toLocaleString("en-IN")}/person
                      </span>
                    </div>
                    <h3 className="text-sm font-extrabold mt-1.5 leading-snug">
                      {pkg.title}
                    </h3>
                  </div>
                  <p
                    className={`text-[11px] mt-1.5 font-medium ${
                      isSelected ? "text-rose-100" : "text-[#6B5B60]"
                    }`}
                  >
                    {pkg.duration} • {pkg.shortTitle}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* Left pricing text explanation */}
          <div className="lg:col-span-5 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF1F3] text-[#E11D48] border border-[#FECDD3] font-bold text-xs">
              <span>{activePackage.badge}</span>
              <span>• {activePackage.duration}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#9B1124] leading-tight tracking-tight">
              {activePackage.title}
            </h2>
            <p className="text-[#6B5B60] text-xs sm:text-sm leading-relaxed">
              {activePackage.tagline}. Select your passenger count and options to instantly estimate your total cost and book directly on WhatsApp.
            </p>

            <div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className={`p-5 rounded-2xl bg-white border border-[#EADBCE] shadow-sm space-y-3.5 transition-all duration-500 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <div className="w-4 h-4 rounded-full bg-green-600 flex items-center justify-center text-white text-[9px] font-bold">
                  ✓
                </div>
                <span className="text-xs font-semibold text-[#29181B]">
                  Route: {activePackage.route}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-4 h-4 rounded-full bg-green-600 flex items-center justify-center text-white text-[9px] font-bold">
                  ✓
                </div>
                <span className="text-xs font-semibold text-[#29181B]">
                  {packageType === "couple" ? "Couple special discount applied" : "Standard discount applied automatically"}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-4 h-4 rounded-full bg-green-600 flex items-center justify-center text-white text-[9px] font-bold">
                  ✓
                </div>
                <span className="text-xs font-semibold text-[#29181B]">
                  Confirmed transfers, hotel stay & delicious meals included
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-4 h-4 rounded-full bg-green-600 flex items-center justify-center text-white text-[9px] font-bold">
                  ✓
                </div>
                <span className="text-xs font-semibold text-[#29181B]">
                  50% refund on cancellation (10% within 3 days of trip)
                </span>
              </div>
            </div>
          </div>

          {/* Right Calculator Card */}
          <div className="lg:col-span-7">
            <div
              className={`bg-white rounded-3xl p-5 sm:p-6 border border-[#EADBCE] shadow-md relative overflow-hidden transition-all duration-500 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#E11D48]/5 rounded-full blur-2xl pointer-events-none" />
              <h3 className="text-base sm:text-lg font-bold text-[#29181B] mb-3.5 pb-2.5 border-b border-[#EADBCE]/70 flex items-center justify-between">
                <span>Trip Price Configurator</span>
                {packageType === "couple" ? (
                  <span className="text-[10px] font-bold bg-green-500/10 text-green-700 px-2.5 py-0.5 rounded-full uppercase">
                    Couple Offer Active
                  </span>
                ) : (
                  <span className="text-[10px] font-bold bg-[#FFF1F3] text-[#9B1124] border border-[#FECDD3] px-2.5 py-0.5 rounded-full uppercase">
                    Standard Package
                  </span>
                )}
              </h3>

              {/* Package Segment Control */}
              <div className="flex bg-[#F5EFEB] p-1 rounded-xl border border-[#EADBCE] mb-4">
                <button
                  onClick={() => handlePackageTypeChange("couple")}
                  className={`flex-1 py-2 text-center text-xs font-bold rounded-lg transition-all cursor-pointer ${
                    packageType === "couple"
                      ? "bg-[#9B1124] text-white shadow-sm"
                      : "text-[#4A383D] hover:bg-white/60"
                  }`}
                >
                  Couple Package
                </button>
                <button
                  onClick={() => handlePackageTypeChange("normal")}
                  className={`flex-1 py-2 text-center text-xs font-bold rounded-lg transition-all cursor-pointer ${
                    packageType === "normal"
                      ? "bg-[#9B1124] text-white shadow-sm"
                      : "text-[#4A383D] hover:bg-white/60"
                  }`}
                >
                  Standard Package
                </button>
              </div>

              <div className="space-y-4">
                {/* Tourists Counter */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h4 className="font-bold text-[#29181B] text-xs sm:text-sm">
                      Number of Travelers
                    </h4>
                    <p className="text-[11px] text-[#6B5B60]">
                      {packageType === "couple"
                        ? "Fixed at 2 persons for couple package"
                        : "Calculate total for family/friends group booking"}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={packageType === "couple" ? null : decrementTourists}
                      className={`w-8 h-8 rounded-lg border font-extrabold flex items-center justify-center transition-colors text-xs ${
                        packageType === "couple"
                          ? "bg-slate-100 border-slate-200 text-slate-400 cursor-not-allowed opacity-50"
                          : "bg-[#F5EFEB] hover:bg-white border-[#EADBCE] text-[#29181B] cursor-pointer"
                      }`}
                      disabled={packageType === "couple"}
                    >
                      -
                    </button>
                    <span className="text-base font-black text-[#29181B] w-6 text-center">
                      {tourists}
                    </span>
                    <button
                      onClick={packageType === "couple" ? null : incrementTourists}
                      className={`w-8 h-8 rounded-lg border font-extrabold flex items-center justify-center transition-colors text-xs ${
                        packageType === "couple"
                          ? "bg-slate-100 border-slate-200 text-slate-400 cursor-not-allowed opacity-50"
                          : "bg-[#F5EFEB] hover:bg-white border-[#EADBCE] text-[#29181B] cursor-pointer"
                      }`}
                      disabled={packageType === "couple"}
                    >
                      +
                    </button>
                  </div>
                </div>

                <hr className="border-[#EADBCE]/60" />

                {/* Train / Travel Class Config */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3">
                  <div>
                    <h4 className="font-bold text-[#29181B] text-xs sm:text-sm">
                      Travel Class
                    </h4>
                    <p className="text-[11px] text-[#6B5B60]">
                      Upgrade to comfortable AC coach
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setAcTrain(false)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all cursor-pointer ${
                        !acTrain
                          ? "bg-[#9B1124] border-[#9B1124] text-white shadow-sm"
                          : "border-[#EADBCE] bg-[#FAF4ED] text-[#4A383D] hover:bg-white"
                      }`}
                    >
                      Standard Sleeper
                    </button>
                    <button
                      onClick={() => setAcTrain(true)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all cursor-pointer ${
                        acTrain
                          ? "bg-[#9B1124] border-[#9B1124] text-white shadow-sm"
                          : "border-[#EADBCE] bg-[#FAF4ED] text-[#4A383D] hover:bg-white"
                      }`}
                    >
                      AC Upgrade (+₹{activePackage.acUpgradeCost})
                    </button>
                  </div>
                </div>

                <hr className="border-[#EADBCE]/60" />

                {/* Tour Departure Date */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3">
                  <div>
                    <h4 className="font-bold text-[#29181B] text-xs sm:text-sm">
                      Departure Date
                    </h4>
                    <p className="text-[11px] text-[#6B5B60]">
                      Next scheduled batch date
                    </p>
                  </div>
                  <div className="flex flex-col items-start sm:items-end gap-1">
                    <div className="px-3 py-1.5 rounded-lg text-xs font-bold bg-[#FAF4ED] border border-[#EADBCE] text-[#29181B]">
                      {selectedDate}
                    </div>
                    <span className="text-[10px] text-[#8C787D] font-semibold">
                      *Custom dates available upon request
                    </span>
                  </div>
                </div>

                {/* Total Calculations Panel */}
                <div className="bg-[#FAF4ED] p-3.5 sm:p-4 rounded-2xl border border-[#EADBCE] space-y-2">
                  <div className="flex items-center justify-between text-xs text-[#6B5B60]">
                    <span>Per Person Package Cost:</span>
                    <span className="font-bold text-[#29181B]">
                      ₹{perPersonCost.toLocaleString("en-IN")}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs text-[#6B5B60]">
                    <span>Original Cost ({tourists} travelers):</span>
                    <span className="line-through text-slate-400">
                      ₹{totalOriginal.toLocaleString("en-IN")}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs sm:text-sm text-green-700 font-bold">
                    <span>{packageType === "couple" ? "Couple Saving Discount:" : "Saving Discount:"}</span>
                    <span>- ₹{savings.toLocaleString("en-IN")}</span>
                  </div>

                  <hr className="border-[#EADBCE]" />

                  <div className="flex items-baseline justify-between pt-1">
                    <span className="text-sm font-extrabold text-[#29181B]">
                      Grand Total Estimate:
                    </span>
                    <div className="text-right">
                      <span className="text-xl sm:text-2xl font-black text-[#9B1124]">
                        ₹{totalCost.toLocaleString("en-IN")}/-
                      </span>
                      <p className="text-[9px] text-[#8C787D] font-bold uppercase mt-0.5">
                        All Taxes & Inclusions Included
                      </p>
                    </div>
                  </div>
                </div>

                {/* Book button redirecting to WhatsApp */}
                <button
                  onClick={() => {
                    if (onBookClick) {
                      onBookClick(getWhatsAppLink({ date: selectedDate }));
                    }
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#E11D48] hover:bg-[#BE123C] text-white font-bold text-xs tracking-wide shadow-md shadow-rose-950/20 transition-all hover:-translate-y-0.5 cursor-pointer active:scale-95"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 001.335 4.978L2 22l5.133-1.347a9.917 9.917 0 004.877 1.28h.005c5.505 0 9.989-4.478 9.99-9.985A9.99 9.99 0 0012.012 2zm4.957 14.22c-.274.774-1.585 1.5-2.194 1.56-.554.055-1.282.102-2.073-.153a10.02 10.02 0 01-4.086-2.58 10.3 10.3 0 01-2.222-3.8c-.463-.794-.741-1.72-.258-2.336.21-.266.463-.56.694-.836.223-.266.297-.456.444-.76.148-.304.074-.57-.037-.798-.111-.228-.99-2.39-1.357-3.274-.356-.862-.722-.746-.99-.76h-.846c-.297 0-.773.111-1.18.56-.407.447-1.554 1.517-1.554 3.702s1.59 4.294 1.815 4.598c.224.304 3.13 4.78 7.58 6.697 1.058.456 1.884.73 2.53 1 .918.28 1.75.24 2.41.143.738-.11 2.274-.93 2.59-1.83.317-.9 3.17-9.066.02-9.066z" />
                  </svg>
                  Book Now via WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
