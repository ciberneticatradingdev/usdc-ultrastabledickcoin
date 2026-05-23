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
        {/* Ticker */}
        <Ticker />

        {/* Hero */}
        <Hero />

        {/* Stats */}
        <ATMStats />

        {/* Panels */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4" style={{ minHeight: "480px" }}>
            <div className="lg:col-span-3">
              <ATMFeed />
            </div>
            <div className="lg:col-span-2">
              <TopHolders />
            </div>
          </div>
        </section>

        {/* How It Works */}
        <HowATMWorks />

        {/* Footer */}
        <footer className="text-center py-8 border-t border-[#2775CA]/10">
          <p className="text-[11px] text-gray-600 uppercase tracking-[0.15em]">
            $USDC — Ultra Stable Dick Coin 🏧
          </p>
          <p className="text-[10px] text-gray-700 mt-1.5">
            Built on Solana · Powered by pump.fun Creator Rewards
          </p>
          <p className="text-[9px] text-gray-800 mt-3 max-w-sm mx-auto">
            This is a memecoin. Not affiliated with Circle, USDC, or any actual stablecoin.
            Not financial advice. DYOR.
          </p>
        </footer>
      </div>
    </main>
  );
}
