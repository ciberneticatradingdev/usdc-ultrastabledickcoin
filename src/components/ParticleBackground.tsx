"use client";

import { useEffect, useRef } from "react";

export default function ParticleBackground() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ps: HTMLDivElement[] = [];

    for (let i = 0; i < 15; i++) {
      const p = document.createElement("div");
      const size = Math.random() * 2.5 + 1;
      p.className = "particle";
      Object.assign(p.style, {
        width: `${size}px`,
        height: `${size}px`,
        left: `${Math.random() * 100}%`,
        background: `rgba(39,117,202,${Math.random() * 0.2 + 0.08})`,
        boxShadow: `0 0 ${size * 3}px rgba(39,117,202,0.2)`,
        animationDuration: `${Math.random() * 20 + 14}s`,
        animationDelay: `${Math.random() * 10}s`,
      });
      el.appendChild(p);
      ps.push(p);
    }
    return () => ps.forEach((p) => p.remove());
  }, []);

  return (
    <>
      {/* Ambient glow */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[15%] w-[700px] h-[700px] rounded-full bg-[#2775CA]/[0.02] blur-[160px]" />
        <div className="absolute bottom-[-15%] right-[5%] w-[600px] h-[600px] rounded-full bg-[#2775CA]/[0.015] blur-[140px]" />
      </div>
      <div ref={ref} className="fixed inset-0 pointer-events-none z-0" />
    </>
  );
}
