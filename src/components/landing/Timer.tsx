import { useEffect, useState } from "react";

const TOTAL = 15 * 60;

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export function Timer() {
  const [left, setLeft] = useState(TOTAL);

  useEffect(() => {
    const id = window.setInterval(() => {
      setLeft((s) => (s <= 1 ? 0 : s - 1));
    }, 1000);
    return () => window.clearInterval(id);
  }, []);

  const mm = Math.floor(left / 60);
  const ss = left % 60;

  return (
    <div className="inline-flex items-center gap-4 rounded-2xl border border-border bg-background px-6 py-4">
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
        Oferta expira em
      </span>
      <span className="flex items-center gap-1.5 font-display text-3xl font-semibold tabular-nums text-foreground">
        <span className="rounded-lg bg-secondary px-2.5 py-1">{pad(mm)}</span>
        <span className="text-muted-foreground">:</span>
        <span className="rounded-lg bg-secondary px-2.5 py-1">{pad(ss)}</span>
      </span>
    </div>
  );
}
