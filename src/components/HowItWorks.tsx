"use client";

const STEPS = [
  { icon: "1", title: "Fees Accumulate", desc: "Every buy & sell of $ATM on pump.fun generates creator rewards — now paid in USDC." },
  { icon: "2", title: "ATM Claims", desc: "Every 90 seconds, the ATM bot automatically claims all accumulated creator reward USDC." },
  { icon: "3", title: "Holders Get Paid", desc: "USDC is sent directly to every $ATM holder, proportional to their % of total supply." },
];

export default function HowItWorks() {
  return (
    <section id="how" className="mb-10 scroll-mt-8">
      <div className="card p-6">
        <h2 className="text-center text-xs font-bold uppercase tracking-[0.15em] text-white mb-1">How The ATM Works</h2>
        <p className="text-center text-[11px] text-gray-600 mb-8">hold $ATM, get USDC. every 90 seconds. that&apos;s it.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STEPS.map((s, i) => (
            <div key={i} className="relative flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-lg font-bold text-[#2775CA]"
                   style={{ background: "rgba(39,117,202,0.08)", border: "1px solid rgba(39,117,202,0.15)" }}>
                {s.icon}
              </div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-2">{s.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed max-w-[260px]">{s.desc}</p>
              {i < STEPS.length - 1 && (
                <svg className="hidden md:block absolute top-6 -right-4 text-[#2775CA]/25" width="20" height="14" viewBox="0 0 20 12" fill="none">
                  <path d="M0 6h16m0 0l-4-4.5M16 6l-4 4.5" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
