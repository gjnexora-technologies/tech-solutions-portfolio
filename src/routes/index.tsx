import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Gallery } from "@/components/site/Gallery";
import { About, Hero, ImageStory, Services, TrustStrip } from "@/components/site/HomeTop";
import {
  FinalCta,
  Impact,
  Industries,
  Insights,
  Process,
  Projects,
  Showcase,
  Team,
  Technology,
  Testimonials,
  WhyUs,
} from "@/components/site/HomeBottom";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TECH SOLUTIONS — Digital Products, Business Systems & AI" },
      {
        name: "description",
        content:
          "TECH SOLUTIONS builds modern digital products, intelligent business systems, and scalable technology for organizations ready to grow.",
      },
      { property: "og:title", content: "TECH SOLUTIONS — Technology That Moves Businesses Forward" },
      {
        property: "og:description",
        content:
          "Custom software, AI solutions, business systems, analytics and automation built around real business problems.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <About />
        <ImageStory />
        <Services />
        <Projects />
        <Showcase />
        <Industries />
        <Technology />
        <WhyUs />
        <Process />
        <Team />
        <Impact />
        <Testimonials />
        <Insights />
        <Gallery />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
