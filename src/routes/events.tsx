import { createFileRoute } from "@tanstack/react-router";
import { SectionPage } from "@/components/section-page";

export const Route = createFileRoute("/events")({
  component: EventsPage,
});

function EventsPage() {
  return (
    <SectionPage
      title="Events"
      description="Stay updated with founder meetups, workshops, and networking sessions happening across Pune."
      highlights={[
        "Track upcoming founder-focused gatherings.",
        "Attend networking sessions with local builders.",
        "Join practical workshops and startup talks.",
        "Never miss important community announcements.",
      ]}
      primaryCta={{ label: "Join Community", to: "/community" }}
      secondaryCta={{ label: "Build in Public", to: "/build-in-public" }}
    />
  );
}
