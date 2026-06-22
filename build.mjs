import { readFileSync, writeFileSync } from 'fs';

let html = readFileSync('index.html', 'utf8');
const combinedCss = readFileSync('dist/combined.css', 'utf8');

// Remove Google Fonts preconnects + links + noscript
html = html.replace(/<link rel="preconnect" href="https:\/\/fonts\.googleapis\.com" \/>\n/, '');
html = html.replace(/<link rel="preconnect" href="https:\/\/fonts\.gstatic\.com" crossorigin \/>\n/, '');
html = html.replace(/<link rel="stylesheet" href="https:\/\/fonts\.googleapis[^"]*"[^>]*media="print"[^/]*\/>\n/, '');
html = html.replace(/<noscript>[\s\S]*?<\/noscript>\n/, '');
html = html.replace(/\n<link rel="stylesheet" href="dist\/tailwind\.css" \/>/, '');

// Inline combined CSS at top of <style> block
html = html.replace('<style>', '<style>\n' + combinedCss);

// Use minified bundle
html = html.replace('dist/bundle.js', 'dist/bundle.min.js');

writeFileSync('index.html', html, 'utf8');
console.log('index.html updated:', Math.round(Buffer.byteLength(html)/1024) + 'KB');
