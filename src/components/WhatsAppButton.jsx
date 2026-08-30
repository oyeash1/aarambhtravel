"use client";

import React from "react";

export default function WhatsAppButton() {
  const phoneNumber = "918369927351";
  const whatsAppLink = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={whatsAppLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-[0_4px_14px_rgba(16,185,129,0.4)] hover:shadow-[0_6px_20px_rgba(16,185,129,0.6)] transition-all duration-300 hover:scale-110 active:scale-95 group cursor-pointer"
      aria-label="Chat on WhatsApp"
    >
      {/* Outer pulsing ring for premium look */}
      <span className="absolute inset-0 rounded-full bg-emerald-500 opacity-40 animate-ping group-hover:animate-none pointer-events-none" />
      
      {/* WhatsApp SVG Icon */}
      <svg
        className="w-8 h-8 fill-current relative z-10"
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.008-3.49c0-3.64 2.959-6.6 6.59-6.6a6.6 6.6 0 0 1 6.6 6.59c-.004 3.64-2.96 6.6-6.6 6.6zm3.593-4.808c-.197-.099-1.17-.577-1.352-.643-.182-.066-.314-.099-.446.1-.132.198-.512.643-.627.775-.114.133-.232.148-.431.05a5.4 5.4 0 0 1-1.611-.998 5.9 5.9 0 0 1-1.118-1.37c-.114-.199-.011-.307.087-.406.09-.09.198-.235.297-.353.1-.117.133-.199.199-.332.066-.134.033-.248-.017-.35-.05-.102-.446-1.075-.612-1.47-.161-.383-.323-.332-.446-.332-.115-.001-.247-.001-.379-.001s-.347.05-.529.248c-.182.198-.694.678-.694 1.654 0 .976.711 1.918.81 2.051.099.133 1.399 2.137 3.388 2.998.472.203.841.325 1.13.417.475.151.907.129 1.248.078.381-.057 1.17-.478 1.335-.939.165-.461.165-.857.115-.939-.05-.082-.182-.133-.379-.232z"/>
      </svg>
    </a>
  );
}
