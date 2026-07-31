import React, { useState } from "react";
import Image from "next/image";
import { PLACES } from "../constants/tourData";

export default function PlacesGrid({ onSelectPlace }) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPlaces = PLACES.filter(
    (place) =>
      place.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      place.desc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="destinations" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Colorful background blobs to enhance glass refraction */}
      <div className="absolute top-12 left-12 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-24 right-12 w-96 h-96 bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-orange-500 font-bold text-xs uppercase tracking-widest bg-orange-500/10 px-3 py-1 rounded-full">
            Divine Itinerary Locations
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight mt-4 mb-6">
            Places You Will Visit In Kashi • Prayagraj • Ayodhya
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Explore 15 legendary sacred destinations across Kashi, Prayagraj, and Ayodhya.
            Hover over each card to view details or use the search bar to locate specific points.
          </p>

          {/* Search input */}
          <div className="mt-8 max-w-md mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search locations (e.g. Ram Mandir, Ghats...)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-5 py-3.5 rounded-full liquid-glass-input-light text-sm pr-12"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </span>
            </div>
            {searchQuery && (
              <p className="text-xs text-slate-500 text-left mt-2 pl-4">
                Found {filteredPlaces.length} matching places
              </p>
            )}
          </div>
        </div>

        {/* Grid Layout of Featured Places */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPlaces.map((place) => {
            if (!place.featured) return null;
            return (
              <div
                key={place.id}
                onClick={() => onSelectPlace(place)}
                className="group relative h-96 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-primary/10 cursor-pointer transition-all duration-500 border border-white/40 hover:-translate-y-2"
              >
                {/* Photo content */}
                <Image
                  src={place.image}
                  alt={place.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Dark transparent gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />

                {/* Badge */}
                <span className="absolute top-4 left-4 z-10 bg-orange-500 text-white font-bold text-[10px] tracking-wider uppercase px-2.5 py-1 rounded-full shadow-sm">
                  Popular Site
                </span>

                {/* Floating Liquid Glass text panel on top of the image */}
                <div className="absolute bottom-4 left-4 right-4 p-5 rounded-2xl liquid-glass-panel text-white z-10">
                  <h3 className="text-lg font-bold tracking-tight text-slate-900 group-hover:text-primary transition-colors">
                    {place.name}
                  </h3>
                  <p className="text-xs text-slate-700 line-clamp-2 mt-1 font-medium">
                    {place.desc}
                  </p>
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-primary uppercase tracking-widest pt-2.5 group-hover:underline">
                    View details
                    <svg
                      className="w-2.5 h-2.5 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Remaining Places - Grid of Minimalist Interactive Cards */}
        <div className="mt-16 border-t border-slate-200 pt-16">
          <h3 className="text-lg font-bold text-primary mb-8 text-center md:text-left">
            Additional Sightseeing & Sacred Landmarks Included:
          </h3>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredPlaces.map((place) => {
              if (place.featured) return null;
              return (
                <div
                  key={place.id}
                  onClick={() => onSelectPlace(place)}
                  className="p-5 rounded-2xl liquid-glass-card cursor-pointer flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center gap-2.5 mb-2">
                      <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-[11px] font-bold group-hover:bg-primary group-hover:text-white transition-all">
                        {place.id}
                      </span>
                      <h4 className="font-bold text-slate-800 group-hover:text-primary transition-colors text-sm">
                        {place.name}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-600 line-clamp-2 font-medium">
                      {place.desc}
                    </p>
                  </div>
                  <span className="text-[10px] text-orange-500 font-bold tracking-wider uppercase inline-flex items-center gap-1 mt-4 group-hover:underline">
                    Learn More
                    <svg
                      className="w-2.5 h-2.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
