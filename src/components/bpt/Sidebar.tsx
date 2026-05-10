import { Home, Users, Layout, Calendar, MessageCircle, Sparkles, BookOpen, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

const primary = [
  { icon: Home, label: "Home", active: true },
  { icon: Users, label: "Community" },
  { icon: Layout, label: "Board" },
  { icon: Calendar, label: "Events" },
  { icon: MessageCircle, label: "Messages", badge: 3 },
];

const secondary = [
  { icon: Sparkles, label: "Mentors", soon: true },
  { icon: BookOpen, label: "Resources", soon: true },
];

export function Sidebar() {
  return (
    <aside className="hidden lg:flex w-64 shrink-0 flex-col border-r border-border bg-card/50 backdrop-blur-sm h-screen sticky top-0 px-4 py-6">
      <div className="flex items-center gap-2 px-2 mb-8">
        <div className="h-9 w-9 rounded-xl bg-[var(--gradient-warm)] grid place-items-center shadow-soft">
          <span className="font-display text-lg text-white">B</span>
        </div>
        <div className="leading-tight">
          <div className="font-semibold text-sm">Build Pune</div>
          <div className="text-xs text-muted-foreground">Together</div>
        </div>
      </div>

      <nav className="flex flex-col gap-0.5">
        {primary.map((item) => (
          <NavItem key={item.label} {...item} />
        ))}
        <div className="my-3 h-px bg-border" />
        {secondary.map((item) => (
          <NavItem key={item.label} {...item} />
        ))}
      </nav>

      <div className="mt-auto">
        <div className="rounded-2xl border border-border bg-[var(--saffron-soft)]/50 p-4">
          <div className="text-xs font-medium text-foreground">Unlock FounderFit™</div>
          <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
            AI matches with founders aligned to your stage & vision.
          </p>
          <button className="mt-3 w-full text-xs font-medium rounded-lg bg-foreground text-background py-2 hover:opacity-90 transition">
            Upgrade to Pro
          </button>
        </div>
        <button className="mt-4 flex items-center gap-3 px-3 py-2 w-full text-sm text-muted-foreground hover:text-foreground transition">
          <Settings className="h-4 w-4" /> Settings
        </button>
      </div>
    </aside>
  );
}

function NavItem({
  icon: Icon,
  label,
  active,
  badge,
  soon,
}: {
  icon: any;
  label: string;
  active?: boolean;
  badge?: number;
  soon?: boolean;
}) {
  return (
    <button
      className={cn(
        "group flex items-center gap-3 px-3 py-2 rounded-xl text-sm transition relative",
        active
          ? "bg-foreground text-background font-medium"
          : "text-muted-foreground hover:bg-accent hover:text-foreground"
      )}
    >
      <Icon className="h-[18px] w-[18px]" />
      <span>{label}</span>
      {badge && (
        <span className="ml-auto text-[10px] font-semibold bg-saffron text-white rounded-full h-5 min-w-5 px-1.5 grid place-items-center">
          {badge}
        </span>
      )}
      {soon && (
        <span className="ml-auto text-[10px] uppercase tracking-wide text-muted-foreground/70">Soon</span>
      )}
    </button>
  );
}
