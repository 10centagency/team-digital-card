#!/usr/bin/env node
// Post-build step: emit a static index.html into dist/client so the app can be
// served as a plain SPA on static hosts like Cloudflare Pages (no SSR runtime).
//
// The TanStack Start build emits hashed client bundles into dist/client/assets
// but never produces an index.html (it expects an SSR worker to render the
// shell). Since this site has no server-side data, we render a shell that
// hydrates client-side. SEO meta tags are inlined here so crawlers see them
// even before JS runs.
import { readdirSync, writeFileSync, existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const clientDir = "dist/client";
const assetsDir = join(clientDir, "assets");

if (!existsSync(assetsDir)) {
  console.error(`[static-html] ${assetsDir} not found — did the build run?`);
  process.exit(1);
}

const files = readdirSync(assetsDir);
const entryJs = files.find((f) => /^index-.*\.js$/.test(f));
const styleCss = files.find((f) => /^styles-.*\.css$/.test(f));

if (!entryJs) {
  console.error("[static-html] could not find entry JS (index-*.js) in", assetsDir);
  process.exit(1);
}

const cssTag = styleCss
  ? `<link rel="stylesheet" href="/assets/${styleCss}">`
  : "";

const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>MD Al Amin — Founder & CEO, 10 Cent Agency</title>
<meta name="description" content="Digital business card for MD Al Amin, Founder & CEO of 10 Cent Agency. Save contact, message on WhatsApp, and connect.">
<meta name="theme-color" content="#00346D">
<meta property="og:title" content="MD Al Amin — 10 Cent Agency">
<meta property="og:description" content="Founder & CEO of 10 Cent Agency. Tap to save contact or message on WhatsApp.">
<meta property="og:type" content="profile">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&display=swap">
${cssTag}
<script type="module" crossorigin src="/assets/${entryJs}"></script>
</head>
<body>
<div id="root"></div>
</body>
</html>
`;

writeFileSync(join(clientDir, "index.html"), html);
console.log(`[static-html] wrote ${join(clientDir, "index.html")} (entry: ${entryJs}, css: ${styleCss ?? "none"})`);

// Also write a SPA fallback for client-side routes on Cloudflare Pages.
writeFileSync(join(clientDir, "404.html"), html);
console.log(`[static-html] wrote ${join(clientDir, "404.html")} (SPA fallback)`);
