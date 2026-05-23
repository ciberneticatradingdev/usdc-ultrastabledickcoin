"use client";

export default function Hero() {
  return (
    <section className="flex flex-col items-center text-center pt-16 pb-12 px-4">
      {/* Logo */}
      <div className="relative mb-6">
        <div className="w-28 h-28 rounded-full border-2 border-[#2775CA]/60 flex items-center justify-center bg-gradient-to-br from-[#2775CA]/15 to-[#2775CA]/5 shadow-[0_0_80px_rgba(39,117,202,0.15)]">
          <span className="text-4xl">🏧</span>
        </div>
        <div className="absolute inset-0 w-28 h-28 rounded-full border border-[#2775CA]/15 animate-ping" style={{ animationDuration: "3s" }} />
      </div>

      <h1 className="text-5xl sm:text-6xl font-black text-white tracking-tight mb-1">
        $ATM
      </h1>
      <p className="text-base text-[#2775CA] font-semibold uppercase tracking-[0.25em] mb-5">
        What Is A Bank Without An ATM?
      </p>
      <p className="text-gray-500 max-w-lg text-sm leading-relaxed mb-7">
        Every 90 seconds, creator rewards from pump.fun are automatically claimed
        and redistributed as <span className="text-[#2775CA] font-medium">USDC</span> to
        all $ATM holders — proportional to your holdings. No staking. No locking. Just hold.
      </p>

      {/* Buy button + links */}
      <div className="flex items-center gap-3 mb-4">
        <a
          href="#"
          className="bg-[#2775CA] hover:bg-[#1A5BA8] text-white text-sm font-bold uppercase tracking-wider px-7 py-2.5 rounded-full transition-all hover:shadow-[0_0_24px_rgba(39,117,202,0.3)]"
        >
          Buy $ATM
        </a>
        <a
          href="#how"
          className="border border-[#2775CA]/25 hover:border-[#2775CA]/50 text-[#2775CA] text-sm font-medium px-6 py-2.5 rounded-full transition-all"
        >
          How It Works
        </a>
      </div>

      <p className="text-[10px] text-gray-700 uppercase tracking-[0.12em]">
        Built on Solana · Powered by pump.fun Creator Rewards
      </p>
    </section>
  );
}
