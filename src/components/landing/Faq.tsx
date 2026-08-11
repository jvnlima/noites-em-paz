import { useState } from "react";

const FAQS = [
  {
    q: "Funciona no meu caso? Eu amamento no peito e ele não pode substituir.",
    a: "Funciona — e foi justamente para esse caso que o método existe. A divisão não é da mamada, é da noite inteira: quem troca, quem faz o bebê arrotar, quem volta a fazer dormir, quem assume a primeira hora da manhã para a mãe emendar sono. Existe um capítulo específico para casais em amamentação exclusiva.",
  },
  {
    q: "E se um dos dois trabalha fora e precisa acordar cedo?",
    a: "O guia parte de uma tabela de carga real (trabalho, deslocamento, licença, recuperação do parto) e transforma isso em blocos de noite proporcionais. Ninguém é penalizado por trabalhar, e ninguém é obrigado a virar a noite sozinho porque está de licença.",
  },
  {
    q: "É complicado de aplicar?",
    a: "São 20 minutos de conversa guiada, com as perguntas prontas e um quadro para preencher. Você não precisa criar nada do zero: lê, responde, cola na geladeira. A maior parte dos casais aplica na mesma noite.",
  },
  {
    q: "Meu parceiro não vai querer ler nada.",
    a: "Ele não precisa. O guia foi escrito para ser aplicado por um e apresentado ao outro em uma página só — a página do combinado. É o único documento que os dois precisam olhar.",
  },
  {
    q: "Como recebo o material?",
    a: "Logo após a aprovação do pagamento você recebe o acesso à área de membros por e-mail. Os dois PDFs ficam disponíveis para leitura no celular e para download imediato. O acesso é vitalício.",
  },
  {
    q: "E se não servir para nós?",
    a: "Você tem 7 dias para pedir o reembolso integral, sem justificativa e sem formulário longo. Basta responder o e-mail de acesso.",
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
