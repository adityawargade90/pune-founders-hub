import { useState } from "react";
import { MessageSquare, MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

export type MilestoneType =
  | "FIRST_CUSTOMER"
  | "LAUNCHED"
  | "REVENUE_MILESTONE"
  | "FOUND_COFOUNDER"
  | "COMPLETED_MVP"
  | "GOT_PRESS"
  | "CUSTOM";

const typeMeta: Record<MilestoneType, { label: string; tone: string; emoji: string }> = {
  FIRST_CUSTOMER: { label: "First customer", tone: "celebrate", emoji: "🤝" },
  LAUNCHED: { label: "Launched", tone: "ama", emoji: "🚀" },
  REVENUE_MILESTONE: { label: "Revenue", tone: "team", emoji: "₹" },
  FOUND_COFOUNDER: { label: "Found co-founder", tone: "relate", emoji: "🎉" },
  COMPLETED_MVP: { label: "Shipped MVP", tone: "discussion", emoji: "✅" },
  GOT_PRESS: { label: "Got press", tone: "resource", emoji: "📰" },
  CUSTOM: { label: "Update", tone: "muted", emoji: "✨" },
};

const tonePill: Record<string, string> = {
  celebrate: "bg-celebrate/15 text-celebrate",
  ama: "bg-ama/15 text-ama",
  team: "bg-team/15 text-team",
  relate: "bg-relate/15 text-relate",
  discussion: "bg-discussion/15 text-discussion",
  resource: "bg-resource/15 text-resource",
  muted: "bg-accent text-foreground",
};

export interface Milestone {
  id: string;
  author: { name: string; role: string; initial: string; gradient: string };
  type: MilestoneType;
  body: string;
  time: string;
  reactions: { celebrate: number; relate: number; curious: number };
  comments: number;
  domain?: string;
}

export function MilestoneCard({ m }: { m: Milestone }) {
  const meta = typeMeta[m.type];
  const [active, setActive] = useState<string | null>(null);
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="rounded-2xl border border-border bg-card shadow-soft hover:shadow-card transition overflow-hidden">
      <div className="p-5">
        <div className="flex items-start gap-3">
          <div
            className="h-10 w-10 rounded-full grid place-items-center text-white font-medium text-sm shrink-0"
            style={{ background: m.author.gradient }}
          >
            {m.author.initial}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-medium text-sm">{m.author.name}</span>
              <span className="text-xs text-muted-foreground">·</span>
              <span className="text-xs text-muted-foreground">{m.author.role}</span>
              {m.domain && (
                <>
                  <span className="text-xs text-muted-foreground">·</span>
                  <span className="text-xs text-muted-foreground">{m.domain}</span>
                </>
              )}
            </div>
            <div className="flex items-center gap-2 mt-1.5">
              <span className={cn("inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-full", tonePill[meta.tone])}>
                <span>{meta.emoji}</span>
                {meta.label}
              </span>
              <span className="text-xs text-muted-foreground">{m.time}</span>
            </div>
          </div>
          <button className="text-muted-foreground hover:text-foreground p-1 -mr-1">
            <MoreHorizontal className="h-4 w-4" />
          </button>
        </div>

        <p className="mt-4 text-[15px] leading-relaxed text-foreground/90 whitespace-pre-line">{m.body}</p>
      </div>

      <div className="px-5 py-3 border-t border-border bg-secondary/30 flex items-center gap-1">
        {[
          { id: "celebrate", label: "Celebrate", emoji: "🎉", count: m.reactions.celebrate },
          { id: "relate", label: "Relate", emoji: "🤝", count: m.reactions.relate },
          { id: "curious", label: "Tell me more", emoji: "👀", count: m.reactions.curious },
        ].map((r) => (
          <button
            key={r.id}
            onClick={() => setActive(active === r.id ? null : r.id)}
            className={cn(
              "flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-xs font-medium transition",
              active === r.id ? "bg-foreground text-background" : "text-muted-foreground hover:bg-background hover:text-foreground"
            )}
          >
            <span>{r.emoji}</span>
            <span>{r.count + (active === r.id ? 1 : 0)}</span>
          </button>
        ))}
        <button
          onClick={() => setExpanded(!expanded)}
          className="ml-auto flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-xs font-medium text-muted-foreground hover:bg-background hover:text-foreground transition"
        >
          <MessageSquare className="h-3.5 w-3.5" />
          <span>{m.comments} replies</span>
        </button>
      </div>

      {expanded && (
        <div className="px-5 py-4 border-t border-border bg-background/50">
          <input
            placeholder="Add an encouragement…"
            className="w-full bg-transparent text-sm placeholder:text-muted-foreground focus:outline-none"
          />
        </div>
      )}
    </article>
  );
}
