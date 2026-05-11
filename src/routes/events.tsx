import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/bpt/AppShell";
import { mockEvents } from "@/lib/mock-data";
import { Calendar, MapPin, Clock, Users, Plus } from "lucide-react";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events — Build Pune Together" },
      { name: "description", content: "Meetups, workshops and roundtables for Pune founders." },
    ],
  }),
  component: EventsPage,
});

function EventsPage() {
  return (
    <AppShell>
      <div className="flex items-end justify-between mb-6">
        <div>
          <h1 className="font-display text-3xl">Events</h1>
          <p className="text-sm text-muted-foreground mt-1">Upcoming meetups and workshops in Pune.</p>
        </div>
        <button className="hidden sm:inline-flex items-center gap-2 h-10 px-4 rounded-xl bg-brand text-brand-foreground text-sm font-semibold">
          <Plus className="h-4 w-4" /> Host event
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        {mockEvents.map((e) => (
          <article key={e.id} className="rounded-2xl bg-card border border-border overflow-hidden hover:shadow-card transition">
            <div className="h-28 bg-gradient-to-br from-brand to-violet relative">
              <div className="absolute top-4 left-4 bg-white/95 rounded-xl p-2 text-center min-w-14 shadow-soft">
                <div className="text-[10px] uppercase text-brand font-bold tracking-wider">{e.date.split(",")[1]?.trim().split(" ")[1] ?? "MAY"}</div>
                <div className="text-2xl font-display leading-none text-foreground">{e.date.match(/\d+/)?.[0]}</div>
              </div>
            </div>
            <div className="p-5">
              <h3 className="font-semibold text-lg">{e.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{e.desc}</p>
              <div className="mt-4 space-y-1.5 text-xs text-muted-foreground">
                <div className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" /> {e.date}</div>
                <div className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> {e.time}</div>
                <div className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" /> {e.venue}</div>
                <div className="flex items-center gap-1.5"><Users className="h-3.5 w-3.5" /> {e.going} going</div>
              </div>
              <button className="mt-4 w-full h-10 rounded-xl bg-brand text-brand-foreground text-sm font-semibold">
                RSVP
              </button>
            </div>
          </article>
        ))}
      </div>
    </AppShell>
  );
}
