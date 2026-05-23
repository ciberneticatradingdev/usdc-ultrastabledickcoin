"use client";
import { useEffect, useRef } from "react";

export default function ParticleBackground() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ps: HTMLDivElement[] = [];
    for (let i = 0; i < 12; i++) {
      const p = document.createElement("div");
      const s = Math.random() * 2 + 1;
      p.className = "particle";
      Object.assign(p.style, {
        width: `${s}px`, height: `${s}px`,
        left: `${Math.random() * 100}%`,
        background: `rgba(39,117,202,${Math.random() * 0.15 + 0.06})`,
        boxShadow: `0 0 ${s * 3}px rgba(39,117,202,0.15)`,
        animationDuration: `${Math.random() * 22 + 16}s`,
        animationDelay: `${Math.random() * 12}s`,
      });
      el.appendChild(p);
      ps.push(p);
    }
    return () => ps.forEach((p) => p.remove());
  }, []);

  return (
    <>
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[20%] w-[600px] h-[600px] rounded-full blur-[160px]"
             style={{ background: "rgba(39,117,202,0.018)" }} />
        <div className="absolute bottom-[-15%] right-[10%] w-[500px] h-[500px] rounded-full blur-[140px]"
             style={{ background: "rgba(39,117,202,0.012)" }} />
      </div>
      <div ref={ref} className="fixed inset-0 pointer-events-none z-0" />
    </>
  );
}
