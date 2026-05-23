import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "$ATM — What Is A Bank Without An ATM?",
  description:
    "Every 90 seconds, pump.fun creator rewards are claimed and redistributed as USDC to all $ATM holders. Fully automated. On Solana.",
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "$ATM — What Is A Bank Without An ATM?",
    description: "Creator rewards → USDC → your wallet. Every 90 seconds.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <body className="antialiased min-h-screen">{children}</body>
    </html>
  );
}
