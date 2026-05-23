"use client";

const DATA = [
  { wallet: "7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU", pct: "12.4%", earned: "$597" },
  { wallet: "Gh7Kp3mXvNqR8sYw2LjA4fDe6TcBn9ZxUoHi5WgMt1Sv", pct: "9.0%", earned: "$434" },
  { wallet: "3FZbgi29cpjq2GjdwV8eyHuJJnkLtktZc5Bm2Rf3vfRt", pct: "6.1%", earned: "$294" },
  { wallet: "9pR2sVxYq8WnA4dG7hKjM5tLcBf3eZuNiOmXwT6yDrHv", pct: "4.5%", earned: "$217" },
  { wallet: "HN7cABqLxXoTbnFk4Gwi3DQ9JerRPsmd8Wpy5S1Yvtzl", pct: "3.7%", earned: "$178" },
  { wallet: "5TnMk9dYvXpGhWs2AeL8rJqBf4cZuNi7xKoR3tDmHwEy", pct: "2.9%", earned: "$140" },
  { wallet: "CvB8nXq4wT6yDrHv9pR2sVxYqWnA4dG7hKjM5tLcBf3e", pct: "2.3%", earned: "$111" },
  { wallet: "Ek4JhWs2AeL8rJqBf4cZuNi7xKoR3tDm5TnMk9dYvXpG", pct: "1.7%", earned: "$82" },
  { wallet: "Bk2Rf3vfRt3FZbgi29cpjq2GjdwV8eyHuJJnkLtktZc5", pct: "1.3%", earned: "$63" },
  { wallet: "Xw2mNpQrStUvWxYzaBcDeFgHiJkLmNoPq1234567890a", pct: "1.0%", earned: "$48" },
];

const trunc = (a: string) => `${a.slice(0, 4)}...${a.slice(-4)}`;

export default function TopHolders() {
  return (
    <div className="card p-5 h-full flex flex-col">
      <h2 className="text-xs font-bold uppercase tracking-[0.15em] text-white mb-4">
        🏆 Top Earners
      </h2>

      <div className="flex-1 overflow-y-auto pr-1 min-h-0">
        {DATA.map((h, i) => (
          <div
            key={h.wallet}
            className="flex items-center justify-between py-2.5 border-b border-white/[0.04] last:border-0 animate-slide-in"
            style={{ animationDelay: `${i * 40}ms` }}
          >
            <div className="flex items-center gap-2.5">
              <span className="text-[10px] font-bold text-gray-600 w-5 text-right tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-mono text-xs text-gray-400">{trunc(h.wallet)}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[10px] text-gray-600 tabular-nums">{h.pct}</span>
              <span className="font-mono text-xs font-semibold text-[#2775CA] tabular-nums w-12 text-right">
                {h.earned}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
