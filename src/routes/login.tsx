import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/login")({
  head: () => ({ meta: [{ title: "Sign in — Build Pune Together" }] }),
  component: LoginPage,
});

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      <div className="hidden lg:flex relative items-center justify-center p-12 bg-gradient-to-br from-brand via-violet to-pink text-white overflow-hidden">
        <div className="relative max-w-md">
          <div className="text-sm font-semibold opacity-80">Build Pune Together</div>
          <h2 className="font-display text-4xl mt-3 leading-tight">
            Pune's founder-first community.
          </h2>
          <p className="mt-4 text-white/85">
            Join 700+ builders shipping in public, finding co-founders and meeting offline across Pune.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-white/90">
            <li>✓ 12+ domain spaces</li>
            <li>✓ Open to Build job board</li>
            <li>✓ Monthly meetups & roundtables</li>
          </ul>
        </div>
      </div>

      <div className="flex items-center justify-center p-6 lg:p-10">
        <div className="w-full max-w-sm">
          <Link to="/" className="text-sm text-muted-foreground hover:text-brand">← Home</Link>
          <h1 className="font-display text-3xl mt-6">Welcome back</h1>
          <p className="text-sm text-muted-foreground mt-1">Sign in to continue building.</p>

          <button className="mt-8 w-full h-11 rounded-xl border border-border bg-card hover:bg-muted text-sm font-semibold flex items-center justify-center gap-3">
            <span className="text-lg">G</span> Continue with Google
          </button>

          <div className="my-5 flex items-center gap-3 text-xs text-muted-foreground">
            <div className="flex-1 h-px bg-border" /> or <div className="flex-1 h-px bg-border" />
          </div>

          <form onSubmit={(e) => { e.preventDefault(); navigate({ to: "/onboarding" }); }}>
            <label className="text-xs font-semibold">Email</label>
            <div className="mt-1.5 relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                required
                placeholder="you@pune.in"
                className="w-full h-11 pl-10 pr-3 rounded-xl bg-card border border-border outline-none focus:border-brand text-sm"
              />
            </div>
            <button className="mt-5 w-full h-11 rounded-xl bg-brand text-brand-foreground text-sm font-semibold inline-flex items-center justify-center gap-2">
              Continue <ArrowRight className="h-4 w-4" />
            </button>
          </form>

          <p className="mt-6 text-xs text-muted-foreground text-center">
            By continuing, you agree to our Terms and Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  );
}
