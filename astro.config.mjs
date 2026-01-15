// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://thevikramsinha.github.io',
  base: '/tsp360',
  output: 'static',
  build: {
    format: 'file'
  }
});
