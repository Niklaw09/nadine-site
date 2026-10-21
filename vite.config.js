import { resolve } from 'node:path';
import { defineConfig } from 'vite';

// Every page of the site is listed here so `npm run build` includes it.
const pages = ['index', 'team', 'marketing', 'process', 'home-value', 'communities', 'contact', 'privacy'];

export default defineConfig({
  build: {
    rollupOptions: {
      input: Object.fromEntries(pages.map((p) => [p, resolve(__dirname, `${p}.html`)])),
    },
  },
});
