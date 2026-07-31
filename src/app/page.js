"use client";

import { useState } from "react";
import Image from "next/image";

// Core UI Components
import Modal from "../components/ui/Modal";

// Module Components
import Navbar from "../modules/ayodhya-tour/components/Navbar";
import Hero from "../modules/ayodhya-tour/components/Hero";
import PlacesGrid from "../modules/ayodhya-tour/components/PlacesGrid";
import Inclusions from "../modules/ayodhya-tour/components/Inclusions";
import Itinerary from "../modules/ayodhya-tour/components/Itinerary";
import Pricing from "../modules/ayodhya-tour/components/Pricing";
import Footer from "../modules/ayodhya-tour/components/Footer";

// Module Hooks
import useBookingCalculator from "../modules/ayodhya-tour/hooks/useBookingCalculator";

export default function Home() {
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [whatsAppLink, setWhatsAppLink] = useState("");
  const [termsMode, setTermsMode] = useState("book"); // "book" or "view"
  const calculator = useBookingCalculator();

  const handleScrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleBookClick = (link) => {
    setWhatsAppLink(link);
    setTermsMode("book");
    setTermsAccepted(false);
    setIsTermsOpen(true);
  };

  const handleTermsViewOnly = () => {
    setTermsMode("view");
    setIsTermsOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-white text-slate-800 selection:bg-orange-500 selection:text-white">
      {/* Dynamic Background Noise / Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#0F3D91_0.8px,transparent_0.8px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none" />

      {/* Floating Navigation Header */}
      <Navbar />

      {/* Hero Banner with video overlay and fast inquiry panel */}
      <Hero />

      {/* Quick Statistics Banner */}
      <section className="bg-slate-50 border-y border-slate-200/50 py-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <h4 className="text-xl min-[390px]:text-2xl sm:text-3xl font-extrabold text-primary">7 Days</h4>
            <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider mt-1">
              6 Nights Packages
            </p>
          </div>
          <div className="text-center">
            <h4 className="text-xl min-[390px]:text-2xl sm:text-3xl font-extrabold text-primary">15+</h4>
            <p className="text-xs text-slate-550 font-semibold uppercase tracking-wider mt-1">
              Sacred Sites Visited
            </p>
          </div>
          <div className="text-center">
            <h4 className="text-xl min-[390px]:text-2xl sm:text-3xl font-extrabold text-primary">₹14,800</h4>
            <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider mt-1">
              Starting Price
            </p>
          </div>
          <div className="text-center">
            <h4 className="text-xl min-[390px]:text-2xl sm:text-3xl font-extrabold text-primary">9082541206</h4>
            <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider mt-1">
              Helpdesk Contact
            </p>
          </div>
        </div>
      </section>

      {/* Places to Visit grid (14 locations total) */}
      <PlacesGrid onSelectPlace={setSelectedPlace} />

      {/* Inclusions grid benefits (6 core cards) */}
      <Inclusions />

      {/* Accordion day-by-day itinerary timeline */}
      <Itinerary />

      {/* Pricing customizer and WhatsApp booker */}
      <Pricing
        packageType={calculator.packageType}
        handlePackageTypeChange={calculator.handlePackageTypeChange}
        tourists={calculator.tourists}
        acTrain={calculator.acTrain}
        setAcTrain={calculator.setAcTrain}
        perPersonCost={calculator.perPersonCost}
        totalCost={calculator.totalCost}
        totalOriginal={calculator.totalOriginal}
        savings={calculator.savings}
        incrementTourists={calculator.incrementTourists}
        decrementTourists={calculator.decrementTourists}
        getWhatsAppLink={calculator.getWhatsAppLink}
        onBookClick={handleBookClick}
      />

      {/* Branded footer */}
      <Footer onTermsClick={handleTermsViewOnly} />

      {/* Detailed Place Information Modal */}
      <Modal isOpen={!!selectedPlace} onClose={() => setSelectedPlace(null)}>
        {selectedPlace && (
          <div className="flex flex-col">
            {selectedPlace.featured ? (
              <div className="relative h-64 w-full">
                <Image
                  src={selectedPlace.image}
                  alt={selectedPlace.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 512px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/10 to-transparent" />
                <h3 className="absolute bottom-6 left-6 text-2xl font-black text-white">
                  {selectedPlace.name}
                </h3>
              </div>
            ) : (
              <div className="p-8 bg-primary text-white">
                <span className="text-[10px] font-bold uppercase tracking-widest text-orange-400 bg-orange-400/10 px-2.5 py-1 rounded-full">
                  Sacred Point {selectedPlace.id}
                </span>
                <h3 className="text-2xl font-black mt-2">{selectedPlace.name}</h3>
              </div>
            )}

            <div className="p-8 space-y-6">
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                  Description & History
                </h4>
                <p className="text-sm text-slate-650 leading-relaxed font-medium">
                  {selectedPlace.desc}
                </p>
              </div>

              <div className="bg-white/30 p-4 rounded-xl border border-white/50">
                <span className="text-[10px] text-slate-550 font-bold uppercase tracking-widest block mb-1">
                  Includes
                </span>
                <p className="text-xs font-semibold text-slate-800">
                  Guide explanation, Entry verification, and Sightseeing vehicles
                  stopping right at entry gate.
                </p>
              </div>

              <button
                onClick={() => {
                  setSelectedPlace(null);
                  handleScrollToSection("pricing");
                }}
                className="w-full py-3.5 rounded-xl bg-primary hover:bg-primary-hover text-white font-bold text-xs tracking-wide transition-all shadow-md cursor-pointer"
              >
                Back To Calculator
              </button>
            </div>
          </div>
        )}
      </Modal>

      {/* Terms & Conditions Modal */}
      <Modal isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} className="bg-white">
        <div className="flex flex-col max-h-[85vh] sm:max-h-[80vh]">
          <div className="p-4 sm:p-5 bg-primary text-white relative">
            <h3 className="text-lg sm:text-xl font-black">Terms & Conditions</h3>
            <p className="text-[10px] text-orange-300 font-semibold uppercase tracking-wider mt-0.5">
              Arambh Travel Pilgrimage Policy
            </p>
          </div>

          <div className="p-4 sm:p-5 space-y-3 overflow-y-auto text-slate-700 text-xs leading-relaxed max-h-[40vh] sm:max-h-[45vh]">
            <div className="space-y-3">
              <div>
                <h5 className="font-bold text-slate-800 text-[11px] mb-0.5">1. Booking Confirmation</h5>
                <p className="text-slate-605">Booking confirmation will only be issued after receiving the advance or full payment.</p>
              </div>

              <div>
                <h5 className="font-bold text-slate-800 text-[11px] mb-0.5">2. Cancellation & Refund Policy</h5>
                <p className="text-slate-605">Cancellation and refunds can only be processed if requested at least 18 days prior to the tour departure date (18 din pahle hi kar sakte hain tour ke).</p>
              </div>

              <div>
                <h5 className="font-bold text-slate-800 text-[11px] mb-0.5">3. Identification Requirements</h5>
                <p className="text-slate-605">A valid government-issued photo ID is mandatory for all guests before boarding and during hotel check-ins.</p>
              </div>

              <div>
                <h5 className="font-bold text-slate-800 text-[11px] mb-0.5">4. Itinerary Alterations</h5>
                <p className="text-slate-605">The tour schedule, trains, and visited sites may be modified or altered due to weather conditions, delays, or administrative restrictions.</p>
              </div>

              <div>
                <h5 className="font-bold text-slate-800 text-[11px] mb-0.5">5. Personal Belongings</h5>
                <p className="text-slate-605">Guests are solely responsible for their personal luggage and belongings. Arambh Travel holds no liability for any losses.</p>
              </div>

              <div>
                <h5 className="font-bold text-slate-800 text-[11px] mb-0.5">6. Right to Refuse Service</h5>
                <p className="text-slate-605">We reserve the right to refuse service or terminate the tour of any guest engaged in unsafe, disruptive, or illegal behavior.</p>
              </div>

              <div>
                <h5 className="font-bold text-slate-800 text-[11px] mb-0.5">7. Liability Limitation</h5>
                <p className="text-slate-605">Arambh Travel is not responsible for uncontrollable events including natural disasters, acts of God, strikes, or sudden train cancellations.</p>
              </div>

              <div>
                <h5 className="font-bold text-slate-800 text-[11px] mb-0.5">8. Jurisdiction</h5>
                <p className="text-slate-605">All disputes are subject to local judicial courts and legal jurisdiction only.</p>
              </div>
            </div>
          </div>

          <div className="p-4 sm:p-5 border-t border-slate-200/60 bg-slate-50/50 flex flex-col gap-3">
            {termsMode === "book" ? (
              <>
                <label className="flex items-start gap-2.5 cursor-pointer select-none group">
                  <input
                    type="checkbox"
                    checked={termsAccepted}
                    onChange={(e) => setTermsAccepted(e.target.checked)}
                    className="mt-0.5 w-4 h-4 rounded accent-orange-500 cursor-pointer"
                  />
                  <span className="text-xs font-bold text-slate-700 group-hover:text-primary transition-colors">
                    I accept the Terms & Conditions
                  </span>
                </label>

                <button
                  onClick={() => {
                    if (termsAccepted && whatsAppLink) {
                      window.open(whatsAppLink, "_blank");
                      setIsTermsOpen(false);
                    }
                  }}
                  disabled={!termsAccepted}
                  className={`w-full py-3 rounded-xl font-bold text-xs tracking-wide transition-all shadow-md flex items-center justify-center gap-2 ${termsAccepted
                      ? "bg-green-600 hover:bg-green-700 text-white cursor-pointer"
                      : "bg-slate-300 text-slate-500 cursor-not-allowed"
                    }`}
                >
                  <span>Proceed to WhatsApp</span>
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 001.335 4.978L2 22l5.133-1.347a9.917 9.917 0 004.877 1.28h.005c5.505 0 9.989-4.478 9.99-9.985A9.99 9.99 0 0012.012 2zm4.957 14.22c-.274.774-1.585 1.5-2.194 1.56-.554.055-1.282.102-2.073-.153a10.02 10.02 0 01-4.086-2.58 10.3 10.3 0 01-2.222-3.8c-.463-.794-.741-1.72-.258-2.336.21-.266.463-.56.694-.836.223-.266.297-.456.444-.76.148-.304.074-.57-.037-.798-.111-.228-.99-2.39-1.357-3.274-.356-.862-.722-.746-.99-.76h-.846c-.297 0-.773.111-1.18.56-.407.447-1.554 1.517-1.554 3.702s1.59 4.294 1.815 4.598c.224.304 3.13 4.78 7.58 6.697 1.058.456 1.884.73 2.53 1 .918.28 1.75.24 2.41.143.738-.11 2.274-.93 2.59-1.83.317-.9 3.17-9.066.02-9.066z" />
                  </svg>
                </button>
              </>
            ) : (
              <button
                onClick={() => setIsTermsOpen(false)}
                className="w-full py-3 rounded-xl bg-primary hover:bg-primary-hover text-white font-bold text-xs tracking-wide transition-all shadow-md cursor-pointer"
              >
                Close Terms
              </button>
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
}
