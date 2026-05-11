import { createFileRoute } from "@tanstack/react-router";
import { AppShell, Avatar } from "@/components/bpt/AppShell";
import { OrbitalBackdrop } from "@/components/bpt/OrbitalBackdrop";
import { mockUser, mockPosts, milestoneMeta, type MilestoneType } from "@/lib/mock-data";
import { MapPin, Briefcase, Calendar, Edit3, Link as LinkIcon, Twitter } from "lucide-react";

export const Route = createFileRoute("/profile")({
  head: () => ({ meta: [{ title: "Profile — Build Pune Together" }] }),
  component: ProfilePage,
});

function ProfilePage() {
  return (
    <AppShell>
      <div className="bpt-hero-shell rounded-3xl overflow-hidden">
        <OrbitalBackdrop />
        <div className="h-32 bg-gradient-to-br from-brand via-violet to-pink" />
        <div className="relative z-10 px-6 pb-6 -mt-12">
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div className="h-24 w-24 rounded-3xl border-4 border-card bg-gradient-to-br from-brand to-violet grid place-items-center text-white text-3xl font-bold">
              {mockUser.name.charAt(0)}
            </div>
            <button className="inline-flex items-center gap-2 h-10 px-4 rounded-xl border border-border text-sm font-semibold hover:bg-muted">
              <Edit3 className="h-4 w-4" /> Edit profile
            </button>
          </div>
          <h1 className="font-display text-2xl mt-4">{mockUser.name}</h1>
          <div className="text-sm text-muted-foreground">@{mockUser.handle}</div>
          <p className="mt-3 text-[15px] max-w-xl">{mockUser.bio}</p>
          <div className="mt-4 flex flex-wrap gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5"><Briefcase className="h-4 w-4" /> {mockUser.role}</span>
            <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4" /> {mockUser.city}</span>
            <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /> Joined Jan 2025</span>
            <a className="flex items-center gap-1.5 text-brand"><LinkIcon className="h-4 w-4" /> healthsync.in</a>
            <a className="flex items-center gap-1.5 text-brand"><Twitter className="h-4 w-4" /> @aarav</a>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {["HealthTech", "B2B SaaS", "AI / ML"].map((t) => (
              <span key={t} className="px-3 py-1 rounded-full bg-brand-soft text-brand text-xs font-semibold">{t}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 grid sm:grid-cols-3 gap-4">
        {[
          { label: "Posts", value: 42 },
          { label: "Followers", value: 312 },
          { label: "Building since", value: "2023" },
        ].map((s) => (
          <div key={s.label} className="bpt-depth-card p-5">
            <div className="text-2xl font-display">{s.value}</div>
            <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      <h2 className="font-semibold mt-8 mb-4">Recent milestones</h2>
      <div className="space-y-4">
        {mockPosts.slice(0, 3).map((p) => {
          const m = milestoneMeta[p.type as MilestoneType];
          return (
            <article key={p.id} className="bpt-depth-card p-5">
              <div className="flex items-center gap-3 mb-3">
                <Avatar name={mockUser.name} color={mockUser.avatarColor} size={36} />
                <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${m.tone}`}>{m.emoji} {m.label}</span>
                <span className="text-xs text-muted-foreground ml-auto">{p.createdAt}</span>
              </div>
              <p className="text-sm leading-relaxed">{p.content}</p>
            </article>
          );
        })}
      </div>
    </AppShell>
  );
}
