import { useState } from "react";

const FAQS = [
  {
    q: "Como eu recebo o material depois da compra?",
    a: "Na hora. Assim que o pagamento é aprovado, o guia em PDF e os três bônus chegam no e-mail que você usar no checkout. É só abrir e ler no celular, ou baixar e imprimir. O acesso é vitalício.",
  },
  {
    q: "Funciona pra quem já briga muito por causa da madrugada?",
    a: "Foi escrito exatamente para esse casal. O guia tira a decisão do meio da noite e coloca num combinado feito acordado, com frases prontas para conduzir a conversa sem cobrança e sem lista de mágoas.",
  },
  {
    q: "Funciona se eu amamento no peito e ele não pode substituir?",
    a: "Sim. A divisão não é da mamada, é da noite inteira: quem troca, quem faz arrotar, quem devolve o bebê ao berço, quem assume a primeira hora da manhã para a mãe emendar sono. Existe um capítulo só para amamentação exclusiva.",
  },
  {
    q: "Funciona com mais de um filho em casa?",
    a: "Funciona. O passo a passo inclui o cenário com irmão mais velho: quem fica responsável pelo despertar do maior, como evitar que os dois adultos acordem juntos e como redistribuir a noite quando alguém adoece.",
  },
  {
    q: "Preciso instalar algum aplicativo?",
    a: "Não. Nada de app, nada de login complicado, nada de mensalidade. São PDFs simples que abrem em qualquer celular ou computador, e o planner pode ser impresso e colado na geladeira.",
  },
  {
    q: "É complicado ou demorado de aplicar?",
    a: "São cerca de 20 minutos de conversa guiada, com as perguntas prontas e um quadro para preencher. A maior parte dos casais aplica na mesma noite em que recebe.",
  },
  {
    q: "E se não servir pra nós?",
    a: "Você tem 7 dias de garantia incondicional. Se não gostar, é só responder o e-mail de acesso e devolvemos 100% do valor, sem justificativa e sem formulário longo.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
      {FAQS.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="grid w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-5 text-left transition-colors hover:bg-secondary/60 sm:px-7"
            >
              <span className="min-w-0 text-[15px] font-semibold leading-snug text-foreground sm:text-base">
                {f.q}
              </span>
              <span
                className={`grid h-7 w-7 shrink-0 place-items-center rounded-full border border-border text-muted-foreground transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
              >
                <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.8} className="h-4 w-4 stroke-current" aria-hidden="true">
                  <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                </svg>
              </span>
            </button>
            {isOpen && (
              <p className="animate-rise px-5 pb-6 text-[15px] leading-relaxed text-muted-foreground sm:px-7">
                {f.a}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
