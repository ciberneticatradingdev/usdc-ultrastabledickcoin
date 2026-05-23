"use client";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center py-20 px-4">
      {/* USDC-style circle logo */}
      <div className="relative mb-8">
        <div className="w-32 h-32 rounded-full border-[3px] border-[#2775CA] flex items-center justify-center bg-[#2775CA]/10 shadow-[0_0_60px_rgba(39,117,202,0.2)]">
          <span className="text-5xl font-black text-[#2775CA] tracking-tight">$</span>
        </div>
        {/* Subtle ring animation */}
        <div className="absolute inset-0 w-32 h-32 rounded-full border border-[#2775CA]/20 animate-ping" style={{ animationDuration: "3s" }} />
      </div>

      <h1 className="text-5xl sm:text-7xl font-black text-white tracking-tight mb-2">
        $USDC
      </h1>
      <p className="text-lg sm:text-xl text-[#2775CA] font-semibold uppercase tracking-[0.2em] mb-6">
        Ultra Stable Dick Coin
      </p>
      <p className="text-gray-500 max-w-md text-sm leading-relaxed mb-8">
        What is a bank without an ATM? Creator rewards redistributed to holders
        every 90 seconds. Ultra stable. Definitely not a security.
      </p>

      {/* Price badge */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 bg-[#2775CA]/10 border border-[#2775CA]/20 rounded-full px-5 py-2">
          <span className="text-xs font-semibold text-gray-400">$USDC / USD</span>
          <span className="text-lg font-bold text-white">$1.00</span>
          <span className="text-[10px] font-bold text-green-400 bg-green-400/10 rounded px-1.5 py-0.5">
            PEGGED ✓
          </span>
        </div>
      </div>

      {/* Tagline */}
      <p className="mt-6 text-[11px] text-gray-600 uppercase tracking-[0.15em]">
        pegged to greatness · built on solana · powered by pump.fun
      </p>
    </section>
  );
}
