"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Hero — red background, minimal */}
      <section className="relative bg-red min-h-[50vh] flex flex-col">
        {/* Nav */}
        <nav className="relative z-10 flex items-center justify-between px-8 py-6 max-w-7xl mx-auto w-full">
          <div className="flex items-center gap-3">
            <Image
              src="/logo-transparent.png"
              alt="Fracture"
              width={40}
              height={40}
              className="rounded-sm"
            />
            <span className="text-lg font-semibold tracking-tight text-background">fracture</span>
          </div>
          <div className="flex items-center gap-8">
            <a
              href="#projects"
              className="text-sm font-bold italic text-background/70 hover:text-background transition-colors"
            >
              vouch!
            </a>
          </div>
        </nav>

        {/* Hero content */}
        <div className="flex-1 flex flex-col items-center justify-center text-center px-8 pb-16">
          <h1
            className="relative text-6xl md:text-8xl font-bold tracking-tighter text-background animate-slide-up"
            style={{ animationDelay: "0.2s", animationFillMode: "both" }}
          >
            <Image
              src="/logo-transparent.png"
              alt="Fracture"
              width={280}
              height={160}
              className="mx-auto mb-6"
            />
            Break the old.
            <br />
            Build the new.
          </h1>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="relative z-10 px-8 py-24 max-w-7xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Projects
        </h2>
        <p className="text-foreground/50 mb-16 max-w-xl">
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
        className="relative z-10 px-8 py-24 max-w-7xl mx-auto"
      >
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
            About <span className="text-red">Fracture</span>
          </h2>
          <p className="text-foreground/60 text-lg leading-relaxed mb-6">
            Fracture is a historian&apos;s pet project, a vehicle for building
            things that matter. She takes what&apos;s broken, outdated, or
            overcomplicated and breaks it further until something better
            emerges.
          </p>
          <p className="text-foreground/60 text-lg leading-relaxed">
            Every project is a fracture point. A place where the old cracks and
            the new pushes through. Open source, closed source — it doesn&apos;t
            matter. What matters is shipping.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="relative z-10 px-8 py-24 max-w-7xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Want to build with us?
        </h2>
        <p className="text-foreground/50 mb-8 max-w-lg mx-auto">
          If you&apos;re tired of the old ways, reach out.
        </p>
        <a
          href="mailto:hello@fracture.dev"
          className="inline-block px-8 py-3 bg-red text-background font-semibold rounded hover:bg-red-dark transition-colors"
        >
          hello@fracture.dev
        </a>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-8 py-8 border-t border-foreground/10 max-w-7xl mx-auto w-full">
        <div className="flex items-center justify-between text-sm text-foreground/30">
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
          <span>Break the old. Build the new.</span>
        </div>
      </footer>
    </main>
  );
}

function VouchCard() {
  const ref = useRef<HTMLDivElement>(null);
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
    <div
      ref={ref}
      className={`relative bg-red rounded-2xl p-12 md:p-16 transition-all duration-700 ${
        visible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-12 scale-95"
      }`}
    >
      <div className="flex items-center gap-4 mb-6">
        {/* Pac-Man ghost in black */}
        <svg width="48" height="48" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12V21H18L16.5 19L15 21H12L10.5 19L9 21H6L4.5 19L3 21V12Z" />
          <circle cx="9" cy="10" r="1.5" fill="white" />
          <circle cx="15" cy="10" r="1.5" fill="white" />
        </svg>
        <h3 className="text-4xl md:text-5xl font-bold text-background tracking-tight">
          Vouch!
        </h3>
      </div>
      <p className="text-background/70 text-xl md:text-2xl font-medium">
        Don&apos;t get ghosted.
      </p>
      <span className="inline-block mt-6 text-xs font-mono px-3 py-1 rounded bg-background/20 text-background/80">
        In Progress
      </span>
    </div>
  );
}
