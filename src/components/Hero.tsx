"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-screen">
      <Image
        src="/hero.png"
        alt="$ATM Hero"
        fill
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgb(6,11,24)]" />
    </section>
  );
}
