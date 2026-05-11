import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  return new Response(
    `User-agent: *
Allow: /

Sitemap: https://centruldepregatire.ro/sitemap.xml
`,
    {
      headers: { 'Content-Type': 'text/plain' },
    }
  );
};
