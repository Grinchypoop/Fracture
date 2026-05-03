import Image from "next/image";

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
              className="text-sm text-background/70 hover:text-background transition-colors"
            >
              Projects
            </a>
            <a
              href="#about"
              className="text-sm text-background/70 hover:text-background transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-sm px-4 py-2 border border-background/30 text-background hover:bg-background hover:text-red transition-all rounded"
            >
              Get in touch
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard
            title="Coming Soon"
            description="The first fracture is forming. Stay tuned."
            tag="In Progress"
          />
          <ProjectCard
            title="Coming Soon"
            description="Something new is breaking through."
            tag="Planned"
          />
          <ProjectCard
            title="Coming Soon"
            description="The old ways won't hold much longer."
            tag="Planned"
          />
        </div>
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
            Fracture isn&apos;t a company in the traditional sense. It&apos;s a vehicle for
            building things that matter. We take what&apos;s broken, outdated, or
            overcomplicated — and we break it further until something better
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

function ProjectCard({
  title,
  description,
  tag,
}: {
  title: string;
  description: string;
  tag: string;
}) {
  return (
    <div className="group relative border border-foreground/10 rounded-lg p-6 hover:border-red/30 transition-all duration-300 bg-foreground/[0.02]">
      <div className="absolute inset-0 bg-red/[0.02] opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
      <div className="relative">
        <span className="inline-block text-xs font-mono px-2 py-1 rounded bg-red/10 text-red/80 mb-4">
          {tag}
        </span>
        <h3 className="text-xl font-semibold mb-2 group-hover:text-red transition-colors">
          {title}
        </h3>
        <p className="text-foreground/40 text-sm">{description}</p>
      </div>
    </div>
  );
}
