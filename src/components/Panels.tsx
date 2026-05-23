"use client";
import { useState, useEffect } from "react";

/* ── Helpers ── */
const trunc = (a: string) => `${a.slice(0, 4)}...${a.slice(-4)}`;
const ago = (ts: number) => {
  const d = Math.floor((Date.now() - ts) / 1000);
  if (d < 60) return `${d}s ago`;
  if (d < 3600) return `${Math.floor(d / 60)}m ago`;
  return `${Math.floor(d / 3600)}h ago`;
};

/* ── Mock data ── */
const FEED = [
  { w: "7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU", a: "2.45", t: Date.now() - 5e3 },
  { w: "Gh7Kp3mXvNqR8sYw2LjA4fDe6TcBn9ZxUoHi5WgMt1Sv", a: "8.12", t: Date.now() - 12e3 },
  { w: "3FZbgi29cpjq2GjdwV8eyHuJJnkLtktZc5Bm2Rf3vfRt", a: "0.67", t: Date.now() - 25e3 },
  { w: "9pR2sVxYq8WnA4dG7hKjM5tLcBf3eZuNiOmXwT6yDrHv", a: "15.30", t: Date.now() - 40e3 },
  { w: "HN7cABqLxXoTbnFk4Gwi3DQ9JerRPsmd8Wpy5S1Yvtzl", a: "1.89", t: Date.now() - 55e3 },
  { w: "5TnMk9dYvXpGhWs2AeL8rJqBf4cZuNi7xKoR3tDmHwEy", a: "4.56", t: Date.now() - 95e3 },
  { w: "CvB8nXq4wT6yDrHv9pR2sVxYqWnA4dG7hKjM5tLcBf3e", a: "11.23", t: Date.now() - 120e3 },
  { w: "Ek4JhWs2AeL8rJqBf4cZuNi7xKoR3tDm5TnMk9dYvXpG", a: "0.34", t: Date.now() - 180e3 },
];

const HOLDERS = [
  { w: "7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU", p: "12.4%", e: "$597" },
  { w: "Gh7Kp3mXvNqR8sYw2LjA4fDe6TcBn9ZxUoHi5WgMt1Sv", p: "9.0%", e: "$434" },
  { w: "3FZbgi29cpjq2GjdwV8eyHuJJnkLtktZc5Bm2Rf3vfRt", p: "6.1%", e: "$294" },
  { w: "9pR2sVxYq8WnA4dG7hKjM5tLcBf3eZuNiOmXwT6yDrHv", p: "4.5%", e: "$217" },
  { w: "HN7cABqLxXoTbnFk4Gwi3DQ9JerRPsmd8Wpy5S1Yvtzl", p: "3.7%", e: "$178" },
  { w: "5TnMk9dYvXpGhWs2AeL8rJqBf4cZuNi7xKoR3tDmHwEy", p: "2.9%", e: "$140" },
  { w: "CvB8nXq4wT6yDrHv9pR2sVxYqWnA4dG7hKjM5tLcBf3e", p: "2.3%", e: "$111" },
  { w: "Ek4JhWs2AeL8rJqBf4cZuNi7xKoR3tDm5TnMk9dYvXpG", p: "1.7%", e: "$82" },
  { w: "Bk2Rf3vfRt3FZbgi29cpjq2GjdwV8eyHuJJnkLtktZc5", p: "1.3%", e: "$63" },
  { w: "Xw2mNpQrStUvWxYzaBcDeFgHiJkLmNoPq1234567890a", p: "1.0%", e: "$48" },
];

/* ── Feed panel ── */
function LiveFeed() {
  const [, tick] = useState(0);
  useEffect(() => { const i = setInterval(() => tick((t) => t + 1), 5000); return () => clearInterval(i); }, []);

  return (
    <div className="card p-5 h-full flex flex-col">
      <div className="flex items-center justify-between mb-4 shrink-0">
        <h2 className="text-xs font-bold uppercase tracking-[0.12em] text-white">ATM Live Feed</h2>
        <div className="flex items-center gap-1.5">
          <span className="relative flex h-2 w-2">
            <span className="absolute inset-0 rounded-full bg-[#2775CA] animate-ping opacity-75" />
            <span className="relative block h-2 w-2 rounded-full bg-[#2775CA]" />
          </span>
          <span className="text-[9px] text-[#2775CA] font-bold uppercase tracking-wider">Live</span>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto min-h-0 -mr-1 pr-1">
        {FEED.map((e, i) => (
          <div
            key={i}
            className="flex items-center justify-between py-3 border-b border-white/[0.04] last:border-0 anim-slide-in"
            style={{ animationDelay: `${i * 40}ms` }}
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold text-[#2775CA]"
                   style={{ background: "rgba(39,117,202,0.08)", border: "1px solid rgba(39,117,202,0.15)" }}>$</div>
              <div className="min-w-0">
                <p className="font-mono text-xs text-gray-400 truncate">{trunc(e.w)}</p>
                <p className="text-[10px] text-gray-600">{ago(e.t)}</p>
              </div>
            </div>
            <span className="font-mono text-sm font-semibold text-[#2775CA] shrink-0 ml-2">+${e.a}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Top holders panel ── */
function TopHolders() {
  return (
    <div className="card p-5 h-full flex flex-col">
      <h2 className="text-xs font-bold uppercase tracking-[0.12em] text-white mb-4 shrink-0">Top Earners</h2>
      <div className="flex-1 overflow-y-auto min-h-0 -mr-1 pr-1">
        {HOLDERS.map((h, i) => (
          <div
            key={i}
            className="flex items-center justify-between py-2.5 border-b border-white/[0.04] last:border-0 anim-slide-in"
            style={{ animationDelay: `${i * 35}ms` }}
          >
            <div className="flex items-center gap-2.5">
              <span className="text-[10px] font-bold text-gray-600 w-5 text-right tabular-nums">{String(i + 1).padStart(2, '0')}</span>
              <span className="font-mono text-xs text-gray-400">{trunc(h.w)}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[10px] text-gray-600 tabular-nums">{h.p}</span>
              <span className="font-mono text-xs font-semibold text-[#2775CA] tabular-nums w-12 text-right">{h.e}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Combined ── */
export default function Panels() {
  return (
    <section className="mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4" style={{ minHeight: "400px" }}>
        <div className="lg:col-span-3 min-h-[350px] lg:min-h-0"><LiveFeed /></div>
        <div className="lg:col-span-2 min-h-[350px] lg:min-h-0"><TopHolders /></div>
      </div>
    </section>
  );
}
