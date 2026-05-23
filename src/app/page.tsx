import ParticleBackground from "@/components/ParticleBackground";
import Ticker from "@/components/Ticker";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Stats from "@/components/Stats";
import Panels from "@/components/Panels";
import HowItWorks from "@/components/HowItWorks";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <ParticleBackground />

      <div className="relative z-10 flex-1 flex flex-col">
        <Ticker />
        
        <Hero />
        
        <main className="flex-1 w-full">
          <Intro />
          <Stats />
          <Panels />
          <HowItWorks />
        </main>

        <footer className="w-full text-center py-8 border-t border-white/[0.03]">
          <p className="text-xs text-gray-600 tracking-wider uppercase">
            $ATM — What Is A Bank Without An ATM?
          </p>
          <p className="text-xs text-gray-700 mt-1">
            Built on Solana
          </p>
        </footer>
      </div>
    </div>
  );
}
