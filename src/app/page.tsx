"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Hero — red background, minimal */}
      <section className="relative bg-red min-h-[50vh] flex flex-col">
        {/* Nav */}
        <nav className="relative z-10 flex items-center justify-between px-4 sm:px-8 py-4 sm:py-6 max-w-7xl mx-auto w-full">
          <div className="flex items-center gap-2 sm:gap-3">
            <Image
              src="/logo-transparent.png"
              alt="Fracture"
              width={32}
              height={32}
              className="rounded-sm sm:w-10 sm:h-10"
            />
            <span className="text-base sm:text-lg font-semibold tracking-tight text-background">fracture</span>
          </div>
          <a
            href="#projects"
            className="text-sm font-bold italic text-background/70 hover:text-background transition-colors"
          >
            vouch!
          </a>
        </nav>

        {/* Hero content */}
        <div className="flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-8 pb-12 sm:pb-16">
          <h1
            className="relative text-4xl sm:text-6xl md:text-8xl font-bold tracking-tighter text-background animate-slide-up"
            style={{ animationDelay: "0.2s", animationFillMode: "both" }}
          >
            <Image
              src="/logo-transparent.png"
              alt="Fracture"
              width={280}
              height={160}
              className="mx-auto mb-4 sm:mb-6 w-[180px] sm:w-[280px] h-auto"
            />
            Reshape what&apos;s possible.
          </h1>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="relative z-10 px-4 sm:px-8 py-16 sm:py-24 max-w-7xl mx-auto"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Cooking
        </h2>
        <p className="text-foreground/50 mb-10 sm:mb-16 max-w-xl text-sm sm:text-base">
          Things we&apos;re building, breaking, and shipping.
        </p>

        <VouchCard />
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-red/30 to-transparent" />
      </div>

      {/* About Section */}
      <section
        id="about"
        className="relative z-10 px-4 sm:px-8 py-16 sm:py-24 max-w-7xl mx-auto"
      >
        <div className="max-w-3xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-6 sm:mb-8">
            About <span className="text-red">Fracture</span>
          </h2>
          <p className="text-foreground/60 text-base sm:text-lg leading-relaxed mb-6">
            Fracture is a historian&apos;s pet project, a vehicle for building
            things that matter. She takes what&apos;s broken, outdated, or
            overcomplicated and breaks it further until something better
            emerges.
          </p>
          <p className="text-foreground/60 text-base sm:text-lg leading-relaxed">
            Every project is a fracture point. A place where the old cracks and
            the new pushes through. Open source, closed source — it doesn&apos;t
            matter. What matters is shipping.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="relative z-10 px-4 sm:px-8 py-16 sm:py-24 max-w-7xl mx-auto text-center"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Want to build with us?
        </h2>
        <p className="text-foreground/50 mb-8 max-w-lg mx-auto text-sm sm:text-base">
          If you&apos;re tired of the old ways, reach out.
        </p>
        <a
          href="mailto:hello@fracture.dev"
          className="inline-block px-6 sm:px-8 py-3 bg-red text-background font-semibold rounded hover:bg-red-dark transition-colors text-sm sm:text-base"
        >
          hello@fracture.dev
        </a>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-4 sm:px-8 py-6 sm:py-8 border-t border-foreground/10 max-w-7xl mx-auto w-full">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs sm:text-sm text-foreground/30">
          <div className="flex items-center gap-2">
            <Image
              src="/logo-transparent.png"
              alt="Fracture"
              width={20}
              height={20}
              className="rounded-sm opacity-50"
            />
            <span>&copy; {new Date().getFullYear()} Fracture</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="/privacy" className="hover:text-foreground/50 transition-colors">Privacy Policy</a>
            <span>Reshape what&apos;s possible.</span>
          </div>
        </div>
      </footer>
    </main>
  );
}

function VouchCard() {
  const ref = useRef<HTMLAnchorElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <a
      href="https://vouchpls.xyz"
      target="_blank"
      rel="noopener noreferrer"
      ref={ref}
      className={`block relative bg-red rounded-2xl p-8 sm:p-12 md:p-16 transition-all duration-700 cursor-pointer hover:scale-[1.02] ${
        visible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-12 scale-95"
      }`}
    >
      <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
        {/* Pac-Man ghost in black */}
        <svg width="36" height="36" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg" className="sm:w-12 sm:h-12">
          <path d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12V21H18L16.5 19L15 21H12L10.5 19L9 21H6L4.5 19L3 21V12Z" />
          <circle cx="9" cy="10" r="1.5" fill="white" />
          <circle cx="15" cy="10" r="1.5" fill="white" />
        </svg>
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-background tracking-tight">
          Vouch!
        </h3>
      </div>
      <p className="text-background/70 text-lg sm:text-xl md:text-2xl font-medium">
        Don&apos;t get ghosted.
      </p>
      <span className="inline-block mt-6 text-xs font-mono px-3 py-1 rounded bg-background/20 text-background/80">
        In Progress
      </span>
    </a>
  );
}
