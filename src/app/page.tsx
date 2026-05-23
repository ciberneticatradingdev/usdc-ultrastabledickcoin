import ParticleBackground from "@/components/ParticleBackground";
import Ticker from "@/components/Ticker";
import Hero from "@/components/Hero";
import ATMStats from "@/components/ATMStats";
import ATMFeed from "@/components/ATMFeed";
import TopHolders from "@/components/TopHolders";
import HowATMWorks from "@/components/HowATMWorks";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <ParticleBackground />

      <div className="relative z-10">
        <Ticker />
        <Hero />
        <ATMStats />

        {/* Live panels */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-[1100px] mx-auto mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4" style={{ minHeight: "460px" }}>
            <div className="lg:col-span-3"><ATMFeed /></div>
            <div className="lg:col-span-2"><TopHolders /></div>
          </div>
        </section>

        <HowATMWorks />

        {/* Footer */}
        <footer className="text-center py-8 border-t border-white/[0.04]">
          <p className="text-[10px] text-gray-600 uppercase tracking-[0.12em]">
            $ATM — What Is A Bank Without An ATM? 🏧
          </p>
          <p className="text-[9px] text-gray-700 mt-1">
            Built on Solana · pump.fun Creator Rewards
          </p>
        </footer>
      </div>
    </main>
  );
}
