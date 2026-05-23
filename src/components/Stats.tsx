"use client";
import { useState, useEffect } from "react";

function Countdown() {
  const [seconds, setSeconds] = useState(90);
  const [dispensing, setDispensing] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 1) {
          setDispensing(true);
          setTimeout(() => {
            setDispensing(false);
            setSeconds(90);
          }, 3000);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  if (dispensing) {
    return (
      <span className="text-2xl font-bold text-[#2775CA] animate-pulse">
        DISPENSING...
      </span>
    );
  }

  return (
    <span className={`text-4xl font-bold tabular-nums ${seconds <= 15 ? "text-[#2775CA] animate-pulse" : "text-white"}`}>
      {String(Math.floor(seconds / 60)).padStart(2, "0")}:{String(seconds % 60).padStart(2, "0")}
    </span>
  );
}

const STATS = [
  { label: "Total Distributed", value: "$4,821", suffix: "USDC" },
  { label: "$ATM Holders", value: "1,247", suffix: "" },
  { label: "Total Rounds", value: "3,892", suffix: "" },
];

export default function Stats() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {STATS.map((stat, i) => (
            <div key={i} className="bg-[#0a1020] border border-[#2775CA]/15 rounded-2xl p-6">
              <p className="text-xs font-medium uppercase tracking-wider text-gray-500 mb-2">
                {stat.label}
              </p>
              <p className="text-3xl font-bold text-white">
                {stat.value}
                {stat.suffix && <span className="text-sm text-[#2775CA] ml-1">{stat.suffix}</span>}
              </p>
            </div>
          ))}
          <div className="bg-[#0a1020] border border-[#2775CA]/15 rounded-2xl p-6">
            <p className="text-xs font-medium uppercase tracking-wider text-gray-500 mb-2">
              Next Dispense
            </p>
            <Countdown />
          </div>
        </div>
      </div>
    </section>
  );
}
