import { createFileRoute } from "@tanstack/react-router";
import {
  Users,
  Megaphone,
  Handshake,
  Calendar,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  LayoutGrid,
  HeartPulse,
  Coins,
  Cpu,
  TrendingUp,
  Building2,
  Rocket,
  Target,
  Quote,
  CalendarDays,
  MapPin,
  Gift,
  Heart,
  type LucideIcon,
} from "lucide-react";
import foundersImg from "@/assets/founders-pune.jpg";

export const Route = createFileRoute("/")({
  component: Landing,
  head: () => ({
    meta: [
      { title: "Build Pune Together — Pune's Founder-First Community" },
      {
        name: "description",
        content:
          "A community-first platform for founders, builders, and dreamers to connect, collaborate, and build the future of Pune.",
      },
    ],
  }),
});

function Landing() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Nav />
      <Hero />
      <FeatureRow />
      <StatsBand />
    </div>
  );
}

/* ───────────────────────────── NAV ───────────────────────────── */

function Nav() {
  const links = [
    { label: "Community", href: "#community" },
    { label: "Spaces", href: "#spaces" },
    { label: "Open to Build", href: "#open-to-build" },
    { label: "Events", href: "#events" },
    { label: "Build in Public", href: "#build-in-public" },
    { label: "Resources", href: "#resources" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-border/60">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 h-20 flex items-center gap-8">
        <a href="/" className="flex items-center gap-2.5 shrink-0">
          <Logo />
          <div className="leading-tight hidden sm:block">
            <div className="font-display text-[17px] tracking-tight">
              Build <span className="text-brand">Pune</span> Together
            </div>
            <div className="text-[10px] text-muted-foreground tracking-wide">
              Connect. Collaborate. Create Impact.
            </div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-7 mx-auto">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm text-foreground/80 hover:text-brand transition-colors font-medium"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto lg:ml-0 flex items-center gap-2">
          <a
            href="#resources"
            className="hidden sm:inline-flex items-center h-10 px-5 rounded-xl border border-brand/30 text-brand font-medium text-sm hover:bg-brand-soft transition"
          >
            Log in
          </a>
          <a
            href="#community"
            className="inline-flex items-center h-10 px-5 rounded-xl bg-brand text-brand-foreground font-medium text-sm shadow-soft hover:shadow-glow hover:opacity-95 transition"
          >
            Join the Community
          </a>
        </div>
      </div>
    </header>
  );
}

function Logo() {
  return (
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
  );
}

/* ───────────────────────────── HERO ───────────────────────────── */

function Hero() {
  return (
    <section id="community" className="relative scroll-mt-24">
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
        aria-hidden
      />
      {/* Soft blob */}
      <div
        aria-hidden
        className="absolute top-20 -left-20 h-[500px] w-[500px] rounded-full opacity-50 -z-10"
        style={{
          background: "radial-gradient(circle, oklch(0.85 0.1 290 / 0.5), transparent 65%)",
        }}
      />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 pt-12 lg:pt-20 pb-16">
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-14 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-soft border border-brand/15 px-4 py-1.5 mb-7">
              <Sparkles className="h-3.5 w-3.5 text-brand" />
              <span className="text-xs font-semibold text-brand">
                Pune's First Founder-First Platform
              </span>
            </div>

            <h1 className="font-display text-[clamp(2.75rem,6vw,5rem)] leading-[1.02] text-foreground">
              Build <span className="text-brand">Pune</span>
              <br />
              <span className="relative inline-block text-brand">
                Together
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 300 12"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 8 Q 75 2, 150 6 T 298 4"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    className="text-brand/40"
                  />
                </svg>
              </span>
            </h1>

            <p className="mt-7 text-lg text-muted-foreground max-w-lg leading-relaxed">
              A community-first platform for founders, builders, and dreamers to connect,
              collaborate, and build the future of Pune.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#community"
                className="group inline-flex items-center gap-2 h-13 px-6 py-3.5 rounded-2xl bg-brand text-brand-foreground font-semibold text-[15px] shadow-soft hover:shadow-glow transition"
              >
                Join the Community
                <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="#spaces"
                className="inline-flex items-center gap-2 h-13 px-6 py-3.5 rounded-2xl border border-brand/30 bg-card text-brand font-semibold text-[15px] hover:bg-brand-soft transition"
              >
                Explore Spaces
                <LayoutGrid className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
              <Trust icon={Gift} label="100% Free" sub="All core features" tone="text-brand" />
              <Trust icon={Heart} label="Made for Pune" sub="By the community" tone="text-pink" />
              <Trust
                icon={ShieldCheck}
                label="Trusted Network"
                sub="Safe & moderated"
                tone="text-mint"
              />
            </div>
          </div>

          {/* Right — illustration with floating cards */}
          <div className="relative aspect-square lg:aspect-[1/1.05] max-w-[640px] mx-auto w-full">
            <img
              src={foundersImg}
              alt="Pune founders building together at Shaniwar Wada"
              className="absolute inset-0 w-full h-full object-contain"
              fetchPriority="high"
            />

            {/* Spaces card */}
            <div className="absolute top-[8%] left-[2%] sm:left-[6%] w-[58%] max-w-[280px] rounded-2xl bg-card shadow-card border border-border/60 p-4 animate-float-slow">
              <div className="text-[13px] font-semibold mb-3">Community Spaces</div>
              <ul className="space-y-2.5">
                {[
                  {
                    icon: HeartPulse,
                    color: "text-pink",
                    bg: "bg-pink/10",
                    name: "HealthTech",
                    count: "234 members",
                  },
                  {
                    icon: Coins,
                    color: "text-mint",
                    bg: "bg-mint/15",
                    name: "FinTech",
                    count: "180 members",
                  },
                  {
                    icon: Cpu,
                    color: "text-violet",
                    bg: "bg-violet/15",
                    name: "AI / ML",
                    count: "312 members",
                  },
                  {
                    icon: TrendingUp,
                    color: "text-amber",
                    bg: "bg-amber/15",
                    name: "SaaS",
                    count: "420 members",
                  },
                ].map((s) => (
                  <li key={s.name} className="flex items-center gap-3">
                    <div className={`h-8 w-8 rounded-lg grid place-items-center ${s.bg}`}>
                      <s.icon className={`h-4 w-4 ${s.color}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[12px] font-medium leading-tight">{s.name}</div>
                      <div className="text-[10px] text-muted-foreground">{s.count}</div>
                    </div>
                    <span className="h-1.5 w-1.5 rounded-full bg-mint" />
                  </li>
                ))}
              </ul>
              <a
                href="#spaces"
                className="mt-3 inline-flex items-center gap-1 text-[11px] font-semibold text-brand"
              >
                View all spaces <ArrowRight className="h-3 w-3" />
              </a>
            </div>

            {/* Founders pill */}
            <div className="absolute top-[2%] right-[6%] rounded-2xl bg-card shadow-card border border-border/60 px-3 py-2.5 animate-float-slower">
              <div className="flex items-center -space-x-1.5 mb-1">
                {["#7c3aed", "#ec4899", "#10b981", "#f59e0b"].map((c, i) => (
                  <span
                    key={i}
                    className="h-7 w-7 rounded-full border-2 border-card grid place-items-center text-[10px] font-semibold text-white"
                    style={{ background: c }}
                  >
                    {["A", "P", "R", "S"][i]}
                  </span>
                ))}
                <span className="h-7 px-1.5 rounded-full border-2 border-card bg-brand text-brand-foreground text-[10px] font-bold grid place-items-center">
                  700+
                </span>
              </div>
              <div className="text-[11px] font-semibold leading-tight">Founders</div>
              <div className="text-[10px] text-muted-foreground">Already joined us</div>
            </div>

            {/* Next event card */}
            <div
              id="events"
              className="absolute top-[36%] right-[-2%] sm:right-[2%] w-[44%] max-w-[220px] rounded-2xl bg-card shadow-card border border-border/60 p-4 animate-float-slow scroll-mt-24"
            >
              <div className="text-[10px] uppercase tracking-wider text-brand font-bold">
                Next Event
              </div>
              <div className="font-display text-[15px] mt-1 leading-tight">
                Founder Connect Meetup #3
              </div>
              <div className="mt-3 space-y-1.5 text-[11px] text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <CalendarDays className="h-3 w-3" /> 25 May, 2025
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="h-3 w-3" /> Pune, India
                </div>
              </div>
              <a
                href="#events"
                className="mt-3 inline-flex items-center gap-1 text-[11px] font-semibold text-brand"
              >
                Register Now <ArrowRight className="h-3 w-3" />
              </a>
              <div className="absolute -top-3 -right-3 h-9 w-9 rounded-xl bg-brand grid place-items-center shadow-soft">
                <CalendarDays className="h-4 w-4 text-brand-foreground" />
              </div>
            </div>

            {/* Open to Build card */}
            <div
              id="open-to-build"
              className="absolute bottom-[2%] left-[12%] sm:left-[18%] w-[58%] max-w-[280px] rounded-2xl bg-card shadow-card border border-border/60 p-4 animate-float-slower scroll-mt-24"
            >
              <div className="text-[12px] font-semibold">Open to Build</div>
              <div className="text-[10px] text-muted-foreground">23 opportunities</div>
              <div className="mt-3 flex items-center justify-between">
                <div className="flex items-center -space-x-1.5">
                  {["#f43f5e", "#8b5cf6", "#06b6d4", "#10b981"].map((c, i) => (
                    <span
                      key={i}
                      className="h-7 w-7 rounded-full border-2 border-card"
                      style={{ background: c }}
                    />
                  ))}
                  <span className="h-7 w-7 rounded-full border-2 border-card bg-brand-soft text-brand text-[9px] font-bold grid place-items-center">
                    +18
                  </span>
                </div>
                <a
                  href="#open-to-build"
                  className="inline-flex items-center h-8 px-3 rounded-full bg-brand-soft text-brand text-[11px] font-semibold hover:bg-brand hover:text-brand-foreground transition"
                >
                  Explore Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Trust({
  icon: Icon,
  label,
  sub,
  tone,
}: {
  icon: LucideIcon;
  label: string;
  sub: string;
  tone: string;
}) {
  return (
    <div className="flex items-center gap-2.5">
      <div className="h-9 w-9 rounded-full bg-card border border-border grid place-items-center shrink-0">
        <Icon className={`h-4 w-4 ${tone}`} />
      </div>
      <div className="leading-tight">
        <div className="text-[12px] font-semibold">{label}</div>
        <div className="text-[10px] text-muted-foreground">{sub}</div>
      </div>
    </div>
  );
}

/* ───────────────────────────── FEATURE ROW ───────────────────────────── */

function FeatureRow() {
  const features = [
    {
      icon: Users,
      title: "Community Spaces",
      desc: "12+ domain-based spaces to connect and grow together.",
      bg: "bg-brand-soft",
      color: "text-brand",
    },
    {
      icon: Megaphone,
      title: "Build in Public",
      desc: "Share your journey, get feedback and build in the open.",
      bg: "bg-mint/15",
      color: "text-mint",
    },
    {
      icon: Handshake,
      title: "Open to Build",
      desc: "Find co-founders, team members and collaboration opportunities.",
      bg: "bg-amber/15",
      color: "text-amber",
    },
    {
      icon: Calendar,
      title: "Events",
      desc: "Workshops, meetups and networking events in Pune.",
      bg: "bg-pink/15",
      color: "text-pink",
    },
    {
      icon: MessageCircle,
      title: "Direct Messaging",
      desc: "Connect directly with founders and builders.",
      bg: "bg-sky/15",
      color: "text-sky",
    },
    {
      icon: ShieldCheck,
      title: "Safe & Moderated",
      desc: "Built-in moderation to keep the community healthy and safe.",
      bg: "bg-violet/15",
      color: "text-violet",
    },
  ];

  return (
    <section id="spaces" className="px-6 lg:px-10 pb-20 scroll-mt-24">
      <div className="max-w-[1400px] mx-auto rounded-3xl border border-border bg-card shadow-soft p-8 lg:p-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {features.map((f) => (
            <div key={f.title} className="group">
              <div
                className={`h-12 w-12 rounded-2xl ${f.bg} grid place-items-center mb-4 group-hover:scale-105 transition-transform`}
              >
                <f.icon className={`h-5 w-5 ${f.color}`} />
              </div>
              <h3 className="font-semibold text-[15px] mb-1.5">{f.title}</h3>
              <p className="text-[13px] text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────── STATS BAND ───────────────────────────── */

function StatsBand() {
  const stats = [
    {
      icon: Users,
      value: "700+",
      label: "Founders & Builders",
      sub: "And growing every day",
      color: "text-brand",
      ring: "ring-brand/30",
    },
    {
      icon: Building2,
      value: "12+",
      label: "Community Spaces",
      sub: "Across domains",
      color: "text-mint",
      ring: "ring-mint/30",
    },
    {
      icon: Rocket,
      value: "2",
      label: "Successful Events",
      sub: "And many more to come",
      color: "text-amber",
      ring: "ring-amber/30",
    },
    {
      icon: Target,
      value: "1",
      label: "Mission",
      sub: "Build Pune Together",
      color: "text-pink",
      ring: "ring-pink/30",
    },
  ];

  return (
    <section id="build-in-public" className="px-6 lg:px-10 pb-24 scroll-mt-24">
      <div
        className="max-w-[1400px] mx-auto rounded-3xl p-10 lg:p-12 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, oklch(0.18 0.05 280) 0%, oklch(0.13 0.04 280) 100%)",
        }}
      >
        {/* glow */}
        <div
          aria-hidden
          className="absolute -top-32 -right-32 h-80 w-80 rounded-full"
          style={{
            background: "radial-gradient(circle, oklch(0.55 0.24 285 / 0.35), transparent 70%)",
          }}
        />
        <div
          aria-hidden
          className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full"
          style={{
            background: "radial-gradient(circle, oklch(0.7 0.18 0 / 0.25), transparent 70%)",
          }}
        />

        <div className="relative grid grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 items-center">
          {stats.map((s) => (
            <div key={s.label} className="text-white/95">
              <div
                className={`h-14 w-14 rounded-full bg-white/[0.04] ring-1 ${s.ring} grid place-items-center mb-4`}
              >
                <s.icon className={`h-6 w-6 ${s.color}`} />
              </div>
              <div className="font-display text-[2.5rem] leading-none text-white">{s.value}</div>
              <div className="mt-2 text-sm font-semibold">{s.label}</div>
              <div className="text-xs text-white/60 mt-0.5">{s.sub}</div>
            </div>
          ))}

          {/* Quote */}
          <div className="text-white/95 col-span-2 lg:col-span-1 lg:border-l lg:border-white/10 lg:pl-8">
            <Quote className="h-5 w-5 text-brand mb-3" />
            <p className="font-display text-[17px] leading-snug text-white">
              Alone we can do so little; together we can do so much.
            </p>
            <div className="mt-3 text-[11px] text-white/50 uppercase tracking-wider">
              — Build Pune Together
            </div>
          </div>
        </div>
      </div>

      <p id="resources" className="text-center mt-10 text-xs text-muted-foreground scroll-mt-24">
        Made with 💜 in Pune · © {new Date().getFullYear()} Build Pune Together
      </p>
    </section>
  );
}
