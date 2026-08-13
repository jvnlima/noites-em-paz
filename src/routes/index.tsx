import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-couple-night.jpg";
import mockGuia from "@/assets/mock-guia.jpg";
import mockChecklist from "@/assets/mock-checklist.jpg";
import mockPlanner from "@/assets/mock-planner.jpg";
import mockSos from "@/assets/mock-sos.jpg";
import mockCelular from "@/assets/mock-celular.jpg";
import { Faq } from "@/components/landing/Faq";
import { Timer } from "@/components/landing/Timer";
import { Carousel } from "@/components/landing/Carousel";
import {
  IconArrow,
  IconBed,
  IconBottle,
  IconCheck,
  IconClock,
  IconDoc,
  IconMoonSplit,
  IconScale,
  IconSeal,
  IconShield,
} from "@/components/landing/icons";
import { handleCheckoutClick } from "@/lib/pixel";

const CHECKOUT = "https://pay.cakto.com.br/38wekh6_1034182";

export const Route = createFileRoute("/")({
  component: Landing,
  head: () => ({
    meta: [
      { title: "Guia Prático para Pais | Dividir a Noite Sem Brigar" },
      {
        name: "description",
        content:
          "Passo a passo em PDF para o casal combinar quem cuida de cada situação da madrugada. Entrega no e-mail na hora, R$ 18,97, garantia de 7 dias.",
      },
      { property: "og:title", content: "Guia Prático para Pais | Dividir a Noite Sem Brigar" },
      {
        property: "og:description",
        content:
          "Pare de decidir quem levanta às 3h da manhã. Combinado pronto, checklist e frases prontas por R$ 18,97.",
      },
      { property: "og:type", content: "product" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Cta({
  children = "Pagar agora",
  className = "",
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={CHECKOUT}
      onClick={(e) => handleCheckoutClick(e, CHECKOUT)}
      className={`group inline-flex items-center justify-center gap-2.5 rounded-xl bg-accent px-8 py-4 text-base font-bold tracking-tight text-accent-foreground shadow-[var(--shadow-lift)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-clay focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent ${className}`}
    >
      {children}
      <IconArrow className="h-4 w-4 stroke-current transition-transform duration-200 group-hover:translate-x-0.5" />
    </a>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">{children}</p>
  );
}

const BENEFITS = [
  {
    icon: <IconClock />,
    title: "Rápido de aplicar",
    text: "Leitura direta e uma conversa de 20 minutos. Não é livro de 300 páginas para ler numa fase em que ninguém tem tempo nem cabeça.",
  },
  {
    icon: <IconBed />,
    title: "Feito para casais reais",
    text: "Parte de quem trabalha fora, de quem está em licença, de quem amamenta e de quem acorda às 6h. Nada de rotina ideal que não cabe na sua casa.",
  },
  {
    icon: <IconCheck className="h-6 w-6 stroke-current" />,
    title: "Checklist pronto",
    text: "Cada situação da madrugada já vem listada com o responsável definido. Você só preenche e cola na parede do quarto.",
  },
  {
    icon: <IconDoc />,
    title: "Frases prontas para a conversa",
    text: "O que falar para propor a divisão sem soar cobrança, e o que responder quando o outro reage na defensiva. Palavra por palavra.",
  },
  {
    icon: <IconScale />,
    title: "Divisão justa, não 50/50 no relógio",
    text: "Um critério simples de carga real para que os dois sintam que o acordo é honesto — e por isso ele se sustenta.",
  },
  {
    icon: <IconBottle />,
    title: "Sem enrolação teórica",
    text: "Zero teoria de sono infantil, zero citação acadêmica. É um material de aplicação, feito para virar acordo hoje à noite.",
  },
];

const BONUSES = [
  {
    n: "Bônus 1",
    title: "Planner semanal de divisão de tarefas",
    text: "Uma folha por semana para distribuir noites, banhos, mamadas e compras. Imprime, cola na geladeira e acaba a discussão de quem fez mais.",
  },
  {
    n: "Bônus 2",
    title: 'Cartão "SOS Madrugada"',
    text: "Um cartão de bolso com ações rápidas para o pior momento: bebê inconsolável, mãe no limite, ninguém raciocinando. Passos curtos, na ordem certa.",
  },
  {
    n: "Bônus 3",
    title: "Diário de gratidão do casal + autocuidado expresso",
    text: "Duas linhas por dia para reconhecer o que o outro fez, mais rotinas de 5 minutos de autocuidado que cabem em quem dorme pouco.",
  },
];

const SLIDES = [
  { src: mockGuia, alt: "Página interna do guia em PDF aberta sobre a cama", caption: "Páginas do guia principal, direto ao ponto" },
  { src: mockChecklist, alt: "Checklist impresso com caixas de marcação e caneta", caption: "Checklist da madrugada, pronto para preencher" },
  { src: mockPlanner, alt: "Planner semanal impresso preso na porta da geladeira", caption: "Planner semanal de divisão de tarefas" },
  { src: mockSos, alt: "Cartão SOS Madrugada segurado ao lado do berço", caption: 'Cartão "SOS Madrugada" de bolso' },
  { src: mockCelular, alt: "Celular exibindo o guia em PDF sobre a cama", caption: "Tudo abre no celular, sem aplicativo" },
];

const TESTIMONIALS = [
  {
    name: "Marina e Rafael",
    role: "pais da Alice, 2 meses",
    text: "A gente brigava quase toda noite decidindo quem levantava. Preenchemos o quadro num domingo à tarde e na mesma semana as discussões pararam. Não é que o bebê passou a dormir — é que a gente parou de negociar às 3h da manhã.",
  },
  {
    name: "Camila e Diego",
    role: "pais do Théo, 5 semanas",
    text: "Eu amamento exclusivo e achava que não tinha o que dividir. O guia mostrou tudo que dava para passar para ele: troca, arroto, colocar no berço, a primeira hora da manhã. Ganhei quase duas horas de sono seguido por noite.",
  },
  {
    name: "Juliana e Pedro",
    role: "pais de dois, 3 anos e 3 meses",
    text: "Com dois filhos virou caos. As frases prontas foram o que mais ajudou: consegui propor a divisão sem que virasse briga de quem está mais cansado. Hoje a noite tem dono definido antes de começar.",
  },
];

const STEPS = [
  { n: "01", title: "Você compra", text: "Pagamento único de R$ 18,97 no checkout seguro." },
  { n: "02", title: "Recebe no e-mail", text: "O guia e os três bônus chegam na hora, logo após a aprovação." },
  { n: "03", title: "Aplica em 20 minutos", text: "Vocês respondem as perguntas guiadas e fecham o combinado da noite." },
];

function Landing() {
  return (
    <div className="min-h-screen bg-background">
      {/* 1 — Hero */}
      <header className="relative overflow-hidden border-b border-border">
        <div className="container-page grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="animate-rise">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              <IconMoonSplit className="h-4 w-4 stroke-current" />
              Paternidade Facilitada
            </span>
            <h1 className="mt-6 text-4xl leading-[1.06] text-foreground sm:text-5xl lg:text-[3.6rem]">
              Parem de brigar de madrugada por causa da rotina do bebê.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Um guia prático que define, antes da noite começar, quem cuida de cada situação da
              madrugada. Combinado feito acordado, com clareza — não decidido no cansaço, às 3h da
              manhã.
            </p>
            <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <a
                href="#oferta"
                className="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-accent px-8 py-4 text-base font-bold tracking-tight text-accent-foreground shadow-[var(--shadow-lift)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-clay"
              >
                Quero meu guia agora
                <IconArrow className="h-4 w-4 stroke-current transition-transform duration-200 group-hover:translate-x-0.5" />
              </a>
              <p className="text-sm text-muted-foreground">
                PDF entregue no e-mail na hora · R$ 18,97 pagamento único
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-lift)]">
              <img
                src={heroImg}
                alt="Casal cansado com bebê recém-nascido no colo durante a madrugada"
                width={1024}
                height={1024}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 left-5 flex items-center gap-3 rounded-2xl border border-border bg-card px-5 py-4 shadow-[var(--shadow-soft)]">
              <IconSeal className="h-9 w-9 stroke-accent" />
              <p className="text-sm font-semibold leading-tight text-foreground">
                Método do combinado
                <span className="block text-xs font-normal text-muted-foreground">
                  feito antes do cansaço bater
                </span>
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* 2 — O que é e como recebe */}
      <section className="border-b border-border bg-card">
        <div className="container-page py-16 sm:py-24">
          <div className="max-w-3xl">
            <SectionLabel>O que você recebe</SectionLabel>
            <h2 className="mt-4 text-3xl leading-tight sm:text-4xl">
              Um guia prático em PDF, entregue por e-mail no momento da compra.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Dentro dele está o passo a passo para o casal combinar, com nome e responsável, quem
              cuida de cada situação da madrugada: a mamada das 2h, a troca fora de hora, o bebê que
              não volta a dormir, a cólica, o irmão que acorda junto e a primeira hora da manhã.
              Tudo definido enquanto vocês ainda conseguem pensar — não no meio da exaustão.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {STEPS.map((s) => (
              <div key={s.n} className="rounded-2xl border border-border bg-background p-7">
                <span className="font-display text-3xl font-semibold text-accent">{s.n}</span>
                <h3 className="mt-3 text-lg text-foreground">{s.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 — Por que escolher */}
      <section className="border-b border-border">
        <div className="container-page py-16 sm:py-24">
          <div className="max-w-3xl">
            <SectionLabel>Por que escolher este material</SectionLabel>
            <h2 className="mt-4 text-3xl leading-tight sm:text-4xl">
              Feito para ser aplicado hoje à noite, não para ser estudado.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {BENEFITS.map((b) => (
              <div
                key={b.title}
                className="rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-soft)]"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-secondary text-primary">
                  {b.icon}
                </span>
                <h3 className="mt-5 text-lg text-foreground">{b.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 — Bônus */}
      <section className="border-b border-border bg-night text-night-foreground">
        <div className="container-page py-16 sm:py-24">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sand">
              Acompanham a oferta
            </p>
            <h2 className="mt-4 text-3xl leading-tight text-night-foreground sm:text-4xl">
              Três bônus que continuam funcionando depois do combinado fechado.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {BONUSES.map((b) => (
              <div
                key={b.n}
                className="rounded-2xl border border-night-foreground/15 bg-night-foreground/[0.06] p-7"
              >
                <span className="inline-flex rounded-full border border-night-foreground/25 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-sand">
                  {b.n}
                </span>
                <h3 className="mt-5 text-xl text-night-foreground">{b.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-night-foreground/75">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 — Oferta */}
      <section id="oferta" className="scroll-mt-8 border-b border-border">
        <div className="container-page py-16 sm:py-24">
          <div className="mx-auto max-w-3xl rounded-3xl border border-border bg-card p-8 text-center shadow-[var(--shadow-lift)] sm:p-12">
            <SectionLabel>Oferta limitada</SectionLabel>
            <h2 className="mt-4 text-3xl leading-tight sm:text-4xl">
              Guia completo + 3 bônus por um valor único.
            </h2>

            <div className="mt-8 flex justify-center">
              <Timer />
            </div>

            <div className="mt-8 flex flex-col items-center">
              <span className="text-sm text-muted-foreground line-through">De R$ 67,00</span>
              <span className="font-display text-6xl font-semibold leading-none text-foreground">
                R$ 18,97
              </span>
              <span className="mt-3 rounded-full bg-secondary px-4 py-1.5 text-sm font-semibold text-secondary-foreground">
                Pagamento único · sem mensalidade
              </span>
            </div>

            <ul className="mx-auto mt-9 grid max-w-md gap-3 text-left">
              {[
                "Guia prático em PDF (material principal)",
                "Planner semanal de divisão de tarefas",
                'Cartão "SOS Madrugada"',
                "Diário de gratidão do casal + autocuidado expresso",
                "Entrega imediata no e-mail, acesso vitalício",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent/12 text-accent">
                    <IconCheck className="h-4 w-4 stroke-current" />
                  </span>
                  <span className="text-[15px] leading-relaxed text-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <Cta className="mt-9 w-full sm:w-auto">Pagar agora</Cta>
            <p className="mt-4 text-sm text-muted-foreground">
              Compra segura · 7 dias de garantia incondicional
            </p>
          </div>
        </div>
      </section>

      {/* 6 — Carrossel de exemplos */}
      <section className="border-b border-border bg-card">
        <div className="container-page py-16 sm:py-24">
          <div className="max-w-3xl">
            <SectionLabel>Por dentro do material</SectionLabel>
            <h2 className="mt-4 text-3xl leading-tight sm:text-4xl">
              Exemplos do que chega no seu e-mail.
            </h2>
          </div>
          <div className="mt-10">
            <Carousel slides={SLIDES} />
          </div>
        </div>
      </section>

      {/* 7 — Depoimentos */}
      <section className="border-b border-border">
        <div className="container-page py-16 sm:py-24">
          <div className="max-w-3xl">
            <SectionLabel>Quem já aplicou</SectionLabel>
            <h2 className="mt-4 text-3xl leading-tight sm:text-4xl">
              Casais que trocaram a briga da madrugada por um combinado.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <figure
                key={t.name}
                className="flex flex-col rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-soft)]"
              >
                <svg viewBox="0 0 24 24" className="h-7 w-7 fill-accent/25" aria-hidden="true">
                  <path d="M9.5 5C6.5 6.6 5 9.2 5 12.8V19h6.2v-6.2H8.4c0-2.2.9-3.9 2.7-5.1L9.5 5Zm9 0c-3 1.6-4.5 4.2-4.5 7.8V19h6.2v-6.2h-2.8c0-2.2.9-3.9 2.7-5.1L18.5 5Z" />
                </svg>
                <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-muted-foreground">
                  {t.text}
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-5">
                  <span className="block text-sm font-semibold text-foreground">{t.name}</span>
                  <span className="block text-sm text-muted-foreground">{t.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* 8 — Garantia */}
      <section className="border-b border-border bg-secondary/40">
        <div className="container-page py-16 sm:py-24">
          <div className="mx-auto flex max-w-3xl flex-col items-start gap-7 rounded-3xl border border-border bg-card p-8 sm:flex-row sm:items-center sm:p-10">
            <span className="grid h-20 w-20 shrink-0 place-items-center rounded-2xl bg-accent/10 text-accent">
              <IconShield className="h-10 w-10 stroke-current" />
            </span>
            <div>
              <h2 className="text-2xl leading-tight sm:text-3xl">
                Garantia incondicional de 7 dias
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                Leia, aplique e mostre para o seu parceiro ou parceira. Se não gostar, por qualquer
                motivo, é só responder o e-mail de acesso dentro de 7 dias que devolvemos 100% do
                valor. Sem justificativa, sem formulário e sem perguntas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9 — FAQ */}
      <section className="border-b border-border">
        <div className="container-page py-16 sm:py-24">
          <div className="max-w-3xl">
            <SectionLabel>Perguntas frequentes</SectionLabel>
            <h2 className="mt-4 text-3xl leading-tight sm:text-4xl">
              O que os casais perguntam antes de comprar.
            </h2>
          </div>
          <div className="mt-10">
            <Faq />
          </div>

          <div className="mt-12 flex flex-col items-center gap-4 text-center">
            <Cta>Pagar agora</Cta>
            <p className="text-sm text-muted-foreground">
              R$ 18,97 · pagamento único · entrega imediata por e-mail
            </p>
          </div>
        </div>
      </section>

      {/* 10 — Rodapé */}
      <footer className="bg-night text-night-foreground">
        <div className="container-page flex flex-col items-center gap-3 py-10 text-center">
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-sand">
            <IconMoonSplit className="h-4 w-4 stroke-current" />
            Paternidade Facilitada
          </span>
          <p className="text-sm text-night-foreground/70">
            © 2026 Paternidade Facilitada. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
