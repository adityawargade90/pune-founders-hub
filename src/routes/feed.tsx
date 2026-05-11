import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { AppShell, Avatar } from "@/components/bpt/AppShell";
import { mockPosts, milestoneMeta, type MilestoneType } from "@/lib/mock-data";
import { Heart, MessageCircle, Share2, Sparkles, TrendingUp, CalendarDays, MapPin } from "lucide-react";

export const Route = createFileRoute("/feed")({
  head: () => ({
    meta: [
      { title: "Feed — Build Pune Together" },
      { name: "description", content: "Pune founders building in public. Milestones, lessons and AMAs." },
    ],
  }),
  component: FeedPage,
});

function FeedPage() {
  const [posts, setPosts] = useState(mockPosts);

  return (
    <AppShell right={<RightRail />}>
      <Composer onPost={(p) => setPosts([p, ...posts])} />
      <div className="mt-6 space-y-4">
        {posts.map((p) => (
          <PostCard key={p.id} post={p} />
        ))}
      </div>
    </AppShell>
  );
}

function Composer({ onPost }: { onPost: (p: any) => void }) {
  const [text, setText] = useState("");
  const [type, setType] = useState<MilestoneType>("LAUNCHED");

  const types: MilestoneType[] = ["LAUNCHED", "FIRST_CUSTOMER", "REVENUE", "FUNDRAISE", "HIRE", "LESSON", "AMA"];

  function submit() {
    if (!text.trim()) return;
    onPost({
      id: `p${Date.now()}`,
      type,
      author: { name: "You", handle: "you", color: "#7c3aed", role: "Founder" },
      content: text,
      createdAt: "just now",
      reactions: { celebrate: 0, relate: 0, tellMore: 0 },
      comments: 0,
    });
    setText("");
  }

  return (
    <div className="rounded-2xl bg-card border border-border shadow-soft p-5">
      <div className="flex gap-3">
        <Avatar name="A" color="#7c3aed" />
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          maxLength={500}
          rows={2}
          placeholder="What did you ship today?"
          className="flex-1 resize-none bg-transparent text-[15px] outline-none placeholder:text-muted-foreground"
        />
      </div>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {types.map((t) => {
          const m = milestoneMeta[t];
          return (
            <button
              key={t}
              onClick={() => setType(t)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium border transition ${
                type === t ? "bg-brand text-brand-foreground border-brand" : "border-border text-foreground/70 hover:border-brand/30"
              }`}
            >
              {m.emoji} {m.label}
            </button>
          );
        })}
      </div>
      <div className="mt-3 flex items-center justify-between">
        <span className="text-xs text-muted-foreground">{text.length}/500</span>
        <button
          onClick={submit}
          disabled={!text.trim()}
          className="h-9 px-5 rounded-xl bg-brand text-brand-foreground text-sm font-semibold disabled:opacity-40 hover:opacity-95 transition"
        >
          Share
        </button>
      </div>
    </div>
  );
}

function PostCard({ post }: { post: any }) {
  const meta = milestoneMeta[post.type as MilestoneType];
  const [r, setR] = useState(post.reactions);

  return (
    <article className="rounded-2xl bg-card border border-border shadow-soft p-5 hover:shadow-card transition">
      <div className="flex items-start gap-3">
        <Avatar name={post.author.name} color={post.author.color} />
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-semibold text-sm">{post.author.name}</span>
            <span className="text-xs text-muted-foreground">· {post.author.role}</span>
            <span className="text-xs text-muted-foreground">· {post.createdAt}</span>
          </div>
          <span className={`mt-1.5 inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold ${meta.tone}`}>
            {meta.emoji} {meta.label}
          </span>
        </div>
      </div>
      <p className="mt-3 text-[15px] leading-relaxed whitespace-pre-line">{post.content}</p>
      <div className="mt-4 flex items-center gap-1 -mx-1">
        <ReactBtn label="Celebrate" emoji="🎉" count={r.celebrate} onClick={() => setR({ ...r, celebrate: r.celebrate + 1 })} />
        <ReactBtn label="Relate" emoji="💜" count={r.relate} onClick={() => setR({ ...r, relate: r.relate + 1 })} />
        <ReactBtn label="Tell me more" emoji="🤔" count={r.tellMore} onClick={() => setR({ ...r, tellMore: r.tellMore + 1 })} />
        <button className="ml-auto flex items-center gap-1.5 px-3 h-8 rounded-lg hover:bg-muted text-xs text-muted-foreground transition">
          <MessageCircle className="h-3.5 w-3.5" /> {post.comments}
        </button>
        <button className="flex items-center gap-1.5 px-3 h-8 rounded-lg hover:bg-muted text-xs text-muted-foreground transition">
          <Share2 className="h-3.5 w-3.5" />
        </button>
      </div>
    </article>
  );
}

function ReactBtn({ label, emoji, count, onClick }: any) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-1.5 px-3 h-8 rounded-lg hover:bg-brand-soft text-xs font-medium transition"
    >
      <span>{emoji}</span>
      <span className="hidden sm:inline">{label}</span>
      <span className="text-muted-foreground">{count}</span>
    </button>
  );
}

function RightRail() {
  return (
    <div className="sticky top-24 space-y-4">
      <div className="rounded-2xl bg-card border border-border p-5">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="h-4 w-4 text-brand" />
          <h3 className="font-semibold text-sm">Trending Domains</h3>
        </div>
        <ul className="space-y-3">
          {[
            { name: "AI / ML", count: "312 builders", pct: 92 },
            { name: "FinTech", count: "180 builders", pct: 71 },
            { name: "HealthTech", count: "234 builders", pct: 64 },
            { name: "SaaS", count: "420 builders", pct: 58 },
          ].map((d) => (
            <li key={d.name}>
              <div className="flex items-center justify-between text-xs mb-1">
                <span className="font-medium">{d.name}</span>
                <span className="text-muted-foreground">{d.count}</span>
              </div>
              <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                <div className="h-full bg-brand rounded-full" style={{ width: `${d.pct}%` }} />
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-2xl bg-card border border-border p-5">
        <div className="flex items-center gap-2 mb-4">
          <CalendarDays className="h-4 w-4 text-mint" />
          <h3 className="font-semibold text-sm">Upcoming in Pune</h3>
        </div>
        <Link to="/events" className="block group">
          <div className="text-xs text-brand font-semibold uppercase tracking-wide">May 25</div>
          <div className="font-semibold text-sm mt-0.5 group-hover:text-brand transition">Founder Connect Meetup #3</div>
          <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
            <MapPin className="h-3 w-3" /> WeWork Vimaan Nagar
          </div>
        </Link>
        <Link to="/events" className="block mt-3 text-xs font-semibold text-brand">See all events →</Link>
      </div>

      <div className="rounded-2xl bg-gradient-to-br from-brand-soft to-card border border-border p-5">
        <Sparkles className="h-5 w-5 text-brand mb-2" />
        <div className="font-semibold text-sm">Made with 💜 in Pune</div>
        <div className="text-xs text-muted-foreground mt-1">700+ founders building together.</div>
      </div>
    </div>
  );
}
