import React from "react";

export default function GlassButton({
  children,
  className = "",
  variant = "primary",
  as = "button",
  href,
  ...props
}) {
  const baseStyle =
    variant === "primary"
      ? "liquid-glass-button-primary"
      : "liquid-glass-button-secondary";

  const classes = `px-6 py-3 rounded-xl font-bold text-sm tracking-wide transition-all duration-300 text-center inline-block cursor-pointer ${baseStyle} ${className}`;

  if (as === "a" || href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
