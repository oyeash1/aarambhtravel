"use client";

import { useState } from "react";
import Image from "next/image";

// Core UI Components
import Modal from "../components/Modal";

// UI Components
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import DestinationsExplorer from "../components/DestinationsExplorer";
import PlacesGrid from "../components/PlacesGrid";
import Inclusions from "../components/Inclusions";
import Itinerary from "../components/Itinerary";
import UpcomingJourneys from "../components/UpcomingJourneys";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";
import AnimatedCounter from "../components/AnimatedCounter";
import RecentJourneyPreview from "../components/RecentJourneyPreview";

// Custom Hooks
import useBookingCalculator from "../hooks/useBookingCalculator";

export default function Home() {
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [whatsAppLink, setWhatsAppLink] = useState("");
  const [termsMode, setTermsMode] = useState("book"); // "book" or "view"
  const calculator = useBookingCalculator("odisha-puri");

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
    <div className="relative min-h-screen bg-[#FCF9F5] text-[#29181B] selection:bg-[#E11D48] selection:text-white">
      {/* Subtle Background Pattern with Warm Cherry / Cream Tint */}
      <div className="absolute inset-0 bg-[radial-gradient(#9B1124_0.7px,transparent_0.7px)] [background-size:24px_24px] opacity-[0.025] pointer-events-none" />

      {/* Floating Navigation Header */}
      <Navbar />

      {/* Hero Banner: Minimal, sole focus on "We Take You Where You Want To Go" */}
      <Hero setSelectedPackageId={calculator.setSelectedPackageId} />

      {/* Quick Statistics Banner with Light Cream Surface */}
      <section className="bg-[#F5EFEB] border-y border-[#EADBCE]/70 py-9">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          <div className="text-center">
            <h4 className="text-xl min-[390px]:text-2xl sm:text-3xl font-black text-[#9B1124]">
              <AnimatedCounter target={5} suffix=" Active" />
            </h4>
            <p className="text-[11px] sm:text-xs text-[#7A6469] font-bold uppercase tracking-wider mt-1">
              Curated Tour Packages
            </p>
          </div>
          <div className="text-center">
            <h4 className="text-xl min-[390px]:text-2xl sm:text-3xl font-black text-[#9B1124]">
              <AnimatedCounter target={45} suffix="+" />
            </h4>
            <p className="text-[11px] sm:text-xs text-[#7A6469] font-bold uppercase tracking-wider mt-1">
              Destinations & Highlights
            </p>
          </div>
          <div className="text-center">
            <h4 className="text-xl min-[390px]:text-2xl sm:text-3xl font-black text-[#9B1124]">
              <AnimatedCounter target={calculator.activePackage.basePrice} prefix="₹" isPrice={true} />
            </h4>
            <p className="text-[11px] sm:text-xs text-[#7A6469] font-bold uppercase tracking-wider mt-1">
              Starting Price ({calculator.activePackage.shortTitle})
            </p>
          </div>
          <div className="text-center">
            <h4 className="text-xl min-[390px]:text-2xl sm:text-3xl font-black text-[#9B1124]">
              <AnimatedCounter target={8369927351} isPhone={true} />
            </h4>
            <p className="text-[11px] sm:text-xs text-[#7A6469] font-bold uppercase tracking-wider mt-1">
              24/7 Booking Helpdesk
            </p>
          </div>
        </div>
      </section>

      {/* Multi-Trip Catalog & "We Take You Where You Want To Go" Explorer */}
      <DestinationsExplorer
        selectedPackageId={calculator.selectedPackageId}
        setSelectedPackageId={calculator.setSelectedPackageId}
      />

      {/* Recent Journey Preview Section */}
      <RecentJourneyPreview />

      {/* Places to Visit grid */}
      <PlacesGrid
        selectedPackageId={calculator.selectedPackageId}
        setSelectedPackageId={calculator.setSelectedPackageId}
        activePackage={calculator.activePackage}
        onSelectPlace={setSelectedPlace}
      />

      {/* Inclusions grid benefits (6 core cards) */}
      <Inclusions />

      {/* Accordion day-by-day itinerary timeline */}
      <Itinerary
        selectedPackageId={calculator.selectedPackageId}
        setSelectedPackageId={calculator.setSelectedPackageId}
        activePackage={calculator.activePackage}
      />

      {/* Modern Upcoming Journeys Cards */}
      <UpcomingJourneys />

      {/* Pricing customizer and WhatsApp booker */}
      <Pricing
        selectedPackageId={calculator.selectedPackageId}
        setSelectedPackageId={calculator.setSelectedPackageId}
        activePackage={calculator.activePackage}
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
          <div className="flex flex-col bg-[#FFFDF9]">
            {selectedPlace.image ? (
              <div className="relative h-60 w-full">
                <Image
                  src={selectedPlace.image}
                  alt={selectedPlace.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 512px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                <h3 className="absolute bottom-5 left-5 text-xl sm:text-2xl font-black text-white">
                  {selectedPlace.name}
                </h3>
              </div>
            ) : (
              <div className="p-6 bg-[#9B1124] text-white">
                <span className="text-[10px] font-bold uppercase tracking-widest text-rose-200 bg-rose-500/20 px-2.5 py-1 rounded-full border border-rose-400/20">
                  Highlight Point {selectedPlace.id}
                </span>
                <h3 className="text-xl sm:text-2xl font-black mt-2">{selectedPlace.name}</h3>
              </div>
            )}

            <div className="p-6 space-y-5">
              <div>
                <h4 className="text-[11px] font-bold text-[#8C787D] uppercase tracking-widest mb-1.5">
                  Description & Overview
                </h4>
                <p className="text-xs sm:text-sm text-[#4A383D] leading-relaxed font-medium">
                  {selectedPlace.desc}
                </p>
              </div>

              <div className="bg-[#FAF4ED] p-3.5 rounded-xl border border-[#EADBCE]">
                <span className="text-[10px] text-[#9B1124] font-bold uppercase tracking-widest block mb-0.5">
                  Tour Service
                </span>
                <p className="text-xs font-semibold text-[#29181B]">
                  Comfortable transfers, verified guide insights, and hassle-free entry assistance included in the package.
                </p>
              </div>

              <button
                onClick={() => {
                  setSelectedPlace(null);
                  handleScrollToSection("pricing");
                }}
                className="w-full py-2.5 rounded-xl bg-[#9B1124] hover:bg-[#7E0D1D] text-white font-bold text-xs tracking-wide transition-all shadow-sm cursor-pointer active:scale-95"
              >
                Configure Trip & Check Price
              </button>
            </div>
          </div>
        )}
      </Modal>

      {/* Terms & Conditions Modal */}
      <Modal isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} className="bg-[#FFFDF9]">
        <div className="flex flex-col max-h-[85vh] sm:max-h-[80vh]">
          <div className="p-4 sm:p-5 bg-[#9B1124] text-white relative">
            <h3 className="text-lg sm:text-xl font-black">Terms & Conditions</h3>
            <p className="text-[10px] text-rose-200 font-semibold uppercase tracking-wider mt-0.5">
              Arambh Travel Policy
            </p>
          </div>

          <div className="p-4 sm:p-5 space-y-3 overflow-y-auto text-[#4A383D] text-xs leading-relaxed max-h-[40vh] sm:max-h-[45vh]">
            <div className="space-y-3">
              <div>
                <h5 className="font-bold text-[#29181B] text-[11px] mb-0.5">1. Booking Confirmation</h5>
                <p className="text-[#6B5B60]">Booking confirmation will only be issued after receiving the advance or full payment.</p>
              </div>

              <div>
                <h5 className="font-bold text-[#29181B] text-[11px] mb-0.5">2. Cancellation & Refund Policy</h5>
                <p className="text-[#6B5B60]">A 50% refund is issued for cancellations. If cancelled within 3 days prior to the trip date, only a 10% refund is applicable (trip date se 3 din ke andar cancel karne par sirf 10% refund milega).</p>
              </div>

              <div>
                <h5 className="font-bold text-[#29181B] text-[11px] mb-0.5">3. Identification Requirements</h5>
                <p className="text-[#6B5B60]">A valid government-issued photo ID is mandatory for all guests before boarding and during hotel check-ins.</p>
              </div>

              <div>
                <h5 className="font-bold text-[#29181B] text-[11px] mb-0.5">4. Itinerary Alterations</h5>
                <p className="text-[#6B5B60]">The tour schedule, trains, and visited sites may be modified or altered due to weather conditions, delays, or administrative restrictions.</p>
              </div>

              <div>
                <h5 className="font-bold text-[#29181B] text-[11px] mb-0.5">5. Personal Belongings</h5>
                <p className="text-[#6B5B60]">Guests are solely responsible for their personal luggage and belongings. Arambh Travel holds no liability for any losses.</p>
              </div>

              <div>
                <h5 className="font-bold text-[#29181B] text-[11px] mb-0.5">6. Right to Refuse Service</h5>
                <p className="text-[#6B5B60]">We reserve the right to refuse service or terminate the tour of any guest engaged in unsafe, disruptive, or illegal behavior.</p>
              </div>

              <div>
                <h5 className="font-bold text-[#29181B] text-[11px] mb-0.5">7. Force Majeure</h5>
                <p className="text-[#6B5B60]">We are not liable for changes or cancellations due to acts of God, strikes, train delays, landslides, or sudden regional government orders.</p>
              </div>
            </div>
          </div>

          <div className="p-4 sm:p-5 border-t border-[#EADBCE] bg-[#F5EFEB] space-y-3">
            {termsMode === "book" ? (
              <>
                <label className="flex items-center gap-2 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={termsAccepted}
                    onChange={(e) => setTermsAccepted(e.target.checked)}
                    className="w-4 h-4 rounded text-[#E11D48] focus:ring-[#E11D48] border-[#EADBCE]"
                  />
                  <span className="text-xs font-semibold text-[#29181B]">
                    I agree to the Terms & Conditions
                  </span>
                </label>

                <div className="flex gap-2">
                  <button
                    onClick={() => setIsTermsOpen(false)}
                    className="w-1/3 py-2 rounded-xl border border-[#EADBCE] text-[#4A383D] text-xs font-bold hover:bg-white transition-colors"
                  >
                    Cancel
                  </button>
                  <a
                    href={termsAccepted ? whatsAppLink : "#"}
                    target={termsAccepted ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      if (!termsAccepted) {
                        e.preventDefault();
                      } else {
                        setIsTermsOpen(false);
                      }
                    }}
                    className={`w-2/3 py-2 rounded-xl text-center text-xs font-bold text-white transition-all ${
                      termsAccepted
                        ? "bg-[#E11D48] hover:bg-[#BE123C] shadow-sm cursor-pointer"
                        : "bg-slate-300 cursor-not-allowed opacity-60"
                    }`}
                  >
                    Proceed to WhatsApp
                  </a>
                </div>
              </>
            ) : (
              <button
                onClick={() => setIsTermsOpen(false)}
                className="w-full py-2 rounded-xl bg-[#9B1124] text-white text-xs font-bold hover:bg-[#7E0D1D] transition-colors shadow-sm"
              >
                Close
              </button>
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
}
