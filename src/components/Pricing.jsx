import React, { useState, useEffect, useRef } from "react";

export default function Pricing({
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
  const [selectedDate] = useState("22 Sept 2026");
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
    const angleX = ((yc - y) / yc) * 8;
    const angleY = ((x - xc) / xc) * 8;
    card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) translateY(-8px) scale3d(1.01, 1.01, 1.01)`;
    card.style.boxShadow = `
      0 35px 70px -15px rgba(15, 61, 145, 0.28),
      0 15px 30px -10px rgba(0, 0, 0, 0.12),
      inset 2px 2px 0px 0px rgba(255, 255, 255, 1),
      inset -2px -2px 0px 0px rgba(0, 0, 0, 0.15),
      inset 0 0 20px 0 rgba(255, 255, 255, 0.5)
    `;
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px) scale3d(1, 1, 1)`;
    card.style.boxShadow = ``;
    card.style.transition = "transform 0.5s cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)";
  };

  return (
    <section
      ref={sectionRef}
      id="pricing"
      className="py-24 bg-white border-t border-slate-200/50 relative overflow-hidden"
      style={{ perspective: "1500px" }}
    >
      {/* Colorful background blobs for glass refraction */}
      <div className="absolute top-12 right-12 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-12 left-12 w-96 h-96 bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left pricing text explanation */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-orange-500 font-bold text-xs uppercase tracking-widest bg-orange-500/10 px-3 py-1 rounded-full">
              Interactive Estimate Builder
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-primary leading-tight tracking-tight">
              Calculate & Customize Your Tour Package
            </h2>
            <p className="text-slate-650 text-sm leading-relaxed">
              Use our dynamic price calculator to configure train seat upgrades.
              Get a transparent total calculation instantly, then click to book
              directly on WhatsApp with pre-filled settings.
            </p>

            <div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transitionDelay: "150ms",
              }}
              className={`p-6 rounded-2xl pricing-3d-card space-y-4 transition-all duration-700 ease-out transform ${isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-16"
                }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-white text-[10px] font-bold">
                  ✓
                </div>
                <span className="text-xs font-semibold text-slate-700">
                  No Hidden Agency Booking Fees
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-white text-[10px] font-bold">
                  ✓
                </div>
                <span className="text-xs font-semibold text-slate-700">
                  {packageType === "couple" ? "Couple discount applied automatically" : "Standard discount applied automatically"}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-white text-[10px] font-bold">
                  ✓
                </div>
                <span className="text-xs font-semibold text-slate-700">
                  50% refund on cancellation (10% within 3 days of trip)
                </span>
              </div>
            </div>
          </div>

          {/* Right Calculator Card */}
          <div className="lg:col-span-7">
            <div
              style={{
                transitionDelay: "300ms",
              }}
              className={`liquid-glass-card rounded-3xl p-5 sm:p-6 md:p-8 relative overflow-hidden transition-all duration-700 ease-out transform ${isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-16"
                }`}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/10 rounded-full blur-2xl pointer-events-none" />
              <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-4 pb-3 border-b border-white/40 flex items-center justify-between">
                <span>Price Configurator</span>
                {packageType === "couple" ? (
                  <span className="text-xs font-bold bg-green-500/10 text-green-600 px-3 py-1 rounded-full uppercase">
                    Couple Offer Active
                  </span>
                ) : (
                  <span className="text-xs font-bold bg-primary/10 text-primary px-3 py-1 rounded-full uppercase">
                    Standard Package
                  </span>
                )}
              </h3>

              {/* Package Segment Control */}
              <div className="flex bg-white/20 backdrop-blur-md p-1 rounded-2xl border border-white/40 mb-4 sm:mb-6">
                <button
                  onClick={() => handlePackageTypeChange("couple")}
                  className={`flex-1 py-3 text-center text-xs font-bold rounded-xl transition-all cursor-pointer ${packageType === "couple"
                      ? "bg-primary text-white shadow-md"
                      : "text-slate-700 hover:bg-white/20"
                    }`}
                >
                  Couple Package
                </button>
                <button
                  onClick={() => handlePackageTypeChange("normal")}
                  className={`flex-1 py-3 text-center text-xs font-bold rounded-xl transition-all cursor-pointer ${packageType === "normal"
                      ? "bg-primary text-white shadow-md"
                      : "text-slate-700 hover:bg-white/20"
                    }`}
                >
                  Standard Package
                </button>
              </div>

              <div className="space-y-4 sm:space-y-5">
                {/* Tourists Counter */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">
                      Number of Pilgrims
                    </h4>
                    <p className="text-xs text-slate-550">
                      {packageType === "couple"
                        ? "Fixed at 2 persons for couple package"
                        : "Calculate total for family/group booking"}
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={packageType === "couple" ? null : decrementTourists}
                      className={`w-10 h-10 rounded-xl border font-extrabold flex items-center justify-center transition-colors ${packageType === "couple"
                          ? "bg-white/10 border-white/10 text-slate-400 cursor-not-allowed opacity-50"
                          : "bg-white/40 hover:bg-white/70 border border-white/60 text-slate-700 cursor-pointer"
                        }`}
                      disabled={packageType === "couple"}
                    >
                      -
                    </button>
                    <span className="text-lg font-black text-slate-800 w-8 text-center">
                      {tourists}
                    </span>
                    <button
                      onClick={packageType === "couple" ? null : incrementTourists}
                      className={`w-10 h-10 rounded-xl border font-extrabold flex items-center justify-center transition-colors ${packageType === "couple"
                          ? "bg-white/10 border-white/10 text-slate-400 cursor-not-allowed opacity-50"
                          : "bg-white/40 hover:bg-white/70 border border-white/60 text-slate-700 cursor-pointer"
                        }`}
                      disabled={packageType === "couple"}
                    >
                      +
                    </button>
                  </div>
                </div>

                <hr className="border-white/20" />

                {/* Train Class Config */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">
                      Train Coach Selection
                    </h4>
                    <p className="text-xs text-slate-550">
                      Upgrade to comfortable AC sleeper
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setAcTrain(false)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${!acTrain
                          ? "bg-primary border-primary text-white"
                          : "border-white/60 bg-white/30 text-slate-700 hover:bg-white/60"
                        }`}
                    >
                      Sleeper Class (Included)
                    </button>
                    <button
                      onClick={() => setAcTrain(true)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${acTrain
                          ? "bg-primary border-primary text-white"
                          : "border-white/60 bg-white/30 text-slate-700 hover:bg-white/60"
                        }`}
                    >
                      AC Upgrade (+₹3000/person)
                    </button>
                  </div>
                </div>

                <hr className="border-white/20" />

                {/* Tour Departure Date */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">
                      Departure Date
                    </h4>
                    <p className="text-xs text-slate-550">
                      Our next upcoming batch date
                    </p>
                  </div>
                  <div className="flex flex-col items-start sm:items-end gap-1.5">
                    <div className="px-4 py-2.5 rounded-xl text-xs font-bold bg-white/40 backdrop-blur-sm border border-white/60 text-slate-850">
                      22 Sept 2026
                    </div>
                    <span className="text-[10px] text-slate-500 font-semibold tracking-wide text-left sm:text-right">
                      *Dates can be adjusted if you need
                    </span>
                  </div>
                </div>

                {/* Total Calculations Panel */}
                <div className="bg-white/40 backdrop-blur-sm p-4 sm:p-5 rounded-2xl border border-white/60 mt-4 sm:mt-6 space-y-2.5 sm:space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-550">
                    <span>Per Person Package Cost:</span>
                    <span className="font-bold text-slate-800">
                      ₹{perPersonCost.toLocaleString("en-IN")}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs text-slate-550">
                    <span>Original Package Cost ({tourists} tourists):</span>
                    <span className="line-through">
                      ₹{totalOriginal.toLocaleString("en-IN")}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-sm text-green-600 font-bold">
                    <span>{packageType === "couple" ? "Couple Saving Discount:" : "Saving Discount:"}</span>
                    <span>- ₹{savings.toLocaleString("en-IN")}</span>
                  </div>

                  <hr className="border-white/30" />

                  <div className="flex items-baseline justify-between">
                    <span className="text-base font-extrabold text-slate-800">
                      Grand Total Estimate:
                    </span>
                    <div className="text-right">
                      <span className="text-2xl md:text-3xl font-black text-primary">
                        ₹{totalCost.toLocaleString("en-IN")}/-
                      </span>
                      <p className="text-[10px] text-slate-500 font-semibold uppercase mt-0.5">
                        All Taxes Included
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
                  className="w-full flex items-center justify-center gap-3 py-3 sm:py-3.5 rounded-2xl bg-green-600 hover:bg-green-700 text-white font-bold text-sm tracking-wide shadow-md transition-all hover:-translate-y-0.5 cursor-pointer border-none"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
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
