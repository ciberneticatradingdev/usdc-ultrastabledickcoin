"use client";
import { useState, useEffect } from "react";

const trunc = (a: string) => `${a.slice(0, 4)}...${a.slice(-4)}`;
const ago = (ts: number) => {
  const d = Math.floor((Date.now() - ts) / 1000);
  if (d < 60) return `${d}s ago`;
  if (d < 3600) return `${Math.floor(d / 60)}m ago`;
  return `${Math.floor(d / 3600)}h ago`;
};

const FEED = [
  { w: "7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU", a: "2.45", t: Date.now() - 5e3 },
  { w: "Gh7Kp3mXvNqR8sYw2LjA4fDe6TcBn9ZxUoHi5WgMt1Sv", a: "8.12", t: Date.now() - 12e3 },
  { w: "3FZbgi29cpjq2GjdwV8eyHuJJnkLtktZc5Bm2Rf3vfRt", a: "0.67", t: Date.now() - 25e3 },
  { w: "9pR2sVxYq8WnA4dG7hKjM5tLcBf3eZuNiOmXwT6yDrHv", a: "15.30", t: Date.now() - 40e3 },
  { w: "HN7cABqLxXoTbnFk4Gwi3DQ9JerRPsmd8Wpy5S1Yvtzl", a: "1.89", t: Date.now() - 55e3 },
  { w: "5TnMk9dYvXpGhWs2AeL8rJqBf4cZuNi7xKoR3tDmHwEy", a: "4.56", t: Date.now() - 95e3 },
];

const HOLDERS = [
  { w: "7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU", p: "12.4%", e: "$597" },
  { w: "Gh7Kp3mXvNqR8sYw2LjA4fDe6TcBn9ZxUoHi5WgMt1Sv", p: "9.0%", e: "$434" },
  { w: "3FZbgi29cpjq2GjdwV8eyHuJJnkLtktZc5Bm2Rf3vfRt", p: "6.1%", e: "$294" },
  { w: "9pR2sVxYq8WnA4dG7hKjM5tLcBf3eZuNiOmXwT6yDrHv", p: "4.5%", e: "$217" },
  { w: "HN7cABqLxXoTbnFk4Gwi3DQ9JerRPsmd8Wpy5S1Yvtzl", p: "3.7%", e: "$178" },
  { w: "5TnMk9dYvXpGhWs2AeL8rJqBf4cZuNi7xKoR3tDmHwEy", p: "2.9%", e: "$140" },
];

function LiveFeed() {
  const [, tick] = useState(0);
  useEffect(() => {
    const i = setInterval(() => tick((t) => t + 1), 5000);
    return () => clearInterval(i);
  }, []);

  return (
    <div className="bg-[rgba(10,16,32,0.9)] border border-[rgba(39,117,202,0.15)] rounded-xl p-6 h-full flex flex-col">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-sm font-bold uppercase tracking-wider text-white">
          ATM Live Feed
        </h2>
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inset-0 rounded-full bg-[#2775CA] animate-ping opacity-75" />
            <span className="relative block h-2 w-2 rounded-full bg-[#2775CA]" />
          </span>
          <span className="text-[10px] text-[#2775CA] font-bold uppercase tracking-wider">
            Live
          </span>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto space-y-1">
        {FEED.map((e, i) => (
          <div
            key={i}
            className="flex items-center justify-between py-3 px-3 rounded-lg bg-[rgba(39,117,202,0.03)] hover:bg-[rgba(39,117,202,0.06)] transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center text-sm font-bold text-[#2775CA] bg-[rgba(39,117,202,0.1)] border border-[rgba(39,117,202,0.2)]">
                $
              </div>
              <div>
                <p className="font-mono text-sm text-gray-300">{trunc(e.w)}</p>
                <p className="text-[10px] text-gray-600">{ago(e.t)}</p>
              </div>
            </div>
            <span className="font-mono text-base font-semibold text-[#2775CA]">
              +${e.a}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function TopHolders() {
  return (
    <div className="bg-[rgba(10,16,32,0.9)] border border-[rgba(39,117,202,0.15)] rounded-xl p-6 h-full flex flex-col">
      <h2 className="text-sm font-bold uppercase tracking-wider text-white mb-5">
        Top Earners
      </h2>
      <div className="flex-1 overflow-y-auto space-y-1">
        {HOLDERS.map((h, i) => (
          <div
            key={i}
            className="flex items-center justify-between py-3 px-3 rounded-lg bg-[rgba(39,117,202,0.03)] hover:bg-[rgba(39,117,202,0.06)] transition-colors"
          >
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold text-gray-500 w-6 text-center tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-mono text-sm text-gray-300">{trunc(h.w)}</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-xs text-gray-500 tabular-nums">{h.p}</span>
              <span className="font-mono text-base font-semibold text-[#2775CA] tabular-nums w-14 text-right">
                {h.e}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Panels() {
  return (
    <section className="py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6" style={{ minHeight: "420px" }}>
          <LiveFeed />
          <TopHolders />
        </div>
      </div>
    </section>
  );
}
