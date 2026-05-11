import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { AppShell, Avatar } from "@/components/bpt/AppShell";
import { mockSpaces, mockPosts, milestoneMeta, type MilestoneType } from "@/lib/mock-data";
import { Users, ArrowLeft, Bell } from "lucide-react";

export const Route = createFileRoute("/spaces/$spaceId")({
  component: SpacePage,
});

function SpacePage() {
  const { spaceId } = Route.useParams();
  const space = mockSpaces.find((s) => s.id === spaceId);
  if (!space) throw notFound();

  return (
    <AppShell>
      <Link to="/spaces" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-brand mb-4">
        <ArrowLeft className="h-4 w-4" /> All spaces
      </Link>

      <div className="rounded-3xl bg-gradient-to-br from-brand to-violet p-8 text-brand-foreground relative overflow-hidden">
        <div className="text-5xl">{space.icon}</div>
        <h1 className="font-display text-3xl mt-3">{space.name}</h1>
        <p className="text-sm opacity-90 mt-1 max-w-md">{space.desc}</p>
        <div className="mt-5 flex items-center gap-3">
          <button className="h-10 px-5 rounded-xl bg-white text-brand text-sm font-semibold">Join space</button>
          <button className="h-10 w-10 grid place-items-center rounded-xl bg-white/15 hover:bg-white/25">
            <Bell className="h-4 w-4" />
          </button>
          <span className="ml-auto text-sm flex items-center gap-1.5 opacity-90">
            <Users className="h-4 w-4" /> {space.members} members
          </span>
        </div>
      </div>

      <div className="mt-6 space-y-4">
        <h2 className="font-semibold">Recent activity</h2>
        {mockPosts.slice(0, 3).map((p) => {
          const m = milestoneMeta[p.type as MilestoneType];
          return (
            <article key={p.id} className="rounded-2xl bg-card border border-border p-5">
              <div className="flex items-center gap-3 mb-3">
                <Avatar name={p.author.name} color={p.author.color} size={36} />
                <div>
                  <div className="text-sm font-semibold">{p.author.name}</div>
                  <div className="text-xs text-muted-foreground">{p.author.role} · {p.createdAt}</div>
                </div>
                <span className={`ml-auto px-2 py-0.5 rounded-full text-[10px] font-semibold ${m.tone}`}>
                  {m.emoji} {m.label}
                </span>
              </div>
              <p className="text-sm leading-relaxed">{p.content}</p>
            </article>
          );
        })}
      </div>
    </AppShell>
  );
}
