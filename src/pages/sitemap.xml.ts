import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async () => {
  const posts = await getCollection('blog');
  const siteUrl = 'https://centruldepregatire.ro';

  const staticPages = [
    '',
    '/despre',
    '/servicii',
    '/materii',
    '/materii/romana',
    '/materii/matematica',
    '/materii/logica',
    '/materii/istorie',
    '/materii/geografie',
    '/materii/biologie',
    '/preturi',
    '/testimoniale',
    '/blog',
    '/contact',
    '/confidentialitate',
  ];

  const blogPages = posts.map((p) => `/blog/${p.slug}`);
  const allPages = [...staticPages, ...blogPages];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    (page) => `  <url>
    <loc>${siteUrl}${page}</loc>
    <changefreq>${page.startsWith('/blog') ? 'monthly' : 'weekly'}</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: { 'Content-Type': 'application/xml' },
  });
};
