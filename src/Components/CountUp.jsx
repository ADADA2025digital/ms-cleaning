import React, { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";

function CountUp({ end, duration = 1200, suffix = "", formatK = false }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const startTime = performance.now();
    let last = 0;
    const animate = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const next = Math.floor(progress * end);
      if (next !== last) {
        last = next;
        setValue(next);
      }
      if (progress < 1) requestAnimationFrame(animate);
    };
    const id = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(id);
  }, [isInView, end, duration]);

  const display = formatK && end >= 1000 ? `${Math.floor(value / 1000)}K` : value;
  return (
    <span ref={ref}>{display}{suffix}</span>
  );
}

export default CountUp;
