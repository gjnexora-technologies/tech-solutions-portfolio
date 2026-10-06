import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Hexagon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open
          ? "glass border-b border-border py-2 text-foreground"
          : "border-b border-transparent py-4 text-ink-foreground",
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 lg:px-8"
      >
        <Link
          to="/"
          className="group flex items-center gap-2.5"
          onClick={() => setOpen(false)}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[image:var(--gradient-hero)]">
            <Hexagon className="h-4.5 w-4.5 text-accent" strokeWidth={2.2} />
          </span>
          <span className="font-display text-[0.95rem] font-bold tracking-[0.14em] uppercase">
            Tech Solutions
          </span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  scrolled || open
                    ? "text-muted-foreground hover:text-foreground"
                    : "text-ink-foreground/75 hover:text-ink-foreground",
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <Link
              to="/contact"
              className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  scrolled || open
                    ? "text-muted-foreground hover:text-foreground"
                    : "text-ink-foreground/75 hover:text-ink-foreground",
                )}
            >
              Contact
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-2">
          <Button asChild variant="hero" size="default" className="hidden sm:inline-flex">
            <Link to="/contact">Let's Talk</Link>
          </Button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border lg:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

    </header>
      {open ? (
        <div className="fixed inset-x-0 top-[60px] bottom-0 z-40 overflow-y-auto border-t border-border bg-background px-6 pt-6 pb-12 text-foreground lg:hidden">
          <ul className="flex flex-col">
            {navLinks.map((link, i) => (
              <li key={link.label} className="border-b border-border/60">
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between py-4 font-display text-2xl font-semibold"
                >
                  {link.label}
                  <span className="eyebrow">0{i + 1}</span>
                </a>
              </li>
            ))}
            <li className="border-b border-border/60">
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="flex items-center justify-between py-4 font-display text-2xl font-semibold"
              >
                Contact
                <span className="eyebrow">07</span>
              </Link>
            </li>
          </ul>
          <Button asChild variant="hero" size="xl" className="mt-8 w-full">
            <Link to="/contact" onClick={() => setOpen(false)}>
              Let's Build Together
            </Link>
          </Button>
        </div>
      ) : null}
    </>
  );
}
