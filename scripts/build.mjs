// Build: compile js/*.jsx -> dist/*.js, bundle -> docs/dist/bundle.min.js,
// then prerender the home page into docs/index.html (so crawlers without JS see the content).
// Usage: npm run build   (or: node scripts/build.mjs)
import { readFileSync, writeFileSync } from 'fs';
import { createRequire } from 'module';
import { fileURLToPath } from 'url';
import vm from 'vm';
import { createHash } from 'crypto';
import { transformFileSync } from '@babel/core';
import { minify } from 'terser';

const require = createRequire(import.meta.url);
const root = new URL('..', import.meta.url);
const p = (rel) => fileURLToPath(new URL(rel, root));

// Order matters: later files use globals defined by earlier ones.
const FILES = [
  'data', 'components', 'pages-home', 'pages-about-services', 'pages-subjects',
  'pages-prices-testimonials', 'pages-blog', 'pages-contact-privacy', 'app',
];

// 1. Compile + bundle + minify
const parts = FILES.map((name) => {
  const { code } = transformFileSync(p(`js/${name}.jsx`), { configFile: p('babel.config.json') });
  writeFileSync(p(`dist/${name}.js`), code + '\n');
  return code + '\n';
});
const bundle = parts.join('');
writeFileSync(p('dist/bundle.js'), bundle);
const min = await minify(bundle, { compress: true, mangle: true });
writeFileSync(p('docs/dist/bundle.min.js'), min.code);
console.log('bundle.min.js:', Math.round(min.code.length / 1024) + 'KB');

// 2. Prerender the home page (route "acasa") with the same bundle.
const React = require('react');
const { renderToString } = require('react-dom/server');
let rootElement = null;
const noop = () => {};
const classList = { add: noop, remove: noop, contains: () => false };
const ctx = {
  React,
  ReactDOM: { createRoot: () => ({ render: (el) => { rootElement = el; } }) },
  location: { hash: '', origin: 'https://centrudepregatire.ro', pathname: '/' },
  document: {
    getElementById: () => ({}),
    documentElement: { dataset: {}, classList },
    body: { classList },
    head: { querySelector: () => null },
  },
  localStorage: { getItem: () => '1', setItem: noop },
  addEventListener: noop, removeEventListener: noop, scrollTo: noop,
  setTimeout, clearTimeout, console,
};
ctx.window = ctx;
ctx.parent = ctx;
vm.createContext(ctx);
vm.runInContext(bundle, ctx, { filename: 'bundle.js' });
if (!rootElement) throw new Error('Prerender: App was not rendered');

let html = renderToString(rootElement);
// Mark the prerendered tree; React's createRoot replaces it on load.
html = html.replace(/^<(\w+)/, '<$1 data-prerendered=""');

const indexPath = p('docs/index.html');
let index = readFileSync(indexPath, 'utf8').replace(/^﻿/, '');
const re = /(<!--prerender:start-->)[\s\S]*?(<!--prerender:end-->)/;
if (!re.test(index)) throw new Error('Prerender markers not found in docs/index.html');
index = index.replace(re, () => `<!--prerender:start-->${html}<!--prerender:end-->`);

// Cache-busting: bundle URL gets a content hash, so browsers fetch the new bundle after each deploy.
const bundleHash = createHash('sha1').update(min.code).digest('hex').slice(0, 10);
index = index.replace(/dist\/bundle\.min\.js(\?v=[\w]+)?"/g, `dist/bundle.min.js?v=${bundleHash}"`);

// 3. Sanity checks: every JSON-LD block parses, prices in JSON-LD match data.jsx.
const blocks = [...index.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
const ldText = blocks.map((b) => { JSON.parse(b[1]); return b[1]; }).join('\n');
for (const pr of ctx.PRICES) {
  if (pr.price !== '0' && !ldText.includes(`"price": "${pr.price}"`)) {
    console.warn(`WARN: price ${pr.price} lei (${pr.title}) from data.jsx is missing from JSON-LD`);
  }
}
const WRONG_DOMAIN = 'centrul' + 'depregatire.ro'; // domain with an extra L
if (index.includes(WRONG_DOMAIN)) throw new Error('Wrong domain (with extra L) in index.html');

writeFileSync(indexPath, index, 'utf8');
console.log(`index.html: prerendered ${Math.round(html.length / 1024)}KB, ${blocks.length} JSON-LD block(s) OK`);
