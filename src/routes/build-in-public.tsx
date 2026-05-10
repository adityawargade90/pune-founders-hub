import { createFileRoute } from "@tanstack/react-router";
import { SectionPage } from "@/components/section-page";

export const Route = createFileRoute("/build-in-public")({
  component: BuildInPublicPage,
});

function BuildInPublicPage() {
  return (
    <SectionPage
      title="Build in Public"
      description="Share your startup journey, milestones, and learnings openly to get actionable feedback from the Pune ecosystem."
      highlights={[
        "Post progress updates and product experiments.",
        "Receive feedback from fellow founders and operators.",
        "Create accountability through public milestones.",
        "Learn from journeys shared by local startup builders.",
      ]}
      primaryCta={{ label: "Explore Resources", to: "/resources" }}
      secondaryCta={{ label: "Join Community", to: "/community" }}
    />
  );
}
