import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { mockSpaces } from "@/lib/mock-data";
import { ArrowRight, ArrowLeft, Check } from "lucide-react";

export const Route = createFileRoute("/onboarding")({
  head: () => ({ meta: [{ title: "Get started — Build Pune Together" }] }),
  component: Onboarding,
});

const steps = ["About you", "Your work", "Join spaces", "All set"];

function Onboarding() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [stage, setStage] = useState("Idea");
  const [picked, setPicked] = useState<string[]>([]);

  const next = () => (step < 3 ? setStep(step + 1) : navigate({ to: "/feed" }));
  const back = () => setStep(Math.max(0, step - 1));

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="w-full max-w-lg">
        <div className="flex items-center gap-2 mb-8">
          {steps.map((_, i) => (
            <div key={i} className={`h-1.5 flex-1 rounded-full ${i <= step ? "bg-brand" : "bg-muted"}`} />
          ))}
        </div>

        <div className="rounded-3xl bg-card border border-border p-8 shadow-soft">
          <div className="text-xs uppercase tracking-wider text-brand font-bold">Step {step + 1} of 4</div>
          <h1 className="font-display text-2xl mt-1">{steps[step]}</h1>

          <div className="mt-6 space-y-4">
            {step === 0 && (
              <>
                <Field label="Your name">
                  <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Aarav Mehta" className="input" />
                </Field>
                <Field label="Where in Pune?">
                  <select className="input">
                    <option>Kothrud</option><option>Baner</option><option>Viman Nagar</option><option>Koregaon Park</option><option>Hinjewadi</option>
                  </select>
                </Field>
              </>
            )}
            {step === 1 && (
              <>
                <Field label="What do you do?">
                  <input value={role} onChange={(e) => setRole(e.target.value)} placeholder="Founder, Engineer, Designer…" className="input" />
                </Field>
                <Field label="Stage">
                  <div className="grid grid-cols-2 gap-2">
                    {["Idea", "Building", "Launched", "Scaling"].map((s) => (
                      <button
                        key={s}
                        onClick={() => setStage(s)}
                        className={`h-11 rounded-xl border text-sm font-medium ${stage === s ? "bg-brand text-brand-foreground border-brand" : "border-border hover:border-brand/30"}`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </Field>
              </>
            )}
            {step === 2 && (
              <div className="grid grid-cols-2 gap-2">
                {mockSpaces.slice(0, 8).map((s) => {
                  const on = picked.includes(s.id);
                  return (
                    <button
                      key={s.id}
                      onClick={() => setPicked(on ? picked.filter((x) => x !== s.id) : [...picked, s.id])}
                      className={`p-3 rounded-xl border text-left transition ${on ? "border-brand bg-brand-soft" : "border-border hover:border-brand/30"}`}
                    >
                      <div className="text-xl">{s.icon}</div>
                      <div className="text-sm font-semibold mt-1">{s.name}</div>
                      <div className="text-[11px] text-muted-foreground">{s.members} members</div>
                    </button>
                  );
                })}
              </div>
            )}
            {step === 3 && (
              <div className="text-center py-6">
                <div className="h-16 w-16 mx-auto rounded-full bg-mint/20 grid place-items-center">
                  <Check className="h-7 w-7 text-mint" />
                </div>
                <h2 className="font-display text-xl mt-4">You're in!</h2>
                <p className="text-sm text-muted-foreground mt-1">Welcome to Build Pune Together. Let's start shipping.</p>
              </div>
            )}
          </div>

          <div className="mt-8 flex items-center justify-between">
            <button onClick={back} disabled={step === 0} className="inline-flex items-center gap-1 text-sm text-muted-foreground disabled:opacity-30 hover:text-foreground">
              <ArrowLeft className="h-4 w-4" /> Back
            </button>
            <button onClick={next} className="h-11 px-6 rounded-xl bg-brand text-brand-foreground text-sm font-semibold inline-flex items-center gap-2">
              {step === 3 ? "Go to feed" : "Continue"} <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
      <style>{`.input{width:100%;height:44px;padding:0 14px;border-radius:12px;background:var(--card);border:1px solid var(--border);outline:none;font-size:14px}.input:focus{border-color:var(--brand)}`}</style>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="text-xs font-semibold">{label}</label>
      <div className="mt-1.5">{children}</div>
    </div>
  );
}
