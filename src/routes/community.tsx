import { createFileRoute } from "@tanstack/react-router";
import { SectionPage } from "@/components/section-page";

export const Route = createFileRoute("/community")({
  component: CommunityPage,
});

function CommunityPage() {
  return (
    <SectionPage
      title="Community"
      description="Connect with founders, builders, and mentors in Pune through curated discussions and meaningful conversations."
      highlights={[
        "Join focused domain conversations and introductions.",
        "Get founder support and peer feedback loops.",
        "Collaborate with active community members every week.",
        "Discover opportunities shared by trusted builders.",
      ]}
      primaryCta={{ label: "Explore Spaces", to: "/spaces" }}
      secondaryCta={{ label: "Open to Build", to: "/open-to-build" }}
    />
  );
}
