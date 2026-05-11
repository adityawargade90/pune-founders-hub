import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "@/components/bpt/AppShell";
import { mockSpaces } from "@/lib/mock-data";
import { Users, Plus } from "lucide-react";

export const Route = createFileRoute("/spaces")({
  head: () => ({
    meta: [
      { title: "Spaces — Build Pune Together" },
      { name: "description", content: "Domain-based communities for Pune founders and builders." },
    ],
  }),
  component: SpacesPage,
});

function SpacesPage() {
  return (
    <AppShell>
      <div className="flex items-end justify-between mb-6">
        <div>
          <h1 className="font-display text-3xl">Community Spaces</h1>
          <p className="text-sm text-muted-foreground mt-1">12+ domain spaces. Join the ones that fit you.</p>
        </div>
        <button className="hidden sm:inline-flex items-center gap-2 h-10 px-4 rounded-xl bg-brand text-brand-foreground text-sm font-semibold">
          <Plus className="h-4 w-4" /> Propose space
        </button>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {mockSpaces.map((s) => (
          <Link
            key={s.id}
            to="/spaces/$spaceId"
            params={{ spaceId: s.id }}
            className="group rounded-2xl bg-card border border-border p-5 hover:shadow-card hover:-translate-y-0.5 transition"
          >
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-2xl bg-brand-soft grid place-items-center text-2xl">
                {s.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold group-hover:text-brand transition">{s.name}</h3>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Users className="h-3 w-3" /> {s.members}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">{s.desc}</p>
                <div className="mt-3 flex items-center gap-2">
                  <div className="flex -space-x-1.5">
                    {["#7c3aed", "#ec4899", "#10b981", "#f59e0b"].map((c, i) => (
                      <span key={i} className="h-6 w-6 rounded-full border-2 border-card" style={{ background: c }} />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">+{s.members - 4} members</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </AppShell>
  );
}
