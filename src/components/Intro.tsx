"use client";
import Image from "next/image";

export default function Intro() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <Image
          src="/logo.png"
          alt="$ATM Logo"
          width={100}
          height={100}
          className="mx-auto mb-8"
          priority
        />
        
        <h1 className="text-5xl sm:text-6xl font-black tracking-tight text-white mb-3">
          $ATM
        </h1>
        
        <p className="text-sm text-[#2775CA] font-semibold uppercase tracking-[0.25em] mb-8">
          What Is A Bank Without An ATM?
        </p>
        
        <p className="text-gray-400 text-base leading-relaxed mb-10">
          Every 90 seconds, creator rewards from pump.fun are claimed and
          redistributed as{" "}
          <span className="text-[#2775CA] font-semibold">USDC</span> to all $ATM
          holders — proportional to your holdings. No staking. No locking. Just hold.
        </p>

        <div className="flex items-center justify-center gap-4 mb-6">
          <a
            href="#"
            className="bg-[#2775CA] hover:bg-[#1e5ba8] text-white text-sm font-bold uppercase tracking-wider px-8 py-3 rounded-full transition-colors"
          >
            Buy $ATM
          </a>
          <a
            href="#how"
            className="border border-white/20 hover:border-white/40 text-white text-sm font-medium px-6 py-3 rounded-full transition-colors"
          >
            How It Works
          </a>
        </div>

        <p className="text-xs text-gray-500 uppercase tracking-widest">
          Built on Solana
        </p>
      </div>
    </section>
  );
}
