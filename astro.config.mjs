// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://vladciobu-lab.github.io',
  base: '/Centrul-de-pregatire',
  vite: {
    plugins: [tailwindcss()]
  }
});
