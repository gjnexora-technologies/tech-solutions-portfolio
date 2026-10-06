import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { galleryItems } from "@/lib/site-data";
import { Reveal, SectionHeader } from "@/components/site/Reveal";
import { cn } from "@/lib/utils";

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") setActive((i) => ((i ?? 0) + 1) % galleryItems.length);
      if (e.key === "ArrowLeft")
        setActive((i) => ((i ?? 0) - 1 + galleryItems.length) % galleryItems.length);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  const current = active === null ? null : galleryItems[active];

  return (
    <section id="gallery" className="surface-panel py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="Visual portfolio"
          title="A look at the work."
          description="Interfaces, dashboards, products and the people who build them."
        />
        <div className="mt-14 grid auto-rows-[190px] grid-cols-2 gap-4 lg:grid-cols-4 lg:auto-rows-[220px]">
          {galleryItems.map((item, i) => (
            <Reveal
              key={item.alt}
              delay={(i % 4) * 70}
              className={cn(
                item.span === "tall" && "row-span-2",
                item.span === "wide" && "col-span-2",
              )}
            >
              <button
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Open image: ${item.alt}`}
                className="zoom-media group relative h-full w-full overflow-hidden rounded-xl border border-border bg-card shadow-soft"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <span className="absolute inset-0 bg-[image:var(--gradient-hero)] opacity-0 transition-opacity duration-500 group-hover:opacity-35" />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {current ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/92 p-4 backdrop-blur-sm"
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            onClick={() => setActive(null)}
            aria-label="Close preview"
            className="absolute top-5 right-5 flex h-10 w-10 items-center justify-center rounded-full border border-ink-foreground/30 text-ink-foreground transition-colors hover:border-accent hover:text-accent"
          >
            <X className="h-5 w-5" />
          </button>
          <figure onClick={(e) => e.stopPropagation()} className="max-h-full">
            <img
              src={current.src}
              alt={current.alt}
              className="max-h-[80vh] w-auto rounded-xl object-contain shadow-lift"
            />
            <figcaption className="mt-4 text-center text-sm text-ink-foreground/70">
              {current.alt}
            </figcaption>
          </figure>
        </div>
      ) : null}
    </section>
  );
}
