"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Reveal from "../../components/Reveal";
import Lightbox from "../../components/Lightbox";
import HoverPlayVideo from "../../components/HoverPlayVideo";
import TestimonialCarousel from "../../components/TestimonialCarousel";

export default function OurJourneys() {
  const [scrollY, setScrollY] = useState(0);
  const [activeLightboxIdx, setActiveLightboxIdx] = useState(null);

  // Parallax Scroll Tracking
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const galleryImages = [
    // Add your Cloudinary image URLs here (e.g. { src: "https://res.cloudinary.com/..." })
  ];

  const handlePrevLightbox = () => {
    setActiveLightboxIdx((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const handleNextLightbox = () => {
    setActiveLightboxIdx((prev) => (prev + 1) % galleryImages.length);
  };

  const handleScrollToContent = () => {
    const el = document.getElementById("featured-journey");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen bg-white text-slate-800 selection:bg-orange-500 selection:text-white">
      {/* Background Noise Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#0F3D91_0.8px,transparent_0.8px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none z-0" />

      {/* Navigation */}
      <Navbar />

      {/* 1. HERO SECTION */}
      <section className="relative h-[95vh] w-full flex items-center justify-center overflow-hidden bg-slate-950">
        {/* Background video parallax container */}
        <div
          className="absolute inset-0 w-full h-[120%] pointer-events-none"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-60"
            src="https://assets.mixkit.co/videos/preview/mixkit-mysterious-mountain-landscape-with-fog-28688-large.mp4"
          />
          {/* Subtle overlay */}
          <div className="absolute inset-0 bg-slate-950/50" />
        </div>

        {/* Cinematic Vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-transparent to-slate-950/90 z-10" />

        <div className="max-w-4xl mx-auto px-6 text-center relative z-20 text-white mt-12 space-y-6">
          <span className="inline-block px-4 py-1.5 rounded-full bg-orange-500/20 text-orange-400 font-extrabold text-xs uppercase tracking-widest border border-orange-500/30 animate-pulse">
            Our Stories
          </span>
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight leading-tight uppercase select-none">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">Journeys</span>
          </h1>
          <p className="text-lg sm:text-xl font-bold tracking-widest text-slate-200">
            Real journeys. Real people. Real memories.
          </p>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Aarambh Travel brings you closer to the divine. Every journey we plan is a promise of comfort, authentic local experiences, and deep spiritual elevation. Let these memories inspire your next sacred adventure.
          </p>

          <button
            onClick={handleScrollToContent}
            className="mt-8 px-8 py-3.5 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-extrabold text-xs tracking-wider uppercase transition-all shadow-lg hover:shadow-orange-500/20 active:scale-95 cursor-pointer"
          >
            Explore Completed Tours
          </button>
        </div>

        {/* Scroll Indicator */}
        <div
          onClick={handleScrollToContent}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 cursor-pointer text-white/70 hover:text-white transition-colors"
        >
          <span className="text-[10px] font-bold uppercase tracking-widest">Scroll Down</span>
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center p-1.5">
            <div className="w-1.5 h-3 bg-orange-500 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* 2. FEATURED JOURNEY SECTION (AYODHYA) */}
      <section id="featured-journey" className="py-24 relative overflow-hidden bg-slate-50 border-b border-slate-200/50">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left side text story */}
            <div className="lg:col-span-6 space-y-6">
              <Reveal>
                <span className="px-3.5 py-1.5 rounded-full bg-green-600/10 text-green-605 font-extrabold text-xs uppercase tracking-widest border border-green-600/20 inline-flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
                  COMPLETED JOURNEY
                </span>
              </Reveal>

              <Reveal delay={100}>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary tracking-tight">
                  Mumbai → Ayodhya Pilgrimage
                </h2>
              </Reveal>

              <Reveal delay={200}>
                <p className="text-slate-650 text-sm sm:text-base leading-relaxed font-medium">
                  In January 2026, Aarambh Travel carried a group of over 70 devout travelers from the bustling streets of Mumbai directly into the spiritual heartlands of Northern India.
                </p>

              </Reveal>

              {/* Stats Block */}
              <Reveal delay={300}>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-slate-200/60">
                  <div className="p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
                    <h4 className="text-2xl font-black text-primary">70+</h4>
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mt-1">Devout Travelers</p>
                  </div>


                  <div className="p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
                    <h4 className="text-2xl font-black text-orange-500">100%</h4>
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mt-1">Happy Souls</p>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right side asymmetric collage */}
            <div className="lg:col-span-6 flex items-center justify-center lg:justify-end">
              <Reveal delay={200}>
                <div className="relative w-[280px] sm:w-[420px] md:w-[480px] h-[340px] sm:h-[450px] md:h-[480px] mt-6 lg:mt-0">
                  {/* Background shape */}
                  <div className="absolute inset-4 rounded-3xl bg-primary/5 border border-primary/10 -rotate-[2deg] pointer-events-none" />

                  {/* Collage Image 1: Main Large image */}
                  <div className="absolute top-0 left-0 w-[55%] h-[60%] rounded-2xl overflow-hidden shadow-xl border-4 border-white rotate-[-3deg] hover:rotate-0 hover:scale-105 transition-all duration-500 group cursor-zoom-in" onClick={() => setActiveLightboxIdx(0)}>
                    <Image
                      src="/assets/ram_janmabhoomi.png"
                      alt="Ayodhya Ram Mandir"
                      fill
                      sizes="300px"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-slate-950/60 backdrop-blur-md text-[8px] font-bold text-white uppercase tracking-wider">Ayodhya</div>
                  </div>

                  {/* Collage Image 2: Kashi */}
                  <div className="absolute top-[8%] right-2 w-[48%] h-[48%] rounded-2xl overflow-hidden shadow-xl border-4 border-white rotate-[4deg] hover:rotate-0 hover:scale-105 transition-all duration-500 group cursor-zoom-in" onClick={() => setActiveLightboxIdx(1)}>
                    <Image
                      src="/assets/hero_kashi.png"
                      alt="Kashi Vishwanath Temple"
                      fill
                      sizes="300px"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-slate-950/60 backdrop-blur-md text-[8px] font-bold text-white uppercase tracking-wider">Banaras</div>
                  </div>

                  {/* Collage Image 3: Prayagraj Sangam */}
                  <div className="absolute bottom-2 left-8 w-[45%] h-[42%] rounded-2xl overflow-hidden shadow-xl border-4 border-white rotate-[-2deg] hover:rotate-0 hover:scale-105 transition-all duration-500 group cursor-zoom-in" onClick={() => setActiveLightboxIdx(2)}>
                    <Image
                      src="/assets/hero_prayagraj.png"
                      alt="Triveni Sangam Prayagraj"
                      fill
                      sizes="300px"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-slate-950/60 backdrop-blur-md text-[8px] font-bold text-white uppercase tracking-wider">Prayagraj</div>
                  </div>

                  {/* Collage Image 4: Hanuman Garhi */}
                  <div className="absolute bottom-8 right-6 w-[42%] h-[38%] rounded-2xl overflow-hidden shadow-xl border-4 border-white rotate-[2deg] hover:rotate-0 hover:scale-105 transition-all duration-500 group cursor-zoom-in" onClick={() => setActiveLightboxIdx(3)}>
                    <Image
                      src="/assets/hanuman_garhi.png"
                      alt="Hanuman Garhi"
                      fill
                      sizes="300px"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-slate-950/60 backdrop-blur-md text-[8px] font-bold text-white uppercase tracking-wider">Ayodhya</div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 3. JOURNEY MOMENTS (CINEMATIC PHOTO MASONRY) */}
      <section className="py-24 relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <Reveal>
              <span className="text-orange-500 font-bold text-xs uppercase tracking-widest bg-orange-500/10 px-3.5 py-1.5 rounded-full">
                Capturing Devotion
              </span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight">
                Our Journey Moments
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="text-slate-655 text-sm sm:text-base leading-relaxed">
                Browse through real, unedited photographs shared by our travelers during their tour of Ayodhya. Click any image to view fullscreen details.
              </p>
            </Reveal>
          </div>

          {/* Masonry Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((image, idx) => (
              <Reveal key={idx} delay={idx * 75}>
                <div
                  onClick={() => setActiveLightboxIdx(idx)}
                  className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl border border-slate-200/50 cursor-pointer transition-all duration-500 hover:-translate-y-2 bg-slate-50 aspect-[4/3]"
                >
                  <Image
                    src={image.src}
                    alt={image.title || "Journey Moment"}
                    fill
                    sizes="(max-width: 768px) 100vw, 300px"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-slate-950/10 group-hover:bg-slate-950/30 transition-colors duration-300" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. EXPERIENCE THE JOURNEY (MUTED VIDEO REELS) */}
      <section className="py-24 relative overflow-hidden bg-slate-950 text-white">
        {/* Background glowing blob */}
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <Reveal>
              <span className="text-orange-400 font-bold text-xs uppercase tracking-widest bg-orange-500/10 px-3.5 py-1.5 rounded-full border border-orange-500/20">
                Cinematic Reels
              </span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
                Experience The Journey
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Watch dynamic highlights captured live on the tour. See the vibrant sites, hear the chants, and feel the sacred environments.
              </p>
            </Reveal>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Featured Video Player */}
            <div className="lg:col-span-8">
              <Reveal>
                <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900 group">
                  <video
                    controls
                    muted
                    src="https://assets.mixkit.co/videos/preview/mixkit-hiking-in-the-mountains-on-a-sunny-day-41687-large.mp4"
                    className="w-full h-full object-cover"
                  />
                  {/* Title overlay (fades out when playing) */}
                  <div className="absolute bottom-6 left-6 right-6 pointer-events-none group-focus-within:opacity-0 group-hover:opacity-0 transition-opacity duration-300">
                    <span className="text-[9px] font-bold uppercase tracking-wider text-orange-400 bg-orange-400/20 border border-orange-400/30 px-2.5 py-1 rounded-full">
                      FEATURED VLOG
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-white mt-2 drop-shadow">Aarambh Travel Pilgrimage Highlights</h3>
                    <p className="text-xs text-slate-300 font-medium mt-1">A cinematic overview of our sacred tour from Mumbai through Varanasi, Prayagraj, and Ayodhya.</p>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Vertical Video Reels */}
            <div className="lg:col-span-4 grid grid-cols-3 lg:grid-cols-1 gap-4">
              <Reveal delay={100}>
                <HoverPlayVideo
                  src="https://assets.mixkit.co/videos/preview/mixkit-waves-in-the-ocean-near-a-cliff-43026-large.mp4"
                  title="Holy Ganga Chants"
                  subtitle="Evening Aarti at Varanasi"
                />
              </Reveal>
              <Reveal delay={200}>
                <HoverPlayVideo
                  src="https://assets.mixkit.co/videos/preview/mixkit-travel-video-of-a-man-walking-in-a-canyon-41974-large.mp4"
                  title="Triveni Sangam dip"
                  subtitle="Prayagraj Holy Waters"
                />
              </Reveal>
              <Reveal delay={300}>
                <HoverPlayVideo
                  src="https://assets.mixkit.co/videos/preview/mixkit-mysterious-mountain-landscape-with-fog-28688-large.mp4"
                  title="Ram Mandir Darshan"
                  subtitle="Spiritual Peak in Ayodhya"
                />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TRAVELER MEMORIES (TESTIMONIAL CAROUSEL) */}
      <section className="py-24 relative overflow-hidden bg-slate-50 border-t border-b border-slate-200/50">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <Reveal>
              <span className="text-orange-500 font-bold text-xs uppercase tracking-widest bg-orange-500/10 px-3.5 py-1.5 rounded-full">
                Traveler Voices
              </span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight">
                Traveler Memories
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="text-slate-655 text-sm sm:text-base leading-relaxed">
                Read honest, heartwarming feedback from families who completed the pilgrimage with us.
              </p>
            </Reveal>
          </div>

          <Reveal delay={300}>
            <TestimonialCarousel />
          </Reveal>
        </div>
      </section>

      {/* 6. FINAL CTA SECTION */}
      <section className="relative py-28 w-full bg-primary overflow-hidden text-white text-center">
        {/* Background blobs */}
        <div className="absolute -top-12 -left-12 w-80 h-80 bg-accent/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-12 -right-12 w-80 h-80 bg-white/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-3xl mx-auto px-6 relative z-10 space-y-6">
          <Reveal>
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-orange-400 font-extrabold text-xs uppercase tracking-widest border border-white/10">
              Start Your Journey
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              Your Journey Could Be Next.
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-slate-200 text-base sm:text-lg max-w-xl mx-auto leading-relaxed font-medium">
              “Ready to create your own unforgettable memories with Aarambh Travel?”
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/#pricing"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-extrabold text-xs tracking-wider uppercase transition-all shadow-md shadow-orange-500/20 active:scale-95 cursor-pointer text-center"
              >
                Explore Tours
              </a>
              <a
                href="https://wa.me/918369927351"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-extrabold text-xs tracking-wider uppercase transition-all active:scale-95 cursor-pointer text-center"
              >
                Inquire on WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Fullscreen Lightbox Modal */}
      {activeLightboxIdx !== null && (
        <Lightbox
          images={galleryImages}
          activeIndex={activeLightboxIdx}
          onClose={() => setActiveLightboxIdx(null)}
          onPrev={handlePrevLightbox}
          onNext={handleNextLightbox}
        />
      )}
    </div>
  );
}
