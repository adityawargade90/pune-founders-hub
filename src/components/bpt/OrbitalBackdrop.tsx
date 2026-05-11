export function OrbitalBackdrop({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <span
        className="bpt-orb h-32 w-32 -top-12 -left-10 bg-brand/30"
        style={{ animationDuration: "16s" }}
      />
      <span
        className="bpt-orb h-24 w-24 top-10 right-14 bg-violet/30"
        style={{ animationDuration: "20s", animationDirection: "reverse" }}
      />
      <span className="bpt-orb bpt-orb--pulse h-20 w-20 bottom-6 left-1/3 bg-pink/25" />
    </div>
  );
}
