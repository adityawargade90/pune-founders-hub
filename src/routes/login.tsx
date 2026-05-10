import { createFileRoute } from "@tanstack/react-router";
import { SectionPage } from "@/components/section-page";

export const Route = createFileRoute("/login")({
  component: LoginPage,
});

function LoginPage() {
  return (
    <SectionPage
      title="Log In"
      description="Access your founder profile and continue building with the Pune startup community."
      highlights={[
        "Sign in to continue your existing journey.",
        "Manage your profile and collaboration preferences.",
        "Access personalized spaces and opportunities.",
        "Stay synced with events and community updates.",
      ]}
      primaryCta={{ label: "Join Community", to: "/community" }}
      secondaryCta={{ label: "Back to Home", to: "/" }}
    />
  );
}
