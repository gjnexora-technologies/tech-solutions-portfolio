import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Check, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/site/Icon";
import { Counter, Reveal, SectionHeader } from "@/components/site/Reveal";
import {
  differentiators,
  images,
  industries,
  insights,
  metrics,
  processSteps,
  projects,
  techStack,
  testimonials,
} from "@/lib/site-data";

export function Projects() {
  return (
    <section id="work" className="surface-panel py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="Selected work"
          title="Products built around real operations."
          description="Representative examples of the systems and products we design and engineer."
        />
        <div className="mt-14 space-y-6">
          {projects.map((project, i) => (
            <Reveal key={project.name} delay={40}>
              <article
                className={`group grid overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all duration-500 hover:shadow-lift lg:grid-cols-2 ${
                  i % 2 === 1 ? "lg:[&>figure]:order-2" : ""
                }`}
              >
                <figure className="zoom-media m-0">
                  <img
                    src={project.image}
                    alt={project.alt}
                    loading="lazy"
                    className="h-64 w-full object-cover sm:h-80 lg:h-full lg:min-h-[380px]"
                  />
                </figure>
                <div className="flex flex-col justify-center p-7 lg:p-12">
                  <p className="eyebrow">{project.category}</p>
                  <h3 className="mt-3 font-display text-2xl font-bold lg:text-3xl">
                    {project.name}
                  </h3>
                  <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground lg:text-base">
                    {project.description}
                  </p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <li
                        key={t}
                        className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="mt-8 inline-flex w-fit items-center gap-2 text-sm font-semibold text-secondary transition-colors hover:text-accent"
                  >
                    View Case Study
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Showcase() {
  const blocks = [
    { label: "Problem", text: "Information spread across tools, spreadsheets, and inboxes." },
    { label: "Solution", text: "One connected platform with role-based views and live data." },
    { label: "Key capabilities", text: "Reporting, approvals, automation, and audit history." },
    { label: "Technology", text: "React, Node.js, PostgreSQL, cloud deployment." },
  ];
  return (
    <section className="ink-panel relative overflow-hidden py-24 lg:py-32">
      <img
        src={images.abstractTech}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-25"
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <div>
          <SectionHeader
            eyebrow="Project showcase"
            tone="ink"
            title="Digital Products Designed Around Real Business Problems."
          />
          <dl className="mt-10 space-y-5">
            {blocks.map((block, i) => (
              <Reveal key={block.label} delay={i * 90}>
                <div className="rounded-xl border border-ink-foreground/15 bg-ink-foreground/5 p-5 backdrop-blur-sm">
                  <dt className="font-display text-xs font-semibold tracking-[0.18em] text-accent uppercase">
                    {block.label}
                  </dt>
                  <dd className="mt-2 text-sm text-ink-foreground/75">{block.text}</dd>
                </div>
              </Reveal>
            ))}
          </dl>
          <Reveal delay={360}>
            <Button asChild variant="hero" size="xl" className="mt-9">
              <Link to="/contact">
                View Case Study <ArrowRight />
              </Link>
            </Button>
          </Reveal>
        </div>
        <Reveal delay={150} className="relative">
          <img
            src={images.projectDashboard}
            alt="Full product dashboard mockup with reporting and growth charts"
            loading="lazy"
            width={1408}
            height={1008}
            className="rounded-2xl border border-ink-foreground/15 shadow-lift"
          />
          <img
            src={images.projectBooking}
            alt="Companion mobile interface for the same platform"
            loading="lazy"
            className="absolute -bottom-10 -left-6 hidden w-44 rounded-xl border border-ink-foreground/20 shadow-lift lg:block"
          />
        </Reveal>
      </div>
    </section>
  );
}

export function Industries() {
  return (
    <section id="industries" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="Industries"
          title="Technology Across Industries."
          description="Different sectors, the same principle: build around how the business actually runs."
        />
        <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {industries.map((industry, i) => (
            <Reveal key={industry.name} delay={(i % 4) * 70}>
              <article className="zoom-media group relative h-64 overflow-hidden rounded-2xl border border-border lg:h-80">
                <img
                  src={industry.image}
                  alt={`${industry.name} industry`}
                  loading="lazy"
                  className="h-full w-full scale-100 object-cover grayscale-[35%] transition-all duration-700 group-hover:grayscale-0"
                />
                <span className="absolute inset-0 bg-[image:var(--gradient-hero)] opacity-70 transition-opacity duration-500 group-hover:opacity-40" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="font-display text-lg font-bold text-ink-foreground">
                    {industry.name}
                  </h3>
                  <p className="mt-1 max-h-0 overflow-hidden text-xs leading-relaxed text-ink-foreground/80 opacity-0 transition-all duration-500 group-hover:max-h-24 group-hover:opacity-100">
                    {industry.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Technology() {
  return (
    <section className="surface-panel py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-8">
        <SectionHeader
          eyebrow="Technology"
          title="A modern, deliberate stack."
          description="We choose tools for longevity and maintainability, not novelty."
        />
        <div className="space-y-8">
          {techStack.map((group, i) => (
            <Reveal key={group.group} delay={i * 80}>
              <div className="border-b border-border pb-6">
                <h3 className="font-display text-xs font-semibold tracking-[0.18em] text-secondary uppercase">
                  {group.group}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-lg border border-border bg-card px-3.5 py-2 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhyUs() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-[1fr_1.05fr] lg:gap-16 lg:px-8">
        <Reveal className="zoom-media rounded-2xl shadow-lift">
          <img
            src={images.office}
            alt="Modern office interior with glass meeting rooms"
            loading="lazy"
            width={1408}
            height={1008}
            className="h-[420px] w-full rounded-2xl object-cover lg:h-[620px]"
          />
        </Reveal>
        <div>
          <SectionHeader eyebrow="Why Tech Solutions" title="Built Around Your Business." />
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {differentiators.map((item, i) => (
              <Reveal key={item.title} delay={(i % 2) * 80}>
                <div className="h-full rounded-xl border border-border bg-card p-5 transition-all duration-500 hover:-translate-y-1 hover:border-accent/50 hover:shadow-lift">
                  <Icon name={item.icon} className="h-5 w-5 text-secondary" />
                  <h3 className="mt-4 font-display text-base font-semibold">{item.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section className="ink-panel py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="Process"
          tone="ink"
          title="How We Turn Ideas Into Products."
          description="Seven stages, each with a visible outcome you can review."
        />
        <ol className="mt-16 grid gap-6 lg:grid-cols-7 lg:gap-4">
          {processSteps.map((step, i) => (
            <Reveal as="li" key={step.no} delay={i * 70} className="relative">
              <div className="flex items-start gap-4 lg:block">
                <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-accent/50 font-display text-xs font-bold text-accent lg:mb-5">
                  {step.no}
                </span>
                <div className="lg:pr-3">
                  <h3 className="font-display text-base font-semibold text-ink-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-foreground/60">
                    {step.description}
                  </p>
                </div>
              </div>
              <span
                aria-hidden="true"
                className="absolute top-5 left-5 -z-10 hidden h-px w-full bg-ink-foreground/15 lg:block"
              />
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Team() {
  return (
    <section id="team" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-20">
          <SectionHeader
            eyebrow="Our team"
            title="People Behind the Technology."
            description="Strategists, designers, and engineers who work as one team. We collaborate openly, share decisions early, and keep clients close to the product as it takes shape."
          />
          <Reveal delay={120} className="grid grid-cols-2 gap-4">
            <div className="zoom-media col-span-2 rounded-2xl">
              <img
                src={images.teamCollab}
                alt="Team collaborating on a product review"
                loading="lazy"
                className="h-56 w-full rounded-2xl object-cover"
              />
            </div>
            <div className="zoom-media rounded-2xl">
              <img
                src={images.developer}
                alt="Developer at work"
                loading="lazy"
                className="h-52 w-full rounded-2xl object-cover"
              />
            </div>
            <div className="zoom-media rounded-2xl">
              <img
                src={images.office}
                alt="Workspace interior"
                loading="lazy"
                className="h-52 w-full rounded-2xl object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Impact() {
  return (
    <section className="surface-panel py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="Business impact"
          title="Technology Designed for Impact."
          align="center"
          description="Illustrative solution outcomes — indicative of what well-built systems can enable, not reported company results."
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, i) => (
            <Reveal key={metric.label} delay={i * 90}>
              <div className="h-full rounded-2xl border border-border bg-card p-7 text-center transition-all duration-500 hover:-translate-y-1 hover:shadow-lift">
                <Counter value={metric.value} suffix={metric.suffix} />
                <p className="mt-3 text-sm text-muted-foreground">{metric.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-center text-xs tracking-wide text-muted-foreground uppercase">
          Illustrative solution outcomes
        </p>
      </div>
    </section>
  );
}

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;

  useEffect(() => {
    const timer = setInterval(() => setIndex((i) => (i + 1) % total), 7000);
    return () => clearInterval(timer);
  }, [total]);

  const active = testimonials[index]!;

  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
        <Reveal>
          <Quote className="mx-auto h-9 w-9 text-accent" aria-hidden="true" />
          <blockquote
            aria-live="polite"
            className="mt-8 font-display text-2xl leading-snug font-medium text-balance sm:text-3xl lg:text-4xl"
          >
            “{active.quote}”
          </blockquote>
          <figcaption className="mt-8 text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">{active.name}</span> ·{" "}
            {active.role}, {active.company}
          </figcaption>
        </Reveal>
        <div className="mt-10 flex items-center justify-center gap-3">
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={() => setIndex((i) => (i - 1 + total) % total)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border transition-colors hover:border-accent hover:text-accent"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((t, i) => (
              <button
                key={t.quote}
                type="button"
                aria-label={`Show testimonial ${i + 1}`}
                aria-current={i === index}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === index ? "w-8 bg-accent" : "w-4 bg-border"
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={() => setIndex((i) => (i + 1) % total)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border transition-colors hover:border-accent hover:text-accent"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

export function Insights() {
  return (
    <section id="insights" className="surface-panel py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="Insights"
          title="Ideas, Technology & Business."
          description="Short reads on where technology and operations meet."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {insights.map((article, i) => (
            <Reveal key={article.title} delay={i * 90}>
              <article className="group h-full overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift">
                <div className="zoom-media">
                  <img
                    src={article.image}
                    alt={article.title}
                    loading="lazy"
                    className="h-52 w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <p className="eyebrow">{article.category}</p>
                  <h3 className="mt-3 font-display text-lg leading-snug font-semibold">
                    {article.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {article.excerpt}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-secondary">
                    Read article
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="ink-panel relative overflow-hidden">
      <img
        src={images.abstractTech}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-30"
      />
      <div className="relative mx-auto max-w-3xl px-5 py-28 text-center lg:px-8 lg:py-36">
        <Reveal>
          <h2 className="text-3xl leading-[1.1] font-bold text-ink-foreground sm:text-5xl">
            Have an Idea? <span className="text-gradient">Let's Build It.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-ink-foreground/70 sm:text-lg">
            Tell us what you're trying to solve and let's explore the right technology
            approach.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild variant="hero" size="xl">
              <Link to="/contact">
                Start a Project <ArrowRight />
              </Link>
            </Button>
            <Button asChild variant="onInk" size="xl">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
          <ul className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-ink-foreground/60">
            {["Free discovery call", "No obligation", "Response within 1 business day"].map(
              (item) => (
                <li key={item} className="flex items-center gap-1.5">
                  <Check className="h-4 w-4 text-accent" /> {item}
                </li>
              ),
            )}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
