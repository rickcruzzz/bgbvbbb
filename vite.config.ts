// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Gera `dist/client/index.html` no build (prerender da rota `/`).
// Sem isso, `dist/client` só tem JS/CSS — Vercel/Netlify retornam 404.
// `cloudflare: false` evita saída só-Worker no build; o prerender do TanStack Start
// precisa do servidor Node em `dist/server` para o passo de preview.
export default defineConfig({
  cloudflare: false,
  tanstackStart: {
    prerender: {
      enabled: true,
    },
  },
});
