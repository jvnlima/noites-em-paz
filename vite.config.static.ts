// Build de exportação estática (SPA + HTML pré-renderizado) para hospedagem
// compartilhada (HostGator, cPanel, Apache/Nginx). Sem Nitro, sem SSR em
// runtime, sem Cloudflare Workers.
//
// Uso: bun run build:static  ->  saída em dist-static/
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // Nada de servidor: apenas arquivos estáticos.
  nitro: false,
  ssrErrorLogger: false,
  serverFnErrorLogger: false,
  tanstackStart: {
    // Gera um shell HTML estático e roda a app 100% no browser.
    spa: {
      enabled: true,
      prerender: { enabled: true, crawlLinks: false },
    },
    // Pré-renderiza as rotas públicas para HTML puro (bom pra SEO).
    prerender: {
      enabled: true,
      crawlLinks: true,
      filter: ({ path }: { path: string }) => !path.startsWith("/api"),
    },
    pages: [{ path: "/", prerender: { enabled: true } }],
  },
});
