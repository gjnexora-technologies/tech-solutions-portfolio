import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/site/Icon";
import { Reveal, SectionHeader } from "@/components/site/Reveal";
import { capabilities, images, pillars, services } from "@/lib/site-data";

export function Hero() {
  return (
    <section id="top" className="ink-panel relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -right-24 h-[34rem] w-[34rem] rounded-full bg-accent/20 blur-[120px]"
      />
      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 pt-32 pb-20 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-16 lg:px-8 lg:pt-44 lg:pb-28">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-ink-foreground/20 px-3 py-1.5 text-xs font-medium tracking-wide text-ink-foreground/80">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Digital products · Business systems · AI
            </span>
          </Reveal>
          <Reveal delay={90}>
            <h1 className="mt-6 text-4xl leading-[1.05] font-bold text-ink-foreground sm:text-5xl lg:text-[4.1rem]">
              We Build Technology That{" "}
              <span className="text-gradient">Moves Businesses Forward.</span>
            </h1>
          </Reveal>
          <Reveal delay={180}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-foreground/70 sm:text-lg">
              TECH SOLUTIONS creates modern digital products, intelligent business
              systems, and scalable technology solutions for organizations ready to
              grow.
            </p>
          </Reveal>
          <Reveal delay={260}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="hero" size="xl">
                <Link to="/contact">
                  Let's Build Together <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="onInk" size="xl">
                <a href="#work">
                  <Play /> Explore Our Work
                </a>
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="relative">
          <div className="zoom-media relative rounded-2xl border border-ink-foreground/15 shadow-lift">
            <img
              src={images.heroWorkspace}
              alt="Technology team working across multiple screens in a modern studio"
              width={1600}
              height={1104}
              className="h-[320px] w-full rounded-2xl object-cover sm:h-[420px] lg:h-[500px]"
            />
          </div>
          <div className="absolute -bottom-8 -left-4 hidden w-56 rounded-xl border border-border bg-card p-4 shadow-lift sm:block lg:-left-10">
            <p className="eyebrow">Live delivery</p>
            <p className="mt-2 font-display text-2xl font-bold">7 stages</p>
            <p className="mt-1 text-xs text-muted-foreground">
              Discovery through scale, with reviewable increments.
            </p>
          </div>
          <div className="absolute -top-6 -right-2 hidden rounded-xl border border-border bg-card px-4 py-3 shadow-lift lg:block">
            <p className="font-display text-sm font-semibold">Uptime focused</p>
            <p className="text-xs text-muted-foreground">Cloud-native architecture</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function TrustStrip() {
  return (
    <section aria-label="Capabilities" className="border-y border-border bg-card">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden px-5 sm:grid-cols-3 lg:grid-cols-6 lg:px-8">
        {capabilities.map((cap, i) => (
          <Reveal
            key={cap.label}
            delay={i * 60}
            className="group flex items-center gap-3 py-6 sm:justify-center"
          >
            <Icon
              name={cap.icon}
              className="h-5 w-5 text-secondary transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:text-accent"
            />
            <span className="text-xs font-medium tracking-wide text-muted-foreground transition-colors group-hover:text-foreground sm:text-[0.8rem]">
              {cap.label}
            </span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <Reveal className="relative">
          <div className="zoom-media rounded-2xl shadow-lift">
            <img
              src={images.teamCollab}
              alt="Designers and engineers reviewing product wireframes together"
              loading="lazy"
              width={1408}
              height={1008}
              className="h-[380px] w-full rounded-2xl object-cover lg:h-[540px]"
            />
          </div>
          <div className="absolute right-6 bottom-6 left-6 rounded-xl border border-border bg-card/95 p-5 backdrop-blur-sm lg:right-auto lg:-mr-10 lg:w-72">
            <p className="eyebrow">Our approach</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Business understanding first, technology second — that order decides
              whether software gets used.
            </p>
          </div>
        </Reveal>

        <div>
          <SectionHeader
            eyebrow="About us"
            title="Technology With a Purpose."
            description="TECH SOLUTIONS combines technology, design, and business understanding to create practical digital solutions. We work closely with teams to turn operational problems into products people rely on every day."
          />
          <ul className="mt-10 space-y-5">
            {pillars.map((pillar, i) => (
              <Reveal as="li" key={pillar.title} delay={i * 100}>
                <div className="flex gap-4 rounded-xl border border-border bg-card p-5 transition-all duration-500 hover:-translate-y-1 hover:shadow-lift">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-secondary/10">
                    <Icon name={pillar.icon} className="h-5 w-5 text-secondary" />
                  </span>
                  <div>
                    <h3 className="font-display text-base font-semibold">{pillar.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{pillar.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={300}>
            <Button asChild variant="ink" size="xl" className="mt-9">
              <a href="#team">
                More About Us <ArrowRight />
              </a>
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const storyTiles = [
  { word: "Think.", image: images.teamCollab, alt: "Strategy meeting around a table", cls: "lg:col-span-2 lg:row-span-2" },
  { word: "Design.", image: images.projectAi, alt: "Interface design on screen", cls: "lg:col-span-2" },
  { word: "Build.", image: images.developer, alt: "Developer writing code", cls: "lg:row-span-2" },
  { word: "Scale.", image: images.abstractTech, alt: "Abstract cloud technology visual", cls: "lg:col-span-1" },
  { word: "", image: images.projectDashboard, alt: "Analytics dashboard screen", cls: "lg:col-span-2" },
];

export function ImageStory() {
  return (
    <section className="surface-panel py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="Our craft"
          title="From Ideas to Digital Reality."
          description="Every product moves through the same four beats — and each one shows up in the work."
        />
        <div className="mt-14 grid auto-rows-[180px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[200px]">
          {storyTiles.map((tile, i) => (
            <Reveal
              key={tile.alt}
              delay={i * 80}
              className={`zoom-media group relative overflow-hidden rounded-2xl border border-border shadow-soft ${tile.cls}`}
            >
              <img
                src={tile.image}
                alt={tile.alt}
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <span className="absolute inset-0 bg-[image:var(--gradient-hero)] opacity-55 transition-opacity duration-500 group-hover:opacity-35" />
              {tile.word ? (
                <span className="absolute bottom-5 left-5 font-display text-2xl font-bold text-ink-foreground lg:text-3xl">
                  {tile.word}
                </span>
              ) : null}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section id="services" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            eyebrow="Services"
            title="What We Build"
            description="Eight practices that combine into one delivery team."
          />
          <Reveal delay={120}>
            <Button asChild variant="glass" size="lg">
              <Link to="/contact">
                Discuss a service <ArrowUpRight />
              </Link>
            </Button>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const featured = "featured" in service && service.featured;
            const image = "image" in service ? service.image : undefined;
            return (
              <Reveal
                key={service.title}
                delay={(i % 3) * 80}
                className={featured ? "lg:col-span-2" : ""}
              >
                <article
                  className={`group h-full overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift ${
                    featured ? "sm:flex sm:items-stretch" : ""
                  }`}
                >
                  {featured && image ? (
                    <div className="zoom-media sm:w-2/5">
                      <img
                        src={image}
                        alt={`${service.title} example`}
                        loading="lazy"
                        className="h-40 w-full object-cover sm:h-full"
                      />
                    </div>
                  ) : null}
                  <div className="flex flex-1 flex-col p-6">
                    <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-secondary/10">
                      <Icon name={service.icon} className="h-5 w-5 text-secondary" />
                    </span>
                    <h3 className="mt-5 font-display text-lg font-semibold">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                    {!featured && image ? (
                      <div className="zoom-media mt-5 rounded-lg">
                        <img
                          src={image}
                          alt={`${service.title} example`}
                          loading="lazy"
                          className="h-28 w-full rounded-lg object-cover"
                        />
                      </div>
                    ) : null}
                    <Link
                      to="/contact"
                      className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-medium text-secondary transition-colors hover:text-accent"
                    >
                      Explore
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
