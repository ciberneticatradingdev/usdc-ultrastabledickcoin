"use client";
import { useState, useEffect } from "react";

function Countdown() {
  const [s, setS] = useState(90);
  const [dispensing, setDispensing] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setS((p) => {
        if (p <= 1) {
          setDispensing(true);
          setTimeout(() => { setDispensing(false); setS(90); }, 3000);
          return 0;
        }
        return p - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, []);

  if (dispensing) return <span className="text-lg font-bold text-[#2775CA] animate-pulse">DISPENSING...</span>;

  return (
    <span className={`text-2xl font-bold tabular-nums tracking-wide ${s <= 15 ? "text-[#2775CA] animate-pulse" : "text-white"}`}>
      {String(Math.floor(s / 60)).padStart(2, "0")}:{String(s % 60).padStart(2, "0")}
    </span>
  );
}

function Card({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="card px-5 py-4">
      <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-gray-500 mb-1.5">{label}</p>
      {children}
    </div>
  );
}

export default function Stats() {
  return (
    <section className="mb-6">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        <Card label="Total Distributed">
          <span className="text-2xl font-bold text-white">$4,821</span>
          <span className="ml-1.5 text-xs text-[#2775CA] font-medium">USDC</span>
        </Card>
        <Card label="$ATM Holders">
          <span className="text-2xl font-bold text-white">1,247</span>
        </Card>
        <Card label="Total Rounds">
          <span className="text-2xl font-bold text-white">3,892</span>
        </Card>
        <Card label="Next Dispense">
          <Countdown />
        </Card>
      </div>
    </section>
  );
}
