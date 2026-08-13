import { useState } from "react";

export type Slide = { src: string; alt: string; caption: string };

export function Carousel({ slides }: { slides: Slide[] }) {
  const [i, setI] = useState(0);
  const go = (n: number) => setI((c) => (c + n + slides.length) % slides.length);
  const current = slides[i] ?? slides[0];

  return (
    <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-lift)]">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-secondary sm:aspect-[16/9]">
        {slides.map((s, idx) => (
          <img
            key={s.src}
            src={s.src}
            alt={s.alt}
            width={1024}
            height={768}
            loading="lazy"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${idx === i ? "opacity-100" : "opacity-0"}`}
          />
        ))}

        <button
          onClick={() => go(-1)}
          aria-label="Imagem anterior"
          className="absolute left-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-border bg-background/85 text-foreground backdrop-blur transition-colors hover:bg-background"
        >
          <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.8} className="h-5 w-5 stroke-current" aria-hidden="true">
            <path d="M15 5l-7 7 7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          onClick={() => go(1)}
          aria-label="Próxima imagem"
          className="absolute right-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-border bg-background/85 text-foreground backdrop-blur transition-colors hover:bg-background"
        >
          <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.8} className="h-5 w-5 stroke-current" aria-hidden="true">
            <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      <div className="flex flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="text-[15px] font-semibold text-foreground">{current.caption}</p>
        <div className="flex items-center gap-2">
          {slides.map((s, idx) => (
            <button
              key={s.src}
              onClick={() => setI(idx)}
              aria-label={`Ver imagem ${idx + 1}`}
              aria-current={idx === i}
              className={`h-2 rounded-full transition-all duration-300 ${idx === i ? "w-7 bg-accent" : "w-2 bg-border hover:bg-muted-foreground"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
