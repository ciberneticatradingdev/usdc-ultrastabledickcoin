"use client";

const STEPS = [
  {
    num: "01",
    title: "Token Generates Fees",
    desc: "Every trade of $USDC on pump.fun generates creator rewards in USDC.",
  },
  {
    num: "02",
    title: "ATM Claims Rewards",
    desc: "Every 90 seconds, the ATM automatically claims all accumulated creator rewards.",
  },
  {
    num: "03",
    title: "Holders Get Paid",
    desc: "USDC is distributed to every holder proportionally based on their % of total supply.",
  },
];

export default function HowATMWorks() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto mb-16">
      <div className="panel p-8">
        <h2 className="text-center text-sm font-bold uppercase tracking-[0.2em] text-white mb-2">
          How the ATM Works
        </h2>
        <p className="text-center text-xs text-gray-600 mb-10">
          hold $USDC → get USDC. it&apos;s not complicated.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STEPS.map((s, i) => (
            <div key={s.num} className="relative text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full border border-[#2775CA]/30 bg-[#2775CA]/5 flex items-center justify-center">
                <span className="text-sm font-bold text-[#2775CA]">{s.num}</span>
              </div>
              <h3 className="text-sm font-bold text-white mb-2 uppercase tracking-wider">{s.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed max-w-[240px] mx-auto">{s.desc}</p>

              {i < STEPS.length - 1 && (
                <div className="hidden md:block absolute top-6 -right-4 text-[#2775CA]/30 text-lg">→</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
