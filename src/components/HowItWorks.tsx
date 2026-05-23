"use client";

const STEPS = [
  {
    num: "01",
    title: "Fees Accumulate",
    desc: "Every buy & sell of $ATM on pump.fun generates creator rewards — now paid in USDC.",
  },
  {
    num: "02",
    title: "ATM Claims",
    desc: "Every 90 seconds, the ATM bot automatically claims all accumulated creator reward USDC.",
  },
  {
    num: "03",
    title: "Holders Get Paid",
    desc: "USDC is sent directly to every $ATM holder, proportional to their % of total supply.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="py-12 px-4 scroll-mt-8">
      <div className="max-w-5xl mx-auto">
        <div className="bg-[rgba(10,16,32,0.9)] border border-[rgba(39,117,202,0.15)] rounded-xl p-8 lg:p-10">
          <h2 className="text-center text-sm font-bold uppercase tracking-[0.2em] text-white mb-2">
            How The ATM Works
          </h2>
          <p className="text-center text-sm text-gray-500 mb-10">
            Hold $ATM, get USDC. Every 90 seconds. That&apos;s it.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {STEPS.map((s, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 text-xl font-bold text-[#2775CA] bg-[rgba(39,117,202,0.1)] border border-[rgba(39,117,202,0.2)]">
                  {s.num}
                </div>
                <h3 className="text-base font-bold text-white uppercase tracking-wide mb-3">
                  {s.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed max-w-[280px]">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
