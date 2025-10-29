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
      "academic-sequence-disposal-keys.trycloudflare.com"
    ]
  },
  integrations: [sitemap()]
  
});