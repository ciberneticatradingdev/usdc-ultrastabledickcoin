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
          setTimeout(() => {
            setDispensing(false);
            setS(90);
          }, 3000);
          return 0;
        }
        return p - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, []);

  if (dispensing) {
    return (
      <span className="text-xl font-bold text-[#2775CA] animate-pulse">
        DISPENSING...
      </span>
    );
  }

  return (
    <span
      className={`text-3xl font-bold tabular-nums tracking-wide ${
        s <= 15 ? "text-[#2775CA] animate-pulse" : "text-white"
      }`}
    >
      {String(Math.floor(s / 60)).padStart(2, "0")}:
      {String(s % 60).padStart(2, "0")}
    </span>
  );
}

const STATS = [
  { label: "Total Distributed", value: "$4,821", suffix: "USDC" },
  { label: "$ATM Holders", value: "1,247", suffix: null },
  { label: "Total Rounds", value: "3,892", suffix: null },
];

export default function Stats() {
  return (
    <section className="py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {STATS.map((stat, i) => (
            <div
              key={i}
              className="bg-[rgba(10,16,32,0.9)] border border-[rgba(39,117,202,0.15)] rounded-xl p-6 text-center"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-gray-500 mb-3">
                {stat.label}
              </p>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-3xl font-bold text-white">{stat.value}</span>
                {stat.suffix && (
                  <span className="text-sm text-[#2775CA] font-medium">
                    {stat.suffix}
                  </span>
                )}
              </div>
            </div>
          ))}
          <div className="bg-[rgba(10,16,32,0.9)] border border-[rgba(39,117,202,0.15)] rounded-xl p-6 text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-gray-500 mb-3">
              Next Dispense
            </p>
            <Countdown />
          </div>
        </div>
      </div>
    </section>
  );
}
