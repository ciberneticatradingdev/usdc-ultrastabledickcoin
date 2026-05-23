"use client";

import { useState, useEffect } from "react";

interface DistEntry {
  id: string;
  wallet: string;
  amount: string;
  timestamp: number;
}

const MOCK_FEED: DistEntry[] = [
  { id: "1", wallet: "7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU", amount: "2.45", timestamp: Date.now() - 5000 },
  { id: "2", wallet: "Gh7Kp3mXvNqR8sYw2LjA4fDe6TcBn9ZxUoHi5WgMt1Sv", amount: "8.12", timestamp: Date.now() - 12000 },
  { id: "3", wallet: "3FZbgi29cpjq2GjdwV8eyHuJJnkLtktZc5Bm2Rf3vfRt", amount: "0.67", timestamp: Date.now() - 25000 },
  { id: "4", wallet: "9pR2sVxYq8WnA4dG7hKjM5tLcBf3eZuNiOmXwT6yDrHv", amount: "15.30", timestamp: Date.now() - 40000 },
  { id: "5", wallet: "HN7cABqLxXoTbnFk4Gwi3DQ9JerRPsmd8Wpy5S1Yvtzl", amount: "1.89", timestamp: Date.now() - 55000 },
  { id: "6", wallet: "5TnMk9dYvXpGhWs2AeL8rJqBf4cZuNi7xKoR3tDmHwEy", amount: "4.56", timestamp: Date.now() - 95000 },
  { id: "7", wallet: "CvB8nXq4wT6yDrHv9pR2sVxYqWnA4dG7hKjM5tLcBf3e", amount: "11.23", timestamp: Date.now() - 120000 },
  { id: "8", wallet: "Ek4JhWs2AeL8rJqBf4cZuNi7xKoR3tDm5TnMk9dYvXpG", amount: "0.34", timestamp: Date.now() - 180000 },
  { id: "9", wallet: "Bk2Rf3vfRt3FZbgi29cpjq2GjdwV8eyHuJJnkLtktZc5", amount: "6.78", timestamp: Date.now() - 200000 },
  { id: "10", wallet: "Xw2mNpQrStUvWxYzaBcDeFgHiJkLmNoPq1234567890a", amount: "3.21", timestamp: Date.now() - 250000 },
];

function truncAddr(a: string) { return `${a.slice(0, 4)}...${a.slice(-4)}`; }

function timeAgo(ts: number) {
  const d = Math.floor((Date.now() - ts) / 1000);
  if (d < 60) return `${d}s ago`;
  if (d < 3600) return `${Math.floor(d / 60)}m ago`;
  return `${Math.floor(d / 3600)}h ago`;
}

export default function ATMFeed() {
  const [, setTick] = useState(0);
  useEffect(() => {
    const i = setInterval(() => setTick((t) => t + 1), 5000);
    return () => clearInterval(i);
  }, []);

  return (
    <div className="panel p-5 h-full animate-glow-pulse">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm font-bold uppercase tracking-[0.15em] text-white">
          🏧 ATM Live Feed
        </h2>
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#2775CA] opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#2775CA]" />
          </span>
          <span className="text-[10px] text-[#2775CA] uppercase tracking-wider font-semibold">Live</span>
        </div>
      </div>

      <div className="space-y-0 overflow-y-auto max-h-[420px] pr-1">
        {MOCK_FEED.map((entry, i) => (
          <div
            key={entry.id}
            className="flex items-center justify-between py-3 border-b border-white/5 last:border-0 animate-slide-in"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-full bg-[#2775CA]/10 border border-[#2775CA]/20 flex items-center justify-center text-[10px] text-[#2775CA] font-bold">
                $
              </div>
              <div>
                <span className="font-mono text-xs text-gray-300 block">{truncAddr(entry.wallet)}</span>
                <span className="text-[10px] text-gray-600">{timeAgo(entry.timestamp)}</span>
              </div>
            </div>
            <span className="font-mono text-sm font-semibold text-[#2775CA]">
              +${entry.amount}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
