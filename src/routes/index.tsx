import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-couple-night.jpg";
import planImg from "@/assets/plan-note.jpg";
import { Quiz } from "@/components/landing/Quiz";
import { Faq } from "@/components/landing/Faq";
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
const COUPLES = "2.418";

export const Route = createFileRoute("/")({
  component: Landing,
  head: () => ({
    meta: [
      { title: "Dividir a Noite Sem Brigar | Guia Prático para Pai e Mãe" },
      {
        name: "description",
        content:
          "O combinado justo que acaba com a briga das 3h da manhã. Guia em PDF + bônus para casais com recém-nascido, por R$ 18,97. Garantia de 7 dias.",
      },
      { property: "og:title", content: "Dividir a Noite Sem Brigar | Guia Prático para Pai e Mãe" },
      {
        property: "og:description",
        content:
          "Pare de decidir quem levanta às 3h da manhã. Um combinado justo, feito antes do cansaço bater.",
      },
      { property: "og:type", content: "product" },
      { property: "og:url", content: "/" },
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
      <IconArrow className="h-4 w-4 stroke-current transition-transform duration-200 group-hover:translate-x-1" />
    </a>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-px w-8 bg-accent" />
      <span className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
        {children}
      </span>
    </div>
  );
}

const PAINS = [
  {
    icon: IconClock,
    title: "São 3h07 e os dois estão acordados",
    text: "O bebê chora e ninguém se mexe. Vocês fingem dormir, cada um contando quantas vezes levantou ontem. Quem cede primeiro acorda com raiva — e leva essa raiva para o café da manhã.",
  },
  {
    icon: IconScale,
    title: "A contabilidade invisível do cansaço",
    text: "\"Eu levantei três vezes.\" \"Mas eu trabalho amanhã.\" A conversa nunca é sobre o bebê: é sobre quem está mais exausto. E nessa conta, ninguém ganha.",
  },
  {
    icon: IconBottle,
    title: "A mãe vira plantonista por padrão",
    text: "Como ela amamenta, sobrou tudo para ela: mamada, troca, ninar, voltar a dormir. O pai quer ajudar, não sabe onde entrar, espera ser chamado — e o silêncio dele parece descaso.",
  },
  {
    icon: IconBed,
    title: "O ressentimento que sobra de manhã",
    text: "Vocês não brigam por causa da fralda. Brigam porque cada um se sente sozinho dentro da mesma casa, às 4h da manhã, sem ninguém para dividir o peso.",
  },
];

const FAILED = [
  "Revezar \"um dia cada\" — desaba na primeira noite em que um dos dois está doente.",
  "Combinar no meio da madrugada — decisão tomada por quem tem menos energia para discutir.",
  "Dividir 50/50 exato — ignora amamentação, trabalho e recuperação do parto; vira competição.",
  "Esperar que o outro perceba sozinho — ninguém percebe nada com quatro horas de sono.",
];

const DELIVER = [
  {
    icon: IconDoc,
    tag: "Guia principal — PDF",
    title: "O Combinado da Noite",
    items: [
      "O quadro de carga real: descubra em 10 minutos quem está de fato carregando a noite (quase sempre a resposta surpreende os dois).",
      "Os 4 modelos de divisão prontos — inclusive um específico para amamentação exclusiva — para você escolher e preencher, sem inventar nada.",
      "O roteiro da conversa de 20 minutos, com as frases exatas para propor a divisão sem soar como cobrança.",
      "O plano de exceção: o que fazer quando o bebê regride, um dos dois adoece ou a noite simplesmente desanda.",
    ],
  },
  {
    icon: IconMoonSplit,
    tag: "Bônus — PDF",
    title: "Kit Madrugada Sem Discussão",
    items: [
      "Quadro de turnos para imprimir e colar na geladeira: acaba o \"eu achei que era sua vez\".",
      "10 frases de resgate para usar quando o cansaço já virou briga — e como voltar atrás sem humilhação.",
      "Checklist do berço preparado, para que o turno de quem levanta dure minutos, não uma hora.",
    ],
  },
];

const TESTIMONIALS = [
  {
    text: "A gente brigava toda madrugada e achava que era falta de amor. Era falta de combinado. Preenchemos o quadro num domingo à tarde e na segunda-feira eu dormi quatro horas seguidas pela primeira vez em dois meses.",
    name: "Marina e Tiago",
    meta: "pais da Alice, 2 meses",
  },
  {
    text: "Eu queria ajudar e sempre entrava na hora errada, o que só irritava ela. O guia me mostrou exatamente onde eu era útil. Hoje a madrugada tem dono definido e a gente não discute mais sobre isso.",
    name: "Rafael",
    meta: "pai do Bento, 11 semanas",
  },
  {
    text: "Amamento exclusivo e achava que não tinha divisão possível. Tinha. Ele assume tudo antes e depois da mamada e a primeira hora da manhã é minha para dormir. Mudou o clima da casa inteira.",
    name: "Camila",
    meta: "mãe do Théo, 7 semanas",
  },
];

const STEPS = [
  { n: "01", title: "Identifique o padrão", text: "Veja em qual das 4 armadilhas da madrugada vocês caíram." },
  { n: "02", title: "Aplique o combinado", text: "20 minutos de conversa guiada, acordados, com o quadro pronto." },
  { n: "03", title: "Durma em paz", text: "Cada um sabe seu turno. Ninguém precisa negociar às 3h da manhã." },
];

function Landing() {
  return (
    <main className="overflow-x-hidden">
      {/* HERO */}
      <section className="relative bg-night text-night-foreground">
        <div className="container-page grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16 lg:py-28">
          <div className="animate-rise">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-night-foreground/20 px-4 py-1.5">
              <IconMoonSplit className="h-4 w-4 stroke-current text-accent" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-night-foreground/80">
                Guia digital para casais com recém-nascido
              </span>
            </div>

            <h1 className="mt-7 text-[2.1rem] leading-[1.08] sm:text-5xl lg:text-[3.4rem]">
              Parem de decidir às 3h da manhã{" "}
              <span className="text-accent">quem levanta pra cuidar do bebê.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-night-foreground/75">
              Um combinado justo, feito acordados, que considera a rotina de trabalho, a
              amamentação e as necessidades do bebê. Vocês continuam exaustos por um tempo — mas
              param de brigar por causa disso.
            </p>

            <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <Cta>Pagar agora — R$ 18,97</Cta>
              <p className="text-sm text-night-foreground/60">
                Acesso imediato na área de membros
                <br className="hidden sm:block" /> Garantia de 7 dias
              </p>
            </div>

            <div className="mt-10 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-5 border-t border-night-foreground/15 pt-7 sm:flex sm:gap-8">
              <div className="min-w-0">
                <p className="font-display text-2xl text-night-foreground">{COUPLES}</p>
                <p className="text-xs uppercase tracking-[0.16em] text-night-foreground/55">
                  casais já usaram o método
                </p>
              </div>
              <IconSeal className="h-12 w-12 shrink-0 stroke-current text-accent" />
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-3 rounded-[1.75rem] border border-night-foreground/12" aria-hidden="true" />
            <img
              src={heroImg}
              width={1280}
              height={1280}
              alt="Casal acordado durante a madrugada acalmando o bebê recém-nascido no quarto"
              className="relative aspect-[4/3] w-full rounded-2xl object-cover lg:aspect-square"
            />
          </div>
        </div>
      </section>

      {/* PROGRESS STEPS */}
      <section className="border-b border-border bg-sand/50">
        <div className="container-page py-14 sm:py-16">
          <SectionLabel>Do caos ao combinado</SectionLabel>
          <div className="mt-9 grid gap-7 sm:grid-cols-3">
            {STEPS.map((s, i) => (
              <div key={s.n} className="relative">
                <div className="flex items-center gap-3">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary font-display text-sm text-primary-foreground">
                    {i + 1}
                  </span>
                  <span className="h-px flex-1 bg-border" />
                </div>
                <h3 className="mt-4 text-lg">{s.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-9 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
            <div className="h-full w-2/3 rounded-full bg-accent" />
          </div>
        </div>
      </section>

      {/* DOR */}
      <section className="container-page py-20 sm:py-24">
        <div className="max-w-2xl">
          <SectionLabel>Reconhece alguma dessas noites?</SectionLabel>
          <h2 className="mt-5 text-3xl leading-tight sm:text-4xl">
            O problema nunca foi o bebê acordar. Foi vocês dois não saberem de quem era a vez.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {PAINS.map((p) => (
            <article
              key={p.title}
              className="rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-soft)] transition-shadow duration-300 hover:shadow-[var(--shadow-lift)]"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-secondary text-primary">
                <p.icon className="h-6 w-6 stroke-current" />
              </span>
              <h3 className="mt-5 text-xl leading-snug">{p.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{p.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* MECANISMO */}
      <section className="bg-primary text-primary-foreground">
        <div className="container-page grid gap-12 py-20 sm:py-24 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-accent" />
              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
                A virada de chave
              </span>
            </div>
            <h2 className="mt-5 text-3xl leading-tight sm:text-4xl">
              Dividir a noite 50/50 exato é a causa da briga, não a solução.
            </h2>
            <div className="mt-6 space-y-5 text-[15px] leading-relaxed text-primary-foreground/80 sm:text-base">
              <p>
                Meio a meio parece justo no papel. Na prática, ele acorda 6h para trabalhar, ela
                está se recuperando de um parto e amamentando de duas em duas horas. Metade
                idêntica para corpos e rotinas diferentes vira competição: cada um provando que
                sofreu mais.
              </p>
              <p>
                <strong className="text-primary-foreground">
                  O que funciona é divisão justa, não igual
                </strong>{" "}
                — turnos proporcionais à carga real de cada um, decididos com os dois acordados,
                antes da noite começar. Um combinado feito às 15h vale mais do que dez discussões
                às 3h.
              </p>
            </div>

            <div className="mt-9 rounded-2xl border border-primary-foreground/15 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/60">
                O que os casais tentam antes — e por que falha
              </p>
              <ul className="mt-4 space-y-3">
                {FAILED.map((f) => (
                  <li key={f} className="flex gap-3 text-[15px] leading-relaxed text-primary-foreground/80">
                    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.8} className="mt-1 h-4 w-4 shrink-0 stroke-current text-accent" aria-hidden="true">
                      <path d="m6 6 12 12M18 6 6 18" strokeLinecap="round" />
                    </svg>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative">
            <img
              src={planImg}
              width={1024}
              height={768}
              loading="lazy"
              alt="Quadro de turnos da madrugada escrito à mão sobre a mesa ao lado de duas canecas"
              className="w-full rounded-2xl object-cover shadow-[var(--shadow-lift)]"
            />
            <div className="mt-5 rounded-2xl bg-primary-foreground/8 p-5 text-sm leading-relaxed text-primary-foreground/75">
              O combinado cabe em uma folha. É essa folha — e não a boa vontade das 3h da manhã —
              que segura a paz da casa.
            </div>
          </div>
        </div>
      </section>

      {/* QUIZ */}
      <section className="container-page py-20 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <SectionLabel>
            <span className="sr-only">Teste</span>Isso é pra vocês?
          </SectionLabel>
          <h2 className="mt-5 text-3xl leading-tight sm:text-4xl">
            Responda três perguntas e descubra em que estágio a noite de vocês está
          </h2>
        </div>
        <div className="mx-auto mt-10 max-w-2xl">
          <Quiz checkoutUrl={CHECKOUT} />
        </div>
      </section>

      {/* PRA QUEM É */}
      <section className="border-y border-border bg-sand/50">
        <div className="container-page grid gap-10 py-20 sm:py-24 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-soft)]">
            <h3 className="text-2xl">É pra vocês se</h3>
            <ul className="mt-6 space-y-4">
              {[
                "O bebê tem entre 0 e 12 meses e as noites ainda são picadas.",
                "Vocês já discutiram (ou ficaram em silêncio irritados) por causa de quem levanta.",
                "Um dos dois trabalha fora e o outro sente que carrega a madrugada sozinho.",
                "Vocês amamentam no peito e não sabem como o pai pode dividir de verdade.",
                "Querem uma solução prática para aplicar hoje, não uma teoria sobre parentalidade.",
              ].map((t) => (
                <li key={t} className="flex gap-3 text-[15px] leading-relaxed">
                  <IconCheck className="mt-0.5 h-5 w-5 shrink-0 stroke-current text-accent" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-dashed border-border p-8">
            <h3 className="text-2xl">Não é pra vocês se</h3>
            <ul className="mt-6 space-y-4 text-muted-foreground">
              {[
                "Procuram um método de treinamento de sono para o bebê — este guia trata do casal.",
                "Esperam que o outro mude sozinho, sem nenhuma conversa.",
                "Querem um manual médico ou orientação clínica sobre o sono infantil.",
                "Não têm 20 minutos para sentar juntos uma única vez.",
              ].map((t) => (
                <li key={t} className="flex gap-3 text-[15px] leading-relaxed">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ENTREGÁVEL */}
      <section className="container-page py-20 sm:py-24">
        <div className="max-w-2xl">
          <SectionLabel>O que você recebe</SectionLabel>
          <h2 className="mt-5 text-3xl leading-tight sm:text-4xl">
            Dois PDFs, direto ao ponto, para ler no celular ainda hoje
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {DELIVER.map((d) => (
            <article
              key={d.title}
              className="rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-soft)]"
            >
              <div className="flex items-center gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground">
                  <d.icon className="h-6 w-6 stroke-current" />
                </span>
                <div className="min-w-0">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
                    {d.tag}
                  </p>
                  <h3 className="truncate text-xl">{d.title}</h3>
                </div>
              </div>
              <ul className="mt-7 space-y-4">
                {d.items.map((it) => (
                  <li key={it} className="flex gap-3 text-[15px] leading-relaxed text-muted-foreground">
                    <IconCheck className="mt-0.5 h-5 w-5 shrink-0 stroke-current text-accent" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-8 grid gap-6 rounded-2xl border border-border bg-secondary/50 p-8 sm:grid-cols-3">
          {[
            { t: "Entrega imediata", d: "Assim que o pagamento é aprovado, o acesso chega no seu e-mail." },
            { t: "Área de membros", d: "Leia no celular ou baixe os dois PDFs. Acesso vitalício." },
            { t: "Leitura de 40 minutos", d: "Sem enrolação: é material para aplicar, não para estudar." },
          ].map((b) => (
            <div key={b.t}>
              <p className="font-display text-lg">{b.t}</p>
              <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{b.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROVA SOCIAL */}
      <section className="bg-night text-night-foreground">
        <div className="container-page py-20 sm:py-24">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-accent" />
              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
                Quem já aplicou
              </span>
            </div>
            <h2 className="mt-5 text-3xl leading-tight sm:text-4xl">
              A mudança acontece na primeira noite depois da conversa
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <figure
                key={t.name}
                className="flex flex-col rounded-2xl border border-night-foreground/12 bg-night-foreground/5 p-7"
              >
                <svg viewBox="0 0 24 24" className="h-7 w-7 fill-accent" aria-hidden="true">
                  <path d="M9.5 5C6.5 6.6 5 9 5 12v7h6.5v-7H8.6c0-2 .8-3.5 2.4-4.6L9.5 5Zm9 0C15.5 6.6 14 9 14 12v7h6.5v-7h-2.9c0-2 .8-3.5 2.4-4.6L18.5 5Z" />
                </svg>
                <blockquote className="mt-5 grow text-[15px] leading-relaxed text-night-foreground/80">
                  {t.text}
                </blockquote>
                <figcaption className="mt-6 border-t border-night-foreground/12 pt-4">
                  <p className="font-display text-base">{t.name}</p>
                  <p className="text-xs uppercase tracking-[0.14em] text-night-foreground/50">
                    {t.meta}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* GARANTIA */}
      <section className="container-page py-20 sm:py-24">
        <div className="grid items-center gap-10 rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-soft)] sm:p-12 lg:grid-cols-[auto_minmax(0,1fr)]">
          <span className="grid h-24 w-24 shrink-0 place-items-center rounded-full bg-accent/10 text-accent">
            <IconShield className="h-11 w-11 stroke-current" />
          </span>
          <div className="min-w-0">
            <h2 className="text-3xl leading-tight">Garantia incondicional de 7 dias</h2>
            <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground sm:text-base">
              Leia os dois PDFs, faça a conversa de 20 minutos e teste o combinado por uma semana.
              Se a madrugada de vocês continuar exatamente igual, responda o e-mail de acesso e
              devolvemos os R$ 18,97 integralmente. Sem justificativa, sem formulário, sem
              constrangimento. O risco é todo nosso.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-y border-border bg-sand/50">
        <div className="container-page py-20 sm:py-24">
          <div className="max-w-2xl">
            <SectionLabel>Dúvidas frequentes</SectionLabel>
            <h2 className="mt-5 text-3xl leading-tight sm:text-4xl">
              As perguntas que todo casal exausto faz antes de comprar
            </h2>
          </div>
          <div className="mt-10">
            <Faq />
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section id="checkout-anchor" className="bg-primary text-primary-foreground">
        <div className="container-page py-20 text-center sm:py-28">
          <div className="mx-auto max-w-2xl">
            <IconSeal className="mx-auto h-14 w-14 stroke-current text-accent" />
            <h2 className="mt-7 text-3xl leading-tight sm:text-[2.6rem]">
              Vocês vão passar por essa fase de qualquer jeito. A escolha é passar juntos ou passar
              brigando.
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed text-primary-foreground/80 sm:text-lg">
              Hoje o guia completo sai por <strong className="text-primary-foreground">R$ 18,97</strong> — menos
              do que uma fralda extra por semana. Esse valor de lançamento vale enquanto durar a
              primeira turma de casais; depois ele sobe.
            </p>

            <div className="mt-10 flex flex-col items-center gap-5">
              <Cta className="w-full sm:w-auto">Pagar agora</Cta>
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs uppercase tracking-[0.14em] text-primary-foreground/55">
                <span>Pagamento seguro</span>
                <span className="hidden h-3 w-px bg-primary-foreground/20 sm:block" />
                <span>Acesso imediato</span>
                <span className="hidden h-3 w-px bg-primary-foreground/20 sm:block" />
                <span>7 dias de garantia</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="container-page py-12">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-6 border-t border-border pt-8 sm:flex sm:justify-between">
          <div className="flex min-w-0 items-center gap-3">
            <IconMoonSplit className="h-6 w-6 shrink-0 stroke-current text-primary" />
            <p className="truncate text-sm font-semibold">Guia Dividir a Noite Sem Brigar</p>
          </div>
          <p className="text-xs leading-relaxed text-muted-foreground sm:max-w-md sm:text-right">
            Conteúdo educativo para organização da rotina do casal. Não substitui orientação
            médica ou pediátrica.
          </p>
        </div>
      </footer>
    </main>
  );
}
