// Pós-processa o build estático para hospedagem compartilhada:
// 1. copia dist/client (ou .output/public) para dist-static/
// 2. garante index.html na raiz
// 3. cria .htaccess com fallback de SPA + compressão + cache
import { cp, mkdir, readdir, rm, writeFile, access, rename } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const out = path.join(root, "dist-static");

async function exists(p) {
  try {
    await access(p);
    return true;
  } catch {
    return false;
  }
}

const candidates = [
  path.join(root, "dist", "client"),
  path.join(root, ".output", "public"),
  path.join(root, "dist"),
];

let source = null;
for (const c of candidates) {
  if (await exists(path.join(c, "index.html"))) {
    source = c;
    break;
  }
}

if (!source) {
  console.error(
    "[static-export] Nenhum index.html encontrado em dist/client, .output/public ou dist. Rode o build antes.",
  );
  process.exit(1);
}

await rm(out, { recursive: true, force: true });
await mkdir(out, { recursive: true });
await cp(source, out, { recursive: true });

const htaccess = `# Hospedagem compartilhada (Apache) - site estático
Options -MultiViews
DirectoryIndex index.html

<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  # Arquivos e pastas existentes são servidos direto
  RewriteCond %{REQUEST_FILENAME} -f [OR]
  RewriteCond %{REQUEST_FILENAME} -d
  RewriteRule ^ - [L]
  # Qualquer outra rota cai no index.html (SPA)
  RewriteRule . /index.html [L]
</IfModule>

<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/css text/javascript application/javascript application/json image/svg+xml
</IfModule>

<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType text/css "access plus 1 year"
  ExpiresByType application/javascript "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType text/html "access plus 0 seconds"
</IfModule>
`;

await writeFile(path.join(out, ".htaccess"), htaccess, "utf8");

const files = await readdir(out);
console.log(`[static-export] OK -> dist-static/ (origem: ${path.relative(root, source)})`);
console.log(`[static-export] ${files.length} itens na raiz, incluindo .htaccess`);
