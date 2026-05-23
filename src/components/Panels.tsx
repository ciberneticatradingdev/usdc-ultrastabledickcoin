"use client";
import { useState, useEffect } from "react";

const truncate = (addr: string) => `${addr.slice(0, 4)}...${addr.slice(-4)}`;

const timeAgo = (timestamp: number) => {
  const diff = Math.floor((Date.now() - timestamp) / 1000);
  if (diff < 60) return `${diff}s ago`;
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  return `${Math.floor(diff / 3600)}h ago`;
};

const FEED = [
  { wallet: "7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU", amount: "2.45", time: Date.now() - 5000 },
  { wallet: "Gh7Kp3mXvNqR8sYw2LjA4fDe6TcBn9ZxUoHi5WgMt1Sv", amount: "8.12", time: Date.now() - 12000 },
  { wallet: "3FZbgi29cpjq2GjdwV8eyHuJJnkLtktZc5Bm2Rf3vfRt", amount: "0.67", time: Date.now() - 25000 },
  { wallet: "9pR2sVxYq8WnA4dG7hKjM5tLcBf3eZuNiOmXwT6yDrHv", amount: "15.30", time: Date.now() - 40000 },
  { wallet: "HN7cABqLxXoTbnFk4Gwi3DQ9JerRPsmd8Wpy5S1Yvtzl", amount: "1.89", time: Date.now() - 55000 },
];

const HOLDERS = [
  { wallet: "7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU", percent: "12.4%", earned: "$597" },
  { wallet: "Gh7Kp3mXvNqR8sYw2LjA4fDe6TcBn9ZxUoHi5WgMt1Sv", percent: "9.0%", earned: "$434" },
  { wallet: "3FZbgi29cpjq2GjdwV8eyHuJJnkLtktZc5Bm2Rf3vfRt", percent: "6.1%", earned: "$294" },
  { wallet: "9pR2sVxYq8WnA4dG7hKjM5tLcBf3eZuNiOmXwT6yDrHv", percent: "4.5%", earned: "$217" },
  { wallet: "HN7cABqLxXoTbnFk4Gwi3DQ9JerRPsmd8Wpy5S1Yvtzl", percent: "3.7%", earned: "$178" },
];

function LiveFeed() {
  const [, tick] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => tick((t) => t + 1), 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#0a1020] border border-[#2775CA]/15 rounded-2xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-sm font-bold uppercase tracking-wider text-white">
          ATM Live Feed
        </h3>
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inset-0 rounded-full bg-[#2775CA] animate-ping opacity-75" />
            <span className="relative block h-2 w-2 rounded-full bg-[#2775CA]" />
          </span>
          <span className="text-xs text-[#2775CA] font-semibold uppercase">Live</span>
        </div>
      </div>
      <div className="space-y-2">
        {FEED.map((item, i) => (
          <div key={i} className="flex items-center justify-between py-3 px-4 rounded-xl bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#2775CA]/10 border border-[#2775CA]/20 flex items-center justify-center text-[#2775CA] font-bold text-sm">
                $
              </div>
              <div>
                <p className="font-mono text-sm text-gray-300">{truncate(item.wallet)}</p>
                <p className="text-xs text-gray-600">{timeAgo(item.time)}</p>
              </div>
            </div>
            <span className="font-mono text-base font-semibold text-[#2775CA]">+${item.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function TopHolders() {
  return (
    <div className="bg-[#0a1020] border border-[#2775CA]/15 rounded-2xl p-6">
      <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-6">
        Top Earners
      </h3>
      <div className="space-y-2">
        {HOLDERS.map((holder, i) => (
          <div key={i} className="flex items-center justify-between py-3 px-4 rounded-xl bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold text-gray-500 w-5">{String(i + 1).padStart(2, "0")}</span>
              <span className="font-mono text-sm text-gray-300">{truncate(holder.wallet)}</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-xs text-gray-500">{holder.percent}</span>
              <span className="font-mono text-base font-semibold text-[#2775CA] w-14 text-right">{holder.earned}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Panels() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
        <LiveFeed />
        <TopHolders />
      </div>
    </section>
  );
}
