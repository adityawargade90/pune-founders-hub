import { Home, Users, Layout, Calendar, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const items = [
  { icon: Home, label: "Home", active: true },
  { icon: Users, label: "Community" },
  { icon: Layout, label: "Board" },
  { icon: Calendar, label: "Events" },
  { icon: MessageCircle, label: "Messages", dot: true },
];

export function MobileNav() {
  return (
    <nav className="lg:hidden fixed bottom-0 inset-x-0 z-40 border-t border-border bg-card/95 backdrop-blur-md">
      <div className="grid grid-cols-5">
        {items.map((it) => (
          <button
            key={it.label}
            className={cn(
              "flex flex-col items-center gap-0.5 py-2.5 text-[10px] relative",
              it.active ? "text-foreground" : "text-muted-foreground"
            )}
          >
            <it.icon className={cn("h-5 w-5", it.active && "fill-foreground/10")} />
            <span className={cn(it.active && "font-medium")}>{it.label}</span>
            {it.dot && <span className="absolute top-2 right-1/4 h-1.5 w-1.5 rounded-full bg-saffron" />}
          </button>
        ))}
      </div>
    </nav>
  );
}
