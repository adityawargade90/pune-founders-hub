import { createFileRoute } from "@tanstack/react-router";
import { SectionPage } from "@/components/section-page";

export const Route = createFileRoute("/resources")({
  component: ResourcesPage,
});

function ResourcesPage() {
  return (
    <SectionPage
      title="Resources"
      description="Access practical startup resources curated for Pune founders, from playbooks to ecosystem contacts."
      highlights={[
        "Starter guides for early-stage founders.",
        "Templates for outreach, hiring, and execution.",
        "Curated tooling suggestions from the community.",
        "Useful links to local startup ecosystem support.",
      ]}
      primaryCta={{ label: "Build in Public", to: "/build-in-public" }}
      secondaryCta={{ label: "View Events", to: "/events" }}
    />
  );
}
