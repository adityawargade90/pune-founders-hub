import { Link, useRouterState } from "@tanstack/react-router";
import {
  Home,
  Compass,
  ClipboardList,
  Calendar,
  MessageCircle,
  User,
  Bell,
  Search,
  Sparkles,
} from "lucide-react";

const nav = [
  { to: "/feed", label: "Feed", icon: Home },
  { to: "/spaces", label: "Spaces", icon: Compass },
  { to: "/board", label: "Open to Build", icon: ClipboardList },
  { to: "/events", label: "Events", icon: Calendar },
  { to: "/messages", label: "Messages", icon: MessageCircle },
  { to: "/profile", label: "Profile", icon: User },
];

export function AppShell({ children, right }: { children: React.ReactNode; right?: React.ReactNode }) {
  const path = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8 grid lg:grid-cols-[240px_1fr_320px] gap-6 pt-6 pb-24 lg:pb-10">
        {/* Sidebar */}
        <aside className="hidden lg:block">
          <nav className="sticky top-24 space-y-1">
            {nav.map((n) => {
              const active = path === n.to || (n.to !== "/feed" && path.startsWith(n.to));
              return (
                <Link
                  key={n.to}
                  to={n.to}
                  className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition ${
                    active
                      ? "bg-brand-soft text-brand"
                      : "text-foreground/70 hover:bg-muted hover:text-foreground"
                  }`}
                >
                  <n.icon className="h-[18px] w-[18px]" />
                  {n.label}
                </Link>
              );
            })}
            <div className="mt-6 p-4 rounded-2xl bg-gradient-to-br from-brand to-violet text-brand-foreground">
              <Sparkles className="h-5 w-5 mb-2" />
              <div className="font-semibold text-sm">Become a Builder</div>
              <div className="text-xs opacity-80 mt-1">Unlock premium spaces, DMs and analytics.</div>
              <button className="mt-3 w-full h-8 rounded-lg bg-white/15 hover:bg-white/25 text-xs font-semibold transition">
                Upgrade
              </button>
            </div>
          </nav>
        </aside>

        {/* Main */}
        <main className="min-w-0">{children}</main>

        {/* Right rail */}
        <aside className="hidden lg:block">{right}</aside>
      </div>

      {/* Mobile bottom nav */}
      <nav className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-card/95 backdrop-blur border-t border-border">
        <div className="grid grid-cols-6">
          {nav.map((n) => {
            const active = path === n.to || (n.to !== "/feed" && path.startsWith(n.to));
            return (
              <Link
                key={n.to}
                to={n.to}
                className={`flex flex-col items-center justify-center py-2.5 text-[10px] ${
                  active ? "text-brand" : "text-muted-foreground"
                }`}
              >
                <n.icon className="h-5 w-5 mb-0.5" />
                {n.label.split(" ")[0]}
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}

function TopBar() {
  return (
    <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8 h-16 flex items-center gap-4">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <div className="h-9 w-9 rounded-xl bg-brand-soft grid place-items-center">
            <div className="grid grid-cols-2 gap-0.5">
              {[0, 1, 2, 3].map((i) => (
                <span
                  key={i}
                  className="h-1.5 w-1.5 rounded-full bg-brand"
                  style={{ opacity: i === 1 || i === 2 ? 1 : 0.55 }}
                />
              ))}
            </div>
          </div>
          <div className="font-display text-[15px] hidden sm:block">
            Build <span className="text-brand">Pune</span> Together
          </div>
        </Link>

        <div className="flex-1 max-w-md mx-auto relative hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            placeholder="Search founders, spaces, posts…"
            className="w-full h-10 pl-10 pr-4 rounded-xl bg-muted border border-transparent focus:border-brand/30 focus:bg-card outline-none text-sm transition"
          />
        </div>

        <div className="ml-auto flex items-center gap-2">
          <button className="h-10 w-10 grid place-items-center rounded-xl hover:bg-muted transition relative">
            <Bell className="h-[18px] w-[18px]" />
            <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-pink" />
          </button>
          <Link to="/profile" className="h-9 w-9 rounded-full bg-gradient-to-br from-brand to-violet grid place-items-center text-brand-foreground text-sm font-semibold">
            A
          </Link>
        </div>
      </div>
    </header>
  );
}

export function Avatar({ name, color, size = 40 }: { name: string; color: string; size?: number }) {
  return (
    <div
      className="rounded-full grid place-items-center text-white font-semibold shrink-0"
      style={{ background: color, height: size, width: size, fontSize: size * 0.4 }}
    >
      {name.charAt(0)}
    </div>
  );
}
