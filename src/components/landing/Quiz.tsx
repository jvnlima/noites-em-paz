import { useState } from "react";
import { IconArrow, IconCheck } from "./icons";
import { handleCheckoutClick } from "@/lib/pixel";


const QUESTIONS = [
  "Vocês já discutiram de madrugada por causa de quem ia levantar?",
  "Alguém dos dois já fingiu estar dormindo esperando o outro acordar primeiro?",
  "Vocês nunca sentaram para combinar a noite antes dela começar?",
];

export function Quiz({ checkoutUrl }: { checkoutUrl: string }) {
  const [step, setStep] = useState(0);
  const [yes, setYes] = useState(0);
  const done = step >= QUESTIONS.length;

  function answer(value: boolean) {
    if (value) setYes((n) => n + 1);
    setStep((s) => s + 1);
  }

  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-lift)] sm:p-9">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
        Teste rápido — 30 segundos
      </p>

      {!done ? (
        <>
          <div className="mt-5 flex items-center gap-3">
            <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-secondary">
              <div
                className="h-full rounded-full bg-accent transition-all duration-500"
                style={{ width: `${(step / QUESTIONS.length) * 100}%` }}
              />
            </div>
            <span className="shrink-0 text-xs font-semibold text-muted-foreground">
              {step + 1}/{QUESTIONS.length}
            </span>
          </div>

          <h3 className="mt-6 text-xl leading-snug sm:text-2xl">{QUESTIONS[step]}</h3>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <button
              onClick={() => answer(true)}
              className="flex-1 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-night"
            >
              Sim, já aconteceu
            </button>
            <button
              onClick={() => answer(false)}
              className="flex-1 rounded-xl border border-border bg-background px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              Não
            </button>
          </div>
        </>
      ) : (
        <div className="animate-rise">
          <div className="mt-5 flex items-start gap-3">
            <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-accent/12 text-accent">
              <IconCheck />
            </span>
            <div className="min-w-0">
              <h3 className="text-xl leading-snug sm:text-2xl">
                {yes >= 2
                  ? "O padrão já está instalado na sua casa."
                  : "Ainda dá tempo de evitar o desgaste."}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                {yes >= 2
                  ? "Quando a decisão de quem levanta é tomada no meio da madrugada, ela nunca é justa — é feita por quem tem menos energia para discutir. O guia resolve isso em uma conversa de 20 minutos, feita acordado."
                  : "A maioria dos casais só percebe o problema depois da terceira semana de noites picadas. Combinar antes custa 20 minutos; combinar depois custa meses de ressentimento."}
              </p>
              <a
                href={checkoutUrl}
                onClick={(e) => handleCheckoutClick(e, checkoutUrl)}
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-accent px-7 py-3.5 text-sm font-bold text-accent-foreground shadow-[var(--shadow-soft)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-clay"

              >
                Quero o combinado pronto <IconArrow />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
