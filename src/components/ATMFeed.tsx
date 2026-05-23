"use client";

import { useState, useEffect } from "react";

interface Entry { id: string; wallet: string; amount: string; ts: number; }

const MOCK: Entry[] = [
  { id: "1", wallet: "7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU", amount: "2.45", ts: Date.now() - 5_000 },
  { id: "2", wallet: "Gh7Kp3mXvNqR8sYw2LjA4fDe6TcBn9ZxUoHi5WgMt1Sv", amount: "8.12", ts: Date.now() - 12_000 },
  { id: "3", wallet: "3FZbgi29cpjq2GjdwV8eyHuJJnkLtktZc5Bm2Rf3vfRt", amount: "0.67", ts: Date.now() - 25_000 },
  { id: "4", wallet: "9pR2sVxYq8WnA4dG7hKjM5tLcBf3eZuNiOmXwT6yDrHv", amount: "15.30", ts: Date.now() - 40_000 },
  { id: "5", wallet: "HN7cABqLxXoTbnFk4Gwi3DQ9JerRPsmd8Wpy5S1Yvtzl", amount: "1.89", ts: Date.now() - 55_000 },
  { id: "6", wallet: "5TnMk9dYvXpGhWs2AeL8rJqBf4cZuNi7xKoR3tDmHwEy", amount: "4.56", ts: Date.now() - 95_000 },
  { id: "7", wallet: "CvB8nXq4wT6yDrHv9pR2sVxYqWnA4dG7hKjM5tLcBf3e", amount: "11.23", ts: Date.now() - 120_000 },
  { id: "8", wallet: "Ek4JhWs2AeL8rJqBf4cZuNi7xKoR3tDm5TnMk9dYvXpG", amount: "0.34", ts: Date.now() - 180_000 },
];

const trunc = (a: string) => `${a.slice(0, 4)}...${a.slice(-4)}`;
const ago = (ts: number) => {
  const d = Math.floor((Date.now() - ts) / 1000);
  if (d < 60) return `${d}s ago`;
  if (d < 3600) return `${Math.floor(d / 60)}m ago`;
  return `${Math.floor(d / 3600)}h ago`;
};

export default function ATMFeed() {
  const [, tick] = useState(0);
  useEffect(() => { const i = setInterval(() => tick((t) => t + 1), 5000); return () => clearInterval(i); }, []);

  return (
    <div className="card p-5 h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xs font-bold uppercase tracking-[0.15em] text-white flex items-center gap-2">
          <span>🏧</span> ATM Live Feed
        </h2>
        <div className="flex items-center gap-1.5">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#2775CA] opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#2775CA]" />
          </span>
          <span className="text-[9px] text-[#2775CA] uppercase tracking-wider font-bold">Live</span>
        </div>
      </div>

      {/* Feed */}
      <div className="flex-1 overflow-y-auto space-y-0 pr-1 min-h-0">
        {MOCK.map((e, i) => (
          <div
            key={e.id}
            className="flex items-center justify-between py-3 border-b border-white/[0.04] last:border-0 animate-slide-in"
            style={{ animationDelay: `${i * 50}ms` }}
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="shrink-0 w-8 h-8 rounded-lg bg-[#2775CA]/8 border border-[#2775CA]/12 flex items-center justify-center">
                <span className="text-[11px] text-[#2775CA] font-bold">$</span>
              </div>
              <div className="min-w-0">
                <p className="font-mono text-xs text-gray-300 truncate">{trunc(e.wallet)}</p>
                <p className="text-[10px] text-gray-600">{ago(e.ts)}</p>
              </div>
            </div>
            <span className="font-mono text-sm font-semibold text-[#2775CA] shrink-0 ml-3">
              +${e.amount}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
