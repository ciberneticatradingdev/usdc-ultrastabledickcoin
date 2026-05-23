"use client";

const STEPS = [
  { n: "01", icon: "💸", title: "Fees Accumulate", desc: "Every buy & sell of $ATM on pump.fun generates creator rewards — now paid in USDC." },
  { n: "02", icon: "🏧", title: "ATM Claims", desc: "Every 90 seconds, the ATM bot claims all accumulated creator reward USDC. Fully automated." },
  { n: "03", icon: "🎯", title: "Holders Get Paid", desc: "USDC is sent directly to every $ATM holder, proportional to their % of total supply." },
];

export default function HowATMWorks() {
  return (
    <section id="how" className="px-4 sm:px-6 lg:px-8 max-w-[1100px] mx-auto mb-14 scroll-mt-8">
      <div className="card p-8">
        <h2 className="text-center text-xs font-bold uppercase tracking-[0.2em] text-white mb-1">
          How The ATM Works
        </h2>
        <p className="text-center text-[11px] text-gray-600 mb-8">
          hold $ATM → get USDC. every 90 seconds. that&apos;s it.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {STEPS.map((s, i) => (
            <div key={s.n} className="relative flex flex-col items-center text-center">
              {/* Number circle */}
              <div className="w-14 h-14 rounded-xl bg-[#2775CA]/[0.06] border border-[#2775CA]/15 flex items-center justify-center mb-4">
                <span className="text-2xl">{s.icon}</span>
              </div>
              <h3 className="text-sm font-bold text-white mb-1.5 uppercase tracking-wider">{s.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed max-w-[260px]">{s.desc}</p>

              {/* Arrow between */}
              {i < STEPS.length - 1 && (
                <div className="hidden md:flex absolute top-7 -right-3 lg:-right-4 items-center">
                  <svg width="20" height="12" viewBox="0 0 20 12" fill="none" className="text-[#2775CA]/25">
                    <path d="M0 6h16m0 0l-4-4.5M16 6l-4 4.5" stroke="currentColor" strokeWidth="1.2" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
