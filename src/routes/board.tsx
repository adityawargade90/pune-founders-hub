import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AppShell } from "@/components/bpt/AppShell";
import { mockBoard } from "@/lib/mock-data";
import { Briefcase, Users, Sparkles, Plus, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/board")({
  head: () => ({
    meta: [
      { title: "Open to Build — Build Pune Together" },
      { name: "description", content: "Find co-founders, hires, freelancers and beta testers in Pune." },
    ],
  }),
  component: BoardPage,
});

const filters = [
  { id: "all", label: "All", icon: Sparkles },
  { id: "co-founder", label: "Co-founder", icon: Users },
  { id: "hire", label: "Full-time", icon: Briefcase },
  { id: "freelance", label: "Freelance", icon: Briefcase },
  { id: "beta", label: "Beta", icon: Sparkles },
];

function BoardPage() {
  const [active, setActive] = useState("all");
  const list = active === "all" ? mockBoard : mockBoard.filter((b) => b.type === active);

  return (
    <AppShell>
      <div className="flex items-end justify-between mb-6">
        <div>
          <h1 className="font-display text-3xl">Open to Build</h1>
          <p className="text-sm text-muted-foreground mt-1">Co-founders, hires, freelancers and beta testers.</p>
        </div>
        <button className="hidden sm:inline-flex items-center gap-2 h-10 px-4 rounded-xl bg-brand text-brand-foreground text-sm font-semibold">
          <Plus className="h-4 w-4" /> Post opportunity
        </button>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-2 mb-5 -mx-1 px-1">
        {filters.map((f) => (
          <button
            key={f.id}
            onClick={() => setActive(f.id)}
            className={`inline-flex items-center gap-1.5 px-4 h-9 rounded-full text-sm font-medium border whitespace-nowrap transition ${
              active === f.id ? "bg-brand text-brand-foreground border-brand" : "border-border hover:border-brand/30"
            }`}
          >
            <f.icon className="h-3.5 w-3.5" /> {f.label}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {list.map((b) => (
          <article key={b.id} className="rounded-2xl bg-card border border-border p-5 hover:shadow-card transition">
            <div className="flex flex-wrap items-start gap-3">
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-brand-soft text-brand uppercase">{b.type}</span>
                  <span className="text-xs text-muted-foreground">{b.domain}</span>
                  <span className="text-xs text-muted-foreground">· {b.posted}</span>
                </div>
                <h3 className="font-semibold text-lg mt-2">{b.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{b.description}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {b.skills.map((s) => (
                    <span key={s} className="px-2.5 py-1 rounded-md text-xs bg-muted">{s}</span>
                  ))}
                </div>
                <div className="mt-4 text-xs text-muted-foreground">Posted by <span className="font-medium text-foreground">{b.author}</span> · {b.role}</div>
              </div>
              <button className="inline-flex items-center gap-1 h-10 px-4 rounded-xl bg-brand text-brand-foreground text-sm font-semibold whitespace-nowrap">
                Reach out <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </article>
        ))}
      </div>
    </AppShell>
  );
}
