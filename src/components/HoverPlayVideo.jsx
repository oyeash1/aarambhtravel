"use client";

import { useState, useRef } from "react";

export default function HoverPlayVideo({ src, title, subtitle }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.log("Play interrupted: ", err));
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play()
          .then(() => setIsPlaying(true))
          .catch((err) => console.log("Play interrupted: ", err));
      }
    }
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={togglePlay}
      className="relative aspect-[9/16] rounded-2xl overflow-hidden group cursor-pointer shadow-lg border border-slate-200/50 bg-slate-950"
    >
      <video
        ref={videoRef}
        src={src}
        loop
        muted
        playsInline
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      {/* Dark Vignette Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40 opacity-70 group-hover:opacity-60 transition-opacity duration-300" />

      {/* Floating play state icon */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className={`w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center transition-all duration-300 ${isPlaying ? "opacity-0 scale-75" : "opacity-100 scale-100"}`}>
          <svg className="w-5 h-5 text-white fill-current ml-0.5" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>

      {/* Text Info */}
      <div className="absolute bottom-4 left-4 right-4 z-10 text-white pointer-events-none">
        <span className="text-[9px] font-bold uppercase tracking-wider text-orange-400 bg-orange-400/10 px-2 py-0.5 rounded-full">
          Reel Moment
        </span>
        <h4 className="text-sm font-extrabold mt-1 text-white leading-tight drop-shadow-sm">{title}</h4>
        <p className="text-[10px] text-slate-300 font-medium mt-0.5 leading-none">{subtitle}</p>
      </div>

      {/* Top Floating Badge */}
      <div className="absolute top-4 left-4 z-10 pointer-events-none flex items-center gap-1.5">
        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse" />
        <span className="text-[8px] font-bold text-white tracking-widest uppercase">HOVER TO PLAY</span>
      </div>
    </div>
  );
}
