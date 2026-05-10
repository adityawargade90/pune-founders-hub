import { createFileRoute } from "@tanstack/react-router";
import { SectionPage } from "@/components/section-page";

export const Route = createFileRoute("/open-to-build")({
  component: OpenToBuildPage,
});

function OpenToBuildPage() {
  return (
    <SectionPage
      title="Open to Build"
      description="Discover active collaboration opportunities and connect with co-founders, teammates, and contributors."
      highlights={[
        "Browse live founder collaboration requests.",
        "Find product, growth, and tech collaborators.",
        "Signal your skills and availability to build.",
        "Move from idea to execution with trusted partners.",
      ]}
      primaryCta={{ label: "Browse Spaces", to: "/spaces" }}
      secondaryCta={{ label: "Join Community", to: "/community" }}
    />
  );
}
