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
  "BREAKING: banks fear what they can't understand. always have.",
  "the future of finance is a memecoin with an ATM",
  "touch grass between distributions. you have 90 seconds.",
  "JUST IN: local degen won't shut up about his $ATM bag",
  "DYOR. we did ours. it dispenses.",
];

export default function Ticker() {
  const doubled = [...LINES, ...LINES];
  return (
    <div className="w-full overflow-hidden border-b border-[#2775CA]/10 bg-[#2775CA]/[0.03] py-2.5">
      <div className="ticker-track">
        {doubled.map((msg, i) => (
          <span key={i} className="shrink-0 px-8 text-[13px] text-[#4A9AE8]/70 whitespace-nowrap">
            {msg}
            <span className="ml-8 text-[#2775CA]/20">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
