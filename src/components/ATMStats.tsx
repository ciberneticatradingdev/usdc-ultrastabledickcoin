"use client";

import { useState, useEffect } from "react";

function CountdownTimer() {
  const [seconds, setSeconds] = useState(90);
  const [distributing, setDistributing] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 1) {
          setDistributing(true);
          setTimeout(() => {
            setDistributing(false);
            setSeconds(90);
          }, 3000);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  if (distributing) {
    return (
      <span className="text-lg font-bold text-[#2775CA] animate-pulse">
        DISPENSING... 🏧
      </span>
    );
  }

  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return (
    <span className={`text-2xl font-bold tabular-nums tracking-wider ${seconds <= 15 ? "text-[#2775CA] animate-pulse" : "text-white"}`}>
      {String(mins).padStart(2, "0")}:{String(secs).padStart(2, "0")}
    </span>
  );
}

interface StatProps {
  label: string;
  value?: string;
  unit?: string;
  children?: React.ReactNode;
}

function Stat({ label, value, unit, children }: StatProps) {
  return (
    <div className="stat-card animate-fade-in-up">
      <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-gray-500 mb-2">
        {label}
      </p>
      {children ?? (
        <div>
          <span className="text-2xl font-bold text-white">{value}</span>
          {unit && <span className="ml-2 text-xs font-medium text-gray-500 uppercase">{unit}</span>}
        </div>
      )}
    </div>
  );
}

export default function ATMStats() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto mb-10">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        <Stat label="Total Distributed" value="$4,821" unit="USDC" />
        <Stat label="ATM Holders" value="1,247" />
        <Stat label="Distributions" value="3,892" unit="rounds" />
        <Stat label="Next ATM Dispense">
          <CountdownTimer />
        </Stat>
      </div>
    </section>
  );
}
