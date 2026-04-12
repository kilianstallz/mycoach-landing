import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://kilianstallz.github.io',
  base: '/mycoach-landing',
  integrations: [sitemap()],
  output: 'static',
});
