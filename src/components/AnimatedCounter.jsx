"use client";

import { useState, useEffect, useRef } from "react";

export default function AnimatedCounter({ target, duration = 1500, prefix = "", suffix = "", isPrice = false, isPhone = false }) {
  const [count, setCount] = useState(target);
  const [started, setStarted] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Initialize count to the random start value when it becomes visible
          const startVal = (() => {
            if (isPhone) return Math.floor(target - 1500);
            if (target <= 10) return Math.floor(Math.random() * 3) + 1;
            const minStart = Math.floor(target * 0.4);
            const maxStart = Math.floor(target * 0.75);
            return Math.floor(Math.random() * (maxStart - minStart)) + minStart;
          })();

          setCount(startVal);
          setStarted(startVal); // Store the calculated start value to use in the animation hook
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [target, isPhone]);

  useEffect(() => {
    if (started === false) return;

    let startTimestamp = null;
    const startValue = started;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);

      // Easing function: easeOutQuad
      const easeProgress = progress * (2 - progress);
      const currentCount = Math.floor(easeProgress * (target - startValue) + startValue);

      setCount(currentCount);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [started, target, duration]);

  const formatNumber = (val) => {
    if (isPrice) {
      return new Intl.NumberFormat("en-IN").format(val);
    }
    return val.toString();
  };

  return (
    <span ref={elementRef}>
      {prefix}
      {formatNumber(count)}
      {suffix}
    </span>
  );
}
