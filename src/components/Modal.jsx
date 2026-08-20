import React from "react";

export default function Modal({ isOpen, onClose, children, className = "liquid-glass-panel" }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-slate-900/60 backdrop-blur-sm">
      {/* Backdrop click closer */}
      <div className="absolute inset-0" onClick={onClose} />
      
      <div className={`relative w-full max-w-lg ${className} rounded-3xl overflow-hidden shadow-2xl flex flex-col z-10 animate-in fade-in zoom-in-95 duration-200`}>
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/80 backdrop-blur-md text-slate-700 flex items-center justify-center hover:bg-white shadow-md border border-white/60 font-bold transition-all cursor-pointer"
          aria-label="Close modal"
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
}
