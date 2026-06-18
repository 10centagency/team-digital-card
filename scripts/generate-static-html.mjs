#!/usr/bin/env node
/**
 * Post-build step: prerender the homepage to static HTML so the app can be
 * deployed as a plain static site (e.g. Cloudflare Pages) with no SSR runtime.
 *
 * TanStack Start's nitro build emits a Cloudflare Worker at
 * dist/server/index.mjs. Even though it targets cloudflare-module, the
 * generated fetch handler runs fine under plain Node as long as we pass a
 * stub `env`/`ctx`. We invoke it once per route, capture the rendered HTML,
 * and write it into dist/client/<route>/index.html so the result is a
 * fully static site.
 *
 * Add more routes to PRERENDER_ROUTES as the site grows.
 */
import { mkdirSync, writeFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { pathToFileURL } from "node:url";

const PRERENDER_ROUTES = ["/"];

const serverDir = "dist/server";
const clientDir = "dist/client";

// The server entry filename varies by nitro preset / build mode:
//   - cloudflare-module preset → dist/server/index.mjs
//   - node preset / vite build  → dist/server/server.js
// Pick whichever exists.
const serverCandidates = ["index.mjs", "server.js", "server.mjs", "index.js"];
const serverEntry = serverCandidates
  .map((f) => join(serverDir, f))
  .find((p) => existsSync(p));

if (!serverEntry) {
  console.error(
    `[prerender] no server bundle found in ${serverDir} (looked for ${serverCandidates.join(", ")}) — run \`vite build\` first.`,
  );
  process.exit(1);
}
console.log(`[prerender] using server entry ${serverEntry}`);

const mod = await import(pathToFileURL(serverEntry).href);
const handler = mod.default;
if (!handler?.fetch) {
  console.error("[prerender] server bundle has no default.fetch export");
  process.exit(1);
}

// Minimal Cloudflare-style env/ctx stubs. The Lovable runtime expects an
// `ASSETS` binding for static asset passthrough; we short-circuit it.
const env = {
  ASSETS: { fetch: async () => new Response("", { status: 404 }) },
};
const ctx = { waitUntil: () => {}, passThroughOnException: () => {} };

let ok = 0;
for (const route of PRERENDER_ROUTES) {
  const url = new URL(route, "http://localhost");
  const res = await handler.fetch(new Request(url), env, ctx);
  if (res.status >= 400) {
    console.error(`[prerender] ${route} → ${res.status}`);
    process.exit(1);
  }
  const html = await res.text();
  const outPath =
    route === "/"
      ? join(clientDir, "index.html")
      : join(clientDir, route.replace(/^\//, "").replace(/\/$/, ""), "index.html");
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, html);
  console.log(`[prerender] ${route} → ${outPath} (${html.length} bytes)`);
  ok++;
}

// Cloudflare Pages SPA fallback: serve the homepage for unknown URLs so
// client-side routes (and the 404 page from TanStack Router) still work.
writeFileSync(
  join(clientDir, "404.html"),
  // Reuse the homepage HTML; the client router will render the right view.
  await (async () => {
    const res = await handler.fetch(new Request("http://localhost/"), env, ctx);
    return res.text();
  })(),
);
console.log(`[prerender] wrote ${join(clientDir, "404.html")} (SPA fallback)`);

console.log(`[prerender] done — ${ok} route(s)`);
