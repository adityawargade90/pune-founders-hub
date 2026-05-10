import { Link, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/login")({
  component: LoginPage,
  head: () => ({
    meta: [{ title: "Log in — Build Pune Together" }],
  }),
});

function LoginPage() {
  return (
    <main className="min-h-screen bg-background px-6 py-16">
      <div className="mx-auto flex w-full max-w-md flex-col items-center rounded-2xl border border-border bg-card p-8 text-center shadow-card">
        <h1 className="font-display text-2xl text-foreground">Log in</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Login support is being enabled for the community. Please join from the homepage for now.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center justify-center rounded-xl bg-brand px-5 py-2.5 text-sm font-medium text-brand-foreground transition hover:opacity-95"
        >
          Go home
        </Link>
      </div>
    </main>
  );
}
