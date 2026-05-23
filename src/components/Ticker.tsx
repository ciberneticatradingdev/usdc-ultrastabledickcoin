"use client";

const MESSAGES = [
  "$USDC / USD — $1.00 · always. probably.",
  "ultra stable. ultra dick. ultra coin.",
  "BREAKING: your bank called. it's confused.",
  "1 USDC = 1 USDC. it's that simple, ser.",
  "no credit score. no problem. just vibes.",
  "wen depeg? never. we're too hard for that.",
  "JUST IN: stablecoins were boring until now",
  "ATM goes brrr every 90 seconds 🏧",
  "your keys. your dick coin.",
  "banks fear what they can't understand.",
  "BREAKING: man discovers passive income. wife still unimpressed.",
  "probably nothing. definitely something.",
  "not your keys, not your ultra stable dick coin.",
  "diamond hands. iron d—  you get it.",
  "do your own research. we did ours. it's rock hard.",
  "BREAKING: SEC unsure how to classify this",
  "imagine explaining this to your accountant",
  "stability redefined. you're welcome.",
  "holders getting paid every 90 seconds. touch grass between distributions.",
  "this is the future of finance. don't question it.",
  "JUST IN: local man won't shut up about his USDC bag",
  "creator rewards → your wallet. automatically. forever.",
  "banks close on weekends. ATM doesn't. 🏧",
  "1 $USDC = 1 $USDC. pegged to greatness.",
];

export default function Ticker() {
  const doubled = [...MESSAGES, ...MESSAGES];

  return (
    <div className="w-full overflow-hidden border-y border-[#2775CA]/20 bg-[#2775CA]/[0.04] py-3">
      <div className="ticker-track">
        {doubled.map((msg, i) => (
          <span
            key={i}
            className="flex-shrink-0 px-8 text-sm font-medium text-[#4A9AE8]/80 whitespace-nowrap"
          >
            {msg}
            <span className="ml-8 text-[#2775CA]/30">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
