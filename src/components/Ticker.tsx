"use client";

const LINES = [
  "what is a bank without an ATM? exactly.",
  "ATM goes brrr every 90 seconds 🏧",
  "creator rewards → USDC → your wallet. automatically.",
  "BREAKING: passive income discovered. wives still unimpressed.",
  "hold $ATM. get USDC. it's not complicated.",
  "your bank closes on weekends. ATM doesn't.",
  "JUST IN: SEC unsure how to classify this one",
  "not your keys, not your USDC distributions",
  "imagine explaining this to your accountant",
  "ATM holders getting paid while they sleep",
  "probably nothing. definitely something.",
  "BREAKING: man buys memecoin, accidentally gets yield",
  "pump.fun creator rewards → straight to holders",
  "every 90 seconds. like clockwork. but on-chain.",
  "ser, this is an ATM. act accordingly.",
  "no staking. no locking. just hold and earn.",
  "BREAKING: banks fear what they can't understand.",
  "touch grass between distributions. you have 90 seconds.",
  "DYOR. we did ours. it dispenses.",
];

export default function Ticker() {
  const items = [...LINES, ...LINES];
  return (
    <div className="ticker-wrap border-b border-white/[0.04] bg-white/[0.01] py-2">
      <div className="ticker-inner">
        {items.map((t, i) => (
          <span key={i} className="shrink-0 px-6 text-[12px] text-[#4A9AE8]/50 whitespace-nowrap select-none">
            {t}
            <span className="ml-6 text-[#2775CA]/15">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
