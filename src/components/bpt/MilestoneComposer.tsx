import { useState } from "react";
import { PartyPopper, Rocket, IndianRupee, Handshake, CheckCircle2, Newspaper, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const types = [
  { id: "FIRST_CUSTOMER", label: "First customer", icon: Handshake, tone: "celebrate" },
  { id: "LAUNCHED", label: "Launched", icon: Rocket, tone: "ama" },
  { id: "REVENUE_MILESTONE", label: "Revenue", icon: IndianRupee, tone: "team" },
  { id: "FOUND_COFOUNDER", label: "Found co-founder", icon: PartyPopper, tone: "relate" },
  { id: "COMPLETED_MVP", label: "Shipped MVP", icon: CheckCircle2, tone: "discussion" },
  { id: "GOT_PRESS", label: "Got press", icon: Newspaper, tone: "resource" },
  { id: "CUSTOM", label: "Something else", icon: Sparkles, tone: "muted" },
];

const toneClass: Record<string, string> = {
  celebrate: "data-[on=true]:bg-celebrate/15 data-[on=true]:text-celebrate data-[on=true]:border-celebrate/40",
  ama: "data-[on=true]:bg-ama/15 data-[on=true]:text-ama data-[on=true]:border-ama/40",
  team: "data-[on=true]:bg-team/15 data-[on=true]:text-team data-[on=true]:border-team/40",
  relate: "data-[on=true]:bg-relate/15 data-[on=true]:text-relate data-[on=true]:border-relate/40",
  discussion: "data-[on=true]:bg-discussion/15 data-[on=true]:text-discussion data-[on=true]:border-discussion/40",
  resource: "data-[on=true]:bg-resource/15 data-[on=true]:text-resource data-[on=true]:border-resource/40",
  muted: "data-[on=true]:bg-accent data-[on=true]:text-foreground data-[on=true]:border-foreground/30",
};

export function MilestoneComposer() {
  const [selected, setSelected] = useState<string | null>(null);
  const [text, setText] = useState("");

  return (
    <div className="rounded-2xl border border-border bg-card shadow-soft p-5">
      <div className="flex items-center gap-3 mb-4">
        <div className="h-9 w-9 rounded-full bg-[var(--gradient-warm)] grid place-items-center text-white font-medium text-sm">
          A
        </div>
        <div className="text-sm">
          <div className="font-medium">Share a build moment</div>
          <div className="text-xs text-muted-foreground">What did you ship today, Aarav?</div>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-1.5 mb-4">
        {types.map((t) => (
          <button
            key={t.id}
            data-on={selected === t.id}
            onClick={() => setSelected(t.id === selected ? null : t.id)}
            className={cn(
              "flex flex-col items-center gap-1.5 px-2 py-3 rounded-xl border border-border text-[11px] font-medium text-muted-foreground hover:bg-accent transition",
              toneClass[t.tone]
            )}
          >
            <t.icon className="h-4 w-4" />
            <span className="leading-tight text-center">{t.label}</span>
          </button>
        ))}
      </div>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value.slice(0, 280))}
        placeholder={selected ? "Tell us how it happened…" : "Pick a milestone above to start"}
        disabled={!selected}
        className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-saffron/40 disabled:opacity-50"
        rows={3}
      />

      <div className="mt-3 flex items-center justify-between">
        <span className="text-xs text-muted-foreground">{text.length}/280</span>
        <button
          disabled={!selected || text.length === 0}
          className="rounded-full bg-foreground text-background text-sm font-medium px-5 py-2 hover:opacity-90 transition disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Post milestone
        </button>
      </div>
    </div>
  );
}
