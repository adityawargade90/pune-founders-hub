import { createFileRoute } from "@tanstack/react-router";
import { SectionPage } from "@/components/section-page";

export const Route = createFileRoute("/spaces")({
  component: SpacesPage,
});

function SpacesPage() {
  return (
    <SectionPage
      title="Spaces"
      description="Explore domain-led spaces built for founders and teams working on similar ideas in Pune."
      highlights={[
        "HealthTech, FinTech, AI/ML, SaaS and more.",
        "Find relevant builders faster with category-based discovery.",
        "Share asks, updates, and wins inside each space.",
        "Stay updated with curated discussions and meetups.",
      ]}
      primaryCta={{ label: "Join Community", to: "/community" }}
      secondaryCta={{ label: "View Events", to: "/events" }}
    />
  );
}
