import ParticleBackground from "@/components/ParticleBackground";
import Ticker from "@/components/Ticker";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Panels from "@/components/Panels";
import HowItWorks from "@/components/HowItWorks";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <ParticleBackground />

      <div className="relative z-10 flex-1 flex flex-col">
        <Ticker />
        <main className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6">
          <Hero />
          <Stats />
          <Panels />
          <HowItWorks />
        </main>

        <footer className="w-full text-center py-6 border-t border-white/[0.03]">
          <p className="text-[10px] text-gray-600 tracking-[0.12em] uppercase">
            $ATM — What Is A Bank Without An ATM? 🏧
          </p>
          <p className="text-[9px] text-gray-700 mt-1">
            Built on Solana · pump.fun Creator Rewards
          </p>
        </footer>
      </div>
    </div>
  );
}
