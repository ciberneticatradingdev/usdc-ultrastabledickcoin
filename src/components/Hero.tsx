"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex flex-col items-center text-center pt-10 pb-10">
      {/* Hero Image */}
      <div className="relative w-full max-w-2xl mb-6">
        <div className="relative aspect-video w-full overflow-hidden rounded-2xl">
          <Image
            src="/hero.png"
            alt="$ATM - USDC Distribution"
            fill
            className="object-cover"
            priority
            style={{ filter: "drop-shadow(0 0 60px rgba(39,117,202,0.3))" }}
          />
        </div>
        <div
          className="absolute inset-0 rounded-2xl border border-[#2775CA]/20 pointer-events-none"
          style={{ animation: "ring-ping 3s ease-out infinite" }}
        />
      </div>

      <h1 className="text-5xl sm:text-6xl font-black tracking-tight text-white mb-1">$ATM</h1>
      <p className="text-sm sm:text-base text-[#2775CA] font-semibold uppercase tracking-[0.25em] mb-4">
        What Is A Bank Without An ATM?
      </p>
      <p className="text-gray-500 max-w-md text-[13px] leading-relaxed mb-6">
        Every 90 seconds, creator rewards from pump.fun are claimed and
        redistributed as{" "}
        <span className="text-[#2775CA] font-medium">USDC</span> to all $ATM
        holders — proportional to your holdings. No staking. No locking. Just
        hold.
      </p>

      <div className="flex items-center gap-3 mb-3">
        <a
          href="#"
          className="inline-flex items-center gap-2 bg-[#2775CA] hover:bg-[#1e68b5] text-white text-sm font-bold uppercase tracking-wider px-6 py-2.5 rounded-full transition-all shadow-[0_0_20px_rgba(39,117,202,0.2)] hover:shadow-[0_0_30px_rgba(39,117,202,0.35)]"
        >
          Buy $ATM
        </a>
        <a
          href="#how"
          className="inline-flex items-center border border-[#2775CA]/20 hover:border-[#2775CA]/40 text-[#2775CA] text-sm font-medium px-5 py-2.5 rounded-full transition-all"
        >
          How It Works
        </a>
      </div>

      <p className="text-[10px] text-gray-700 uppercase tracking-[0.1em]">
        Built on Solana · pump.fun Creator Rewards
      </p>
    </section>
  );
}
