import { createFileRoute } from "@tanstack/react-router";
import { Sidebar } from "@/components/bpt/Sidebar";
import { MobileNav } from "@/components/bpt/MobileNav";
import { MilestoneComposer } from "@/components/bpt/MilestoneComposer";
import { MilestoneCard, type Milestone } from "@/components/bpt/MilestoneCard";
import { RightRail } from "@/components/bpt/RightRail";
import { Search, Bell } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Build Pune Together — The home for Pune founders" },
      {
        name: "description",
        content:
          "Join Pune's founder community. Share milestones, find co-founders, attend events, and build in public with the city's most ambitious builders.",
      },
    ],
  }),
});

const feed: Milestone[] = [
  {
    id: "1",
    author: { name: "Priya Deshpande", role: "Founder · FinTech", initial: "P", gradient: "linear-gradient(135deg,#F59E42,#E0537A)" },
    type: "FIRST_CUSTOMER",
    body: "Closed our first paying customer today — a Kothrud-based CA firm signed up for the ₹4,999/mo plan. Six months of cold emails finally turned into one yes. Onwards 🙏",
    time: "2h ago",
    reactions: { celebrate: 47, relate: 12, curious: 8 },
    comments: 14,
    domain: "FinTech",
  },
  {
    id: "2",
    author: { name: "Rohan Kulkarni", role: "Builder · AI/ML", initial: "R", gradient: "linear-gradient(135deg,#6366F1,#8B5CF6)" },
    type: "COMPLETED_MVP",
    body: "After 11 weekends of hacking, the v1 of our voice-first agent for Marathi customer support is live. It still mispronounces 'Aundh' but we're getting there.",
    time: "5h ago",
    reactions: { celebrate: 89, relate: 31, curious: 24 },
    comments: 27,
    domain: "AI/ML",
  },
  {
    id: "3",
    author: { name: "Anaya Joshi", role: "Founder · D2C", initial: "A", gradient: "linear-gradient(135deg,#10B981,#06B6D4)" },
    type: "REVENUE_MILESTONE",
    body: "Crossed ₹10L MRR this month 🎯 Most of it came from organic Instagram + referrals from our first 100 customers. No paid ads yet. Happy to share what worked.",
    time: "Yesterday",
    reactions: { celebrate: 156, relate: 42, curious: 67 },
    comments: 38,
    domain: "D2C",
  },
  {
    id: "4",
    author: { name: "Vikram Patil", role: "Founder · ClimateTech", initial: "V", gradient: "linear-gradient(135deg,#F59E42,#84CC16)" },
    type: "FOUND_COFOUNDER",
    body: "Met my co-founder through a BPT MatchRoom three weeks ago. We spent 14 days in a shared doc figuring out if we'd kill each other. We didn't. Signing the cap table tomorrow.",
    time: "Yesterday",
    reactions: { celebrate: 203, relate: 58, curious: 19 },
    comments: 44,
  },
  {
    id: "5",
    author: { name: "Sneha Iyer", role: "Founder · HealthTech", initial: "S", gradient: "linear-gradient(135deg,#EC4899,#F59E42)" },
    type: "GOT_PRESS",
    body: "YourStory just covered our launch — pretty surreal to read your own pitch back in someone else's words. Link in comments for anyone curious.",
    time: "2 days ago",
    reactions: { celebrate: 94, relate: 21, curious: 33 },
    comments: 19,
    domain: "HealthTech",
  },
];

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        <Sidebar />

        <main className="flex-1 min-w-0">
          <header className="sticky top-0 z-30 border-b border-border bg-background/80 backdrop-blur-md">
            <div className="flex items-center gap-4 px-4 lg:px-8 h-16 max-w-3xl xl:max-w-none mx-auto xl:mx-0">
              <div>
                <h1 className="text-lg font-semibold tracking-tight">Build in Public</h1>
                <p className="text-[11px] text-muted-foreground">5,247 founders building in Pune</p>
              </div>
              <div className="ml-auto flex items-center gap-2">
                <button className="hidden sm:flex items-center gap-2 text-sm text-muted-foreground bg-secondary rounded-full px-4 py-2 hover:bg-accent transition">
                  <Search className="h-4 w-4" />
                  <span>Search builders, spaces…</span>
                </button>
                <button className="relative h-9 w-9 grid place-items-center rounded-full hover:bg-accent transition">
                  <Bell className="h-4 w-4" />
                  <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-saffron ring-2 ring-background" />
                </button>
              </div>
            </div>
          </header>

          <div className="px-4 lg:px-8 py-6 pb-24 lg:pb-8">
            <div className="flex gap-8 max-w-6xl mx-auto xl:max-w-none xl:mx-0">
              <div className="flex-1 min-w-0 max-w-2xl mx-auto xl:mx-0">
                <HeroBanner />

                <div className="mt-6">
                  <MilestoneComposer />
                </div>

                <div className="mt-6 flex items-center gap-2">
                  <FilterPill active>Latest</FilterPill>
                  <FilterPill>Top this week</FilterPill>
                  <FilterPill>Following</FilterPill>
                </div>

                <div className="mt-4 flex flex-col gap-4">
                  {feed.map((m) => (
                    <MilestoneCard key={m.id} m={m} />
                  ))}
                </div>
              </div>

              <RightRail />
            </div>
          </div>
        </main>
      </div>
      <MobileNav />
    </div>
  );
}

function FilterPill({ children, active }: { children: React.ReactNode; active?: boolean }) {
  return (
    <button
      className={
        active
          ? "text-xs font-medium px-3.5 py-1.5 rounded-full bg-foreground text-background"
          : "text-xs font-medium px-3.5 py-1.5 rounded-full text-muted-foreground hover:bg-accent transition"
      }
    >
      {children}
    </button>
  );
}

import heroPune from "@/assets/hero-pune.jpg";

function HeroBanner() {
  return (
    <div className="relative rounded-2xl overflow-hidden border border-border shadow-soft">
      <img
        src={heroPune}
        alt="Pune skyline at dawn"
        width={1536}
        height={640}
        className="w-full h-32 sm:h-40 object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
      <div className="absolute inset-0 p-5 sm:p-6 flex flex-col justify-center max-w-md">
        <div className="text-[10px] uppercase tracking-[0.15em] text-saffron font-semibold">
          Good morning, Pune
        </div>
        <h2 className="font-display text-2xl sm:text-3xl mt-1 leading-tight">
          47 founders shipped<br />while you slept.
        </h2>
        <p className="text-xs text-muted-foreground mt-2">
          Catch up on what your community built today.
        </p>
      </div>
    </div>
  );
}
