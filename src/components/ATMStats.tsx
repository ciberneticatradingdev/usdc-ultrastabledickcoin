"use client";

import { useState, useEffect } from "react";

/* ── Countdown 90s ── */
function Countdown() {
  const [sec, setSec] = useState(90);
  const [dispensing, setDispensing] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setSec((p) => {
        if (p <= 1) {
          setDispensing(true);
          setTimeout(() => { setDispensing(false); setSec(90); }, 3000);
          return 0;
        }
        return p - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, []);

  if (dispensing)
    return <span className="text-lg font-bold text-[#2775CA] animate-pulse">DISPENSING... 🏧</span>;

  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return (
    <span className={`text-2xl font-bold tabular-nums tracking-wider ${sec <= 15 ? "text-[#2775CA] animate-pulse" : "text-white"}`}>
      {String(m).padStart(2, "0")}:{String(s).padStart(2, "0")}
    </span>
  );
}

/* ── Single stat ── */
function Stat({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="stat-card">
      <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-gray-500 mb-1.5">{label}</p>
      {children}
    </div>
  );
}

export default function ATMStats() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 max-w-[1100px] mx-auto mb-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        <Stat label="Total Distributed">
          <div className="flex items-baseline gap-1.5">
            <span className="text-2xl font-bold text-white">$4,821</span>
            <span className="text-[10px] font-medium text-[#2775CA]">USDC</span>
          </div>
        </Stat>
        <Stat label="$ATM Holders">
          <span className="text-2xl font-bold text-white">1,247</span>
        </Stat>
        <Stat label="Total Rounds">
          <span className="text-2xl font-bold text-white">3,892</span>
        </Stat>
        <Stat label="Next Dispense">
          <Countdown />
        </Stat>
      </div>
    </section>
  );
}
