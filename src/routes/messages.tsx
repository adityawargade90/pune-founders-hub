import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AppShell, Avatar } from "@/components/bpt/AppShell";
import { OrbitalBackdrop } from "@/components/bpt/OrbitalBackdrop";
import { mockThreads } from "@/lib/mock-data";
import { Send, Search } from "lucide-react";

export const Route = createFileRoute("/messages")({
  head: () => ({ meta: [{ title: "Messages — Build Pune Together" }] }),
  component: MessagesPage,
});

function MessagesPage() {
  const [activeId, setActiveId] = useState(mockThreads[0].id);
  const [text, setText] = useState("");
  const active = mockThreads.find((t) => t.id === activeId)!;
  const [msgs, setMsgs] = useState([
    { id: 1, from: "them", text: "Hey, saw your launch post — congrats!" },
    { id: 2, from: "me", text: "Thank you 🙏 means a lot." },
    { id: 3, from: "them", text: active.last },
  ]);

  function send() {
    if (!text.trim()) return;
    setMsgs([...msgs, { id: Date.now(), from: "me", text }]);
    setText("");
  }

  return (
    <AppShell>
      <section className="bpt-hero-shell p-5 mb-6">
        <OrbitalBackdrop />
        <div className="relative z-10">
          <h1 className="font-display text-3xl">Messages</h1>
          <p className="text-sm text-muted-foreground mt-1">Move fast with clean DMs, intros, and quick follow-ups.</p>
        </div>
      </section>
      <div className="bpt-depth-card overflow-hidden grid md:grid-cols-[280px_1fr] h-[620px]">
        {/* Threads */}
        <div className="border-r border-border flex flex-col">
          <div className="p-3 border-b border-border">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
              <input className="w-full h-9 pl-9 pr-3 rounded-lg bg-muted text-sm outline-none" placeholder="Search" />
            </div>
          </div>
          <ul className="flex-1 overflow-y-auto">
            {mockThreads.map((t) => (
              <li key={t.id}>
                <button
                  onClick={() => setActiveId(t.id)}
                  className={`w-full flex items-center gap-3 p-3 text-left hover:bg-muted/60 transition ${
                    activeId === t.id ? "bg-brand-soft" : ""
                  }`}
                >
                  <Avatar name={t.name} color={t.color} size={40} />
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-sm truncate">{t.name}</span>
                      <span className="text-[10px] text-muted-foreground">{t.time}</span>
                    </div>
                    <div className="text-xs text-muted-foreground truncate">{t.last}</div>
                  </div>
                  {t.unread > 0 && <span className="h-5 min-w-5 px-1.5 rounded-full bg-brand text-brand-foreground text-[10px] font-bold grid place-items-center">{t.unread}</span>}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Conversation */}
        <div className="flex flex-col">
          <div className="p-4 border-b border-border flex items-center gap-3">
            <Avatar name={active.name} color={active.color} size={40} />
            <div>
              <div className="font-semibold text-sm">{active.name}</div>
              <div className="text-xs text-mint">● Online</div>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto p-5 space-y-3 bg-muted/30">
            {msgs.map((m) => (
              <div key={m.id} className={`flex ${m.from === "me" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[75%] px-4 py-2.5 rounded-2xl text-sm ${
                  m.from === "me" ? "bg-brand text-brand-foreground rounded-br-md" : "bg-card border border-border rounded-bl-md"
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
          </div>
          <div className="p-3 border-t border-border flex gap-2">
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="Type a message…"
              className="flex-1 h-11 px-4 rounded-xl bg-muted text-sm outline-none"
            />
            <button onClick={send} className="h-11 w-11 grid place-items-center rounded-xl bg-brand text-brand-foreground">
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
