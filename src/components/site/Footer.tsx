import { Link } from "@tanstack/react-router";
import { Hexagon, Linkedin, Twitter, Github, Mail } from "lucide-react";
import { navLinks, contactInfo, services } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="ink-panel">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-ink-foreground/20">
                <Hexagon className="h-4.5 w-4.5 text-accent" strokeWidth={2.2} />
              </span>
              <span className="font-display text-sm font-bold tracking-[0.14em] uppercase">
                Tech Solutions
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-foreground/65">
              We design and build digital products, business systems, and intelligent
              automation for organisations ready to grow.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { Icon: Linkedin, label: "LinkedIn" },
                { Icon: Twitter, label: "X" },
                { Icon: Github, label: "GitHub" },
                { Icon: Mail, label: "Email" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-ink-foreground/20 text-ink-foreground/70 transition-colors hover:border-accent hover:text-accent"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Footer">
            <h3 className="font-display text-xs font-semibold tracking-[0.18em] text-accent uppercase">
              Explore
            </h3>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-ink-foreground/65 transition-colors hover:text-ink-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <Link
                  to="/contact"
                  className="text-sm text-ink-foreground/65 transition-colors hover:text-ink-foreground"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <h3 className="font-display text-xs font-semibold tracking-[0.18em] text-accent uppercase">
              Services
            </h3>
            <ul className="mt-5 space-y-3">
              {services.slice(0, 6).map((service) => (
                <li key={service.title}>
                  <a
                    href="/#services"
                    className="text-sm text-ink-foreground/65 transition-colors hover:text-ink-foreground"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-ink-foreground/15 pt-8 text-xs text-ink-foreground/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} TECH SOLUTIONS. All rights reserved.</p>
          <p>
            {contactInfo.email} · {contactInfo.phone}
          </p>
        </div>
      </div>
    </footer>
  );
}
