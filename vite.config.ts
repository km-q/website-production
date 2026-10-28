// Production-only config for GitHub Pages deployment.
// This repo is a production snapshot of km-q/pixel-perfect-replay-9192.
// Do NOT sync this file back to the Lovable source repo: the prerender
// block below is for static Pages hosting only.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    // Prerender the single route so the build emits .output/public/index.html,
    // which GitHub Pages can serve statically (no server worker needed).
    prerender: {
      enabled: true,
      crawlLinks: true,
      autoSubfolderIndex: true,
    },
  },
});
