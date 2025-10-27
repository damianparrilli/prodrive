// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  vite: {
    //@ts-ignore
    plugins: [tailwindcss()]
  },
server: {
    allowedHosts: [
      "miracle-what-english-money.trycloudflare.com"
    ]
  },
  integrations: [sitemap()]
  
});