import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

type SectionPageProps = {
  title: string;
  description: string;
  highlights: string[];
  primaryCta: { label: string; to: string };
  secondaryCta: { label: string; to: string };
};

export function SectionPage({
  title,
  description,
  highlights,
  primaryCta,
  secondaryCta,
}: SectionPageProps) {
  return (
    <main className="min-h-screen bg-background">
      <section className="max-w-5xl mx-auto px-6 lg:px-10 py-16 lg:py-24">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-brand transition-colors"
        >
          ← Back to Home
        </Link>

        <h1 className="mt-6 font-display text-4xl md:text-5xl text-foreground">{title}</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl">{description}</p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {highlights.map((highlight) => (
            <div key={highlight} className="rounded-2xl border border-border bg-card px-5 py-4">
              <p className="text-sm text-foreground">{highlight}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            to={primaryCta.to}
            className="inline-flex items-center gap-2 rounded-xl bg-brand px-5 py-3 text-sm font-semibold text-brand-foreground hover:opacity-95 transition"
          >
            {primaryCta.label}
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to={secondaryCta.to}
            className="inline-flex items-center gap-2 rounded-xl border border-brand/30 bg-card px-5 py-3 text-sm font-semibold text-brand hover:bg-brand-soft transition"
          >
            {secondaryCta.label}
          </Link>
        </div>
      </section>
    </main>
  );
}
