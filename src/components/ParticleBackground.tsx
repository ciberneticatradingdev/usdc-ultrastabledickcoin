"use client";

import { useEffect, useRef } from "react";

export default function ParticleBackground() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const particles: HTMLDivElement[] = [];

    for (let i = 0; i < 20; i++) {
      const p = document.createElement("div");
      const size = Math.random() * 3 + 1.5;
      p.className = "particle";
      p.style.width = `${size}px`;
      p.style.height = `${size}px`;
      p.style.left = `${Math.random() * 100}%`;
      p.style.background = `rgba(39, 117, 202, ${Math.random() * 0.25 + 0.1})`;
      p.style.boxShadow = `0 0 ${size * 3}px rgba(39, 117, 202, 0.25)`;
      p.style.animationDuration = `${Math.random() * 18 + 12}s`;
      p.style.animationDelay = `${Math.random() * 8}s`;
      el.appendChild(p);
      particles.push(p);
    }

    return () => particles.forEach((p) => p.remove());
  }, []);

  return (
    <>
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-15%] left-[20%] w-[700px] h-[700px] rounded-full bg-[#2775CA]/[0.025] blur-[140px]" />
        <div className="absolute bottom-[-10%] right-[10%] w-[500px] h-[500px] rounded-full bg-[#2775CA]/[0.02] blur-[120px]" />
      </div>
      <div ref={ref} className="fixed inset-0 pointer-events-none z-0" />
    </>
  );
}
