import React from "react";

export default function GlassPanel({
  children,
  className = "",
  dark = false,
  animated = false,
  ...props
}) {
  const baseStyle = dark ? "liquid-glass-panel-dark" : "liquid-glass-panel";
  const animateStyle = animated ? "animate-float" : "";

  return (
    <div
      className={`rounded-3xl p-6 ${baseStyle} ${animateStyle} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
