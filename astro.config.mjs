// @ts-check
import { defineConfig } from 'astro/config';
import { FontaineTransform } from 'fontaine';



// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [
      FontaineTransform.vite({
        fallbacks: ['Arial', 'Helvetica Neue', 'sans-serif'],
        resolvePath: (id) => new URL(`./public${id}`, import.meta.url),
      }),
    ],
  },
});