import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { contactInfo, images } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact TECH SOLUTIONS — Start Your Project" },
      {
        name: "description",
        content:
          "Tell us about your project: custom software, AI, business systems, automation, analytics or UI/UX. We respond within one business day.",
      },
      { property: "og:title", content: "Contact TECH SOLUTIONS" },
      {
        property: "og:description",
        content: "Share your challenge and we'll explore the right technology approach with you.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

const serviceOptions = [
  "Website",
  "Software",
  "Business System",
  "AI",
  "Automation",
  "Analytics",
  "UI/UX",
  "Other",
];

const budgetOptions = [
  "Under $10k",
  "$10k – $25k",
  "$25k – $50k",
  "$50k – $100k",
  "$100k+",
  "Not sure yet",
];

function Contact() {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    const form = event.currentTarget;
    setTimeout(() => {
      setSubmitting(false);
      form.reset();
      toast.success("Thanks — your enquiry has been received.", {
        description: "We'll get back to you within one business day.",
      });
    }, 700);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section className="ink-panel relative overflow-hidden">
          <img
            src={images.abstractTech}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-25"
          />
          <div className="relative mx-auto max-w-7xl px-5 pt-32 pb-20 lg:px-8 lg:pt-44 lg:pb-24">
            <Reveal>
              <p className="eyebrow text-accent">Contact</p>
              <h1 className="mt-4 max-w-2xl text-4xl leading-[1.05] font-bold text-ink-foreground sm:text-5xl lg:text-6xl">
                Tell us what you're trying to solve.
              </h1>
              <p className="mt-5 max-w-xl text-base text-ink-foreground/70 sm:text-lg">
                Share a little about your business and the problem in front of you. We'll
                come back with an honest view of the right technology approach.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="py-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16 lg:px-8">
            <Reveal>
              <form
                onSubmit={onSubmit}
                className="rounded-2xl border border-border bg-card p-6 shadow-soft sm:p-9"
              >
                <h2 className="font-display text-xl font-semibold">Project enquiry</h2>
                <div className="mt-8 grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input id="name" name="name" required autoComplete="name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" name="company" autoComplete="organization" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" name="email" type="email" required autoComplete="email" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" name="phone" type="tel" autoComplete="tel" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="service">Service *</Label>
                    <select
                      id="service"
                      name="service"
                      required
                      defaultValue=""
                      className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none"
                    >
                      <option value="" disabled>
                        Select a service
                      </option>
                      {serviceOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="budget">Budget</Label>
                    <select
                      id="budget"
                      name="budget"
                      defaultValue=""
                      className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none"
                    >
                      <option value="" disabled>
                        Select a range
                      </option>
                      {budgetOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-2 sm:col-span-2">
                    <Label htmlFor="description">Project description *</Label>
                    <Textarea
                      id="description"
                      name="description"
                      required
                      rows={6}
                      placeholder="What are you trying to solve, and who is it for?"
                    />
                  </div>
                </div>
                <Button
                  type="submit"
                  variant="hero"
                  size="xl"
                  disabled={submitting}
                  className="mt-8 w-full sm:w-auto"
                >
                  {submitting ? "Sending…" : "Send enquiry"} <Send />
                </Button>
                <p className="mt-4 text-xs text-muted-foreground">
                  Enquiries are not stored yet — connect a backend to receive them by email.
                </p>
              </form>
            </Reveal>

            <Reveal delay={120} className="space-y-4">
              <div className="rounded-2xl border border-border bg-card p-6">
                <h2 className="font-display text-base font-semibold">Contact information</h2>
                <ul className="mt-5 space-y-4 text-sm">
                  <li className="flex gap-3">
                    <Mail className="h-4.5 w-4.5 shrink-0 text-secondary" />
                    <a href={`mailto:${contactInfo.email}`} className="hover:text-accent">
                      {contactInfo.email}
                    </a>
                  </li>
                  <li className="flex gap-3">
                    <Phone className="h-4.5 w-4.5 shrink-0 text-secondary" />
                    <a href={`tel:${contactInfo.phone}`} className="hover:text-accent">
                      {contactInfo.phone}
                    </a>
                  </li>
                  <li className="flex gap-3">
                    <MapPin className="h-4.5 w-4.5 shrink-0 text-secondary" />
                    <span className="text-muted-foreground">{contactInfo.address}</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6">
                <h2 className="flex items-center gap-2 font-display text-base font-semibold">
                  <Clock className="h-4.5 w-4.5 text-secondary" /> Business hours
                </h2>
                <ul className="mt-5 space-y-3 text-sm">
                  {contactInfo.hours.map((row) => (
                    <li key={row.day} className="flex justify-between gap-4">
                      <span className="text-muted-foreground">{row.day}</span>
                      <span className="font-medium">{row.time}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="ink-panel rounded-2xl p-6">
                <h2 className="font-display text-base font-semibold text-ink-foreground">
                  Follow us
                </h2>
                <ul className="mt-4 space-y-2 text-sm text-ink-foreground/70">
                  {["LinkedIn", "X", "GitHub", "Dribbble"].map((social) => (
                    <li key={social}>
                      <a href="#" className="hover:text-accent">
                        {social}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
