import React from "react";

export default function Pricing({
  tourists,
  acTrain,
  setAcTrain,
  acRoom,
  setAcRoom,
  perPersonCost,
  totalCost,
  totalOriginal,
  savings,
  incrementTourists,
  decrementTourists,
  getWhatsAppLink,
}) {
  return (
    <section
      id="pricing"
      className="py-24 bg-white border-t border-slate-200/50 relative overflow-hidden"
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
              Use our dynamic price calculator to configure train seat upgrades
              or hotel room enhancements. Get a transparent total calculation
              instantly, then click to book directly on WhatsApp with pre-filled
              settings.
            </p>

            <div className="p-6 rounded-2xl liquid-glass-card space-y-4">
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
                  Monsoon discount applied automatically
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-white text-[10px] font-bold">
                  ✓
                </div>
                <span className="text-xs font-semibold text-slate-700">
                  Free Cancellation up to 7 days before departure
                </span>
              </div>
            </div>
          </div>

          {/* Right Calculator Card */}
          <div className="lg:col-span-7">
            <div className="liquid-glass-card rounded-3xl p-8 md:p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/10 rounded-full blur-2xl pointer-events-none" />
              <h3 className="text-xl font-bold text-slate-800 mb-6 pb-4 border-b border-white/40 flex items-center justify-between">
                <span>Price Configurator</span>
                <span className="text-xs font-bold bg-green-500/10 text-green-600 px-3 py-1 rounded-full uppercase">
                  Monsoon Offer Active
                </span>
              </h3>

              <div className="space-y-6">
                {/* Tourists Counter */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">
                      Number of Pilgrims
                    </h4>
                    <p className="text-xs text-slate-550">
                      Calculate total for family/group booking
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={decrementTourists}
                      className="w-10 h-10 rounded-xl bg-white/40 hover:bg-white/70 border border-white/60 text-slate-700 font-extrabold flex items-center justify-center transition-colors cursor-pointer"
                    >
                      -
                    </button>
                    <span className="text-lg font-black text-slate-800 w-8 text-center">
                      {tourists}
                    </span>
                    <button
                      onClick={incrementTourists}
                      className="w-10 h-10 rounded-xl bg-white/40 hover:bg-white/70 border border-white/60 text-slate-700 font-extrabold flex items-center justify-center transition-colors cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                </div>

                <hr className="border-white/30" />

                {/* Train Class Config */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
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
                      className={`px-4 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                        !acTrain
                          ? "bg-primary border-primary text-white"
                          : "border-white/60 bg-white/30 text-slate-700 hover:bg-white/60"
                      }`}
                    >
                      Sleeper Class (Included)
                    </button>
                    <button
                      onClick={() => setAcTrain(true)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                        acTrain
                          ? "bg-primary border-primary text-white"
                          : "border-white/60 bg-white/30 text-slate-700 hover:bg-white/60"
                      }`}
                    >
                      AC Upgrade (+₹3000/person)
                    </button>
                  </div>
                </div>

                <hr className="border-white/30" />

                {/* Hotel Room Config */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">
                      Guest Room Type
                    </h4>
                    <p className="text-xs text-slate-550">
                      Upgrade lodging to Air-Conditioned room
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setAcRoom(false)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                        !acRoom
                          ? "bg-primary border-primary text-white"
                          : "border-white/60 bg-white/30 text-slate-700 hover:bg-white/60"
                      }`}
                    >
                      Standard Room (Included)
                    </button>
                    <button
                      onClick={() => setAcRoom(true)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                        acRoom
                          ? "bg-primary border-primary text-white"
                          : "border-white/60 bg-white/30 text-slate-700 hover:bg-white/60"
                      }`}
                    >
                      AC Room Upgrade (+₹1500/person)
                    </button>
                  </div>
                </div>

                {/* Total Calculations Panel */}
                <div className="bg-white/40 backdrop-blur-sm p-6 rounded-2xl border border-white/60 mt-8 space-y-4">
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
                    <span>Monsoon Saving Discount:</span>
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
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-3 py-4 rounded-2xl bg-green-600 hover:bg-green-700 text-white font-bold text-sm tracking-wide shadow-md transition-all hover:-translate-y-0.5 cursor-pointer"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 001.335 4.978L2 22l5.133-1.347a9.917 9.917 0 004.877 1.28h.005c5.505 0 9.989-4.478 9.99-9.985A9.99 9.99 0 0012.012 2zm4.957 14.22c-.274.774-1.585 1.5-2.194 1.56-.554.055-1.282.102-2.073-.153a10.02 10.02 0 01-4.086-2.58 10.3 10.3 0 01-2.222-3.8c-.463-.794-.741-1.72-.258-2.336.21-.266.463-.56.694-.836.223-.266.297-.456.444-.76.148-.304.074-.57-.037-.798-.111-.228-.99-2.39-1.357-3.274-.356-.862-.722-.746-.99-.76h-.846c-.297 0-.773.111-1.18.56-.407.447-1.554 1.517-1.554 3.702s1.59 4.294 1.815 4.598c.224.304 3.13 4.78 7.58 6.697 1.058.456 1.884.73 2.53 1 .918.28 1.75.24 2.41.143.738-.11 2.274-.93 2.59-1.83.317-.9 3.17-9.066.02-9.066z" />
                  </svg>
                  Book Now via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
