"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Full-screen 16:9 background */}
      <div className="absolute inset-0">
        <Image
          src="/hero.png"
          alt="$ATM Background"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[rgb(6,11,24)]/60 via-[rgb(6,11,24)]/40 to-[rgb(6,11,24)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 pt-20 pb-32">
        <Image
          src="/logo.png"
          alt="$ATM Logo"
          width={120}
          height={120}
          className="mb-6 drop-shadow-2xl"
          priority
        />

        <h1 className="text-5xl sm:text-7xl font-black tracking-tight text-white mb-2 drop-shadow-lg">
          $ATM
        </h1>
        <p className="text-sm sm:text-base text-[#2775CA] font-semibold uppercase tracking-[0.25em] mb-6">
          What Is A Bank Without An ATM?
        </p>
        <p className="text-gray-300 max-w-lg text-sm leading-relaxed mb-8">
          Every 90 seconds, creator rewards from pump.fun are claimed and
          redistributed as{" "}
          <span className="text-[#2775CA] font-semibold">USDC</span> to all $ATM
          holders — proportional to your holdings. No staking. No locking. Just
          hold.
        </p>

        <div className="flex items-center gap-4 mb-4">
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-[#2775CA] hover:bg-[#1e68b5] text-white text-sm font-bold uppercase tracking-wider px-8 py-3 rounded-full transition-all shadow-[0_0_30px_rgba(39,117,202,0.4)] hover:shadow-[0_0_40px_rgba(39,117,202,0.6)]"
          >
            Buy $ATM
          </a>
          <a
            href="#how"
            className="inline-flex items-center border border-white/20 hover:border-white/40 text-white text-sm font-medium px-6 py-3 rounded-full transition-all backdrop-blur-sm"
          >
            How It Works
          </a>
        </div>

        <p className="text-[11px] text-gray-400 uppercase tracking-[0.15em]">
          Built on Solana · pump.fun Creator Rewards
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-[10px] text-gray-500 uppercase tracking-wider">Scroll</span>
        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
