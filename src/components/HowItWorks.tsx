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
    <section id="how" className="py-16 px-6 scroll-mt-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-[#0a1020] border border-[#2775CA]/15 rounded-2xl p-8 md:p-12">
          <h2 className="text-center text-sm font-bold uppercase tracking-[0.2em] text-white mb-2">
            How The ATM Works
          </h2>
          <p className="text-center text-sm text-gray-500 mb-12">
            Hold $ATM, get USDC. Every 90 seconds. That&apos;s it.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {STEPS.map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-14 h-14 rounded-2xl bg-[#2775CA]/10 border border-[#2775CA]/20 flex items-center justify-center mx-auto mb-5">
                  <span className="text-xl font-bold text-[#2775CA]">{step.num}</span>
                </div>
                <h3 className="text-base font-bold text-white uppercase tracking-wide mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
