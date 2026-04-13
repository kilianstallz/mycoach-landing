import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://kilianstallz.github.io',
  base: '/veloiq-landing',
  integrations: [sitemap()],
  output: 'static',
});
