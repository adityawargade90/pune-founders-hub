import { TrendingUp, Calendar, Users } from "lucide-react";

export function RightRail() {
  return (
    <aside className="hidden xl:flex w-80 shrink-0 flex-col gap-4 sticky top-6 h-fit">
      <div className="rounded-2xl border border-border bg-card shadow-soft p-5">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="h-4 w-4 text-saffron" />
          <h3 className="font-medium text-sm">Trending this week</h3>
        </div>
        <ul className="space-y-3.5">
          {[
            { tag: "FinTech", count: "42 builders shipped" },
            { tag: "AI / ML", count: "31 new milestones" },
            { tag: "D2C", count: "18 launched" },
            { tag: "ClimateTech", count: "12 raised funding" },
          ].map((t, i) => (
            <li key={t.tag} className="flex items-center gap-3">
              <span className="text-xs font-medium text-muted-foreground tabular-nums w-4">{i + 1}</span>
              <div className="flex-1">
                <div className="text-sm font-medium">#{t.tag}</div>
                <div className="text-xs text-muted-foreground">{t.count}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-2xl border border-border bg-card shadow-soft p-5">
        <div className="flex items-center gap-2 mb-4">
          <Calendar className="h-4 w-4 text-saffron" />
          <h3 className="font-medium text-sm">This week in Pune</h3>
        </div>
        <ul className="space-y-3">
          {[
            { day: "THU", date: "14", title: "Founders' Coffee at Kalyani Nagar", count: 24 },
            { day: "SAT", date: "16", title: "Build in Public — Demo Night", count: 87 },
            { day: "TUE", date: "19", title: "AI Tinkerers Pune Meetup", count: 53 },
          ].map((e) => (
            <li key={e.title} className="flex gap-3 group cursor-pointer">
              <div className="h-12 w-12 rounded-xl bg-saffron-soft text-foreground grid place-items-center shrink-0">
                <div className="text-center leading-none">
                  <div className="text-[9px] uppercase tracking-wider text-muted-foreground">{e.day}</div>
                  <div className="text-base font-semibold mt-0.5">{e.date}</div>
                </div>
              </div>
              <div className="min-w-0">
                <div className="text-sm font-medium truncate group-hover:text-saffron transition">{e.title}</div>
                <div className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
                  <Users className="h-3 w-3" /> {e.count} going
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <p className="text-[11px] text-muted-foreground/70 px-2 leading-relaxed">
        Built with care in Pune. The home for founders shipping in public. ☕
      </p>
    </aside>
  );
}
