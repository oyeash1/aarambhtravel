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
  const calculator = useBookingCalculator();

  const handleScrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen bg-white text-slate-800 selection:bg-orange-500 selection:text-white">
      {/* Dynamic Background Noise / Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#0F3D91_0.8px,transparent_0.8px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none" />

      {/* Floating Navigation Header */}
      <Navbar />

      {/* Hero Banner with video overlay and fast inquiry panel */}
      <Hero getWhatsAppLink={calculator.getWhatsAppLink} />

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
            <h4 className="text-xl min-[390px]:text-2xl sm:text-3xl font-extrabold text-primary">14+</h4>
            <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider mt-1">
              Sacred Sites Visited
            </p>
          </div>
          <div className="text-center">
            <h4 className="text-xl min-[390px]:text-2xl sm:text-3xl font-extrabold text-primary">₹14,499</h4>
            <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider mt-1">
              Starting Price
            </p>
          </div>
          <div className="text-center">
            <h4 className="text-xl min-[390px]:text-2xl sm:text-3xl font-extrabold text-primary">6307443201</h4>
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
        tourists={calculator.tourists}
        acTrain={calculator.acTrain}
        setAcTrain={calculator.setAcTrain}
        acRoom={calculator.acRoom}
        setAcRoom={calculator.setAcRoom}
        perPersonCost={calculator.perPersonCost}
        totalCost={calculator.totalCost}
        totalOriginal={calculator.totalOriginal}
        savings={calculator.savings}
        incrementTourists={calculator.incrementTourists}
        decrementTourists={calculator.decrementTourists}
        getWhatsAppLink={calculator.getWhatsAppLink}
      />

      {/* Branded footer */}
      <Footer />

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
    </div>
  );
}
